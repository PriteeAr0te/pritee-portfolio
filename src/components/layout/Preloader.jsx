"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let current = 0;

    const updateCounter = () => {
      current += Math.floor(Math.random() * 10) + 1;
      if (current >= 100) {
        current = 100;
        setCounter(current);
        animateExit();
      } else {
        setCounter(current);
        const delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      }
    };

    const animateExit = () => {
      gsap.to(".counter", {
        delay: 0.5,
        opacity: 0,
        duration: 0.25,
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

    updateCounter();
  }, [onComplete]);

  return (
    <div className="">
      <h1 className="counter bg-black">
        {counter}
      </h1>

      <div className="overlay">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="bar" />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
