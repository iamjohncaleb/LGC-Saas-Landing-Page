"use client";
import Image from "next/image";
import helixImage from "../assets/images/helix2.png";
import emojiStartImage from "../assets/images/emojistar.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) =>
      console.log("value", value)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div
      className="bg-black text-white py-[72px] sm:py-24 text-center"
      ref={containerRef}
    >
      <div className="container mx-auto max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image
            src={helixImage}
            alt=""
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={emojiStartImage}
            alt="Emoji Star"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Get Instant Access
        </h2>
        <p className="text-xl text-white/70 mt-5 max-w-lg mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-md mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@gmail.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1 focus:outline-none focus:ring-2 focus:ring-[#5D2CAB] sm:rounded-l-lg"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5 font-medium hover:bg-gray-200 sm:rounded-r-lg">
            Get Access
          </button>
        </form>
      </div>
    </div>
  );
};
