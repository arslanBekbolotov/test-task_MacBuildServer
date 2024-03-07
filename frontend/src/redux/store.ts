import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "@/redux/features/user/usersSlice";

export const store = configureStore({
  reducer: {
    usersStore: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
