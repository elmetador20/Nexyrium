"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, Zap, Globe, BarChart3, Users, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const advantages = [
  {
    title: "Venture Speed",
    description: "Launch in weeks, not months. Our pre-built core infrastructure and rapid R&D workflows ensure you hit the market while the opportunity is hot.",
    icon: Zap,
  },
  {
    title: "Verified Networks",
    description: "Direct access to 600+ angel investors and VCs. No cold emails, just warm introductions through our proven fundraising pipeline.",
    icon: Users,
  },
  {
    title: "Institutional Scaling",
    description: "Backend systems designed for millions of users from day one. Scale without technical debt or performance bottlenecks.",
    icon: Globe,
  },
  {
    title: "Data-Driven Strategy",
    description: "Real-time market validation and competitor analysis for every decision. Move forward with the confidence of hard data.",
    icon: BarChart3,
  },
];

export default function ProblemSolution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".advantage-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-black border-y border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-start">
          
          {/* Left Column: Sticky-ish Text */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">The Nexyrium Advantage</span>
              <h2 className="text-section-hd">
                Why Founders Choose <br />
                <span className="gold-gradient italic font-normal">Our Ecosystem.</span>
              </h2>
            </div>
            
            <p className="text-sub max-w-md">
              Building a startup is hard. Raising capital is harder. 
              We've built the infrastructure to automate the heavy lifting so you can focus on vision.
            </p>

            <ul className="space-y-6">
              {[
                "Eliminate technical debt from day one.",
                "Direct pipeline to Tier-1 global investors.",
                "Strategic guidance from exit-tested founders.",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold transition-transform group-hover:scale-150" />
                  <span className="text-white/60 text-sm font-medium leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
               <button className="flex items-center gap-2 text-gold font-bold text-sm hover:underline">
                 Explore our methodology <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {advantages.map((adv, i) => (
              <div 
                key={i} 
                className={`advantage-card premium-card group ${i % 2 !== 0 ? 'lg:mt-12' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <adv.icon className="w-6 h-6 text-gold group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{adv.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
