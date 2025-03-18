"use client";

import { useProperties } from "../context/use-property";
import { useRouter } from "next/navigation";
import PropertyCard from "./property-card";
import { Property } from "@/type/properties";

const PropertyLists = () => {

  const { properties, setSelectedProperty } = useProperties();
  const router = useRouter();

  const handleArrowClick = (property: Property) => {
    setSelectedProperty(property);
    router.push("/unit");
  }

  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {properties.map((property) => (
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
  )

}

export default PropertyLists;