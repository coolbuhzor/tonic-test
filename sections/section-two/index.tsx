import React from "react";
import Image from "next/image";

import image1 from "../../assets/svg/image-1.svg";
import image2 from "../../assets/svg/image-2.svg";
import image3 from "../../assets/svg/image-3.svg";
import arrowRight from "../../assets/svg/arrow-right.svg";
import {
  H2,
  Paragraph,
  TextMedium,
} from "../../components/typography/typography";
import Link from "next/link";

const SectionTwo = () => {
  const serviceData = [
    {
      id: 1,
      img: image3,
      header: "Cool feature title",
      text: "Learning curve network effects return on investment.",
    },
    {
      id: 2,
      img: image1,
      header: "Even cooler feature",
      text: "Learning curve network effects return on investment.",
    },
    {
      id: 3,
      img: image2,
      header: "Cool feature title",
      text: "Learning curve network effects return on investment.",
    },
  ];
  return (
    <section className="w-full pt-[82px] px-[50px]  lg:px-[100px] xl:px-[150px] max-w-[1440px]">
      <div className="flex flex-col items-center justify-center w-full text-center">
        <TextMedium className="text-[#777777]">Our Services</TextMedium>
        <H2 className="max-w-[842px] ">
          Handshake infographic mass market crowdfunding iteration.
        </H2>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center w-full mt-[78px] ">
        {serviceData.map((data) => (
          <div
            className=" lg:w-[250px] xl:w-[300px] max-w-[300px] mt-[50px] lg:mt-[unset]  "
            key={data.id}
          >
            <Image src={data.img} alt="card-image" priority />
            <div>
              <Paragraph>{data.header}</Paragraph>
              <TextMedium className="text-[#777777]">{data.text}</TextMedium>
            </div>
            <Link href="">
              <a className="transition ease-in-out delay-150 font-sans font-bold text-[1.25rem] border-b  border-primary pb-2 flex items-center leading-[2.25rem]  hover:scale-110 duration-100">
                Explore page &nbsp;{" "}
                <Image src={arrowRight} alt="right-arrow" priority />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
