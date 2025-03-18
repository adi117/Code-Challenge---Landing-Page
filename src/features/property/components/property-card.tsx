import { FC } from "react";
import Image from "next/image";

interface PropertyProps {
  name: string;
  location: string;
  price: number;
  discount: number;
  rating: number;
  image: string;
  onSelect: () => void;
}

const PropertyCard: FC<PropertyProps> = ({ name, location, price, discount, rating, image, onSelect}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative rounded-3xl overflow-hidden">
        <Image
          src={image}
          width={435}
          height={210}
          alt={`Image of ${name}`}
          className="object-cover md:w-[435px] md:h-[210px] w-full h-full"
        />
        <div className="absolute right-0 bottom-0 rounded-tl-3xl bg-white border-white border-t-4 border-l-4 w-fit overflow-hidden">
          <button
          onClick={onSelect}
          className= "bg-blue-500 px-6 py-2">
            <Image
            src="/icons/arrow-up-right.svg"
            width={20}
            height={20}
            alt="Arrow icon"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex font-medium text-xl justify-between gap-4 md:gap-0">
          <p className="line-clamp-1">{name}</p>
          <div className="flex text-base gap-2">
            <p className="text-red-600 font-normal">{`(${discount}%)`}</p>
            <p>${price}</p>
          </div>
        </div>
        <div className="flex flex-col text-[#443C3C] gap-3">
          <div className="flex gap-2">
            <Image
              src="/icons/location.svg"
              width={24}
              height={24}
              alt="Location icon"
            />
            <p>{location}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/icons/star.svg"
              width={24}
              height={24}
              alt="Location icon"
            />
            <p>{rating}/5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard;