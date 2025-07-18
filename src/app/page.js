"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const timer = setTimeout(() => {
      gsap.to(".h1", {
        duration: 1.5,
        opacity: 1,
        y: 0,
        stagger: { amount: 0.5 },
        ease: "power4.inOut",
      });

      gsap.to(".hero-img", {
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: "power4.inOut",
      });
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="w-full flex flex-col items-center justify-center text-center">
      <div className="flex flex-wrap justify-center header overflow-hidden w-full">
        {"PRITEE".split("").map((char, i) => (
          <h2 key={i} className="h1 opacity-0 translate-y-[700px]">
            {char}
          </h2>
        ))}
      </div>

      <p className="hero-img opacity-0 translate-y-[400px] mt-10 text-lg border border-white rounded-xl py-4 px-6 max-w-xl">
        This is the dummy home page.
      </p>
    </section>
  );
}
