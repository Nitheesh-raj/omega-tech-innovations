import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";
import collegeGnanamani from "@/assets/college-gnanamani.jpg";
import collegeMGR from "@/assets/college-mgr.jpg";
import ContactSection from "@/components/ContactSection";

const Consultancy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
            <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          </div>
          <div className="container relative z-10 py-20 sm:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-3xl space-y-5"
            >
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
                Consultancy Services
              </span>
              <h1 className="font-display text-4xl font-bold tracking-wider sm:text-5xl md:text-6xl gradient-text leading-tight">
                Empowering Excellence <br /> Through Strategic Consulting
              </h1>
              <p className="text-base text-slate-700 md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
                We bridge the gap between academic potential and industry reality with expert 
                consultancy for institutions and organizations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partner Colleges Section */}
        <section className="py-24 bg-card/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-4">
                Our Trusted Academic Partners
              </h2>
              <p className="text-slate-700 text-lg max-w-2xl mx-auto font-medium">
                Collaborating with leading institutions to bridge the gap between education and industry excellence.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
              {[
                { 
                  name: "Gnanamani College of Technology", 
                  logo: collegeGnanamani,
                  type: "Autonomous Institution"
                },
                { 
                  name: "Dr. MGR Women's Arts & Science College", 
                  logo: collegeMGR,
                  type: "Arts & Science College"
                },
              ].map((college, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative w-full sm:w-80 bg-white rounded-2xl border border-[#7B5BA7]/10 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(123,91,167,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center gap-6"
                >
                  <div className="h-32 w-full flex items-center justify-center p-2">
                    <img
                      src={college.logo}
                      alt={college.name}
                      className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-base font-bold text-[#1a103c] leading-tight group-hover:text-primary transition-colors">
                      {college.name}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/30 text-[10px] font-bold text-primary uppercase tracking-wider">
                      {college.type}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {/* More Coming Soon Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-full sm:w-80 bg-slate-50/50 rounded-2xl border-2 border-dashed border-slate-200 p-8 flex flex-col items-center justify-center gap-4 text-slate-400 group hover:border-[#7B5BA7]/30 transition-colors"
              >
                <div className="h-16 w-16 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center group-hover:border-[#7B5BA7]/30 transition-colors">
                  <span className="text-3xl font-light">+</span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold tracking-wide uppercase transition-colors group-hover:text-[#7B5BA7]/60">
                    & many more...
                  </p>
                  <p className="text-xs font-medium italic mt-1">Expanding Partnerships</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Consultancy;
