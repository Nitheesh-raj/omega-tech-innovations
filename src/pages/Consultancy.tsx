import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Lightbulb, Target, Users, BookOpen } from "lucide-react";
import ContactSection from "@/components/ContactSection";

const Consultancy = () => {
  return (
    <div className="min-h-screen bg-background">
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
                Strategic Consulting <br /> & Expert Guidance
              </h1>
              <p className="text-base text-slate-700 md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
                We provide end-to-end consultancy for educational institutions, corporate training, 
                and technology implementation to drive meaningful impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-card/30">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <BookOpen className="h-6 w-6 text-primary" />,
                  title: "Academic Consulting",
                  desc: "Curriculum development and academic excellence strategies for institutions."
                },
                {
                  icon: <Target className="h-6 w-6 text-primary" />,
                  title: "Placement Strategy",
                  desc: "Connecting talent with industry demand through structured placement cells."
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Corporate Training",
                  desc: "Upskilling workforce with the latest technologies and soft skills."
                },
                {
                  icon: <Lightbulb className="h-6 w-6 text-primary" />,
                  title: "Digital Strategy",
                  desc: "Guiding organizations through digital transformation and technology adoption."
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border/50 bg-background/50 p-8 hover:border-primary/30 transition-all hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{service.desc}</p>
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
