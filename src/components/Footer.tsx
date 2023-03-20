import React from "react";
import { Branding } from "../pages/Layout";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="my-10">
        <p className="font-semibold text-2xl mb-5">Developer Insights</p>
        <p className="">
          Thoughts and advice on experience, learning and technology
        </p>
      </div>
      <Branding />
    </div>
  );
};

export default Footer;
