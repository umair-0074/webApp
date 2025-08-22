import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-transparent">
      <div className="relative flex items-center justify-between mx-2 md:mx-20 py-6">
        {/* Logo - Left */}
        <div className="text-3xl font-bold font-sixcaps tracking-widest text-white">
          LIghTechHouse
        </div>

        {/* Desktop Menu - Centered absolutely */}
        {/* Desktop Navigation */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-mygray backdrop-blur-md rounded-full px-8 py-3 shadow-lg">
          <ul className="flex gap-8 text-xl font-manrope text-white">
            <li>
              <a
                href="#services"
                className="hover:text-blue-300 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                className="hover:text-blue-300 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-300 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-[86%] mx-auto pb-4 text-white">
          <ul className="flex flex-col gap-3 text-lg font-medium">
            <li>
              <a href="#services" className="hover:text-blue-300">
                Services
              </a>
            </li>
            <li>
              <a href="#aboutus" className="hover:text-blue-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
