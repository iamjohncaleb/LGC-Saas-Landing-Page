"use client";
import Image from "next/image"; // Assuming you are using Next.js
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-xl text-white/70 font-semibold mb-8">
          Trusted by the world's most innovative teams
        </h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
          <motion.div
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-16 flex-none pr-16"
          >
            {images.map(({ src, alt }, index) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
            {images.map(({ src, alt }, index) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
