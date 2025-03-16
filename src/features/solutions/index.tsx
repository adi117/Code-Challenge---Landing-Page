import SolutionList from "./components/solutions-list";
import SectionGrid from "../section/section-grid";

const SolutionSection = () => {
  return (
    <div>
      <SectionGrid
        title="Tailored Real Estate Solutions for You"
        description="Unlock the perfect property. Discover tailored real estate solutions designed to meet your needs with precision and expertise"
      >
        <SolutionList />
      </SectionGrid>
    </div>
  );
}

export default SolutionSection;