import { motion } from "framer-motion";
import { Users, BookOpen, Cpu, Briefcase, Lightbulb, Layers } from "lucide-react";

const benefits = [
  { icon: Users, title: "Expert Faculty", desc: "Learn from experienced industry professionals and certified trainers" },
  { icon: BookOpen, title: "Comprehensive Curriculum", desc: "Technical expertise and soft skills development combined" },
  { icon: Cpu, title: "Cutting-Edge Resources", desc: "Advanced labs, software tools, and simulation environments" },
  { icon: Briefcase, title: "Industry Connections", desc: "Internships, live projects, mentorship, and placement assistance" },
  { icon: Lightbulb, title: "Holistic Development", desc: "Personality development, entrepreneurship, and leadership skills" },
  { icon: Layers, title: "Innovative Learning Model", desc: "Flexible learning modes with interactive sessions" },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-4">
            Why Choose Omega Tech?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide everything you need to launch a successful career in technology
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:box-glow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold tracking-wider text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
