import React from "react";
import { Button } from "../../components/buttons";
import { H2 } from "../../components/typography/typography";

const SectionSix = () => {
  return (
    <section className="w-full mt-[70px] lg:mt-[124px] px-[50px] mb-[84px ] lg:px-[100px]  max-w-[1440px] bg-white ">
      <div className="bg-[url('../assets/svg/background.svg')]  py-[72px] border  bg-center bg-no-repeat h-full w-full rounded-[12px] ">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <H2 className="w-[80%] max-w-[716px] text-[#fff] ">
            An enterprise template to ramp up your company website
          </H2>
          <div className="flex flex-col lg:flex-row items-center max-w-[604px] mt-[48px]">
            <input
              type="text"
              placeholder="Your email address"
              className=" w-[100%] lg:w-[370px] h-[56px] rounded-[240px] pl-[32px]"
            />
            <Button
              text="Start now"
              className="border-none bg-green lg:ml-[24px] mt-[50px] lg:mt-[unset]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
