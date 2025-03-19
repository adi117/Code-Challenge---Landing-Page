import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { cn } from "@/utils/cn";

interface SidemenuProps {
  isOpen: boolean;
  setSidemenuOpen: (isOpen: boolean) => void;
}

const Sidemenu: FC<SidemenuProps> = ({ isOpen, setSidemenuOpen }) => {
  return (
    <div
      className={cn("absolute w-screen bg-blue-500 -left-5 p-5 transition-transform duration-300", isOpen ? "translate-y-10" : "-translate-y-full")}
    >
      <ul className="text-white text-3xl flex flex-col gap-1">
        <li><Link
          href="/"
          onClick={() => setSidemenuOpen(false)}
        >Overview</Link></li>
        <li><Link
          href="/unit"
          onClick={() => setSidemenuOpen(false)}
        >Unit</Link></li>
        <li><Link
          href="/about-us"
          onClick={() => setSidemenuOpen(false)}
        >About Us</Link></li>
        <li><Link
          href="/team"
          onClick={() => setSidemenuOpen(false)}
        >Team</Link></li>
      </ul>
      <Image
      src="/icons/close.svg"
      width={32}
      height={32}
      alt="Close button"
      onClick={() => setSidemenuOpen(false)}
      className="absolute right-6 top-6"
      />
    </div>
  );
};

export default Sidemenu;