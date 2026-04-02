"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    name: "Vikram R.",
    role: "Founder, FinTech AI",
    content: "Nexyrium didn't just build our MVP; they opened doors to VCs we couldn't reach. We raised $2M within 8 weeks of launch.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
  },
  {
    name: "Sarah Chen",
    role: "CEO, HealthSync",
    content: "The engineering precision is unmatched. Their team feels like an extension of our own R&D department. The investor database was a game-changer.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Jason Smyth",
    role: "CTO, BlockFlow",
    content: "The investor database alone is worth 10x the price. Verified, direct, and highly responsive contacts. Our seed round wouldn't have happened without it.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jason",
  },
];

const logos = ["SEQUOIA", "A16Z", "SOFTBANK", "ACCEL", "YCOMBINATOR"];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".testimonial-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
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
    <section ref={sectionRef} id="about" className="section-padding bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-gold/5 blur-[120px] pointer-events-none -z-0" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Founder Stories</span>
          </div>
          <h2 className="text-section-hd text-white tracking-tighter leading-[1.1] font-bold">
            Trusted by Elite <br />
            <span className="gold-gradient italic font-normal">Next-Gen Builders.</span>
          </h2>
          <p className="text-sub max-w-xl text-gray-400 font-medium italic">
            Real founders. Real results. We bridge the nexus between engineering and venture capital.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card premium-card group flex flex-col justify-between h-full bg-white/5 backdrop-blur-md hover:-translate-y-2 transition-all duration-500">
              <div className="space-y-8">
                <div className="flex gap-1">
                   {[...Array(5)].map((_, j) => (
                     <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold opacity-50" />
                   ))}
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed italic font-medium">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border-2 border-gold/20 shadow-xl">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-white font-bold text-[13px] tracking-tight">{t.name}</h4>
                  <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dense Institutional Logo Grid */}
        <div className="flex flex-col items-center gap-12">
           <div className="flex items-center gap-6 w-full">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="text-gray-700 text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">Investment Network Density</p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-20 opacity-30 grayscale hover:opacity-60 transition-opacity">
              {logos.map((logo, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group">
                   <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold text-white border border-white/10 group-hover:bg-gold group-hover:text-black transition-all">
                      <span className="text-sm font-black italic">{logo[0]}</span>
                   </div>
                   <span className="text-xs font-display font-black tracking-[0.2em] text-white/50">{logo}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
