"use client";

import { useEffect } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {

  useEffect(() => {

    const splitAnimation = () => {
      gsap.to(".h1", {
        duration: 1.5,
        opacity: 1,
        y: 0,
        stagger: { amount: 0.5 },
        ease: "power4.inOut",
        onComplete: animateExit,
      });
    };

    const animateExit = () => {
      gsap.to(".preloader-container", {
        delay: 0,
        opacity: 0,
        duration: 2,
      });

      gsap.to(".bar", {
        delay: 0.5,
        height: 0,
        duration: 1.5,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
        onComplete: onComplete,
      });
    };

    splitAnimation();
  }, [onComplete]);

  return (
    <div className="">

      <div className="preloader-container">
        <p className="text-white px-2 flex justify-center font-semibold whitespace-normal text-2xl mt-[300px] md:mt-32 text-center tracking-wide flex-wrap">Code is my canvas, UI is my signature — </p>
        <div className="flex justify-center items-center">
          {"PRITEE".split("").map((char, i) => (
            <h1 key={i} className="h1 text-[80px] xl:text-[150px] opacity-0 translate-y-[700px]">
              {char}
            </h1>
          ))}
        </div>
      </div>

      <div className="overlay">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="bar" />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
