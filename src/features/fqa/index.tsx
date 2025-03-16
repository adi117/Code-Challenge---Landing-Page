import FQAList from "./components/fqa-lists";
import SectionGrid from "../section/section-grid";


const FQA = () => {
  return (
    <div className="bg-[#EFF0F2]">
      <SectionGrid
        title="Frequently Asked Questions (FAQ)"
        description="Quickly find answers to common real estate queries in our comprehensive FAQ section. Simplify your property journey effortlessly."
      >
        <FQAList />
      </SectionGrid>
    </div>
  )
}

export default FQA;