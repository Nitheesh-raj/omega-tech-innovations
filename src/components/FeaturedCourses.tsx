import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Palette, TrendingUp, Cog, School, ArrowRight } from "lucide-react";

const divisions = [
  { icon: Palette, title: "Arts & Science", count: 11, color: "text-primary" },
  { icon: TrendingUp, title: "Master Programs", count: 8, color: "text-neon-green" },
  { icon: Cog, title: "Engineering & Technology", count: 16, color: "text-accent" },
  { icon: School, title: "School Programs", count: 6, color: "text-primary" },
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
            Our Course Divisions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Master in-demand technologies across four specialized divisions
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {divisions.map((div, i) => (
            <motion.div
              key={div.title}
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
                  <div.icon className={`h-6 w-6 ${div.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xs font-semibold tracking-wider text-foreground">{div.title}</h3>
                  <p className="text-sm text-muted-foreground">{div.count} courses</p>
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
