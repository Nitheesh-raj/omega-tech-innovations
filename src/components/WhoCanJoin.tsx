import { motion } from "framer-motion";
import { GraduationCap, School, Wrench, BookOpen, Briefcase, Lightbulb, User } from "lucide-react";

const types = [
  { icon: School, title: "School Students", desc: "Robotics & AI Basics" },
  { icon: Wrench, title: "Diploma Students", desc: "Technical skill development" },
  { icon: GraduationCap, title: "Engineering Students", desc: "Advanced tech specialization" },
  { icon: BookOpen, title: "Arts & Science Graduates", desc: "Career switch to tech" },
  { icon: Briefcase, title: "Working Professionals", desc: "Upskill & career growth" },
  { icon: Lightbulb, title: "Entrepreneurs", desc: "Tech-powered business ideas" },
];

const WhoCanJoin = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-4">
            Who Can Join?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our programs are designed for learners at every stage of their journey
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold tracking-wider text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoin;
