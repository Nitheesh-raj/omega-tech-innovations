import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Palette, TrendingUp, Cog, School, ArrowRight } from "lucide-react";

const divisions = [
  {
    icon: Palette,
    label: "Division 1",
    title: "Arts & Science",
    count: 15,
    color: "text-violet-400",
    iconBg: "bg-violet-500/10",
    accentBar: "from-violet-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    label: "Division 2",
    title: "Master Programs",
    count: 8,
    color: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    accentBar: "from-emerald-500 to-teal-600",
  },
  {
    icon: Cog,
    label: "Division 3",
    title: "Engineering & Technology",
    count: 16,
    color: "text-orange-400",
    iconBg: "bg-orange-500/10",
    accentBar: "from-orange-500 to-amber-600",
  },
  {
    icon: School,
    label: "Division 4",
    title: "School Programs",
    count: 12,
    color: "text-sky-400",
    iconBg: "bg-sky-500/10",
    accentBar: "from-sky-500 to-blue-600",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-24">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase mb-4">
            Explore
          </span>
          <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-4">
            Our Course Divisions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Master in-demand technologies across four specialized divisions designed for real-world success.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {divisions.map((div, i) => {
            const Icon = div.icon;
            return (
              <motion.div
                key={div.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.4 }}
              >
                <Link
                  to="/courses"
                  className="group relative flex flex-col rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_6px_30px_hsl(265_90%_60%/0.12)] hover:-translate-y-1 overflow-hidden"
                >
                  {/* top accent bar */}
                  <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${div.accentBar} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${div.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`h-5 w-5 ${div.color}`} />
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-widest ${div.color}`}>
                      {div.label}
                    </span>
                  </div>

                  <h3 className="font-display text-sm font-bold tracking-wider text-foreground mb-1 leading-snug">
                    {div.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">{div.count} courses</p>

                  <div className="mt-auto flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    <span>Explore</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
