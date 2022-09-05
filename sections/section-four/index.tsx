import React from "react";
import Image from "next/image";

import {
  H2,
  Paragraph,
  TextMedium,
} from "../../components/typography/typography";
import arrowRight from "../../assets/svg/arrow-right.svg";
import img1 from "../../assets/svg/ellipse-1.svg";
import img2 from "../../assets/svg/ellipse-2.svg";
import img3 from "../../assets/svg/ellipse-3.svg";

const SectionFour = () => {
  const testimonialData = [
    {
      id: 1,
      text: `“Buyer buzz partner network disruptive non-disclosure agreement business”`,
      name: "Albus Dumbledore",
      position: "Manager @ Howarts",
      img: img1,
    },
    {
      id: 2,
      text: `“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”`,
      name: "Severus Snape",
      position: "Manager @ Slytherin",
      img: img2,
    },
    {
      id: 3,
      text: `“Release facebook responsive web design business model canvas seed money monetization.”`,
      name: "Harry Potter",
      position: "Team Leader @ Gryffindor",
      img: img3,
    },
  ];
  return (
    <section className="w-full py-[96px] px-[50px]  lg:px-[100px] xl:px-[150px]  max-w-[1440px] bg-primary">
      <div className="flex flex-col justify-between w-full lg:flex-row">
        <H2 className="text-[#fff] w-full lg:w-[716px]">
          An enterprise template to ramp up your company website
        </H2>

        <div className="flex lg:self-end mt-[20px]">
          <button className="h-[72px] w-[72px] rotate-[-180deg] rounded-[50%] hover:scale-105 bg-white">
            <Image src={arrowRight} alt="right-arrow" priority />
          </button>
          <button className="h-[72px] w-[72px] rounded-[50%] hover:scale-105 bg-white ml-[28px]">
            <Image src={arrowRight} alt="right-arrow" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-[72px] justify-between">
        {testimonialData.map((data) => (
          <div
            className={`flex flex-col w-full lg:w-[30%] minXl:w-[350px] mt-[50px] lg:mt-[unset] rounded-[4px] shadow-[0px_12px_32px_rgba(0,0,0,0.12)] p-[20px] minXl:p-[40px] h-fit bg-white `}
            key={data.id}
          >
            {/* 1st card */}
            <Paragraph className="font-sans">{data.text}</Paragraph>
            <div className="flex  w-full mt-[43px] items-center">
              <Image src={data.img} alt="example-image" priority />
              <aside className="ml-[16px]">
                <TextMedium className="font-sans">{data.name}</TextMedium>
                <p className="font-sans text-[14px] leading-[32px]">
                  {data.position}
                </p>
              </aside>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionFour;
