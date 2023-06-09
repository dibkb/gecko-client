import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ReactDOM from "react-dom/client";
import App from "./App";
import Register from "./pages/auth/Register";
import "./index.css";
import { AuthLayout, PublicLayout, UserLayout } from "./pages/Layout";
import Login from "./pages/auth/Login";
import Write from "./pages/Write";
import Blogpage from "./pages/Blogpage";
import Adminpage from "./pages/Adminpage";
import Profilepage from "./pages/Profilepage";
import Edit from "./pages/Edit";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* public route */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<App />} />
          <Route path="blog/:blogId" element={<Blogpage />} />
          <Route path="user/:userId" element={<Profilepage />} />
        </Route>
        {/* Auth routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* User Layout */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="write" element={<Write />} />
          <Route path="edit/:blogId" element={<Edit />} />
        </Route>
        {/* admin user Layout */}
        <Route path="user/admin" element={<PublicLayout />}>
          <Route path=":userId" element={<Adminpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
