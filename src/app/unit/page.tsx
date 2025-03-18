"use client";

import Headers from "@/features/header";
import { useProperties } from "@/features/property/context/use-property";
import PropertyLists from "@/features/property/components/property-list";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Form from "@/features/form";
import Footer from "@/features/footer";
import SectionGrid from "@/features/section/section-grid";

export default function Page() {

  const { selectedProperty } = useProperties();

  return (
    <div className="flex flex-col w-full">
      <div className="bg-blue-500 w-full px-5 md:px-44">
        <Headers />
      </div>
      <SectionGrid
      title="Discover Your Perfect Home"
      description="Explore a wide range of premium homes, apartments, and rental properties tailored to your needs. Whether you're buying, renting, or investing, Mai Home offers exclusive listings to help you find your dream space with ease."
      isHeaderActive={selectedProperty ? false : true}
      >
        <div className="flex flex-col md:flex-row px-5 md:px-10 w-full gap-5 md:gap-20">
          <div
            className={cn("flex flex-col gap-5 mb-4", selectedProperty ? "w-full md:w-2/3" : "hidden")}>
            <p className="line-clamp-1 md:line-clamp-none text-3xl font-medium md:text-6xl mb-3">{selectedProperty?.name}</p>
            <Image
              src={selectedProperty?.image || "https://placehold.co/800x400"}
              width={800}
              height={400}
              alt={`Image of ${selectedProperty?.name}`}
              className="rounded-4xl w-full object-cover"
            />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col text-[#443C3C] gap-3 text-xl">
                <div className="flex gap-2">
                  <Image
                    src="/icons/location.svg"
                    width={24}
                    height={24}
                    alt="Location icon"
                  />
                  <p>{selectedProperty?.location}</p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/icons/star.svg"
                    width={24}
                    height={24}
                    alt="Location icon"
                  />
                  <p>{selectedProperty?.rating}/5</p>
                </div>
              </div>
            </div>
            {/* Form for booking */}
            <div className="flex w-full">
              <Form />
            </div>
          </div>
          <div
            className={cn("mt-3 mb-20", selectedProperty ? "w-full md:w-1/3" : "w-full")}>
            <p className={cn("text-2xl font-medium mb-4", selectedProperty ? "block" : "hidden")}>Others property</p>
            <PropertyLists />
          </div>
        </div>
      </SectionGrid>
      <Footer
        isBannerActive={false}
      />
    </div>
  );
}