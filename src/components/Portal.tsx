import React from "react";
import ReactDOM, { createPortal } from "react-dom";
export const MessagePortal = () => {
  return ReactDOM.createPortal(
    <div className="z-10 absolute h-full w-full top-0 bg-modalOverlay">
      <div className="">
        <p>This is part of the modal</p>
      </div>
    </div>,
    document.body
  );
};
