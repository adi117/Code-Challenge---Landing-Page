"use client";

import { useProperties } from "../context/use-property";
import { useRouter } from "next/navigation";
import PropertyCard from "./property-card";
import { Property } from "@/type/properties";
import CategoryFilter from "./category-filter";
import { cn } from "@/utils/cn";


const PropertyLists = () => {

  const { properties, selectedCategory, setSelectedProperty, selectedProperty } = useProperties();
  const router = useRouter();

  const handleArrowClick = (property: Property) => {
    setSelectedProperty(property);
    router.push("/unit");
  }

  const filteredProperties = selectedCategory === "All"
    ? properties
    : properties.filter((property) => property.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 w-full">
      <CategoryFilter />
      <div className={cn("grid grid-cols-1 gap-5 items-center justify-center w-full", selectedProperty ? "grid-cols-1" : "md:grid-cols-3")}>
        {filteredProperties.map((property) => (
          <div key={property.id}>
            <PropertyCard
              name={property.name}
              location={property.location}
              price={property.price}
              discount={property.discount}
              rating={property.rating}
              image={property.image}
              onSelect={() => handleArrowClick(property)}
            />
          </div>
        ))}
      </div>

    </div>
  )

}

export default PropertyLists;