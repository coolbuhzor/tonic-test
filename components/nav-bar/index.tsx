import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/svg/Logo.svg";
import Hamburger from "../../assets/svg/hamburger.svg";
import Close from "../../assets/svg/close-icon.svg";
import { Button } from "../buttons";
import MobileNav from "./mobile-nav";

const NavBar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState<any>(false);
  const [showNav, setShowNav] = useState(false);
  const handleScroll = () => {
    window.scrollY > 10
      ? setClientWindowHeight(true)
      : setClientWindowHeight(false);
  };

  const handleNav = () => setShowNav(!showNav);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      data-testid="nav-bar"
      className={`flex w-full fixed  px-[50px] lg:px-[100px] items-center justify-between  max-w-[1440px] z-[10] ${
        clientWindowHeight
          ? "top-0 bg-primary h-[80px] "
          : "top-[20px] lg:top-[56px] bg-transparent h-[42px]"
      }`}
    >
      <Link href="/">
        <a>
          <Image src={logo} alt="boldo-logo" height={42} width={162.22} />
        </a>
      </Link>

      <div className="hidden w-[419px] lg:flex justify-between h-[40px] items-center">
        <Link href="#">
          <a className="font-[600] leading-[1.75rem] font-sans text-[1rem] text-white cursor-pointer hover:text-green">
            Product
          </a>
        </Link>
        <Link href="#">
          <a className="font-[600] leading-[1.75rem] font-sans text-[1rem] text-white cursor-pointer hover:text-green">
            Services
          </a>
        </Link>
        <Link href="#">
          <a className="font-[600] leading-[1.75rem] font-sans text-[1rem] text-white cursor-pointer hover:text-green">
            About
          </a>
        </Link>

        <Button
          className="px-[2.5rem] py-[0.5rem] bg-white text-primary leading-[1.5rem] border-none text-[1rem] hover:text-white hover:bg-green"
          text="login"
        />
      </div>

      {/* mobile nav */}
      <div onClick={handleNav} className="flex lg:hidden">
        {showNav ? (
          <Image src={Close} alt="hamburger-menu" />
        ) : (
          <Image src={Hamburger} alt="hamburger-menu" />
        )}
      </div>

      {showNav && <MobileNav />}
    </nav>
  );
};

export default NavBar;
