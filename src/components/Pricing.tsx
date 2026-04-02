"use client";

import { useEffect, useRef } from "react";
import { Check, ArrowRight, Zap, Target, Rocket, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const pricing = [
  {
    title: "VC Pack",
    price: "399",
    range: "250+ Verified VCs",
    features: ["Industry Specific", "Pitch Templates", "Direct Email Access"],
    icon: Zap,
  },
  {
    title: "Global Pack",
    price: "499",
    range: "100+ Top Investors",
    features: ["Global Markets", "Verified Founders", "Fund Details"],
    icon: Globe,
  },
  {
    title: "Angel Pack",
    price: "699",
    range: "300+ Angels",
    features: ["Early-stage Angels", "WhatsApp/LinkedIn", "Network Mapping"],
    icon: Target,
  },
  {
    title: "Mega Bundle",
    price: "1999",
    range: "600+ All Contacts",
    features: ["Full Database Access", "Bonus: Pitch Deck Audit", "Warm Intro Guide", "Priority Updates"],
    icon: Rocket,
    highlight: true,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".pricing-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="section-padding bg-black border-y border-white/5 relative overflow-hidden">
      {/* Mega Glow behind the grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-gold/5 blur-[150px] pointer-events-none -z-0" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">The Investor Foundry</span>
          </div>
          <h2 className="text-section-hd text-white tracking-tighter leading-[1.1] font-bold">
            Direct Access to <br />
            <span className="gold-gradient italic font-normal">Venture Capital.</span>
          </h2>
          <p className="text-sub max-w-xl text-gray-400 font-medium italic">
            Serious about raising? Choose your access pack and accelerate your lookup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricing.map((p, i) => (
            <div 
              key={i} 
              className={`pricing-card premium-card flex flex-col justify-between group h-full ${p.highlight ? 'premium-card-focus scale-[1.05] z-10 shadow-gold/20' : 'bg-white/[0.03] opacity-90'}`}
            >
              {p.highlight && (
                 <div className="absolute top-4 right-6 flex flex-col gap-1 items-end">
                    <span className="text-[9px] font-black uppercase tracking-widest text-black bg-gold px-2 py-1 rounded-md shadow-lg shadow-gold/20">
                      Best Value
                    </span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded-md border border-gold/20">
                      Most Popular
                    </span>
                 </div>
              )}

              <div className="space-y-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${p.highlight ? 'bg-gold text-black shadow-lg shadow-gold/40' : 'bg-white/5 text-gold border border-white/10'}`}>
                   <p.icon className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                   <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">{p.title}</h3>
                   <div className="flex items-baseline gap-1">
                      <span className="text-white/30 text-lg font-light leading-none">₹</span>
                      <span className="text-5xl font-bold text-white tracking-tighter leading-none">{p.price}</span>
                   </div>
                   <p className="text-[11px] text-gold font-black uppercase tracking-[0.2em]">{p.range}</p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <ul className="space-y-4">
                  {p.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-[13px] text-gray-400 leading-tight">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.highlight ? 'text-gold' : 'text-gray-600'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 flex flex-col gap-4">
                <button className={`w-full py-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 ${p.highlight ? 'bg-gold text-black shadow-xl shadow-gold/20' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 text-xs'}`}>
                  Get Database Access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                {p.highlight && <p className="text-center text-[10px] font-bold text-gold/60 uppercase tracking-[0.2em] italic">Instant digital download after payment</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-10 text-[10px] uppercase font-bold tracking-[0.3em] text-gray-700">
           <div className="flex items-center gap-3">
              <span>Verified Weekly</span>
           </div>
           <div className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-gold/50" />
              <span>Direct Matching</span>
           </div>
           <div className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-gold/50" />
              <span>Series A Ready</span>
           </div>
        </div>
      </div>
    </section>
  );
}
