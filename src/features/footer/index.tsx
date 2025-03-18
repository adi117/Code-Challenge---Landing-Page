import Image from "next/image";
import BottomBanner from "./bottom-banner";
import { FC } from "react";

interface FooterProps {
  isBannerActive: boolean;
}

const Footer : FC<FooterProps> = ({ isBannerActive }) => {

  return (
    <div className="flex flex-col gap-24 m-5 md:m-10">
        {isBannerActive && <BottomBanner />}
      <footer className="grid grid-cols-1 sm:grid-cols-2 w-full">
        <div className="flex flex-col mb-10 md:pr-40">
          <div className="text-xl font-semibold flex flex-col gap-2 items-center md:items-start">
            <div className="flex gap-2 text-2xl">
              <Image
                src="/icons/company-logo.svg"
                width={30}
                height={30}
                alt="Company Logo"
              />
              Mai <strong>Home</strong>
            </div>
            <p className="text-xl font-normal text-center md:text-left">Explore our extensive listings of properties, ranging from cozy apartments to luxurious estates, meticulously curated to cater to diverse tastes and lifestyles. </p>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full gap-2">
          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl font-medium">Navigation</p>
            <ul className="flex flex-col list-none text-[#707070] gap-4 text-sm md:text-base">
              <li>Overview</li>
              <li>Explore</li>
              <li>Analytics</li>
              <li>Unit</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl font-medium">Address</p>
            <ul className="flex flex-col list-none text-[#707070] gap-4 text-sm md:text-base">
              <li>6391 Elgin St. Celina, Delaware 10299</li>
              <li>3891 Ranchview Dr. Richardson, California 62639</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl font-medium">Contact</p>
            <ul className="flex flex-col list-none text-[#707070] gap-4 text-sm md:text-base w-full">
              <li className="w-full break-words">UrbanNest@gamail.com</li>
              <li>(307) 555-0133</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;