"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: FC<AccordionProps> = ({ question, answer }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col p-6 rounded-3xl bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">{question}</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn("p-2.5 rounded-full", isOpen ? "bg-[#3B6DFF]" : "bg-[#E6ECFE]")}
        >
          <Image
            src={isOpen ? "/icons/minus.svg" : "/icons/plus.svg"}
            width={24}
            height={24}
            alt="Dropdown icon"
          />
        </button>
      </div>
      <p className={cn("text-xl text-[#707070] max-w-[780px] transition-all duration-300 ease-in-out overflow-hidden", isOpen ? "max-h-44 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0")}>{answer}</p>
    </div>
  )
}

export default Accordion;