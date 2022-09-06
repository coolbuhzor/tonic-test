import React from "react";
import Image from "next/image";

import man from "../../assets/svg/man.svg";
import woman from "../../assets/svg/woman.svg";
import check from "../../assets/svg/check-icon.svg";
import star from "../../assets/svg/star.svg";
import sun from "../../assets/svg/sun.svg";
import eye from "../../assets/svg/eye.svg";
import {
  H3,
  TextMedium,
  TextSmall,
} from "../../components/typography/typography";
import { Button } from "../../components/buttons";

const SectionThree = () => {
  const customerText = [
    { id: 1, text: "We connect our customers with the best.", img: star },
    { id: 2, text: "Advisor success customer launch party.", img: eye },
    { id: 3, text: "Business-to-consumer long tail.", img: sun },
  ];

  return (
    <section
      data-testid="section-three"
      className="w-full pt-[197px] px-[50px]  lg:px-[100px] xl:px-[150px]  max-w-[1440px]"
    >
      {/* 1st section */}
      <div className="flex flex-col items-center justify-between w-full lg:flex-row">
        <div className="w-full lg:w-[40%] minXl:w-[494px] max-w-[494px]">
          <Image src={man} alt="man-image" priority />
        </div>
        <div className="flex w-full lg:w-[45%] minXl:w-[497px] justify-center flex-col ">
          <H3>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </H3>
          <div className="mt-[40px] flex-col flex minXl:h-[159px] justify-between">
            {customerText.map((data) => (
              <div
                className="flex items-center mb-[24px] minXl:mb-[unset] "
                key={data.id}
              >
                <Image
                  src={check}
                  alt="check-icon"
                  width={36}
                  height={36}
                  priority
                />
                <TextMedium className=" ml-[27px]">{data.text}</TextMedium>
              </div>
            ))}
          </div>
          <div className="mt-[56px]">
            <Button text="Start now" className="text-white bg-primary" />
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="flex flex-col items-center justify-between w-full lg:flex-row mt-[120px] xl:mt-[unset]">
        <div className="flex w-full lg:w-[45%] minXl:w-[497px] justify-center flex-col ">
          <H3>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </H3>
          <div className="mt-[40px] flex-col flex justify-between">
            {customerText.map((data) => (
              <div
                className={`flex items-center w-full  rounded-[4px] shadow-[0px_4px_32px_rgba(0,0,0,0.08)] pl-[22px] py-[16px] mb-[24px] ${
                  data.id === 1 ? "bg-primary" : "bg-white"
                } `}
                key={data.id}
              >
                <Image src={data.img} alt="check-icon" priority />
                <TextSmall
                  className={` ml-[16px] ${
                    data.id === 1 ? "text-[#fff]" : "text-primary"
                  }`}
                >
                  {data.text}
                </TextSmall>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[40%] minXl:w-[494px] max-w-[494px]">
          <Image src={woman} alt="man-image" priority />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
