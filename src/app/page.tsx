import SolutionSection from "@/features/solutions";
import FQA from "@/features/fqa";
import Footer from "@/features/footer";
import About from "@/features/about";

export default function Home() {
  return (
    <div>
      <About/>
      <SolutionSection/>
      <FQA/>
      <Footer/>
    </div>
  );
}
