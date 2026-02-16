import { motion } from "framer-motion";
import { FileText, Users, Linkedin, Compass, Handshake, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const services = [
  { icon: FileText, title: "Resume Building", desc: "Professional resume crafting tailored to tech industry standards with ATS-friendly formatting" },
  { icon: Users, title: "Mock Interviews", desc: "Practice with industry-style technical and HR interviews to build confidence" },
  { icon: Linkedin, title: "LinkedIn Optimization", desc: "Optimize your LinkedIn profile to attract recruiters and showcase your skills" },
  { icon: Compass, title: "Career Counseling", desc: "One-on-one guidance to help you choose the right career path in technology" },
  { icon: Handshake, title: "Job Referrals", desc: "Access to our network of hiring partners and job referral programs" },
  { icon: Lightbulb, title: "Startup Guidance", desc: "Mentorship and resources for aspiring tech entrepreneurs and startup founders" },
];

const Placement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="font-display text-4xl font-bold tracking-wider sm:text-5xl gradient-text mb-4">
              Placement & Career Support
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive career support to help you land your dream tech job
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/30 hover:box-glow"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold tracking-wider text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="/#contact">
              <Button size="lg" className="font-display text-sm tracking-wider box-glow">
                Get Career Support
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Placement;
