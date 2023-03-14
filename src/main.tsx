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
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* public route */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<App />} />
        </Route>
        {/* Auth routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* User Layout */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="write" element={<Write />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
