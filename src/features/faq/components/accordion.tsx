"use client";

import { FC, useState } from "react";
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
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={cn("relative rounded-full flex justify-center items-center", isOpen ? "bg-blue-500" : "bg-blue-50")}
          >
          <div className="relative w-11 h-11 flex flex-col items-center justify-center">
            <div className={cn("w-4 h-0.5 border-none absolute transition-opacity", isOpen ? "opacity-0 bg-white" : "opacity-100 bg-black")}></div>
            <div className={cn("w-4 h-0.5 border-none absolute transition-transform duration-300", isOpen ? "rotate-0 bg-white" : "rotate-90 bg-black")}></div>
          </div>
        </div>
      </div>
      <p className={cn("text-xl text-[#707070] max-w-[780px] transition-all duration-300 ease-in-out overflow-hidden", isOpen ? "max-h-44 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0")}>{answer}</p>
    </div>
  )
}

export default Accordion;