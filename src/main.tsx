import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Register from "./pages/auth/Register";
import "./index.css";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Write from "./pages/auth/Write";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Auth routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="write" element={<Write />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
