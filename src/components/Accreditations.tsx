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
    <section className="relative py-16 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/60 overflow-hidden">
      {/* Top Glow/Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm" />

      <div className="container px-4 text-center mb-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-2xl tracking-wide uppercase text-primary mb-2">Our Accreditations</h2>
          <p className="text-slate-500 font-medium tracking-wide">Recognized & Certified by Leading Authorities</p>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full mx-auto overflow-hidden">
        <div className="flex animate-scroll w-max gap-8 sm:gap-16 px-8 items-center py-6">
          {/* Double map for infinite scroll */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`} 
              className="group relative flex items-center justify-center h-24 w-40 sm:h-32 sm:w-56 lg:w-64"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-h-full max-w-full object-contain mix-blend-multiply grayscale opacity-70 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 group-hover:drop-shadow-[0_12px_24px_rgba(123,91,167,0.25)]" 
              />
            </div>
          ))}
        </div>
        
        {/* Fade Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>
    </section>
  );
};

export default Accreditations;
