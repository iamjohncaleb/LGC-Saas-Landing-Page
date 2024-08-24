"use client";
import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestValue) =>
      console.log("latestValue", latestValue)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive Interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one at a time.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
          className="mt-14 flex justify-center"
        >
          <Image
            src={appScreen}
            alt="The Product Screenshot"
            className="w-full max-w-5xl lg:max-w-7xl"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};
