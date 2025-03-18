import { FC } from "react";
import Image from "next/image";

interface CompanyTeamProps {
  name: string;
  position: string;
  imageUrl: string;
}

const TeamCard: FC<CompanyTeamProps> = ({ name, position, imageUrl }) => {
  return (
    <div className="flex flex-col">
      <Image
        src={imageUrl}
        width={200}
        height={200}
        alt={`Photo of ${name}`}
        className="rounded-full md:min-w-48"
      />
      <div>
        <p className="text-[28px] text-center tracking-[0.16px]">{name}</p>
        <p className="text-[#707070] items-center justify-center text-center md:text-xl">{position}</p>
      </div>
    </div>
  )
}

export default TeamCard;