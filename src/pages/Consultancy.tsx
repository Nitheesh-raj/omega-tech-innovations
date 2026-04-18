import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Lightbulb, Target, Users, BookOpen } from "lucide-react";
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

        {/* Core Domains */}
        <section className="py-24 bg-card/30">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { 
                  icon: <BookOpen className="h-6 w-6 text-primary" />, 
                  title: "Academic Lead", 
                  desc: "Strategic curriculum development and educational planning for modern institutions." 
                },
                { 
                  icon: <Target className="h-6 w-6 text-primary" />, 
                  title: "Placement Solutions", 
                  desc: "Helping colleges build industry links and secure placement opportunities for students." 
                },
                { 
                  icon: <Users className="h-6 w-6 text-primary" />, 
                  title: "Corporate Training", 
                  desc: "Customized skill enhancement programs for teams and new hires." 
                },
                { 
                  icon: <Lightbulb className="h-6 w-6 text-primary" />, 
                  title: "Tech Implementation", 
                  desc: "Guidance on industrial automation, robotics, and digital infrastructure." 
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border/50 bg-background/50 p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
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
