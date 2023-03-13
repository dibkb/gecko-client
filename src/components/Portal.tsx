import React from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM, { createPortal } from "react-dom";
interface Portalinterface {
  setShowPortal: (val: any) => void;
  message?: string;
}
export const SuccessPortal: React.FC<Portalinterface> = ({ setShowPortal }) => {
  const navigate = useNavigate();
  const buttonClickHandler = () => {
    setShowPortal(null);
    navigate("/auth/login");
  };
  return ReactDOM.createPortal(
    <div className="z-10 absolute h-full w-full bg-modalOverlay top-0">
      <div className="select-none relative bg-white shadow-2xl w-fit mx-auto px-8 py-8 rounded-md top-12 flex flex-col">
        <p className="font-medium">Your account has been created sucessfully</p>
        <button
          className="px-4 py-2 rounded-md bg-teal-600 text-white mx-auto mt-10 hover:bg-teal-800"
          onClick={buttonClickHandler}
        >
          Login
        </button>
      </div>
    </div>,
    document.body
  );
};
export const FailurePortal: React.FC<Portalinterface> = ({
  setShowPortal,
  message,
}) => {
  return ReactDOM.createPortal(
    <div className="z-10 absolute h-full w-full bg-modalOverlay top-0">
      <div className="select-none relative bg-white shadow-2xl w-fit mx-auto px-8 py-8 rounded-md top-12 flex flex-col">
        <p className="font-medium">{message}</p>
        <button
          className="px-4 py-2 rounded-md bg-red-600 text-white mx-auto mt-10 hover:bg-teal-800"
          onClick={() => setShowPortal(null)}
        >
          OK
        </button>
      </div>
    </div>,
    document.body
  );
};
