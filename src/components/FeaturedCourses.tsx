import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, BarChart3, Bot, Code, Shield, Cloud, Gamepad2, ArrowRight } from "lucide-react";

const categories = [
  { icon: Brain, title: "AI & Machine Learning", count: 8, color: "text-primary" },
  { icon: BarChart3, title: "Data Science & Analytics", count: 6, color: "text-neon-green" },
  { icon: Bot, title: "Robotics & Automation", count: 6, color: "text-accent" },
  { icon: Code, title: "Software Development", count: 6, color: "text-primary" },
  { icon: Shield, title: "Cybersecurity", count: 5, color: "text-neon-green" },
  { icon: Cloud, title: "Cloud & DevOps", count: 5, color: "text-accent" },
  { icon: Gamepad2, title: "Emerging Technologies", count: 5, color: "text-primary" },
];

const FeaturedCourses = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-4">
            Top Trending Courses 2026
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Master the most in-demand technologies with our comprehensive course catalog
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Link
                to="/courses"
                className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/30 hover:box-glow"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <cat.icon className={`h-6 w-6 ${cat.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xs font-semibold tracking-wider text-foreground">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.count} courses</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
