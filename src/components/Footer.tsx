import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, Globe, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-[#7C3AED]/20 bg-[#050816]/90 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#7C3AED]/20 bg-[#0F172A]/80 shadow-[0_0_15px_rgba(124,58,237,0.15)]">
                <Zap className="h-4.5 w-4.5 text-[#7C3AED]" />
              </div>
              <span className="font-display text-base font-extrabold tracking-widest text-white">
                OMEGA <span className="text-[#7C3AED] text-glow">TECH</span>
              </span>
            </div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#7C3AED] uppercase">
              Knowledge • Skills • Excellence
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering next-generation tech professionals through immersive, industry-focused training and career guidance.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://instagram.com/omegatechpvt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#7C3AED]/15 bg-[#0F172A]/80 text-slate-400 hover:text-[#7C3AED] hover:border-[#7C3AED]/40 hover:shadow-[0_0_15px_rgba(124,58,237,0.25)] transition-all duration-300"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a 
                href="https://linkedin.com/company/omega-tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#7C3AED]/15 bg-[#0F172A]/80 text-slate-400 hover:text-[#7C3AED] hover:border-[#7C3AED]/40 hover:shadow-[0_0_15px_rgba(124,58,237,0.25)] transition-all duration-300"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED]">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "Courses", "About Us", "Internship", "Placement"].map((label) => {
                const paths: Record<string, string> = {
                  "Home": "/",
                  "Courses": "/courses",
                  "About Us": "/about-us",
                  "Internship": "/internship",
                  "Placement": "/placement"
                };
                return (
                  <Link 
                    key={label} 
                    to={paths[label]} 
                    className="text-xs font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#7C3AED]/40" />
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED]">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:Omegatechpvt@gmail.com" className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors duration-300">
                <Mail className="h-4 w-4 text-[#7C3AED]" /> Omegatechpvt@gmail.com
              </a>
              <a href="tel:+918754263141" className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors duration-300">
                <Phone className="h-4 w-4 text-[#7C3AED]" /> +91 87542 63141
              </a>
              <div className="flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 text-[#7C3AED] shrink-0" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-white">Head Office</p>
                  <p className="text-[11px] leading-relaxed">Pallikaranai, Chennai – 600100</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 text-[#7C3AED] shrink-0" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-white">Branch Office</p>
                  <p className="text-[11px] leading-relaxed">Theni, Ramanathapuram</p>
                </div>
              </div>
              <a href="https://www.omegatechs.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors duration-300">
                <Globe className="h-4 w-4 text-[#7C3AED]" /> www.omegatechs.in
              </a>
            </div>
          </div>

          {/* Our Commitment */}
          <div>
            <h4 className="mb-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED]">Our Commitment</h4>
            <div className="flex flex-col gap-3 text-xs text-slate-400">
              {[
                "Skill Development & Employability",
                "Real-World Project Exposure",
                "Internship & Placement Assistance",
                "Industry Mentorship",
                "Career-Oriented Training"
              ].map((text) => (
                <span key={text} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#A855F7]" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#7C3AED]/10 pt-8 text-center text-xs text-slate-500 font-medium">
          © {new Date().getFullYear()} Omega Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

