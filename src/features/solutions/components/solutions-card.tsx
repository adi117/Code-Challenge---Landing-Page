import SolutionIcon from "./solutions-icon";
import { FC } from "react";

interface SolutionCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const SolutionCard: FC<SolutionCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col items-center w-full h-fit gap-10 md:gap-16 p-8">
      <SolutionIcon imageUrl={imageUrl} />
      <div className="flex flex-col gap-3 items-center w-full">
        <p className="text-[28px] text-center tracking-[0.16px]">{title}</p>
        <p className="text-[#707070] items-center justify-center text-center md:text-xl">{description}</p>
      </div>
    </div>
  )
}

export default SolutionCard;