import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/button/Button";
import image1 from "../../assets/images/image6.jpg";
import image2 from "../../assets/images/pexels.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image7.jpg";

const Home = () => {
  return (
    <div className="">
      <div className=" flex min-h-screen md:min-h-[80svh] justify-between items-center max-w-[1440px] mx-auto px-[2rem] sm:px-[5rem]">
        <motion.div
          className="flex flex-col text-[#181830]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ease: "easeInOut", duration: 1 , delay: 2}}
        >
          <div>
            <h1 className="font-[exo] font-semibold text-4xl sm:text-5xl lg:text-6xl py-[0.3rem]">
              Empowering Brands
            </h1>
            <h1 className="font-[exo] font-semibold text-4xl sm:text-5xl lg:text-6xl py-[0.3rem]">
              With <span className="text-[#E87B37] ">Seamless</span>
            </h1>
            <h1 className="font-[exo] font-semibold text-4xl sm:text-5xl lg:text-6xl py-[0.3rem]">
              IT Solutions
            </h1>
          </div>
          <div>
            <p className="font-[poppins] text-sm sm:text-md lg:text-lg pt-[2rem]">
              We deploy the best-in-class technology to meet the unique{" "}
            </p>
            <p className="font-[poppins] text-sm sm:text-md lg:text-lg pb-[0.15rem]">
              needs of each of our clients. Our solutions are at the
            </p>
            <p className="font-[poppins] text-sm sm:text-md lg:text-lg">
              cutting edge of contact centre business.
            </p>
          </div>
          <div className="py-[2rem]">
            <Button description="Connect with Us" />
          </div>
        </motion.div>
        <motion.div
          className="hidden md:grid md:grid-cols-2 md:w-[30%] lg:w-[35%] md:py-[2rem] md:gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ease: "easeInOut", duration: 1, delay:2 }}
        >
          <div className="grid grid-rows-2 w-full ">
            <img
              src={image1}
              alt="homeBg1"
              loading="lazy"
              className="md:h-40 lg:h-60 2xl:h-80 w-full rounded-lg object-cover"
            />
            <img
              src={image2}
              alt="homeBg2"
              className="md:h-40 lg:h-60 2xl:h-80 w-full rounded object-contain"
            />
          </div>
          <div className="grid grid-rows-2 w-full ">
            <img
              src={image4}
              alt="homeBg3"
              className="md:h-40 lg:h-60 2xl:h-80 w-full rounded-3xl object-contain"
            />
            <img
              src={image3}
              alt="homeBg4"
              className="md:h-40 lg:h-60 2xl:h-80 w-full rounded-lg object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
