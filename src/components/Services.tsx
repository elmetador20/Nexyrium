"use client";

import { useEffect, useRef } from "react";
import { Laptop, Search, Database, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    title: "Elite Development",
    description: "High-performance websites and scalable mobile applications. We build the technical backbone of your vision from day one.",
    icon: Laptop,
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    title: "Startup Consultancy",
    description: "Idea validation, MVP strategy, and go-to-market guidance. Strategic roadmaps for founders who demand execution.",
    icon: Search,
    tags: ["Strategy", "MVP", "Growth"],
  },
  {
    title: "Investor Database",
    description: "Access our verified database of 600+ VCs and angel investors. Direct contacts to skip weeks of research.",
    icon: Database,
    tags: ["Funding", "Direct Access", "Verified"],
    highlight: true,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-black border-y border-white/5 relative overflow-hidden">
      {/* Decorative Glow behind the grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-gold/5 blur-[120px] pointer-events-none -z-0" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Our Capabilities</span>
          </div>
          <h2 className="text-section-hd text-white tracking-tighter leading-[1.1]">
            Future-Proof <br />
            <span className="gold-gradient italic font-normal">Execution Excellence.</span>
          </h2>
          <p className="text-sub max-w-xl text-gray-500 font-medium">
            We bridge the gap between technical complexity and venture funding for high-velocity founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {services.map((s, i) => (
            <div 
              key={i} 
              className={`service-card premium-card group flex flex-col justify-between ${s.highlight ? 'premium-card-focus scale-[1.03] shadow-gold/10' : 'bg-white/5 backdrop-blur-md'}`}
            >
              {s.highlight && (
                 <div className="absolute top-6 right-8">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gold bg-gold/10 px-2 py-1 rounded-md border border-gold/20">
                      CORE OFFERING
                    </span>
                 </div>
              )}

              <div className="space-y-10">
                <div className={`w-16 h-16 rounded-[2rem] flex items-center justify-center ${s.highlight ? 'bg-gold text-black shadow-lg shadow-gold/30' : 'bg-white/5 text-gold border border-white/10'}`}>
                  <s.icon className="w-8 h-8" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight leading-none group-hover:text-gold transition-colors">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {s.description}
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-widest text-gray-600 bg-white/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                   <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
