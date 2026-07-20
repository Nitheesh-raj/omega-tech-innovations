import { motion } from "framer-motion";
import { Users, BookOpen, Cpu, Briefcase, Lightbulb, Layers } from "lucide-react";
import React from "react";

const benefits = [
  { icon: Users, title: "Expert Faculty", desc: "Learn from experienced industry professionals and certified trainers" },
  { icon: BookOpen, title: "Comprehensive Curriculum", desc: "Technical expertise and soft skills development combined" },
  { icon: Cpu, title: "Cutting-Edge Resources", desc: "Advanced labs, software tools, and simulation environments" },
  { icon: Briefcase, title: "Industry Connections", desc: "Internships, live projects, mentorship, and placement assistance" },
  { icon: Lightbulb, title: "Holistic Development", desc: "Personality development, entrepreneurship, and leadership skills" },
  { icon: Layers, title: "Innovative Learning Model", desc: "Flexible learning modes with interactive sessions" },
];

const WhyChooseUs = () => {
  // 3D Tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate rotation angles based on mouse offset from center (max 12 deg)
    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Spotlight highlight overlay update
    const glow = card.querySelector(".card-glow") as HTMLDivElement;
    if (glow) {
      glow.style.background = `radial-gradient(circle 120px at ${x}px ${y}px, rgba(168, 85, 247, 0.15), transparent 80%)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    
    const glow = card.querySelector(".card-glow") as HTMLDivElement;
    if (glow) {
      glow.style.background = "transparent";
    }
  };

  return (
    <section className="relative z-10 py-28 overflow-hidden bg-[#050816]/20">
      {/* Dynamic background aurora shapes */}
      <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-[#A855F7]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 h-80 w-80 rounded-full bg-[#7C3AED]/3 blur-[120px] pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A855F7] uppercase mb-4">
            Advantages
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-wider sm:text-5xl mb-4">
            Why Choose <span className="gradient-text">Omega Tech?</span>
          </h2>
          <p className="text-[#E5E7EB]/70 text-sm md:text-base max-w-2xl mx-auto font-medium">
            We provide everything you need to launch a successful career in technology
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transition: "transform 0.1s ease-out, border-color 0.3s" }}
              className="group relative rounded-2xl border border-[#7C3AED]/12 bg-[#0F172A]/20 p-8 backdrop-blur-md hover:border-[#A855F7]/30 hover:shadow-[0_15px_35px_-10px_rgba(124,58,237,0.15)] flex flex-col justify-between overflow-hidden"
            >
              {/* Interactive mouse tracking glow layer */}
              <div className="card-glow absolute inset-0 pointer-events-none transition-all duration-300" />
              
              {/* Corner tech border design */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#7C3AED]/40 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#7C3AED]/40 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#7C3AED]/40 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#7C3AED]/40 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 transition-all duration-300 group-hover:bg-[#7C3AED]/20 group-hover:scale-105">
                  <item.icon className="h-6.5 w-6.5 text-[#7C3AED] text-glow" />
                </div>
                <h3 className="font-display text-base font-extrabold tracking-wider text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#E5E7EB]/60 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
