import React, { useCallback, useState } from "react";
import Input from "../../components/Input";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { GithubButton, GoogleButton } from "../../components/Button";
const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const createAccountandler = useCallback(
    (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    []
  );
  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-4xl md:text-5xl font-semibold">Register</h1>
      <p className="my-12">Using our unlimited passion for technology</p>
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
          placeholder={"Email"}
          id={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          className="bg-primary text-white flex justify-center gap-4 rounded-md py-4 mt-8 mb-6 hover:bg-black"
        >
          <p>Create Account</p>
          <ArrowUpRightIcon className="h-6 w-6" />
        </button>
        <GoogleButton label={"Sign In with Google"} />
        <GithubButton label={"Sign In with Github"} />
      </form>
    </div>
  );
};

export default Register;
