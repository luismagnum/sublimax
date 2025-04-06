"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="w-full bg-white fixed top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-4 md:px-32 py-4">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
          <h1 className="text-xl md:text-3xl ml-4 font-bold">
            <span className="text-black">Sublimax.vr</span> 
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-gray-800 text-2xl font-bold">
          <Link href="/" className="hover:text-gray-500 transition">Home</Link>
          <Link href="#subli" className="hover:text-gray-500  transition">Diseños</Link>
          <Link href="#encargar" className="hover:text-gray-500  transition">Contacto</Link>
        </nav>

        <div className="md:hidden text-black">
          {menu ? (
            <IoClose size={30} onClick={handleChange} className="cursor-pointer" />
          ) : (
            <TiThMenu size={30} onClick={handleChange} className="cursor-pointer" />
          )}
        </div>
      </div>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden fixed bg-white text-black top-0 left-0 w-full h-[50vh] flex flex-col items-center justify-center gap-6 text-2xl transition-transform duration-300 z-50`}
      >
        <button onClick={closeMenu} className="absolute top-4 right-6 text-black text-3xl">
          <IoClose />
        </button>

        <Link href="/" onClick={closeMenu} className="hover:text-gray-500  transition">Home</Link>
        <Link href="#subli" onClick={closeMenu} className="hover:text-gray-500  transition">Diseños</Link>
        <Link href="#encargar" onClick={closeMenu} className="hover:text-gray-500  transition">Contacto</Link>
      </div>
    </div>
  );
};

export default Navbar;