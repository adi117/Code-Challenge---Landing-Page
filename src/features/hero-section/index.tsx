import Headers from "../header";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen bg-[url(/hero-section/bg-hero.webp)] overflow-hidden flex flex-col justify-start items-center text-white px-5 md:px-44">
      <Headers />
      <div>
        <div className="flex flex-col gap-5 justify-center items-center text-center mt-10 md:mt-20">
          <h1 className="text-4xl md:text-[64px]">Dream Home Discovery: Browse Premier Listings Today!</h1>
          <p className="text-lg md:text-xl md:max-w-1/2">Embark on a journey to discover your dream home by exploring our premier listings available for browsing today.</p>
        </div>
      </div>
      <div className="absolute flex w-full px-10 md:w-1/2 justify-between bottom-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-[56px]">432</h2>
          <p className="text-lg md:text-xl">Partners</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-[56px]">12,6K</h2>
          <p className="text-lg md:text-xl">Properties</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-[56px]">80k</h2>
          <p className="text-lg md:text-xl">Orders</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;