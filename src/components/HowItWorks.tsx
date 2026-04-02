"use client";

import { useEffect, useRef } from "react";
import { PhoneCall, Search, Rocket, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    title: "Book Strategy Call",
    description: "Launch your journey with a 30-min deep dive into your vision and current bottlenecks.",
    icon: PhoneCall,
  },
  {
    title: "Understand Startup",
    description: "We audit your market potential and technical feasibility to map out an elite roadmap.",
    icon: Search,
  },
  {
    title: "Build + Connect + Scale",
    description: "Rapid R&D prototype combined with direct warm introductions to 600+ verified investors.",
    icon: Rocket,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".step-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="process" className="section-padding bg-black border-b border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-gold/5 blur-[100px] pointer-events-none -z-0" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">The Velocity</span>
          </div>
          <h2 className="text-section-hd text-white tracking-tighter leading-[1.1] font-bold">
            From Blueprint <br />
            <span className="gold-gradient italic font-normal">To Exit-Scale.</span>
          </h2>
          <p className="text-sub max-w-xl text-gray-400 font-medium italic">
            A battle-tested methodology designed to move at the speed of the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Networking Connective Elements */}
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent z-0 overflow-hidden">
             <div className="w-full h-full animate-pulse bg-gold/40" />
          </div>
          
          {steps.map((step, i) => (
            <div key={i} className="step-card group relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex items-center justify-center mb-10 group-hover:border-gold/50 transition-all shadow-xl group-hover:shadow-gold/10 group-hover:-translate-y-2 duration-500 backdrop-blur-sm">
                <step.icon className="w-8 h-8 text-gold group-hover:scale-110 transition-transform" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center text-xs font-black shadow-lg shadow-gold/20">
                  {i + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 text-center tracking-tight leading-none group-hover:text-gold transition-colors">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center max-w-[280px] font-medium">
                {step.description}
              </p>
              
              {i < steps.length - 1 && (
                <div className="mt-8 md:hidden text-gold/30">
                  <ArrowRight className="w-6 h-6 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
