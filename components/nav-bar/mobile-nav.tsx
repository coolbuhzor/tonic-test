import React from "react";
import Link from "next/link";

import { Button } from "../buttons";

const MobileNav = () => {
  return (
    <nav className="py-[20px] px-[20px] flex flex-col w-full max-w-[250px] fixed top-[100px] right-[70px] bg-white rounded-[10px]">
      <Link href="#">
        <a className="font-[600] leading-[1.75rem] font-sans text-[1rem] text-primary cursor-pointer hover:text-green mb-[10px]">
          Product
        </a>
      </Link>
      <Link href="#">
        <a className="font-[600] leading-[1.75rem] font-sans text-[1rem] text-primary cursor-pointer hover:text-green mb-[10px]">
          Services
        </a>
      </Link>
      <Link href="#">
        <a className="font-[600] leading-[1.75rem] font-sans text-[1rem] text-primary cursor-pointer hover:text-green mb-[10px]">
          About
        </a>
      </Link>
      <Button
        className="px-[2.5rem] py-[0.5rem] bg-primary text-white leading-[1.5rem] border-none text-[1rem] hover:text-white hover:bg-green"
        text="login"
      />
    </nav>
  );
};

export default MobileNav;
