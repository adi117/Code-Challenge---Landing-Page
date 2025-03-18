import { FC } from "react";

interface CompanyMissionProps {
  title: string;
  description: string;
  index: number;
}

const MissionCard: FC<CompanyMissionProps> = ({ title, description, index }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-16 h-16 rounded-full bg-blue-500 text-white items-center justify-center flex text-4xl font-medium">{index}</div>
      <div>
        <p className="text-2xl text-center tracking-[0.16px]">{title}</p>
        <p className="text-[#707070] items-center justify-center text-center md:text-xl">{description}</p>
      </div>
    </div>
  )
}

export default MissionCard;