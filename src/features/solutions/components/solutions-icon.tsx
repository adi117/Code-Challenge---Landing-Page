import { FC } from "react";
import Image from "next/image";

interface SolutionIconProps {
  imageUrl: string;
}

const SolutionIcon: FC<SolutionIconProps> = ({ imageUrl }) => {
  return (
    <div className="w-fit relative group">
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-full shadow-[0_0_0_6px_rgba(5,109,255,0.1)]"></div>
        <div className="absolute inset-0 rounded-full shadow-[0_0_0_12px_rgba(5,109,255,0.05)]"></div>
      </div>
      <div className="p-6 bg-gradient-to-b from-blue-500 to-blue-400 w-fit rounded-full">
        <Image
          src={imageUrl}
          width={24}
          height={24}
          alt="Solution Icon"
          className=""
        />
      </div>
    </div>
  );
}

export default SolutionIcon;