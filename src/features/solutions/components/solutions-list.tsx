"use client";

import { useEffect, useState } from "react";
import SolutionCard from "./solutions-card";
import fetchSolutionData from "../hooks/use-solution";
import { cn } from "@/utils/cn";


interface SolutionProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
const SolutionList = () => {

  const [solutions, setSolutions] = useState<SolutionProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchSolutionData();
      setSolutions(data);
    }
    getData()
  }, [])

  return (
    <div className="flex flex-col md:flex-row lg:flex gap-5">
      {solutions.map((solution, index) => (
        <div key={solution.id} className={cn("sm:w-fit", index == 1 ? "md:border-x-[1px] md:border-[#E6E6E6]" : "")}>
          <SolutionCard title={solution.title} description={solution.description} imageUrl={solution.imageUrl} />
        </div>
      ))}
    </div>
  )

}

export default SolutionList;