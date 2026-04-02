"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MoveRight, MousePointer2, ChevronDown } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Reveal Timeline
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      ".hero-reveal",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, delay: 0.2 }
    );

    tl.fromTo(
      ".hero-trust-container",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.6"
    );

    tl.fromTo(
      ".scroll-indicator",
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "-=0.4"
    );

    // Networking Background Logic (Nodes & Lines)
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 100; // Increased density

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212, 175, 55, 0.3)";
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const w = canvas.width = window.innerWidth;
      const h = canvas.height = window.innerHeight;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const distLimit = 160;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < distLimit) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.08 * (1 - dist / distLimit)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-32 overflow-hidden bg-black">
      {/* Network Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0" 
      />

      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/10 blur-[150px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] pointer-events-none -z-10" />
      
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="hero-reveal mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Nexus of Tech & Capital</span>
          </div>

          <h1 className="hero-reveal text-hero text-white mb-6 leading-[0.9] tracking-tighter">
            Build Fast.<br />
            <span className="gold-gradient italic font-normal">Raise Faster.</span>
          </h1>

          <p className="hero-reveal text-sub max-w-xl mx-auto mb-12 text-gray-400 font-medium">
            Nexyrium helps founders go from idea → product → funding 
            with elite engineering and direct investor access.
          </p>

          <div className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 w-full sm:w-auto">
            <button className="button-primary group px-10 py-5 text-base shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all">
                Get Investor Access
                <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="button-secondary px-10 py-5 text-base border-white/10 hover:border-white/30 backdrop-blur-sm">
                Book a Free Call
            </button>
          </div>

          {/* Trust Indicators in a Glass Container */}
          <div className="hero-trust-container grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-md">
             {[
               { label: "600+", sub: "Verified Investors" },
               { label: "4-6 Weeks", sub: "Launch Timeline" },
               { label: "Elite", sub: "R&D Foundry" }
             ].map((trust, i) => (
               <div key={i} className="flex flex-col items-center gap-1 group">
                  <span className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors">{trust.label}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
                    {trust.sub}
                  </span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
         <span className="text-[10px] font-bold uppercase tracking-widest">Explore</span>
         <ChevronDown className="w-4 h-4" />
      </div>

      {/* Subtle Radial Gradient Overlay for Center Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
    </section>
  );
}