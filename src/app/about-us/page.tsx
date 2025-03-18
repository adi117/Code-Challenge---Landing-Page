import SectionGrid from "@/features/section/section-grid"
import Headers from "@/features/header"
import Footer from "@/features/footer"
import AboutUs from "@/features/about-us"

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <div className="mb-20 flex flex-col w-full">
        <div className="bg-blue-500 w-full px-5 md:px-44">
          <Headers />
        </div>
        <SectionGrid
        title="Connecting People to Their Dream Homes"
        description="At Mai Home, we are dedicated to making real estate simple and stress-free. With a passion for excellence and a commitment to trust, we help buyers, renters, and sellers find the perfect place to call home."
        isHeaderActive={true}
        >
          <AboutUs/>
        </SectionGrid>
      </div>
      <Footer
        isBannerActive={false}
      />
    </div>
  )
}