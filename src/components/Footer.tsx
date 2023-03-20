import React from "react";
import { Branding } from "../pages/Layout";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
const Footer: React.FC = () => {
  return (
    <div className="mt-5 pt-5 border-t-2 border-stone-800">
      <div>
        <Branding />
        <p className="text-sm font-semibold text-stone-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis lorem
          eget elit lacinia blandit eget non arcu. Praesent mollis tortor mi,
          nec vestibulum felis pellentesque ut.{" "}
        </p>
      </div>
      <div className="flex gap-y-3 justify-between items-center mt-10 flex-wrap">
        <p className="text-sm font-semibold">
          © 2023 Helium. All rights reserved.
        </p>
        <main className="text-stone-700 flex gap-3">
          <a href="https://twitter.com/dibaskb">
            <AiOutlineTwitter
              className="border rounded-md p-1 cursor-pointer hover:text-white hover:bg-stone-700"
              size={"35"}
            />
          </a>
          <a href="https://www.linkedin.com/in/dibas-k-borborah-736a04185/">
            <AiFillLinkedin
              className="border rounded-md p-1 cursor-pointer hover:text-white hover:bg-stone-700"
              size={"35"}
            />
          </a>
          <a href="https://github.com/dibkb">
            <AiOutlineGithub
              className="border rounded-md p-1 cursor-pointer hover:text-white hover:bg-stone-700"
              size={"35"}
            />
          </a>
          <a href="https://www.instagram.com/dib.kb/">
            <AiOutlineInstagram
              className="border rounded-md p-1 cursor-pointer hover:text-white hover:bg-stone-700"
              size={"35"}
            />
          </a>
        </main>
      </div>
    </div>
  );
};

export default Footer;
