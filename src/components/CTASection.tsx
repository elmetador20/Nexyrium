"use client";

import { MoveRight, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden bg-black">
      {/* Intense Background Glow */}
      <div className="absolute inset-0 bg-gold/5 blur-[150px] rounded-full translate-y-1/2 -z-0" />

      <div className="container-custom relative z-10">
        <div className="bg-white/[0.02] border border-white/5 rounded-[4rem] p-16 md:p-32 text-center space-y-12 shadow-2xl backdrop-blur-xl group hover:border-gold/10 transition-all duration-700">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="mx-auto w-fit px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">The Final Nexus</span>
            </div>
            <h2 className="text-hero text-white tracking-tighter leading-[0.9] font-black">
              Ready to <br />
              <span className="gold-gradient italic font-normal">Build or Raise?</span>
            </h2>
            <p className="text-sub max-w-xl mx-auto text-gray-500 font-medium italic">
              Join 150+ elite founders who used Nexyrium to bridge the gap between
              technical excellence and venture capital.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="button-primary px-14 py-6 text-lg shadow-[0_0_40px_rgba(212,175,55,0.25)] hover:shadow-[0_0_60px_rgba(212,175,55,0.45)] transition-all">
              Book a Demo Call
              <MoveRight className="ml-3 w-6 h-6" />
            </button>
            <button className="button-secondary px-14 py-6 text-lg border-white/10 hover:border-white/30 backdrop-blur-sm">
              Talk to Nexyrium
            </button>
          </div>

          <div className="pt-12 flex flex-wrap justify-center gap-10 text-[10px] uppercase tracking-[0.4em] font-black text-gray-800">
            <span className="hover:text-gold transition-colors underline underline-offset-4 decoration-gold/20">No Retainers</span>
            <span className="hover:text-gold transition-colors underline underline-offset-4 decoration-gold/20">Performance Driven</span>
            <span className="hover:text-gold transition-colors underline underline-offset-4 decoration-gold/20">Elite R&D Only</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export function Footer() {
  return (
    <footer className="pt-32 pb-20 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-gold/10 group-hover:scale-110 transition-transform">
                <Image
                  src="/nexyrium.jpeg"
                  alt="Nexyrium Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter text-white">NEXYRIUM</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed font-bold max-w-xs">
              Accelerating the nexus of capital and technology for the next generation of global founders.
            </p>
            <div className="flex gap-4 pt-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-gray-700 hover:text-gold hover:border-gold/30 transition-all bg-white/[0.02] backdrop-blur-sm hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:pl-16">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-10">Platform</h4>
            <ul className="space-y-6 text-gray-600 text-[11px] font-black uppercase tracking-widest">
              <li><a href="#services" className="hover:text-gold transition-colors">Elite Services</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Investor Database</a></li>
              <li><a href="#process" className="hover:text-gold transition-colors">The Process</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Venture Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-10">Foundry</h4>
            <ul className="space-y-6 text-gray-600 text-[11px] font-black uppercase tracking-widest">
              <li><a href="#about" className="hover:text-gold transition-colors">Our Ethos</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">Founder Success</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Direct Contact</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Lexicon</a></li>
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-10">Founder Dispatch</h4>
            <div className="relative group">
              <input
                type="email"
                placeholder="FOUNDER@DOMAIN.COM"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-[10px] text-white placeholder:text-gray-800 focus:outline-none focus:border-gold/50 transition-colors font-black uppercase tracking-widest"
              />
              <button className="absolute right-3 top-3 p-2.5 rounded-xl bg-gold text-black hover:scale-105 transition-transform shadow-lg shadow-gold/20">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-800 font-black uppercase tracking-[0.2em]">Join 150+ High-Velocity Founders.</p>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-800">
          <p>© 2026 NEXYRIUM PRIVATE LIMITED. THE NEXUS OF ALPHA.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-gold transition-colors underline underline-offset-4 decoration-white/5">Terms</a>
            <a href="#" className="hover:text-gold transition-colors underline underline-offset-4 decoration-white/5">Cookies</a>
            <a href="#" className="hover:text-gold transition-colors underline underline-offset-4 decoration-white/5">Manifesto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper component for Footer
function Link({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} className={className}>{children}</a>;
}
