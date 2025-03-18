import Image from "next/image";
import CompanyDataList from "./components/mission-list";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center gap-3 mx-5 md:mx-10 md:gap-0 md:my-20">
      <div className="flex items-start flex-col md:flex-row">
        <div className="flex w-full mb-5 md:mb-0 md:w-1/4 text-center items-center justify-center md:justify-start">
          <p className="text-2xl">
            Our Story
          </p>
        </div>
        <div className="flex flex-col w-full md:w-3/4 gap-14">
          <p className="text-xl md:text-[32px] text-[#707070] text-center md:text-left">
            At <strong>Mai Home</strong>, we believe that finding the perfect home should be an exciting and seamless experience. Established in <strong>2020</strong>, our journey began with a vision to revolutionize the real estate market by offering a hassle-free platform where buyers, renters, and sellers can connect effortlessly. Over the years, we have expanded our network, partnered with top real estate professionals, and helped thousands of individuals and families find their dream homes.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <Image
              src="/about-us/about-us.webp"
              width={0}
              height={0}
              alt="About us photo"
              className="w-full h-60 object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      <CompanyDataList />
    </div>
  );
};

export default AboutUs;