"use client";

import { useRouter } from "next/navigation";

const BottomBanner = () => {

  const router = useRouter();

  const handleExplore = () => {
    router.push("/unit");
  }

  return (
    <div className="relative overflow-hidden bg-[#3B6DFF] text-white rounded-4xl py-10 md:py-20">
      <div className="absolute -right-1/4 -bottom-11/12 flex items-center justify-center w-[800px] h-[800px] opacity-30">
        <div className="absolute w-full h-full bg-white opacity-5 rounded-full"></div>
        <div className="absolute w-10/12 h-10/12 bg-white opacity-10 rounded-full"></div>
        <div className="absolute w-1/2 h-1/2 bg-white opacity-15 rounded-full"></div>
      </div>
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col gap-5 items-center text-center px-4 md:px-72">
          <h2 className="text-[32px] md:text-5xl">Start Your Real Estate Journey Here</h2>
          <p className="text-xl">Embark on your real estate journey today. Explore our listings and find the perfect property to call home.</p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center md:flex-row">
          <button
          onClick={() => handleExplore()}
          className="text-black text-xl bg-white px-14 py-3.5 rounded-xl w-52"
          >Explore</button>
          <button className="px-14 py-3.5 rounded-xl border-white border-[1px] w-52">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default BottomBanner;