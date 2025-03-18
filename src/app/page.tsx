import SolutionSection from "@/features/solutions";
import FQA from "@/features/fqa";
import Footer from "@/features/footer";
import About from "@/features/about-home";
import HeroSection from "@/features/hero-section";
import { Property } from "@/features/property";
import { Testimonial } from "@/features/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <SolutionSection/>
      <Property/>
      <Testimonial/>
      <FQA/>
      <Footer
      isBannerActive={true}
      />
    </div>
  );
}
