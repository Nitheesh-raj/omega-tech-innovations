import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import officeInterior from "@/assets/office-interior.jpg";

const AboutSection = () => {
  return (
    <section className="relative z-10 py-28 overflow-hidden">
      {/* Background soft glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-4">
        {/* Top 2-Column Content */}
        <div className="grid gap-12 lg:grid-cols-12 max-w-6xl mx-auto items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <span className="inline-block rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A855F7] uppercase">
              Who We Are
            </span>
            <h2 className="font-display text-4xl font-extrabold tracking-wider sm:text-5xl">
              About <span className="gradient-text">Omega Tech</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Omega Tech is a dynamic technology training and skill development organization committed to 
              shape future-ready professionals. We focus on bridging the gap between academic knowledge 
              and industry requirements through hands-on learning, expert mentorship, and real-world project exposure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative group"
          >
            {/* Pulsing glow background */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#D4AF37] opacity-25 blur-lg group-hover:opacity-40 transition duration-500" />
            
            {/* Framed image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0F172A]/50 p-2 backdrop-blur-md">
              <img 
                src={officeInterior} 
                alt="Omega Tech Corporate Hub" 
                className="w-full h-[280px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Overlay shading */}
              <div className="absolute inset-2 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent opacity-80 rounded-xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] tracking-[0.2em] font-extrabold uppercase text-[#D4AF37] mb-1">Corporate Hub</p>
                <p className="text-xs font-bold text-white tracking-wider">Innovate • Empower • Excel</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Vision Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative rounded-2xl border border-[#7C3AED]/15 bg-[#0F172A]/25 p-8 sm:p-10 backdrop-blur-md hover:border-[#A855F7]/30 transition-all duration-500 overflow-hidden shadow-2xl"
          >
            {/* Top gradient border highlight */}
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#7C3AED]/20">
              <Eye className="h-7 w-7 text-[#7C3AED] text-glow" />
            </div>
            
            <h3 className="font-display text-xl font-bold tracking-wider text-white mb-4">Our Vision</h3>
            
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              To be a leading force in technology training and skill development, empowering individuals 
              to become innovative, adaptable, and future-ready professionals who excel in the digital world.
            </p>
          </motion.div>

          {/* Mission Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative rounded-2xl border border-[#7C3AED]/15 bg-[#0F172A]/25 p-8 sm:p-10 backdrop-blur-md hover:border-[#A855F7]/30 transition-all duration-500 overflow-hidden shadow-2xl"
          >
            {/* Top gradient border highlight */}
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#A855F7]/10 border border-[#A855F7]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#A855F7]/20">
              <Target className="h-7 w-7 text-[#A855F7] text-glow" />
            </div>
            
            <h3 className="font-display text-xl font-bold tracking-wider text-white mb-4">Our Mission</h3>
            
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              To provide high-quality, hands-on technology education supported by expert mentorship and 
              real-world learning experiences. We equip learners with practical skills, confidence, and 
              career-focused guidance that drive long-term success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
