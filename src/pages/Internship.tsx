import { motion } from "framer-motion";
import { Brain, BarChart3, Bot, Code, Shield, Cloud, CheckCircle2, Clock, Award, Github, Users, Briefcase, BookOpen, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const domains = [
  { icon: Brain, title: "Artificial Intelligence" },
  { icon: Brain, title: "Machine Learning" },
  { icon: BarChart3, title: "Data Science" },
  { icon: Bot, title: "Robotics & IoT" },
  { icon: Code, title: "Web Development" },
  { icon: Code, title: "App Development" },
  { icon: Shield, title: "Cybersecurity" },
  { icon: Cloud, title: "Cloud Computing" },
];

const durations = [
  { months: "1 Month", desc: "Quick exposure to a domain", features: ["Basic project", "Certificate", "Mentor guidance"] },
  { months: "2 Months", desc: "Deeper learning with practice", features: ["Intermediate project", "Certificate", "Weekly evaluation", "Mentor guidance"] },
  { months: "3 Months", desc: "Comprehensive internship", features: ["Advanced project", "Certificate", "Letter of Recommendation", "Portfolio building", "Weekly evaluation"] },
  { months: "6 Months", desc: "Industrial training", features: ["Live client projects", "Certificate", "Letter of Recommendation", "Placement support", "GitHub portfolio", "Career counseling"], popular: true },
];

const includes = [
  "Project-based training", "Real-time case studies", "Daily mentor guidance",
  "Weekly evaluation", "Final project submission", "Internship report assistance",
  "Certificate of Completion", "Letter of Recommendation (performance-based)",
];

const benefits = [
  { icon: Briefcase, title: "Live Client Projects", desc: "Work on real-world projects" },
  { icon: Target, title: "Industry Tools", desc: "Exposure to professional tools & platforms" },
  { icon: Github, title: "GitHub Portfolio", desc: "Build your project showcase" },
  { icon: Users, title: "Career Guidance", desc: "Interview preparation & counseling" },
  { icon: Award, title: "Placement Support", desc: "Job referral and placement assistance" },
];

const Internship = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="font-display text-4xl font-bold tracking-wider sm:text-5xl gradient-text mb-4">
              Internship Program
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-oriented internship programs designed to provide practical exposure in real-time technology environments
            </p>
          </motion.div>

          {/* Domains */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20">
            <h2 className="font-display text-2xl font-bold tracking-wider text-center gradient-text mb-10">Internship Domains</h2>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
              {domains.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm"
                >
                  <d.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{d.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Duration Options */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20">
            <h2 className="font-display text-2xl font-bold tracking-wider text-center gradient-text mb-10">Duration Options</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {durations.map((d, i) => (
                <motion.div
                  key={d.months}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-xl border p-6 backdrop-blur-sm ${
                    d.popular ? "border-primary/50 bg-primary/5 box-glow" : "border-border/50 bg-card/50"
                  }`}
                >
                  {d.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-display font-semibold text-primary-foreground tracking-wider">
                      Popular
                    </span>
                  )}
                  <div className="mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-display text-lg font-bold tracking-wider text-foreground">{d.months}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{d.desc}</p>
                  <ul className="space-y-2">
                    {d.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What's Included */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20">
            <h2 className="font-display text-2xl font-bold tracking-wider text-center gradient-text mb-10">What's Included</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {includes.map((item, i) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4">
                  <CheckCircle2 className="h-5 w-5 text-neon-green shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold tracking-wider text-center gradient-text mb-10">Benefits</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xs font-semibold tracking-wider text-foreground mb-1">{b.title}</h3>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a href="#contact">
              <Button size="lg" className="font-display text-sm tracking-wider box-glow">
                Apply Now
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Internship;
