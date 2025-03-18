import Image from "next/image";
import { FC } from "react";
import { UserProps } from "@/type/user";

const UserCard: FC<UserProps> = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="relative group">
          <Image
            src={imageUrl}
            width={200}
            height={200}
            alt={`Photo of ${name}`}
            className="rounded-full md:min-w-48"
          />
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 rounded-full shadow-[0_0_0_12px_rgba(5,109,255,0.05)]"></div>
            <div className="absolute inset-0 rounded-full shadow-[0_0_0_24px_rgba(5,109,255,0.02)]"></div>
          </div>
        </div>
        <p className="text-2xl font-medium text-center">{name}</p>
      </div>
    </div>
  );
};

export default UserCard;