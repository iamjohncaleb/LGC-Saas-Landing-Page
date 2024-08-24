import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container ">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <div className="relative z-10">
              <Image
                src={logoImage}
                alt="SaaS logo"
                width={48} // Explicitly set width
                height={48} // Explicitly set height
                className="h-12 w-12"
              />
            </div>
          </div>

          {/* Menu Icon for smaller screens */}
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <img src={MenuIcon.src} alt="Menu Icon" className="h-6 w-6" />
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-4 items-center hidden sm:flex">
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Customers
            </a>
            <button className="bg-white py-2 px-4 rounded-lg text-black hover:bg-opacity-90 transition">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
