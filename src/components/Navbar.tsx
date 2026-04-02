"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

import Image from "next/image";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Database", href: "#pricing" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo Left */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-white/10 shadow-lg shadow-gold/5 group-hover:scale-110 transition-transform">
            <Image
              src="/nexyrium.jpeg"
              alt="Nexyrium Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-display font-black tracking-tighter text-white">
            NEXYRIUM
          </span>
        </Link>

        {/* Menu Center (Desktop) */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Right (Desktop) */}
        <div className="hidden md:flex items-center">
          <button className="button-primary text-xs tracking-widest px-8">
            Book Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2 relative z-[60]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-50 transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-10 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-3xl font-display font-bold text-white hover:text-gold transition-colors tracking-tighter"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <button className="mt-8 button-primary text-lg px-12 py-5" onClick={() => setIsOpen(false)}>
          Book a Free Call
        </button>

        {/* Visual Decoration for Mobile Menu */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-800 font-black text-[10px] tracking-[0.4em] uppercase">
           Nexyrium © 2026
        </div>
      </div>
    </nav>
  );
}
