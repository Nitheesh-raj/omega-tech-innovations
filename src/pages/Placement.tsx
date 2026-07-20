import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase, GraduationCap, Building2, TrendingUp, Users,
  FileText, MessageSquare, Linkedin, Compass, Share2, Rocket,
  CheckCircle2, ArrowRight, Download, Star, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
  { value: "1000+", label: "Students Placed", icon: Users, color: "#8B5CF6" },
  { value: "250+", label: "Hiring Partners", icon: Building2, color: "#3B82F6" },
  { value: "95%", label: "Placement Success", icon: TrendingUp, color: "#10B981" },
  { value: "24x7", label: "Career Support", icon: Compass, color: "#F59E0B" },
];

const services = [
  {
    icon: FileText,
    title: "Resume Building",
    desc: "Craft ATS-friendly, professional resumes highlighting your core competencies and projects.",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
    color: "#3B82F6", // Electric Blue
  },
  {
    icon: MessageSquare,
    title: "Mock Interviews",
    desc: "Rigorous technical and HR interview simulations with industry experts.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    color: "#8B5CF6", // Purple
  },
  {
    icon: Linkedin,
    title: "LinkedIn Optimization",
    desc: "Build a strong professional brand to attract top tech recruiters.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
    color: "#0077B5", // LinkedIn Blue
  },
  {
    icon: Compass,
    title: "Career Counseling",
    desc: "1-on-1 mentoring sessions to chart your personalized tech career roadmap.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
    color: "#10B981", // Emerald
  },
  {
    icon: Share2,
    title: "Job Referrals",
    desc: "Direct referrals to our network of 250+ partner technology companies.",
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&q=80",
    color: "#F59E0B", // Amber
  },
  {
    icon: Rocket,
    title: "Startup Guidance",
    desc: "Incubation support and mentorship for students aspiring to build their own tech startups.",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
    color: "#EC4899", // Pink
  },
];

const partners = [
  "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", 
  "Capgemini", "HCL", "IBM", "Zoho", "Freshworks", "Amazon", "Microsoft"
];

const journeySteps = [
  { title: "Career Assessment", desc: "Identifying strengths & goals", icon: Compass },
  { title: "Resume Preparation", desc: "ATS optimization & portfolio", icon: FileText },
  { title: "Technical Training", desc: "Core skills & live projects", icon: CodeBlock },
  { title: "Mock Interviews", desc: "Simulated tech & HR rounds", icon: MessageSquare },
  { title: "HR Preparation", desc: "Soft skills & communication", icon: Users },
  { title: "Company Interviews", desc: "Direct partner interviews", icon: Building2 },
  { title: "Job Offer", desc: "Negotiation & onboarding", icon: Briefcase },
];

