import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail, Phone, MapPin, Clock, Send, ChevronDown, CheckCircle2,
  Calendar, Globe2, MessageSquare, Briefcase, Zap, Shield, Building2,
  Linkedin, Instagram, Facebook, Youtube, MessageCircle, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── DATA ─────────────────────────────────────────── */

const reasons = [
  { icon: Zap, title: "Instant Response", desc: "Our team guarantees a reply within 24 hours of your inquiry." },
  { icon: Briefcase, title: "Expert Consultation", desc: "Direct access to seasoned industry veterans and technical leads." },
  { icon: Shield, title: "Trusted Partnerships", desc: "Join our network of 250+ top-tier technology companies." },
  { icon: TrendingUpIcon, title: "Career & Business Growth", desc: "Accelerate your trajectory with tailored tech solutions and guidance." },
];

function TrendingUpIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );
}

const socials = [
  { name: "LinkedIn", icon: Linkedin, color: "#0077B5", link: "#" },
  { name: "Instagram", icon: Instagram, color: "#E1306C", link: "#" },
  { name: "Facebook", icon: Facebook, color: "#1877F2", link: "#" },
  { name: "YouTube", icon: Youtube, color: "#FF0000", link: "#" },
  { name: "WhatsApp", icon: MessageCircle, color: "#25D366", link: "#" },
];

const faqs = [
  { q: "How quickly can I expect a response?", a: "We prioritize all inquiries and guarantee a response within 24 business hours from our dedicated support team." },
  { q: "Do you offer free initial consultations?", a: "Yes, we offer a complimentary 30-minute discovery call for businesses and a free career assessment for students." },
  { q: "Where are your offices located?", a: "Our head office is in Chennai, with a major branch office in Ramanathapuram. We also operate globally through our virtual collaboration platforms." },
  { q: "Can I partner with Omega Tech for campus hiring?", a: "Absolutely! We actively partner with corporations for campus placements, hackathons, and customized corporate training programs." },
];

/* ─── COMPONENT ─────────────────────────────────────── */

