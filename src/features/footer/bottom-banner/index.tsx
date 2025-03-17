import Image from "next/image";

const BottomBanner = () => {
  return (
    <div className="relative overflow-hidden bg-[#3B6DFF] text-white rounded-4xl py-10 md:py-20">
      <Image
        src="/Logomark.svg"
        width={400}
        height={400}
        alt="Company Logo"
        className="absolute -bottom-20 -right-20 opacity-10"
      />
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col gap-5 items-center text-center px-4 md:px-72">
          <h2 className="text-[32px] md:text-5xl">Start Your Real Estate Journey Here</h2>
          <p className="text-xl">Embark on your real estate journey today. Explore our listings and find the perfect property to call home.</p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center md:flex-row">
          <button className="text-black text-xl bg-white px-14 py-3.5 rounded-xl w-52">Explore</button>
          <button className="px-14 py-3.5 rounded-xl border-white border-[1px] w-52">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default BottomBanner;