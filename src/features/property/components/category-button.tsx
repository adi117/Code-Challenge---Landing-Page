"use client";

import { useState } from "react";
import { useProperties } from "../context/use-property";
import { FC } from "react";
import { cn } from "@/utils/cn";

interface FilterButtonProps {
    title: string;
    itemCount: number;
}

const FilterButton: FC<FilterButtonProps> = ({ title, itemCount }) => {

    const { selectedCategory, setSelectedCategory } = useProperties();

    const [] = useState<boolean>(false);

    return (
        <button
            className={cn("md:text-xl px-4 py-3 md:px-6 md:py-5 whitespace-nowrap rounded-full", selectedCategory === title ? "bg-blue-500 text-white font-bold" : "bg-blue-50")}
            onClick={() => {
                setSelectedCategory(title)
            }}
        >

          {title}
          ({itemCount})
        </button>
    );
}

export default FilterButton;