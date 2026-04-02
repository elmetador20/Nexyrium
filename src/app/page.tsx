import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import { CTASection, Footer } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <div id="services-anchor" className="h-0" />
      <ProblemSolution />
      <Services />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
      
      {/* Global Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gold/5 blur-[120px] -translate-y-1/2 translate-x-1/4 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-gold/5 blur-[150px] translate-y-1/3 -translate-x-1/4 rounded-full" />
      </div>
    </main>
  );
}
