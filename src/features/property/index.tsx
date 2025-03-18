import PropertyLists from "./components/property-list";

export const Property = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 md:px-10 gap-14 py-20">
      <div className="flex flex-col md:flex-row md:gap-24">
        <h2 className="text-[32px] text-center md:w-1/2 md:text-5xl md:text-left">Real Estate Recommendation Of The Day</h2>
        <p className="text-center md:w-1/2 md:text-left md:text-xl text-[#3D3D3D]">Introducing our daily feature: &apos;Real Estate Recommendation of the Day.&apos; Explore carefully curated listings to find your perfect property match and make informed decisions effortlessly</p>
      </div>
      <PropertyLists />
    </div>
  );
};