import { FC } from "react";
import Image from "next/image";
import { TestimonialsProps } from "@/type/testimonial";


const TestimonialCard: FC<TestimonialsProps> = ({ name, role, message, imageUrl}) => {
  return (
      <div className="flex flex-col gap-4">
        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src={imageUrl}
            width={435}
            height={210}
            alt={`Image of ${name}`}
            className="object-cover md:h-[210px] w-full h-full"
          />
          <div className="absolute right-0 top-0 rounded-bl-3xl bg-white border-white border-b-2 border-l-2 w-fit overflow-hidden">
            <div
            className= "bg-blue-500 px-6 py-2 text-white text-sm">
              {name} - {role}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex font-medium text-xl justify-between gap-4 md:gap-0">
            <p className="text-sm text-gray-500 text-center md:text-left">{message}</p>
          </div>
        </div>
      </div>
    )
}

export default TestimonialCard;