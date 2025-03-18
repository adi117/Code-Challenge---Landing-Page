import UserList from "@/features/team"
import SectionGrid from "@/features/section/section-grid"
import Headers from "@/features/header"
import Footer from "@/features/footer"

export default function Team() {
  return (
    <div className="flex flex-col w-full">
      <div className="mb-20 flex flex-col w-full">
        <div className="bg-blue-500 w-full px-5 md:px-44">
          <Headers />
        </div>

        <SectionGrid
          title="Meet the Experts Behind Your Home Journey"
          description="Our team of real estate professionals, industry experts, and customer support specialists are here to guide you every step of the way. With experience, passion, and innovation, we turn your property goals into reality."
          isHeaderActive={true}
        >
          <UserList />
        </SectionGrid>
      </div>
      <Footer
        isBannerActive={false}
      />
    </div>
  )
}