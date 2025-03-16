import { FC } from "react";
import Image from "next/image";

interface SolutionIconProps {
  imageUrl: string;
}

const SolutionIcon : FC<SolutionIconProps> = ({imageUrl}) => {
  return (
    <div className="p-6 bg-gradient-to-b from-[#2F7E74] to-[#42AEA1] w-fit rounded-full inner-border-2">
      <Image
      src={imageUrl}
      width={24}
      height={24}
      alt="Solution Icon"
      className=""
      />
    </div>
  );
}

export default SolutionIcon;