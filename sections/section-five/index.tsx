import React from "react";
import Image from "next/image";

import image from "../../assets/svg/Image.svg";
import pointer from "../../assets/svg/pointer.svg";
import {
  H3,
  TextMedium,
  H2,
  TextSmall,
} from "../../components/typography/typography";
import icon1 from "../../assets/svg/icon-1.svg";
import icon2 from "../../assets/svg/icon-2.svg";
import icon3 from "../../assets/svg/icon-3.svg";
import photo1 from "../../assets/svg/photo-1.svg";
import photo2 from "../../assets/svg/photo-2.svg";
import photo3 from "../../assets/svg/photo-3.svg";
import { Button } from "../../components/buttons";

const SectionFive = () => {
  const serviceData = [
    {
      id: 1,
      img: icon1,
      date: "November 22, 2021",
      text: "Pitch termsheet backing validation focus release.",
      name: "Chandler Bing",
      photo: photo1,
    },
    {
      id: 2,
      img: icon2,
      header: "Even cooler feature",
      date: "November 22, 2021",
      text: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      name: "Rachel Green",
      photo: photo2,
    },
    {
      id: 3,
      img: icon3,
      header: "Cool feature title",
      date: "November 22, 2021",
      text: "Beta prototype sales iPad gen-z marketing network effects value proposition",
      name: "Monica Geller",
      photo: photo3,
    },
  ];
  return (
    <section className="w-full py-[120px] px-[50px]  lg:px-[100px] xl:px-[150px]  max-w-[1440px] bg-white">
      <div className="relative w-full">
        <Image src={image} alt="work-image" layout="responsive" priority />
        <div className="flex flex-col justify-between items-center lg:flex-row mt-[56px]">
          <div className="w-full lg:w-[43%] xl:w-[500px]">
            <H3>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </H3>
          </div>

          <div className="h-[140px] w-full lg:w-[43%] xl:w-[500px] mt-[50px] lg:mt-[unset] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#c4c4c4]">
              <TextMedium>We connect our customers with the best?</TextMedium>
              <div>
                <Image src={pointer} alt="pointer" priority />
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-[#c4c4c4]">
              <TextMedium>We connect our customers with the best?</TextMedium>
              <div>
                <Image src={pointer} alt="pointer" priority />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-[156px] text-center">
        <div className="flex flex-col justify-center w-full ">
          <TextMedium className="font-sans text-[#777]">Our Blog</TextMedium>
          <div className="max-w-[842px] flex self-center">
            <H2>Value proposition accelerator product management venture</H2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center w-full mt-[77px] ">
          {serviceData.map((data) => (
            <div
              className=" lg:w-[250px] xl:w-[300px] max-w-[300px] mt-[50px] lg:mt-[unset] "
              key={data.id}
            >
              <Image
                src={data.img}
                objectFit="contain"
                alt="card-image"
                priority
              />
              <div>
                <div className="flex items-center w-full ">
                  <p className="font-sans text-[1rem] leading-[28px] font-bold text-primary">
                    Category
                  </p>
                  <TextSmall className="ml-[12px] text-[#777777] font-sans">
                    {data.date}
                  </TextSmall>
                </div>
                <TextMedium className="font-sans text-left h-[99px]">
                  {data.text}
                </TextMedium>
              </div>
              <div className="flex items-center w-full mt-[20px] ">
                <Image src={data.photo} alt="right-arrow" priority />
                <p className="font-normal text-black leading-[28px] ml-[12px]">
                  {data.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button
          text="Load more"
          className="mt-[84px] border-primary text-primary"
        />
      </div>
    </section>
  );
};

export default SectionFive;
