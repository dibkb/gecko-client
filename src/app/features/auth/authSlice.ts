import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
export interface User {
  _id: string;
  username: string;
  name: string;
}
type AuthState = {
  user: User | null;
};
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null } as AuthState,
  reducers: {
    setCredentials: (state, { payload: user }) => {
      state.user = user;
    },
  },
});
export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
