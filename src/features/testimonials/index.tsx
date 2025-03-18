import TestimonialList from "./components/testimonial-list";
import SectionGrid from "../section/section-grid";

export const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-14">
      <SectionGrid
      title="What Our Happy Clients Say"
      description="At Mai Home, we take pride in helping people find their perfect homes. Don't just take our word for it—hear from our happy homeowners, renters, and real estate partners about their experiences with us!"
      >
        <TestimonialList />
      </SectionGrid>
    </div>
  );
};