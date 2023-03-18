import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { LOCAL_STORAGE } from "../../../utils/localStorage";
export interface User {
  _id: string;
  username: string;
  name: string;
}
type AuthState = {
  user: User | null;
};
// const user = localStorage.getItem(LOCAL_STORAGE.LOCAL_STORAGE_USER)
//   ? localStorage.getItem(LOCAL_STORAGE.LOCAL_STORAGE_USER)
//   : null;
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null } as AuthState,
  reducers: {
    setCredentials: (state, { payload: user }) => {
      const { _id, username, name } = user;
      state.user = {
        _id,
        username,
        name,
      };
      localStorage.removeItem(LOCAL_STORAGE.LOCAL_STORAGE_HEADING);
      localStorage.removeItem(LOCAL_STORAGE.LOCAL_STORAGE_BLOG);
      localStorage.setItem(
        LOCAL_STORAGE.LOCAL_STORAGE_USER,
        JSON.stringify(state.user)
      );
    },
    setLogout: (state) => {
      state.user = null;
      localStorage.removeItem(LOCAL_STORAGE.LOCAL_STORAGE_USER);
      localStorage.removeItem(LOCAL_STORAGE.LOCAL_STORAGE_HEADING);
      localStorage.removeItem(LOCAL_STORAGE.LOCAL_STORAGE_BLOG);
    },
  },
});
export const { setCredentials, setLogout } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
