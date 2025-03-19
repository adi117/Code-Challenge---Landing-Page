"use client";

import FilterButton from "./category-button";
import { useProperties } from "../context/use-property";

const CategoryFilter = () => {

  const { properties, categoryLists } = useProperties();

  const propertyQuantity = (category: string) => {
    if(category === "All") return properties.length;
    return properties.filter((property) => property.category === category).length;

  }

return (
  <div className="mb-5 w-full flex flex-nowrap scrollbar-hide gap-2 overflow-scroll">
    {categoryLists.map((category) => (
      <FilterButton
        key={category}
        title={category}
        itemCount={propertyQuantity(category)}
      />
    ))}
  </div>
);
}

export default CategoryFilter;