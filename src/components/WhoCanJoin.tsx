import { motion } from "framer-motion";
import { GraduationCap, School, Wrench, BookOpen, Briefcase, Lightbulb } from "lucide-react";

const types = [
  { icon: School, title: "School Students", desc: "Robotics & AI Basics" },
  { icon: Wrench, title: "Diploma Students", desc: "Technical skill development" },
  { icon: GraduationCap, title: "Engineering Students", desc: "Advanced tech specialization" },
  { icon: BookOpen, title: "Arts & Science Graduates", desc: "Career switch to tech" },
  { icon: Briefcase, title: "Working Professionals", desc: "Upskill & career growth" },
  { icon: Lightbulb, title: "Entrepreneurs", desc: "Tech-powered business ideas" },
];

const WhoCanJoin = () => {
  return (
    <section className="relative z-10 py-28 bg-[#050816]/10">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A855F7] uppercase mb-4">
            Audience
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-wider sm:text-5xl mb-4">
            Who Can <span className="gradient-text">Join?</span>
          </h2>
          <p className="text-[#E5E7EB]/70 text-sm md:text-base max-w-2xl mx-auto font-medium">
            Our programs are designed for learners at every stage of their journey
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {types.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex items-start gap-5 rounded-2xl border border-[#7C3AED]/12 bg-[#0F172A]/25 p-7 backdrop-blur-md hover:border-[#A855F7]/30 hover:bg-[#0F172A]/50 hover:shadow-[0_12px_30px_rgba(124,58,237,0.1)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Highlight bar */}
              <div className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-[#7C3AED] to-[#A855F7] opacity-40 group-hover:opacity-100 transition-opacity" />

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/15 group-hover:bg-[#7C3AED]/20 transition-all duration-300 group-hover:scale-105">
                <item.icon className="h-5.5 w-5.5 text-[#7C3AED] text-glow" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-sm font-extrabold tracking-wider text-white">
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

export default WhoCanJoin;
