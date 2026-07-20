import { motion, useMotionValue, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Code, PenTool, TrendingUp, Scale, FileText, Star } from "lucide-react";
import React from "react";

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ perspective: 1200 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className={`h-full ${className || ""}`}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full"
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const services = [
  {
    icon: Code,
    title: "Website Development",
    desc: "Responsive, modern websites custom-built to showcase your business and convert visitors."
  },
  {
    icon: PenTool,
    title: "Logo & Brand Design",
    desc: "Unique logo, visiting cards, and a complete brand identity that makes you stand out."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Social media setup, promotional content, and strategies to grow your customer base."
  },
  {
    icon: Scale,
    title: "GST & MSME Registration",
    desc: "Complete support for legal setup and business registration to get you operating legally."
  },
  {
    icon: FileText,
    title: "Documentation Support",
    desc: "All essential business documents and compliance matters handled professionally."
  }
];

const testimonials = [
  {
    name: "Rajesh K.",
    role: "Founder, GreenRetail",
    initial: "RK",
    content: "Omega Tech completely transformed my business idea into reality. The website and branding are top-notch, and they handled my GST registration seamlessly!"
  },
  {
    name: "Sneha A.",
    role: "Owner, Sneha's Boutique",
    initial: "SA",
    content: "The Growth package was exactly what I needed. They delivered a beautiful 5-page site and set up my social media within a week. Highly recommended!"
  },
  {
    name: "Manoj V.",
    role: "Director, TechConsult",
    initial: "MV",
    content: "A truly all-in-one agency. I was overwhelmed with MSME and documentation, but their team took care of everything. My business is now thriving online."
  }
];

const faqs = [
  { q: "How long does it take to launch my business?", a: "Typically, our comprehensive launch package gets you fully operational within 7 days, including website deployment, branding, and core registrations." },
  { q: "Do you provide post-launch support?", a: "Yes, we offer ongoing maintenance, digital marketing retainers, and technical support to ensure your continued growth." },
  { q: "What documents are needed for GST & MSME Registration?", a: "We require basic KYC documents (PAN, Aadhaar), business address proof, and bank details. Our team will guide you through the exact requirements based on your business type." },
  { q: "Can I upgrade my package later?", a: "Absolutely! You can start with our foundational package and add services like advanced digital marketing or custom feature development as you scale." }
];

const DigitalSolutions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative font-sans">
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0 z-0">
            {/* Dark background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#9333EA]/10 rounded-full blur-[120px] opacity-70" />
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#F97316]/5 rounded-full blur-[100px] opacity-50" />
          </div>
          
          {/* Floating 3D elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[10%] w-24 h-24 rounded-2xl bg-gradient-to-br from-[#9333EA]/20 to-transparent border border-[#9333EA]/30 backdrop-blur-md z-10"
            style={{ transform: "rotateX(30deg) rotateY(-20deg)" }}
          />
          <motion.div 
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-[10%] w-32 h-32 rounded-full bg-gradient-to-tr from-[#F97316]/10 to-transparent border border-[#F97316]/20 backdrop-blur-md z-10"
            style={{ transform: "rotateX(-20deg) rotateY(30deg)" }}
          />

          <div className="container relative z-20 px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-[#D8B4FE] backdrop-blur-sm mb-6">
                <span>From Idea to Income 🚀</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-8">
                Launch Your Business in <span className="bg-gradient-to-r from-[#D8B4FE] via-[#F472B6] to-[#FB923C] text-transparent bg-clip-text">7 Days</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-medium">
                Website, Branding, Registration & Marketing – All in One Place.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] text-white hover:from-[#9333EA] hover:to-[#7C3AED] px-8 py-6 rounded-full text-lg font-bold shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] transition-all duration-300 border-0">
                  <span className="relative z-10 flex items-center gap-2">
                    👉 Start Your Business Today
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </Button>
                <Button variant="outline" className="px-8 py-6 rounded-full text-lg font-bold border-white/20 bg-transparent text-white hover:bg-white/10 transition-all duration-300">
                  View Packages
                </Button>
              </div>
              
              <p className="mt-8 text-sm text-slate-400 font-medium">
                Start Smart. Grow Fast. Your Business, Fully Set Up.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-24 bg-white relative z-10">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#171717] mb-4">Our Services</h2>
              <p className="text-lg text-slate-500 font-medium">We Build Businesses, Not Just Websites</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, i) => (
                <TiltCard key={i}>
                  <div className="bg-white border border-slate-100 rounded-3xl p-10 h-full flex flex-col items-center text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-shadow duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-6 shadow-inner">
                      <service.icon className="w-8 h-8 text-indigo-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-24 bg-[#0A0A0A] relative z-10">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">What Our Clients Say</h2>
              <p className="text-lg text-slate-400 font-medium">Real results from real business owners.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((test, i) => (
                <TiltCard key={i}>
                  <div className="bg-[#171717] border border-white/5 rounded-3xl p-8 h-full flex flex-col relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#A855F7]/10 rounded-bl-full -z-10 group-hover:bg-[#A855F7]/20 transition-colors duration-500" />
                    
                    <div className="flex items-center gap-1 mb-6 text-[#A855F7]">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-slate-300 text-sm leading-relaxed italic mb-8 flex-1">
                      "{test.content}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A855F7] to-[#7C3AED] flex items-center justify-center text-white font-bold text-sm">
                        {test.initial}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{test.name}</h4>
                        <p className="text-slate-400 text-xs">{test.role}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-slate-50 relative z-10">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#171717] mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-slate-200 rounded-2xl px-6 data-[state=open]:shadow-md transition-all">
                    <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-[#A855F7] py-6 [&[data-state=open]]:text-[#A855F7]">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 leading-relaxed pb-6 text-sm">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalSolutions;
