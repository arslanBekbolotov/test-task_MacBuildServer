"use client";
import { useRouter } from "next/navigation";
import styles from "./authForm.module.scss";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IAuth } from "@/types";
import { login, register } from "@/redux/features/user/usersThunk";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Alert from "@/components/Alert/Alert";

const initialState = {
  email: "",
  password: "",
};

const AuthForm = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loginError, registerError, authLoading } = useAppSelector(
    (state) => state.usersStore,
  );
  const [state, setState] = useState<IAuth>(initialState);
  const [error, setError] = useState<IAuth>(initialState);

  const isValidEmail = (email: string) => {
    const regExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email.toLowerCase());
  };

  const isValidPassword = (password: string) => {
    const regExp = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    return regExp.test(password);
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const resetErrorField = (event: React.FocusEvent<HTMLInputElement>) => {
    setError((prevState) => ({ ...prevState, [event.target.name]: "" }));
  };

  const validateForm = () => {
    const { email, password } = state;
    const newErrors = {
      email: "",
      password: "",
    };

    if (!email) {
      newErrors.email = "Enter an email";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format (name@mail.com)";
    }

    if (!password) {
      newErrors.password = "Enter a password";
    } else if (password.length < 8) {
      newErrors.password = "Minimum eight characters";
    } else if (!isValidPassword(password)) {
      newErrors.password =
        "Requires at least one lowercase letter, and one number";
    }

    setError(newErrors);
    if (!newErrors.email && !newErrors.password) return true;
  };

  const submitFormHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        if (pathname === "/login") {
          await dispatch(login(state)).unwrap();
        } else {
          await dispatch(register(state)).unwrap();
        }

        router.push("/");
      } catch {
        //nothing
      }
    }
  };

  const getFieldError = (name: string) => {
    try {
      return registerError?.errors[name].message;
    } catch {
      return undefined;
    }
  };

  return (
    <div className={styles.form_container}>
      {loginError && (
        <Alert bgColor={"#ec2a2a"} message={loginError.error + ". Try again"} />
      )}

      <form onSubmit={submitFormHandler}>
        <h3 className={styles.form_title}>
          {pathname === "/login" ? "Sign In" : "Sign Up"}
        </h3>
        <div className={styles.form_group}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter email"
            className={error.email && styles.invalid_input}
            value={state.email}
            onFocus={resetErrorField}
            onChange={inputChangeHandler}
          />
          <div className={styles.error_message}>
            {error.email || getFieldError("email")}
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Enter password"
            className={error.password && styles.invalid_input}
            value={state.password}
            onFocus={resetErrorField}
            onChange={inputChangeHandler}
          />
          <div className={styles.error_message}>
            {error?.password || getFieldError("password")}
          </div>
        </div>

        <button
          type="submit"
          className={styles.submit_button}
          disabled={authLoading}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