const ContactUs = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    serviceRequired: "partnership-institutions",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      subject: `Service Required: ${formData.serviceRequired} (Org: ${formData.organization})`,
      page: window.location.pathname || "/",
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbywxHZ3gJzzSFRS66ZqhVsyFt9zk30uDCB605EdDVu2MhHra7K_zqVnMmnFAs3nJji8/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        serviceRequired: "partnership-institutions",
        message: ""
      });
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070B18] text-white relative overflow-x-hidden font-sans">
      {/* Global ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-[#8B5CF6]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#3B82F6]/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent" />
      </div>

      <Navbar />

      {/* ── HERO ─────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden border-b border-white/5">
        
        {/* Background Gradients & Particles */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#8B5CF6]/15 via-[#070B18] to-[#070B18]" />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
           {/* Abstract grid lines for "digital" feel */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF610_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF610_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </motion.div>

        <div className="relative z-10 container px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/10 text-[#A78BFA] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                Connect With Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
            >
              Let's Build
              <br />
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                Something Amazing
              </span>
              <br />
              Together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-medium"
            >
              Have a project, partnership, internship inquiry, or business consultation? Connect with Omega Tech and let our experts help you transform your ideas into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#consultation">
                <button className="group relative flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.4)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A78BFA] to-[#60A5FA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-white">Schedule a Meeting</span>
                  <ArrowRight className="relative h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                </button>
              </a>
              <a href="#form">
                <button className="group flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/20 bg-[#0F172A]/50 backdrop-blur-xl font-bold text-sm tracking-wide text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300 shadow-xl">
                  Contact Our Team
                </button>
              </a>
            </motion.div>
          </div>

          {/* Right Side 7D Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="relative hidden lg:block"
          >
            {/* Holographic Glowing Orbs */}
            <div className="absolute -inset-10 bg-gradient-to-br from-[#8B5CF6]/40 via-[#3B82F6]/20 to-transparent rounded-full blur-[80px] animate-pulse" />
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] bg-[#070B18]">
               {/* Using the generated 7D contact image */}
               <img 
                 src="/contact_hero.png" 
                 alt="7D Futuristic Contact Illustration"
                 className="w-full h-auto object-cover rounded-3xl scale-105"
               />
               
               {/* Glass UI Overlay elements to enhance the 7D feel */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#070B18] via-[#070B18]/20 to-transparent mix-blend-multiply" />
               <div className="absolute inset-0 bg-[#8B5CF6]/10 mix-blend-screen pointer-events-none" />
               
               {/* Floating elements */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }} 
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-10 right-10 w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]"
               >
                  <Globe2 className="h-8 w-8 text-[#60A5FA]" />
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 15, 0] }} 
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-16 left-10 p-4 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 flex items-center gap-4 shadow-2xl"
               >
                 <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center shrink-0 border border-[#8B5CF6]/30">
                    <MessageSquare className="h-6 w-6 text-[#A78BFA]" />
                 </div>
                 <div>
                    <div className="text-white font-bold text-sm">AI Assistant Online</div>
                    <div className="text-emerald-400 text-xs font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Connecting...
                    </div>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="relative z-10">

        {/* ── CONTACT INFORMATION ─────────────────────── */}
        <section className="py-20 px-6 lg:px-12 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
            
            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative p-8 w-full sm:w-[calc(50%-12px)] lg:w-64 shrink-0 rounded-3xl border border-white/10 bg-[#0F172A]/40 backdrop-blur-xl hover:bg-[#0F172A]/80 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all">
                 <Mail className="h-7 w-7 text-[#A78BFA]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <a href="mailto:Omegatechpvt@gmail.com" className="text-[#8B5CF6] font-medium text-sm hover:underline block mb-4 break-all">
                 Omegatechpvt@gmail.com
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative p-8 w-full sm:w-[calc(50%-12px)] lg:w-64 shrink-0 rounded-3xl border border-white/10 bg-[#0F172A]/40 backdrop-blur-xl hover:bg-[#0F172A]/80 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all">
                 <Phone className="h-7 w-7 text-[#60A5FA]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <a href="tel:+918754263141" className="text-[#3B82F6] font-medium text-sm hover:underline block mb-4">
                 +91 87542 63141
              </a>
            </motion.div>

            {/* Website Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative p-8 w-full sm:w-[calc(50%-12px)] lg:w-64 shrink-0 rounded-3xl border border-white/10 bg-[#0F172A]/40 backdrop-blur-xl hover:bg-[#0F172A]/80 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all">
                 <Globe2 className="h-7 w-7 text-[#22D3EE]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Website</h3>
              <a href="https://www.omegatechs.in" target="_blank" rel="noreferrer" className="text-[#06B6D4] font-medium text-sm hover:underline block mb-4 break-all">
                 www.omegatechs.in
              </a>
            </motion.div>

            {/* Head Office Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative p-8 w-full sm:w-[calc(50%-12px)] lg:w-64 shrink-0 rounded-3xl border border-white/10 bg-[#0F172A]/40 backdrop-blur-xl hover:bg-[#0F172A]/80 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all">
                 <Building2 className="h-7 w-7 text-[#34D399]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Head Office</h3>
              <p className="text-[#10B981] font-medium text-sm block mb-4">Pallikaranai, Chennai – 600100</p>
            </motion.div>

            {/* Branch Office Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative p-8 w-full sm:w-[calc(50%-12px)] lg:w-64 shrink-0 rounded-3xl border border-white/10 bg-[#0F172A]/40 backdrop-blur-xl hover:bg-[#0F172A]/80 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all">
                 <MapPin className="h-7 w-7 text-[#FBBF24]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Branch Office</h3>
              <p className="text-[#F59E0B] font-medium text-sm block mb-4">Theni, Ramanathapuram</p>
            </motion.div>

          </div>
        </section>

        {/* ── CONTACT FORM & WHY CONTACT US ─────────────── */}
        <section id="form" className="py-28 px-6 lg:px-12 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-10">
            
            {/* Left: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="relative rounded-[2.5rem] border border-white/10 bg-[#0F172A]/30 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Form Ambient Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-[80px]" />

                <div className="relative z-10">
                  <h2 className="text-3xl font-black text-white mb-2">Send a Message</h2>
                  <p className="text-slate-400 text-sm mb-10 font-medium">Fill out the form below and we will get back to you shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Name</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="John Doe" className="w-full bg-[#070B18]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/50 transition-all placeholder:text-slate-600" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Email</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="john@company.com" className="w-full bg-[#070B18]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/50 transition-all placeholder:text-slate-600" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Phone</label>
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+91 98765 43210" className="w-full bg-[#070B18]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/50 transition-all placeholder:text-slate-600" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Organization</label>
                        <input type="text" value={formData.organization} onChange={(e) => setFormData({...formData, organization: e.target.value})} placeholder="Company / College Name" className="w-full bg-[#070B18]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/50 transition-all placeholder:text-slate-600" />
                      </div>
                    </div>

                    <div className="space-y-2 relative">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Service Required</label>
                      <div className="relative">
                        <select value={formData.serviceRequired} onChange={(e) => setFormData({...formData, serviceRequired: e.target.value})} className="w-full bg-[#070B18]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-slate-300 focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/50 transition-all appearance-none cursor-pointer">
                          <option value="partnership-institutions">Partnership Institutions</option>
                          <option value="internship">Internship</option>
                          <option value="placement">Placement</option>
                          <option value="courses">Courses</option>
                          <option value="corporate">Corporate Training</option>
                          <option value="other">Other</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Message</label>
                      <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} placeholder="How can we help you?" className="w-full bg-[#070B18]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/50 transition-all placeholder:text-slate-600 resize-none"></textarea>
                    </div>

                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="privacy" required className="w-5 h-5 rounded-md border-white/20 bg-[#070B18] text-[#8B5CF6] focus:ring-[#8B5CF6]/50 cursor-pointer accent-[#8B5CF6]" />
                      <label htmlFor="privacy" className="text-xs text-slate-400 font-medium cursor-pointer">I agree to the Privacy Policy and terms of service.</label>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitted || isSubmitting}
                      className="w-full relative group flex items-center justify-center gap-2 px-8 py-5 rounded-xl font-bold text-sm tracking-widest uppercase overflow-hidden transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] disabled:opacity-80"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#A78BFA] to-[#60A5FA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.span key="submitting" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative text-white flex items-center gap-2">
                            Sending...
                          </motion.span>
                        ) : isSubmitted ? (
                          <motion.span key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative text-white flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5" /> Message Sent Successfully
                          </motion.span>
                        ) : (
                          <motion.span key="send" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative text-white flex items-center gap-2">
                            <Send className="h-4 w-4" /> Send Message
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Right: Why Contact Us */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <span className="text-[#8B5CF6] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Why Contact Us</span>
              <h3 className="text-4xl font-black text-white mb-10 leading-tight">
                Partner with the <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Best in Tech</span>
              </h3>

              <div className="flex flex-col gap-6">
                {reasons.map((reason, i) => (
                  <motion.div 
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex gap-5 p-5 rounded-2xl border border-white/5 bg-[#0F172A]/20 backdrop-blur-sm hover:bg-[#0F172A]/60 hover:border-white/15 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#3B82F6]/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#8B5CF6]/30 transition-all duration-300">
                      <reason.icon className="h-6 w-6 text-[#A78BFA]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1 group-hover:text-[#A78BFA] transition-colors">{reason.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed font-medium">{reason.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── OFFICE LOCATIONS & BOOKING ────────────────── */}
        <section id="consultation" className="py-28 px-6 lg:px-12 relative border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[#0A0F1F]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3B82F6]/5 to-transparent" />
          
          <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Interactive Map/Locations (Abstract representation) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] border border-white/10 bg-[#070B18]/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col justify-center items-center p-12"
            >
              {/* Map background effect */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-cover mix-blend-screen invert" />
              
              <h3 className="text-3xl font-black text-white mb-12 text-center">Global Reach,<br/>Local Presence</h3>

              <div className="w-full max-w-sm space-y-6">
                <div className="group relative p-6 rounded-2xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 backdrop-blur-md cursor-pointer hover:bg-[#8B5CF6]/20 transition-colors">
                  <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#8B5CF6] flex items-center justify-center animate-pulse shadow-[0_0_20px_#8B5CF6]">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Chennai (HQ)</h4>
                  <p className="text-slate-300 text-xs">Primary operations and tech hub.</p>
                </div>
                
                <div className="group relative p-6 rounded-2xl border border-[#3B82F6]/30 bg-[#3B82F6]/10 backdrop-blur-md cursor-pointer hover:bg-[#3B82F6]/20 transition-colors">
                  <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center animate-pulse shadow-[0_0_20px_#3B82F6]">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Ramanathapuram</h4>
                  <p className="text-slate-300 text-xs">Regional training and development center.</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Book Consultation */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#3B82F6] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Free Consultation</span>
              <h3 className="text-4xl font-black text-white mb-6 leading-tight">
                Schedule a <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">Virtual Meeting</span>
              </h3>
              <p className="text-slate-400 text-sm mb-10 font-medium">Pick a date and time that works for you. Our experts are ready to dive into your requirements.</p>

              <div className="p-8 rounded-3xl border border-white/10 bg-[#0F172A]/50 backdrop-blur-xl shadow-xl">
                 <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#3B82F6]/20 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-[#60A5FA]" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Select Date & Time</div>
                        <div className="text-slate-400 text-xs">Duration: 30 Min</div>
                      </div>
                    </div>
                 </div>

                 {/* Mock Calendar UI */}
                 <div className="grid grid-cols-4 gap-3 mb-6">
                    {["Mon", "Tue", "Wed", "Thu"].map((day, i) => (
                      <div key={day} className={`p-4 rounded-xl text-center cursor-pointer transition-all ${i === 1 ? 'bg-[#3B82F6] border-[#3B82F6] text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]' : 'bg-[#070B18] border border-white/10 text-slate-400 hover:border-white/30'}`}>
                        <div className="text-[10px] uppercase font-bold mb-1">{day}</div>
                        <div className="text-lg font-black">{15 + i}</div>
                      </div>
                    ))}
                 </div>
                 
                 <div className="grid grid-cols-2 gap-3 mb-8">
                    {["10:00 AM", "02:30 PM"].map((time, i) => (
                      <div key={time} className={`p-3 rounded-xl text-center text-sm font-bold cursor-pointer transition-all ${i === 0 ? 'bg-[#3B82F6]/20 border border-[#3B82F6]/50 text-[#60A5FA]' : 'bg-[#070B18] border border-white/10 text-slate-400 hover:border-white/30'}`}>
                        {time}
                      </div>
                    ))}
                 </div>

                 <button className="w-full py-4 rounded-xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                   Book Consultation <ArrowRight className="h-4 w-4" />
                 </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SOCIAL CONNECT ────────────────────────────── */}
        <section className="py-24 px-6 lg:px-12 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-12">Connect With Us on Social Media</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {socials.map((social, i) => (
                <motion.a
                  href={social.link}
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative w-32 h-32 rounded-3xl border border-white/10 bg-[#0F172A]/40 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: social.color }} />
                  <social.icon className="h-10 w-10 mb-3 transition-transform duration-300 group-hover:scale-110" style={{ color: social.color }} />
                  <span className="text-xs font-bold text-white tracking-wide">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ───────────────────────────────── */}
        <section className="py-28 px-6 lg:px-12 relative border-b border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Questions</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-white/10 rounded-2xl bg-[#0F172A]/30 backdrop-blur-sm overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="text-white font-bold text-lg pr-4">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${activeFaq === i ? "rotate-180 text-[#8B5CF6]" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA BANNER ──────────────────────────── */}
        <section className="py-28 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] overflow-hidden border border-[#3B82F6]/30 p-12 lg:p-16 text-center shadow-[0_30px_100px_rgba(59,130,246,0.2)]"
            >
              {/* CTA background */}
              <div className="absolute inset-0 bg-[#0A1628]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3B82F6]/30 via-[#8B5CF6]/10 to-transparent" />
              {/* Cyber grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.03]" />
              
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                  Ready to Connect
                  <br />
                  <span className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                    With Omega Tech?
                  </span>
                </h2>
                <p className="text-slate-300 text-base max-w-xl mx-auto mb-10 font-medium leading-relaxed">
                  Our experts are here to help you achieve your academic, business, and technology goals. Take the first step today.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-5">
                  <a href="#consultation">
                    <button className="group relative flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative text-white">Book Free Consultation</span>
                      <Calendar className="relative h-4 w-4 text-white" />
                    </button>
                  </a>
                  <a href="tel:+91XXXXXXXXXX">
                    <button className="flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm font-bold text-sm text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300">
                      <Phone className="h-4 w-4" /> Call Now
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

export default ContactUs;
