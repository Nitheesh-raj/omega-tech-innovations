import { motion } from "framer-motion";
import { Building, Monitor, Layers, Factory, GraduationCap } from "lucide-react";

const modes = [
  { icon: Building, title: "Offline Classroom", desc: "In-person instructor-led training at our center" },
  { icon: Monitor, title: "Online Live Classes", desc: "Interactive live sessions from anywhere" },
  { icon: Layers, title: "Hybrid Training", desc: "Best of both online and offline modes" },
  { icon: Factory, title: "Corporate Training", desc: "Customized programs for organizations" },
  { icon: GraduationCap, title: "College Tie-ups", desc: "Collaborative programs with institutions" },
];

const TrainingModes = () => {
  return (
    <section className="relative z-10 py-28 overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A855F7] uppercase mb-4">
            Learning Flexibility
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-wider sm:text-5xl mb-4">
            Training <span className="gradient-text">Modes</span>
          </h2>
          <p className="text-[#E5E7EB]/70 text-sm md:text-base max-w-2xl mx-auto font-medium">
            Flexible learning options to suit your schedule and preferences
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl border border-[#7C3AED]/12 bg-[#0F172A]/25 p-6 text-center backdrop-blur-md hover:border-[#A855F7]/30 hover:bg-[#0F172A]/40 hover:shadow-[0_12px_30px_rgba(124,58,237,0.1)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Pulsing indicator under hover */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/15 group-hover:bg-[#7C3AED]/25 transition-colors relative">
                <div className="absolute inset-0 bg-[#7C3AED]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <mode.icon className="h-6.5 w-6.5 text-[#7C3AED] relative z-10 transition-transform duration-300 group-hover:scale-105" />
              </div>
              
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.15em] text-white mb-2.5">
                {mode.title}
              </h3>
              
              <p className="text-[11px] sm:text-xs text-[#E5E7EB]/60 leading-relaxed font-medium">
                {mode.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingModes;
