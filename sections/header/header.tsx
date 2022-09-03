import React from "react";
import Image from "next/image";

import heroImg from "../../assets/svg/hero-img.svg";
import logoWall from "../../assets/svg/logo-wall.svg";
import { Button } from "../../components/buttons";
import NavBar from "../../components/nav-bar";
import { H2, TextSmall } from "../../components/typography/typography";

const Header = () => {
  return (
    <div
      className={` relative w-full flex flex-col justify-center py-[50px] lg:h-screen bg-[url('../assets/svg/background.svg')] bg-cover bg-center bg-no-repeat `}
    >
      <NavBar />
      <section className="flex  flex-col items-center justify-center h-full mt-[100px]  px-[50px] lg:px-[100px] max-w-[1440px] ">
        <div className="flex flex-col w-full lg:flex-row lg:justify-between ">
          <div className="w-full lg:w-[55%] xl:w-[560px]  h-full justify-center flex flex-col">
            <H2 className="text-white">
              Save time by building fast with Boldo Template
            </H2>
            <TextSmall className="text-light-grey">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </TextSmall>

            <div className="mt-[20px] md:mt-[40px]">
              <Button
                text="Buy template"
                className="text-primary border-[#69E6A6] bg-green"
              />
              <Button
                text="Explore"
                className=" mt-[20px] md:mt-[unset] md:ml-[24px] border-white text-white"
              />
            </div>
          </div>
          <div className="w-full justify-center  flex mt-[50px] lg:mt-[unset] lg:w-[40%] xl:w-[493.86px] ">
            <Image src={heroImg} alt="hero-image" />
          </div>
        </div>
        <div className="flex  lg:mt-[56px] w-full h-[112px]">
          <Image src={logoWall} alt="logo-wall" />
        </div>
      </section>
    </div>
  );
};

export default Header;
