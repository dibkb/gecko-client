import React from "react";
import ReactDOM, { createPortal } from "react-dom";
export const MessagePortal = () => {
  return ReactDOM.createPortal(
    <div className="border-2">
      <p>This is part of the modal</p>
    </div>,
    document.body
  );
};
