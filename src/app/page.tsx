import SolutionSection from "@/features/solutions";
import FQA from "@/features/fqa";
import Footer from "@/features/footer";
import About from "@/features/about";
import HeroSection from "@/features/hero-section";
import { Property } from "@/features/property";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <SolutionSection/>
      <Property/>
      <FQA/>
      <Footer/>
    </div>
  );
}
