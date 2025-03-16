import { ReactNode } from "react";
import { FC } from "react";

interface SectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

const SectionGrid: FC<SectionProps> = ({ title, description, children }) => {
  return (
    <div className="flex flex-col gap-14 items-center sm:px-5 px-10 py-20">
      <div className="flex flex-col gap-5 max-w-[900px]">
        <h2 className="text-[32px] text-center md:text-5xl">{title}</h2>
        <p className="text-[#3D3D3D] text-center md:text-xl">{description}</p>
      </div>
      <div className="md:flex lg:flex w-full">
        {children}
      </div>
    </div>
  )
};

export default SectionGrid;