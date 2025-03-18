import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-3 mx-5 my-10 md:flex-row md:items-start md:mx-10 md:gap-0 md:my-20">
      <div className="flex w-full md:w-1/4 text-center items-center justify-center md:justify-start">
        <p className="text-2xl">
          About Us
        </p>
      </div>
      <div className="flex flex-col w-full md:w-3/4 gap-14">
        <p className="text-2xl md:text-[32px] text-[#707070] text-center md:text-left">
          Welcome to <strong className="text-black">Mai Home</strong>, your premier destination for real estate solutions. <strong className="text-black">With a commitment</strong> to excellence and a passion for <strong className="text-black">connecting people with their perfect homes</strong>, UrbanNest stands as a beacon of trust and reliability in the industry.
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <Image
          src="/about-us/about-us.webp"
          width={0}
          height={0}
          alt="About us photo"
          className="h-full w-full object-contain"
          />
          <div className="flex flex-col gap-14 justify-between p-8 border-[1px] border-[#C8C8C8] rounded-4xl">
            <p className="text-center text-xl">&quot;I&apos;m incredibly pleased with the service provided by UrbanNest. Their professionalism and dedication were evident throughout the process, ultimately leading me to my dream home. I highly recommend their services to anyone seeking a seamless real estate experience.&quot;</p>
            <div className="flex flex-col items-center gap-3">
              <Image
              src="/about-us/cody-fisher.webp"
              width={64}
              height={64}
              alt="Cody Fisher photo"
              />
              <div className="flex flex-col items-center gap-1">
                <p className="text-xl font-medium">Cody Fisher</p>
                <p className="text-[#7B6767]">Manager at Surya Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;