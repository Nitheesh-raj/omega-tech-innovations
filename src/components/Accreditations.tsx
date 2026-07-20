import { motion } from "framer-motion";

import logoAicte from "@/assets/logo-aicte.jpg";
import logoTnSkill from "@/assets/logo-tnskill.jpg";
import logoIso from "@/assets/logo-iso.jpg";
import logoMsme from "@/assets/logo-msme.jpg";

const logos = [
  { name: "AICTE", src: logoAicte },
  { name: "TN Skill", src: logoTnSkill },
  { name: "ISO 9001:2015", src: logoIso },
  { name: "MSME", src: logoMsme },
];

const Accreditations = () => {
  return (
    <section className="relative z-10 py-20 bg-[#050816]/30 border-y border-[#7C3AED]/15 overflow-hidden">
      {/* Top glowing boundary line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#A855F7]/10 to-transparent blur-sm" />

      <div className="container px-4 text-center mb-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-extrabold text-xs tracking-[0.3em] uppercase text-[#7C3AED] mb-3 text-glow">
            Our Accreditations
          </h2>
          <p className="text-sm font-semibold tracking-wider text-slate-400">
            Recognized & Certified by Leading Authorities
          </p>
        </motion.div>
      </div>

      {/* Marquee Wrapper with Glass panels overlay */}
      <div className="relative w-full mx-auto overflow-hidden py-4">
        <div className="flex animate-scroll w-max gap-12 sm:gap-20 px-8 items-center">
          {/* Loop logos multiple times to ensure infinite scroll fills screen */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`} 
              className="group relative flex items-center justify-center h-20 w-36 sm:h-24 sm:w-48 bg-[#0F172A]/30 border border-[#7C3AED]/10 rounded-xl p-3 backdrop-blur-sm transition-all duration-500 hover:border-[#7C3AED]/30 hover:bg-[#0F172A]/60"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-h-full max-w-full object-contain grayscale opacity-45 brightness-90 contrast-125 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]" 
              />
            </div>
          ))}
        </div>
        
        {/* Soft edge masking using gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#050816] via-[#050816]/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#050816] via-[#050816]/70 to-transparent" />
      </div>
    </section>
  );
};

export default Accreditations;