function CodeBlock(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

const testimonials = [
  {
    name: "Siddharth Rao",
    role: "System Engineer @ Infosys",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    text: "The mock interviews and resume building sessions were game-changers. I walked into my Infosys interview with complete confidence. The career support here is unmatched.",
    stars: 5,
  },
  {
    name: "Meera Reddy",
    role: "Software Developer @ TCS",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    text: "From technical training to HR round preparation, Omega Tech held my hand through the entire journey. The direct job referrals made a huge difference.",
    stars: 5,
  },
  {
    name: "Karthik Subramaniam",
    role: "Product Engineer @ Zoho",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    text: "I always wanted to join a product company. The targeted mentorship and LinkedIn optimization helped me crack the tough technical rounds at Zoho.",
    stars: 5,
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=600&q=80",
];

/* ─── COMPONENT ─────────────────────────────────────── */

const Placement = () => {
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
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#8B5CF6]/15 via-[#070B18] to-[#070B18]" />
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
                Careers
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
            >
              Placement &
              <br />
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#3B82F6] bg-clip-text text-transparent">
                Career Support
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-medium"
            >
              Comprehensive career support designed to prepare students for successful careers in leading technology companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact">
                <button className="group relative flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-white">Get Career Guidance</span>
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

          {/* Right Side Illustration (Generated Ultra-Realistic Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#8B5CF6]/30 to-[#3B82F6]/30 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
               <img 
                 src="/placement_hero.png" 
                 alt="Students in corporate office with mentor"
                 className="w-full h-auto object-cover rounded-2xl"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#070B18] via-transparent to-transparent" />
               <div className="absolute inset-0 bg-[#8B5CF6]/10 mix-blend-screen pointer-events-none" />
               
               {/* Floating Tag */}
               <motion.div
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.8 }}
                 className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-4 flex items-center gap-4"
               >
                 <div className="w-10 h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center shrink-0 border border-[#10B981]/30">
                    <TrendingUp className="h-5 w-5 text-[#10B981]" />
                 </div>
                 <div>
                    <div className="text-white font-bold text-sm">Corporate Ready</div>
                    <div className="text-slate-300 text-xs">Transforming students into professionals</div>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="relative z-10">

        {/* ── STATS ────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-12 relative overflow-hidden border-b border-white/5">
          <div className="max-w-7xl mx-auto relative grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/10 bg-[#0F172A]/60 backdrop-blur-md hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 rounded-2xl mb-5 flex items-center justify-center border shadow-lg transition-transform group-hover:scale-110"
                     style={{ background: `${stat.color}15`, borderColor: `${stat.color}30` }}>
                  <stat.icon className="h-8 w-8" style={{ color: stat.color }} />
                </div>
                <div className="text-4xl font-black text-white mb-2 tracking-tight">{stat.value}</div>
                <div className="text-slate-400 text-sm font-bold tracking-widest uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CAREER SUPPORT SERVICES ─────────────────── */}
        <section className="py-28 px-6 lg:px-12 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
                Career Support <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium max-w-2xl mx-auto">
                Our comprehensive placement cell provides end-to-end support to ensure you are industry-ready.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0F172A]/60 backdrop-blur-md hover:border-white/20 transition-all duration-400 hover:-translate-y-2"
                  style={{ boxShadow: `0 10px 40px -20px ${service.color}20` }}
                >
                  {/* Image Header */}
                  <div className="h-48 w-full relative overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
                    <div className="absolute inset-0 opacity-40 mix-blend-color" style={{ backgroundColor: service.color }} />
                  </div>

                  {/* Content */}
                  <div className="p-8 pt-0 flex-1 flex flex-col relative">
                     <div className="absolute -top-8 left-8 w-16 h-16 rounded-2xl bg-[#0F172A] border flex items-center justify-center shadow-xl"
                          style={{ borderColor: `${service.color}40`, boxShadow: `0 10px 20px -5px ${service.color}30` }}>
                        <service.icon className="h-7 w-7" style={{ color: service.color }} />
                     </div>
                    <h3 className="font-black text-white text-xl mt-12 mb-3 tracking-wide">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{service.desc}</p>
                    
                    <button className="mt-auto flex items-center gap-2 text-sm font-bold transition-colors w-fit" style={{ color: service.color }}>
                       Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Glow Line */}
                  <div className="absolute bottom-0 inset-x-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: service.color }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HIRING PARTNERS ─────────────────────────── */}
        <section className="py-24 px-6 lg:px-12 relative border-b border-white/5 overflow-hidden">
           {/* Background subtle glow */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3B82F6]/5 to-transparent pointer-events-none" />
           <div className="max-w-7xl mx-auto relative text-center">
              <span className="text-[#3B82F6] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Our Network</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-12">
                Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Hiring Partners</span>
              </h2>
              
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                 {partners.map((partner, i) => (
                    <motion.div
                       key={partner}
                       initial={{ opacity: 0, scale: 0.9 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.05 }}
                       className="group px-6 py-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 cursor-default"
                    >
                       <span className="text-xl md:text-2xl font-black tracking-wider text-slate-500 group-hover:text-white transition-colors duration-300 drop-shadow-md">
                          {partner}
                       </span>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* ── PLACEMENT JOURNEY TIMELINE ──────────────── */}
        <section className="py-28 px-6 lg:px-12 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
                Your <span className="bg-gradient-to-r from-[#F59E0B] to-[#EF4444] bg-clip-text text-transparent">Placement Journey</span>
              </h2>
            </motion.div>

            <div className="relative">
               {/* Timeline Line */}
               <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 bg-gradient-to-r from-[#8B5CF6]/20 via-[#3B82F6]/20 to-[#10B981]/20 rounded-full" />
               
               <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-4 relative z-10">
                  {journeySteps.map((step, i) => (
                     <motion.div 
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-row lg:flex-col items-center lg:text-center gap-6 lg:gap-4 group"
                     >
                        <div className="w-14 h-14 rounded-full border border-white/10 bg-[#0F172A] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:border-[#8B5CF6]/50 transition-all duration-300 relative z-10">
                           <step.icon className="h-6 w-6 text-slate-400 group-hover:text-[#8B5CF6] transition-colors" />
                           {/* Step Number Badge */}
                           <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#8B5CF6] text-[10px] font-black text-white flex items-center justify-center border-2 border-[#070B18]">
                              {i + 1}
                           </div>
                        </div>
                        <div>
                           <div className="text-white font-bold text-sm mb-1">{step.title}</div>
                           <div className="text-slate-400 text-xs font-medium">{step.desc}</div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* ── STUDENT SUCCESS STORIES ─────────────────── */}
        <section className="py-28 px-6 lg:px-12 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
                Student <span className="bg-gradient-to-r from-[#10B981] to-[#3B82F6] bg-clip-text text-transparent">Success Stories</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="group relative rounded-2xl border border-white/10 bg-[#0F172A]/50 backdrop-blur-md p-8 hover:border-[#10B981]/30 hover:-translate-y-2 transition-all duration-500 shadow-lg"
                >
                  <div className="text-5xl font-black text-[#10B981]/15 leading-none mb-4 font-serif">"</div>
                  
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-[#F59E0B] fill-[#F59E0B]" />
                    ))}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-8 font-medium">"{t.text}"</p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#10B981]/30 shadow-md"
                    />
                    <div>
                      <div className="text-white font-bold text-sm tracking-wide">{t.name}</div>
                      <div className="text-slate-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY ──────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-12 relative border-b border-white/5 bg-[#0A0F1F]">
           <div className="max-w-7xl mx-auto">
              <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
              >
                 <div>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
                      Placement <span className="text-slate-400">Gallery</span>
                    </h2>
                    <p className="text-slate-400 text-sm font-medium">Glimpses of our campus drives, workshops, and success events.</p>
                 </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                 {gallery.map((img, i) => (
                    <motion.div
                       key={i}
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="group relative rounded-xl overflow-hidden aspect-[4/3] border border-white/10 cursor-pointer"
                    >
                       <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#070B18]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="text-white text-xs font-bold flex items-center gap-1">
                             View <ChevronRight className="h-3 w-3" />
                          </span>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* ── CTA BANNER ───────────────────────────────── */}
        <section className="py-28 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-[#8B5CF6]/30 p-12 lg:p-16 text-center shadow-2xl"
            >
              {/* CTA background */}
              <div className="absolute inset-0 bg-[#0F172A]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8B5CF6]/20 via-transparent to-transparent" />
              
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                  Start Your
                  <br />
                  <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#3B82F6] bg-clip-text text-transparent">
                    Career Journey Today
                  </span>
                </h2>
                <p className="text-slate-300 text-base max-w-xl mx-auto mb-10 font-medium leading-relaxed">
                  Join Omega Tech Placement Program and get the mentorship, resources, and connections you need to succeed.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-5">
                  <a href="#contact">
                    <button className="group relative flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9]" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative text-white">Apply Now</span>
                      <ArrowRight className="relative h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                    </button>
                  </a>
                  <a href="#contact">
                    <button className="flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm font-bold text-sm text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300">
                      Contact Placement Cell
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Placement;
