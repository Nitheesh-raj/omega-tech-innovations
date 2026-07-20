import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Building2, GraduationCap, Lightbulb, Users, Network, Code2, 
  ArrowRight, ShieldCheck, Zap, Globe, CheckCircle2 
} from "lucide-react";
import collegeGnanamani from "@/assets/college-gnanamani.jpg";
import collegeMGR from "@/assets/college-mgr.jpg";
import collegeNadar from "@/assets/college-nadar.jpg";
import collegeHowdia from "@/assets/college-howdia.png";
import collegeAlAzhar from "@/assets/college-alazhar.png";
import collegeJayaraj from "@/assets/college-jayaraj.jpg";

/* ─── DATA ─────────────────────────────────────────── */

const services = [
  {
    icon: Lightbulb,
    title: "Curriculum Modernization",
    desc: "Align academic syllabus with cutting-edge industry standards like AI, Cloud, and Web3.",
    color: "#8B5CF6", // Purple Neon
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80"
  },
  {
    icon: Users,
    title: "Faculty Tech Development",
    desc: "Train-the-trainer programs equipping educators with enterprise-grade tech skills.",
    color: "#3B82F6", // Electric Blue
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&q=80"
  },
  {
    icon: Network,
    title: "IT Infrastructure Setup",
    desc: "End-to-end deployment of smart campus grids, cloud labs, and secure networks.",
    color: "#06B6D4", // Cyan
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80"
  },
  {
    icon: Globe,
    title: "Industry-Academia Bridging",
    desc: "Strategic partnerships linking institutions with top-tier technology corporations.",
    color: "#10B981", // Emerald
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
  },
];

const processSteps = [
  { step: "01", title: "Comprehensive Audit", desc: "We analyze current academic structures and IT infrastructure." },
  { step: "02", title: "Strategic Roadmap", desc: "Design a customized tech integration and upskilling framework." },
  { step: "03", title: "Agile Implementation", desc: "Deploy resources, train faculty, and modernize labs." },
  { step: "04", title: "Sustained Excellence", desc: "Continuous monitoring, updates, and industry bridging." },
];

/* ─── COMPONENT ─────────────────────────────────────── */

const Consultancy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#070B18] text-white relative font-sans overflow-hidden">
      
      {/* ── AMBIENT 7D GLOW ──────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#8B5CF6]/10 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[120px]" 
        />
      </div>

      <Navbar />

      <main className="relative z-10">

        {/* ── HERO SECTION ─────────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 border-b border-white/5">
          {/* Parallax Background */}
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF60a_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF60a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl aspect-[21/9] bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80')] bg-cover bg-center opacity-[0.15] mix-blend-screen rounded-[100px] blur-sm filter" />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070B18]/50 to-[#070B18]" />
          </motion.div>

          <div className="container relative z-10 px-6 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mx-auto max-w-4xl flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#A78BFA] text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_0_30px_rgba(139,92,246,0.3)] backdrop-blur-xl">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-ping" />
                Our Partnership Institutions
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8">
                Empowering <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#3B82F6] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]">
                  Excellence
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium mb-12">
                We bridge the gap between academic potential and industry reality with enterprise-grade consultancy for modern institutions.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6">
                <a href="#services">
                  <button className="group relative flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#A78BFA] to-[#60A5FA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative text-white">Explore Services</span>
                    <ArrowRight className="relative h-4 w-4 text-white transition-transform group-hover:translate-x-2" />
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CONSULTING SERVICES (Glassmorphism Grid) ──── */}
        <section id="services" className="py-32 px-6 lg:px-12 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
                Our Premium <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">Solutions</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0F172A]/40 backdrop-blur-2xl hover:border-white/30 transition-all duration-500"
                >
                  {/* Background Image with Parallax Hover */}
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B18] via-[#070B18]/80 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-2xl backdrop-blur-xl border border-white/20 transition-transform duration-500 group-hover:-translate-y-4"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <service.icon className="h-8 w-8" style={{ color: service.color }} />
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm leading-relaxed font-medium transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:-translate-y-2">
                      {service.desc}
                    </p>
                  </div>
                  
                  {/* Accent Glow */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: service.color, boxShadow: `0 -10px 40px ${service.color}` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE PROCESS (7D Interactive Timeline) ─────── */}
        <section className="py-32 px-6 lg:px-12 relative border-b border-white/5 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
                Transformation <span className="bg-gradient-to-r from-[#10B981] to-[#3B82F6] bg-clip-text text-transparent">Framework</span>
              </h2>
            </motion.div>

            <div className="relative border-l-2 border-white/10 pl-8 sm:pl-12 ml-4 sm:ml-0 space-y-20">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] sm:-left-[57px] top-0 w-8 h-8 rounded-full bg-[#0F172A] border-4 border-[#8B5CF6] group-hover:border-[#3B82F6] group-hover:scale-125 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.5)] z-10" />
                  
                  {/* Glowing Line */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-8 bottom-[-80px] w-[2px] bg-gradient-to-b from-[#8B5CF6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="bg-[#0F172A]/30 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-[#0F172A]/60 hover:border-white/20 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="text-[#8B5CF6] font-black text-6xl absolute top-4 right-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm max-w-lg leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ACADEMIC PARTNERS ─────────────────────────── */}
        <section className="py-32 px-6 lg:px-12 relative border-b border-white/5">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
                Trusted By <span className="bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent">Leaders</span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
              {[
                { name: "Gnanamani College of Technology", logo: collegeGnanamani, type: "Autonomous Institution" },
                { name: "Dr. MGR Women's Arts & Science", logo: collegeMGR, type: "Arts & Science College" },
                { name: "Nadar Saraswathi College of Engineering & Technology", logo: collegeNadar, type: "Engineering College" },
                { name: "Hajee Karutha Rowther Howdia College", logo: collegeHowdia, type: "Autonomous Institution" },
                { name: "Al-Az'har Matriculation School", logo: collegeAlAzhar, type: "Matriculation School" },
                { name: "Jayaraj Annapackiam College for Women", logo: collegeJayaraj, type: "Autonomous Institution" },
              ].map((college, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8, type: "spring" }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative w-full sm:w-[400px] rounded-[2rem] border border-white/10 bg-[#0F172A]/40 backdrop-blur-2xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="h-40 w-full flex items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 mb-8 relative z-10 group-hover:border-[#8B5CF6]/30 transition-colors">
                    <img
                      src={college.logo}
                      alt={college.name}
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="text-center relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors">
                      {college.name}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[10px] font-bold text-[#A78BFA] uppercase tracking-widest">
                      <CheckCircle2 className="h-3 w-3" /> {college.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────── */}
        <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8B5CF6]/10 via-[#070B18] to-[#070B18]" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-5xl mx-auto rounded-[3rem] border border-[#8B5CF6]/30 bg-[#0F172A]/60 backdrop-blur-3xl p-12 lg:p-20 text-center shadow-[0_0_80px_rgba(139,92,246,0.15)]"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
              Transform Your <br />
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
                Institution Today
              </span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              Partner with Omega Tech to future-proof your academic infrastructure and curriculum. Let's schedule a strategic consultation.
            </p>
            
            <a href="/contact">
              <button className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-white">Contact Our Experts</span>
                <ArrowRight className="relative h-4 w-4 text-white transition-transform group-hover:translate-x-2" />
              </button>
            </a>
          </motion.div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Consultancy;
