import FAQList from "./components/faq-lists";
import SectionGrid from "../section/section-grid";


const FAQ = () => {
  return (
    <div className="bg-[#EFF0F2]">
      <SectionGrid
        title="Frequently Asked Questions (FAQ)"
        description="Quickly find answers to common real estate queries in our comprehensive FAQ section. Simplify your property journey effortlessly."
        isHeaderActive={true}
      >
        <FAQList />
      </SectionGrid>
    </div>
  )
}

export default FAQ;