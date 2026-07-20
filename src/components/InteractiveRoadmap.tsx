import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Laptop, Briefcase, Award, GraduationCap, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Training",
    subtitle: "Core Skill Acquisition",
    icon: BookOpen,
    color: "from-violet-500 to-purple-600",
    glow: "shadow-[0_0_20px_rgba(124,58,237,0.3)]",
    desc: "Engage in hands-on instructor-led online/offline training across specialized tech and arts divisions. Master foundations with customized modules and expert mentors.",
  },
  {
    number: "02",
    title: "Projects",
    subtitle: "Portfolio Construction",
    icon: Laptop,
    color: "from-purple-500 to-pink-500",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    desc: "Transition theory into practice. Build industry-grade intermediate and advanced projects, establishing clean version-control practices and showcasing solutions on GitHub.",
  },
  {
    number: "03",
    title: "Internship",
    subtitle: "Industrial Exposure",
    icon: Briefcase,
    color: "from-pink-500 to-rose-500",
    glow: "shadow-[0_0_20px_rgba(244,63,94,0.3)]",
    desc: "Gain real-world experience through structured 1 to 6 months internship programs. Work on live client systems under daily mentorship and structured evaluations.",
  },
  {
    number: "04",
    title: "Certification",
    subtitle: "Credentials Validation",
    icon: Award,
    color: "from-rose-500 to-amber-500",
    glow: "shadow-[0_0_20px_rgba(249,115,22,0.3)]",
    desc: "Earn industry-authorized certification of completion and performance-based letters of recommendation. Validate technical prowess for corporate HR standards.",
  },
  {
    number: "05",
    title: "Placement",
    subtitle: "Career Launch",
    icon: GraduationCap,
    color: "from-amber-500 to-yellow-500",
    glow: "shadow-[0_0_20px_rgba(212,175,55,0.3)]",
    desc: "Access placement support including ATS resume reviews, mock technical/HR interviews, LinkedIn optimization, and direct job referral networks to top partners.",
  },
];

const InteractiveRoadmap = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative z-10 py-28 bg-[#050816]/30 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A855F7] uppercase mb-4">
            Path to Success
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-wider sm:text-5xl mb-4">
            Interactive <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-[#E5E7EB]/70 text-sm md:text-base max-w-2xl mx-auto font-medium">
            Explore our end-to-end framework driving technical competence and employability
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Horizontal Steps Controller (Desktop) */}
          <div className="hidden md:flex items-center justify-between relative py-6">
            {/* Connection Glow Line */}
            <div className="absolute inset-x-8 top-[50%] h-[3px] bg-slate-800 rounded-full z-0">
              <div 
                className="h-full bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#D4AF37] transition-all duration-700 rounded-full" 
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isSelected = activeStep === index;
              const isCompleted = index < activeStep;

              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  {/* Step bubble */}
                  <div 
                    className={`h-15 w-15 rounded-full flex items-center justify-center border-2 backdrop-blur-md transition-all duration-500 ${
                      isSelected
                        ? `bg-gradient-to-br ${step.color} border-transparent text-white ${step.glow} scale-110`
                        : isCompleted
                          ? "bg-[#0F172A] border-[#7C3AED]/60 text-[#7C3AED]"
                          : "bg-[#0F172A] border-slate-700 text-slate-500 group-hover:border-slate-500"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title Label */}
                  <span 
                    className={`mt-4 font-display text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${
                      isSelected ? "text-white text-glow" : "text-slate-400 group-hover:text-white"
                    }`}
                  >
                    {step.title}
                  </span>
                  
                  {/* Step Number Badge */}
                  <span className={`text-[10px] font-mono mt-1 ${isSelected ? "text-[#D4AF37]" : "text-slate-600"}`}>
                    Phase {step.number}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Vertical Steps Controller (Mobile) */}
          <div className="md:hidden flex flex-wrap justify-center gap-3">
            {steps.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={`px-4 py-2.5 rounded-full border text-xs font-bold tracking-widest uppercase transition-all ${
                    isSelected
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#A855F7] border-transparent text-white shadow-lg"
                      : "bg-[#0F172A]/50 border-[#7C3AED]/15 text-slate-400"
                  }`}
                >
                  {step.title}
                </button>
              );
            })}
          </div>

          {/* Holographic Step Details Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {steps.map((step, index) => {
                if (index !== activeStep) return null;
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="glass-card relative rounded-2xl p-8 sm:p-10 border border-[#7C3AED]/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
                  >
                    {/* Corner accents */}
                    <div className="absolute top-0 right-0 p-5 font-mono text-5xl font-extrabold text-[#7C3AED]/10 select-none">
                      {step.number}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
                      {/* Left Symbol Panel */}
                      <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-xl`}>
                        <Icon className="h-8 w-8" />
                      </div>

                      {/* Right Texts Panel */}
                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#D4AF37] uppercase">
                            {step.subtitle}
                          </span>
                          <h3 className="font-display text-2xl font-extrabold tracking-wide text-white mt-1">
                            {step.title} Stage
                          </h3>
                        </div>

                        <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                          {step.desc}
                        </p>

                        <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#7C3AED] uppercase tracking-wider">
                          <span>Next Level</span>
                          <ChevronRight className="h-4 w-4" />
                          <span className="text-slate-400">
                            {steps[(index + 1) % steps.length].title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveRoadmap;
