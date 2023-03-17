import React, { useCallback, useState } from "react";
import Input from "../../components/Input";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { GithubButton, GoogleButton } from "../../components/Button";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../app/auth/authApiSlice";
import { SuccessPortal, FailurePortal } from "../../components/modals/Portal";
const Register: React.FC = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const [error, setError] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPortal, setShowPortal] = useState<null | "success" | "failure">(
    null
  );
  const createAccountandler = useCallback(
    async (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await register({ username, name, password }).unwrap();
        setShowPortal("success");
      } catch (error) {
        setError(error.data);
        setShowPortal("failure");
      }
    },
    [username, password, name]
  );
  return (
    <>
      {showPortal === "failure" && (
        <FailurePortal setShowPortal={setShowPortal} message={error} />
      )}
      {showPortal === "success" && (
        <SuccessPortal setShowPortal={setShowPortal} />
      )}
      <div className="mx-auto max-w-lg">
        <h1 className="text-4xl md:text-5xl font-semibold">Register</h1>
        <p className="my-8 sm:my-12 text-sm sm:text-base">
          Using our unlimited passion for technology
        </p>
        <form
          action="submit"
          className="flex flex-col gap-y-4"
          onSubmit={createAccountandler}
        >
          <Input
            placeholder={"Username"}
            id={"username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type={"text"}
          />
          <Input
            placeholder={"Name"}
            id={"name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            <p>Create Account</p>
            <ArrowUpRightIcon className="h-6 w-6" />
          </button>
          <GoogleButton label={"Sign In with Google"} />
          <GithubButton label={"Sign In with Github"} />
          <Link
            to="/auth/login"
            className="text-sm flex gap-3 mx-auto mt-4 group mb-3"
          >
            <p>Already have an account</p>
            <p className="font-semibold flex items-center gap-1 group-hover:underline decoration-solid">
              Log In here
              <ArrowUpRightIcon className="h-4 w-4 font-medium" />
            </p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Register;
