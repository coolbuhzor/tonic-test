import React from "react";
import Image from "next/image";

import { TextMedium, TextSmall } from "../../components/typography/typography";
import logo from "../../assets/svg/logo-dark.svg";

const Footer = () => {
  const landingData = [
    { id: 1, text: "Home" },
    { id: 2, text: "Products" },
    { id: 3, text: "Services" },
  ];
  const companyData = [
    { id: 1, text: "Home" },
    { id: 2, text: "Careers" },
    { id: 3, text: "Services" },
  ];
  const resourcesData = [
    { id: 1, text: "Home" },
    { id: 2, text: "Products" },
    { id: 3, text: "Services" },
  ];
  return (
    <section className="pt-[100px] pb-[117px] px-[50px] lg:px-[100px] max-w-[1440px]  ">
      <footer className="flex  flex-col items-start  justify-between lg:flex-row w-full mt-[100px]  ">
        <div className="w-full lg:w-[300px] h-[172px]">
          <Image src={logo} alt="dark-logo" priority />
          <div className="mt-[20px] lg:mt-[40px]">
            <TextSmall className="text-[#777777] font-sans">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </TextSmall>
          </div>
        </div>
        <div className="mt-[40px] lg:mt-[unset] w-full lg:w-[150px] ">
          <TextMedium className="font-[700] font-sans text-black ">
            Landings
          </TextMedium>
          <div className="mt-[20px] lg:mt-[40px] h-[172px] flex flex-col justify-around">
            {landingData.map((data) => (
              <TextMedium
                className="text-[#777777] font-sans hover:scale-110 cursor-pointer"
                key={data.id}
              >
                {data.text}
              </TextMedium>
            ))}
          </div>
        </div>
        <div className="mt-[40px] lg:mt-[unset] w-full lg:w-[150px]">
          <TextMedium className="font-[700] font-sans"> Company</TextMedium>
          <div className="mt-[20px] lg:mt-[40px] h-[172px] flex flex-col justify-around">
            {companyData.map((data) => (
              <TextMedium
                className="flex items-center font-sans text-[#777777] hover:scale-110 cursor-pointer"
                key={data.id}
              >
                {data.text}
                {data.id === 2 && (
                  <span className="bg-green cursor-pointer w-[72px] h-[30px] rounded-[120px] flex justify-center items-center font-bold text-[13px] leading-[28px] font-sans text-primary ml-[15px] hover:scale-110">
                    Hiring!
                  </span>
                )}
              </TextMedium>
            ))}
          </div>
        </div>
        <div className="mt-[40px] lg:mt-[unset] w-full lg:w-[150px]">
          <TextMedium className="font-[700] font-sans "> Resources</TextMedium>
          <div className="mt-[20px] lg:mt-[40px] h-[172px] flex flex-col justify-around">
            {resourcesData.map((data) => (
              <TextMedium
                className="text-[#777777] font-sans hover:scale-110 cursor-pointer"
                key={data.id}
              >
                {data.text}
              </TextMedium>
            ))}
          </div>
        </div>
      </footer>
      <TextSmall className="text-[#777777] font-sans hover:scale-110 cursor-pointer">
        All rights reserved.
      </TextSmall>
    </section>
  );
};

export default Footer;
