import { isAxiosError } from "axios";
import { GlobalError, IAuth, IAuthResponse, ValidationError } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../../../../axiosApi";

export const register = createAsyncThunk<
  IAuthResponse,
  IAuth,
  { rejectValue: ValidationError }
>("users/register", async (registerMutation, { rejectWithValue }) => {
  try {
    const response = await axiosApi.post<IAuthResponse>(
      "/users",
      registerMutation,
    );

    return response.data;
  } catch (e) {
    if (isAxiosError(e) && e.response && e.response.status === 400) {
      return rejectWithValue(e.response.data);
    }

    throw e;
  }
});

export const login = createAsyncThunk<
  IAuthResponse,
  IAuth,
  { rejectValue: GlobalError }
>("users/login", async (loginMutation, { rejectWithValue }) => {
  try {
    const response = await axiosApi.post<IAuthResponse>(
      "/users/sessions",
      loginMutation,
    );

    return response.data;
  } catch (e) {
    if (isAxiosError(e) && e.response && e.response.status === 400) {
      return rejectWithValue(e.response.data as GlobalError);
    }

    throw e;
  }
});
