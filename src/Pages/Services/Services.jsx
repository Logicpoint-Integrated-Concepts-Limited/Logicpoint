import React, { useEffect } from "react";
import { Element } from "react-scroll";
import smallRectangle from "../../Assets/Images/smallRectangle.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animationDown = useAnimation();
  const animationLeft = useAnimation();
  const animationRight = useAnimation();
  const animationUp = useAnimation();
  const animationReveal = useAnimation();

  useEffect(() => {
    if (inView) {
      animationDown.start({
        opacity: 1,
        y: 0,
        transition: { ease: "easeInOut", duration: 1, delay: 1 },
      });
    }
    if (!inView) {
      animationDown.start({
        opacity: 0,
        y: 50,
        transition: { ease: "easeInOut", duration: 1, delay: 1 },
      });
    }
  }, [inView, animationDown]);

  useEffect(() => {
    if (inView) {
      animationUp.start({
        opacity: 1,
        y: 0,
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
    if (!inView) {
      animationUp.start({
        opacity: 0,
        y: -50,
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
  }, [inView, animationUp]);

  useEffect(() => {
    if (inView) {
      animationLeft.start({
        opacity: 1,
        x: 0,
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
    if (!inView) {
      animationLeft.start({
        opacity: 0,
        x: 50,
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
  }, [inView, animationLeft]);

  useEffect(() => {
    if (inView) {
      animationReveal.start({
        opacity: 1,
        transition: { ease: "easeInOut", duration: 1, delay: 0.8 },
      });
    }
    if (!inView) {
      animationReveal.start({
        opacity: 0,
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
  }, [inView, animationReveal]);

  useEffect(() => {
    if (inView) {
      animationRight.start({
        opacity: 1,
        x: 0,
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
    if (!inView) {
      animationRight.start({
        opacity: 0,
        x: -50,
        transition: { ease: "easeInOut", duration: 1, delay: 0.5 },
      });
    }
  }, [inView, animationRight]);



  return (
    <React.Fragment>
      <Element name="services">
        <div
          ref={ref}
          className="flex flex-col bg-[#F5F5F5]  md:flex md:flex-row justify-center pl-[10%] min-h-screen w-full"
        >
          <motion.div className="flex-1  pt-[5rem]" animate ={ animationUp }>
            <motion.div animate={animationUp}>
            <div>
              <img src={smallRectangle} alt="bar" className="pt-7" />
            </div>
            <div>
              <h1 className="font-[serif-regular] pt-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Hire Us
              </h1>
            </div>
            </motion.div>

            <div className="flex flex-col md:flex md:flex-row pt-[2rem]">
              <motion.div animate = {animationRight} >
                <h1 className="font-[serif-regular] text-sm sm:text-lg md:text-xl lg:text-2xl pt-6 font-bold text-black">
                  IT Consulting
                </h1>
                <p className="font-[poppins-regular] pt-3 text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
                  Our mission is to empower our clients to use the internet
                </p>
                <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
                  to its full potential by providing affordable, effective,
                </p>
                <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
                  custom design and marketing solutions.
                </p>
              </motion.div>

              <motion.div animate = {animationReveal}>
                <h1 className="font-[serif-regular] text-sm sm:text-lg md:text-xl lg:text-2xl  pt-6 font-bold text-black">
                  Development
                </h1>
                <p className="font-[poppins-regular] pt-3 text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
                  Our vision is to become a global leader in providing the
                </p>
                <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
                  best and unique web design and marketing services to
                </p>
                <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
                  improve our client’s productivity and business strength.
                </p>
              </motion.div>

              <motion.div animate={animationLeft}>
                <h1 className="font-[serif-regular] text-sm sm:text-lg md:text-xl lg:text-2xl  pt-6 font-bold text-black">
                  Installation
                </h1>
                <p className="font-[poppins-regular] pt-3 text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
                  Our vision is to become a global leader in providing the
                </p>
                <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
                  best and unique web design and marketing services to
                </p>
                <p className="font-[poppins-regular] text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] text-black">
                  improve our client’s productivity and business strength.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Element>
    </React.Fragment>
  );
};

export default Services;