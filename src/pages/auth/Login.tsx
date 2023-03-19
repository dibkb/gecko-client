import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../app/auth/authApiSlice";
import { GithubButton, GoogleButton } from "../../components/Button";
import Input from "../../components/Input";
import { setCredentials } from "../../app/features/auth/authSlice";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useDispatch } from "react-redux";
import { FailurePortal } from "../../components/modals/Portal";
const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPortal, setShowPortal] = useState<null | "success" | "failure">(
    null
  );
  const loginHandler = useCallback(
    async (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await login({ username, password }).unwrap();
        dispatch(setCredentials(response));
        return navigate("/");
      } catch (error) {
        setError(error.data);
        setShowPortal("failure");
      }
    },
    [username, password]
  );
  return (
    <div className="mx-auto max-w-lg">
      {showPortal === "failure" && (
        <FailurePortal setShowPortal={setShowPortal} message={error} />
      )}
      <h1 className="text-4xl md:text-5xl font-semibold">Login</h1>
      <p className="my-8 sm:my-12 text-sm sm:text-base">
        Using our unlimited passion for technology
      </p>
      <form
        action="submit"
        className="flex flex-col gap-y-4"
        onSubmit={loginHandler}
      >
        <Input
          placeholder={"Username"}
          id={"username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type={"text"}
        />
        <Input
          placeholder={"Password"}
          id={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
        />
        <button
          type="submit"
          className="bg-primary text-white flex justify-center gap-2 sm:gap-4 rounded-md py-3 sm:py-4 mt-8 mb-6 hover:bg-black"
        >
          <p>Login</p>
          <ArrowUpRightIcon className="h-5 w-5 sm:h-6 sm:w-6 self-center" />
        </button>
        {/* <GoogleButton label={"Login with Google"} />
        <GithubButton label={"Login with Github"} /> */}
        <Link
          to="/auth/register"
          className="text-sm flex gap-3 mx-auto mt-4 group mb-3"
        >
          <p>Don't have an account</p>
          <p className="font-semibold flex items-center gap-1 group-hover:underline decoration-solid">
            Register here
            <ArrowUpRightIcon className="h-4 w-4 font-medium" />
          </p>
        </Link>
      </form>
    </div>
  );
};
export default Login;
