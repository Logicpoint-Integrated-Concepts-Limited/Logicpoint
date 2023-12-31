import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OurServicesBox from "./OurServicesBox";
import OurServicesItems from "./OurServicesItems";

const OurServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <div
        className="flex flex-col justify-center items-center min-h-screen 2xl:min-h-[80svh] max-w-[1440px] mx-auto px-[2rem] sm:px-[5rem] py-[2rem]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div>
          <h1 className="font-[exo] font-semibold text-4xl sm:text-5xl lg:text-6xl py-[0.3rem] text-[#181830]">
            <span className="border-b-8 border-[#5D1570] ">Services</span>
            <span className="text-[#E87B37]"> We Offer</span>{" "}
          </h1>
        </div>
        <div className="pt-[4rem]" data-aos="fade-up" data-aos-duration="1000">
          <OurServicesBox services={OurServicesItems} />
        </div> 

      </div>
    </div>
  );
};

export default OurServices;

















