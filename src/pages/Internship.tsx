import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Code, BarChart3, Shield, Brain, Cloud, Smartphone,
  CheckCircle2, Users, Briefcase, Award, TrendingUp, Zap,
  BookOpen, Globe, Github, Target, ArrowRight, Star, Download,
  Layout, Cpu
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── DATA ─────────────────────────────────────────── */

const domains = [
  {
    icon: Code,
    title: "Web Development",
    desc: "React, Node.js, Next.js & modern full-stack frameworks",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&q=80",
    color: "#3B82F6", // Electric Blue
  },
  {
    icon: BarChart3,
    title: "Data Science",
    desc: "Analytics, Python, Visualization & Predictive modeling",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80",
    color: "#06B6D4", // Cyan
  },
  {
    icon: Shield,
    title: "Cyber Security",
    desc: "Ethical Hacking, VAPT & Network Security",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&q=80",
    color: "#EF4444",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    desc: "Generative AI, NLP & Neural Networks",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&q=80",
    color: "#8B5CF6", // Purple Neon
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    desc: "AWS, Azure, Docker, Kubernetes & DevOps",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80",
    color: "#6366F1",
  },
  {
    icon: Smartphone,
    title: "Mobile App Dev",
    desc: "Flutter, React Native & iOS/Android native",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&q=80",
    color: "#EC4899",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    desc: "Figma, Prototyping, Wireframing & User Research",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&q=80",
    color: "#F59E0B",
  },
  {
    icon: Cpu,
    title: "IoT",
    desc: "Arduino, Raspberry Pi, Sensors & Smart Devices",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80",
    color: "#10B981",
  },
];

const durations = [
  {
    months: "1 Month",
    icon: "⚡",
    desc: "Quick exposure to a domain",
    color: "#3B82F6",
    features: ["Basic live project", "Certificate", "Mentor guidance"],
  },
  {
    months: "2 Months",
    icon: "🚀",
    desc: "Deeper learning with practice",
    color: "#8B5CF6",
    features: ["Intermediate project", "Certificate", "Weekly evaluation"],
  },
  {
    months: "3 Months",
    icon: "🎯",
    desc: "Comprehensive internship",
    color: "#06B6D4",
    features: ["Advanced project", "Certificate", "Letter of Recommendation"],
  },
  {
    months: "6 Months",
    icon: "🏆",
    desc: "Industrial training",
    color: "#F59E0B",
    popular: true,
    features: ["Live client projects", "Certificate", "Letter of Recommendation", "Placement support"],
  },
];

const stats = [
  { value: "1000+", label: "Happy Interns", icon: Users, color: "#8B5CF6" },
  { value: "200+", label: "Live Projects", icon: Briefcase, color: "#3B82F6" },
  { value: "50+", label: "Industry Experts", icon: Award, color: "#06B6D4" },
  { value: "95%", label: "Placement Support", icon: TrendingUp, color: "#10B981" },
];

const whyFeatures = [
  { icon: Zap, title: "Hands-on Live Projects", desc: "Work on real client deliverables from day one" },
  { icon: Users, title: "Industry Expert Mentors", desc: "1:1 guidance from seasoned professionals" },
  { icon: Award, title: "Globally Recognized Certificates", desc: "Nationally recognized completion certificate" },
  { icon: Target, title: "100% Placement Assistance", desc: "End-to-end job referral assistance" },
];

/* ─── COMPONENT ─────────────────────────────────────── */

