"use client";

import Image from "next/image";
import Link from "next/link";
import Sidemenu from "../sidemenu";
import { useState } from "react";
import { useProperties } from "../property/context/use-property";

const Headers = () => {

  const [isSidemenuOpen, setSidemenuOpen] = useState(false);
  const {setSelectedCategory} = useProperties();

  return (
    <nav className="text-white flex w-full h-fit items-center p-5 bg-white/20 rounded-[18px] my-6 relative">
      <div className="w-1/2 md:w-1/5">
        <Image
          src="/header/company-logo.svg"
          width={170}
          height={32}
          alt="Company logo"
        />
      </div>
      <div className="w-3/5 items-center justify-center px-20 hidden md:block">
        <ul className="flex justify-between w-full">
          <li className="p-2"><Link href="/" onClick={() => setSelectedCategory("All")}>Overview</Link></li>
          <li className="p-2"><Link href="/unit" onClick={() => setSelectedCategory("All")}>Unit</Link></li>
          <li className="p-2"><Link href="/about-us" onClick={() => setSelectedCategory("All")}>About Us</Link></li>
          <li className="p-2"><Link href="/team" onClick={() => setSelectedCategory("All")}>Team</Link></li>
        </ul>
      </div>
      <div className="w-1/2 md:w-1/5 items-end justify-end">
        <div className="gap-2 w-full hidden md:flex">
          <button className="px-6 py-2" name="register-button">Register</button>
          <button className="px-6 py-2 text-black bg-white border-[1px] rounded-xl border-[#DDDDDD] font-medium" name="login-button">Login</button>
        </div>
        <div
          className="w-full flex justify-end items-end md:hidden"
          onClick={() => setSidemenuOpen(true)}
        >
          <Image
            src="/icons/hamburger-menu.svg"
            width={24}
            height={24}
            alt="Hamburger Menu"
          />
        </div>
      </div>
      <Sidemenu isOpen={isSidemenuOpen} setSidemenuOpen={setSidemenuOpen} />
    </nav>
  )
}

export default Headers;