import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./usersThunk";
import { GlobalError, IAuthResponse, ValidationError } from "@/types";

interface UsersState {
  user: IAuthResponse | null;
  authLoading: boolean;
  registerError: ValidationError | null;
  loginError: GlobalError | null;
}

const initialState: UsersState = {
  user: null,
  loginError: null,
  registerError: null,
  authLoading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.authLoading = true;
      state.registerError = null;
    });
    builder.addCase(register.fulfilled, (state, { payload: user }) => {
      state.authLoading = false;
      state.user = user;
    });
    builder.addCase(register.rejected, (state, { payload: error }) => {
      state.authLoading = false;
      state.registerError = error || null;
    });

    builder.addCase(login.pending, (state) => {
      state.authLoading = true;
      state.loginError = null;
    });
    builder.addCase(login.fulfilled, (state, { payload: user }) => {
      state.authLoading = false;
      state.user = user;
    });
    builder.addCase(login.rejected, (state, { payload: error }) => {
      state.authLoading = false;
      state.loginError = error || null;
    });
  },
});

export const usersReducer = usersSlice.reducer;