const Internship = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="min-h-screen bg-[#070B18] text-white relative overflow-x-hidden font-sans">
      {/* Global ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#8B5CF6]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[100px]" />
      </div>

      <Navbar />

      {/* ── HERO ─────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-white/5">
        
        {/* Background Gradients */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#8B5CF6]/20 via-[#070B18] to-[#070B18]" />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </motion.div>

        <div className="relative z-10 container px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/10 text-[#A78BFA] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                Training
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
            >
              Internship
              <br />
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#3B82F6] bg-clip-text text-transparent">
                Program
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-medium"
            >
              Industry-oriented internship programs designed to provide practical exposure in real-time technology environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="/omega-tech-student-internship-form.html">
                <button className="group relative flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-white">Explore Internships</span>
                  <ArrowRight className="relative h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                </button>
              </a>
              <a href="/OmegaTech_Internship_Brochure.pdf" target="_blank" rel="noopener noreferrer">
                <button className="group flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/20 bg-[#0F172A]/50 backdrop-blur-md font-bold text-sm tracking-wide text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300">
                  <Download className="h-4 w-4 text-[#8B5CF6] group-hover:scale-110 transition-transform" />
                  Download Brochure
                </button>
              </a>
            </motion.div>
          </div>

          {/* Right Side Illustration (Replaced Real Photo with Abstract Tech UI) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#8B5CF6]/30 to-[#3B82F6]/30 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F172A]/80 backdrop-blur-xl aspect-square flex items-center justify-center p-8">
               <img 
                 src="/internship_hero_final.png" 
                 alt="Internship Training with Mentor"
                 className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-screen"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#070B18] via-transparent to-transparent" />
               <div className="relative z-10 w-full h-full border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm p-6 flex flex-col justify-end">
                   <div className="w-12 h-12 rounded-lg bg-[#8B5CF6] flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                      <Code className="h-6 w-6 text-white" />
                   </div>
                   <div className="text-xl font-bold text-white mb-1">Practical Exposure</div>
                   <div className="text-sm text-slate-300">Build real-world applications</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="relative z-10">

        {/* ── DOMAINS ─────────────────────────────────── */}
        <section className="py-28 px-6 lg:px-12 relative border-b border-white/5">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
                Internship <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Domains</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {domains.map((domain, i) => (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0F172A]/60 backdrop-blur-md hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: `0 20px 40px -10px ${domain.color}25` }}
                >
                  <div className="h-32 w-full relative overflow-hidden">
                    <img
                      src={domain.img}
                      alt={domain.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 to-transparent" />
                  </div>

                  <div className="p-5 flex-1 flex flex-col relative">
                     <div className="absolute -top-6 left-5 w-12 h-12 rounded-xl bg-[#0F172A] border border-white/10 flex items-center justify-center shadow-lg"
                          style={{ boxShadow: `0 0 20px ${domain.color}30` }}>
                        <domain.icon className="h-5 w-5" style={{ color: domain.color }} />
                     </div>
                    <h3 className="font-bold text-white text-lg mt-6 mb-2">{domain.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">{domain.desc}</p>
                    <div className="flex items-center gap-2 text-xs font-bold" style={{ color: domain.color }}>
                       Explore <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DURATION ─────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-12 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
                Duration <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Options</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {durations.map((d, i) => (
                <motion.div
                  key={d.months}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group relative rounded-2xl border p-7 backdrop-blur-md flex flex-col transition-all duration-300 ${
                    d.popular
                      ? "border-[#8B5CF6]/40 bg-gradient-to-b from-[#8B5CF6]/10 to-[#0F172A]/80 shadow-[0_0_30px_rgba(139,92,246,0.15)] scale-105 z-10"
                      : "border-white/10 bg-[#0F172A]/40 hover:border-white/20 hover:bg-[#0F172A]/60"
                  }`}
                >
                  <div className="text-4xl mb-4">{d.icon}</div>
                  <h3 className="text-xl font-black text-white mb-1">{d.months}</h3>
                  <p className="text-slate-400 text-xs mb-6">{d.desc}</p>
                  <ul className="space-y-3 flex-1">
                    {d.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: d.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ─────────────────────────────── */}
        <section className="py-28 px-6 lg:px-12 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-8 leading-tight">
                Why Choose
                <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Omega Tech</span>
              </h2>
              <div className="space-y-6">
                {whyFeatures.map((feat, i) => (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center shrink-0 border border-[#8B5CF6]/20">
                      <feat.icon className="h-5 w-5 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{feat.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-bl from-[#8B5CF6]/30 to-[#3B82F6]/30 rounded-full blur-3xl opacity-50" />
              <img 
                 src="/internship_team.png" 
                 alt="Internship Team Collaboration"
                 className="relative z-10 w-full h-[500px] object-cover rounded-2xl border border-white/10 mix-blend-lighten"
              />
            </motion.div>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/5 via-[#3B82F6]/5 to-[#8B5CF6]/5" />
          <div className="max-w-6xl mx-auto relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-white/5 bg-[#0F172A]/40 backdrop-blur-md"
              >
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-xs font-bold tracking-widest uppercase" style={{ color: stat.color }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Internship;
