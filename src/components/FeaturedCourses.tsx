import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Palette, TrendingUp, Cog, School, ArrowRight, Globe } from "lucide-react";

const divisions = [
  {
    icon: Palette,
    label: "Division 1",
    title: "Arts & Science",
    count: 15,
    color: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    accentBar: "from-violet-500 to-purple-600",
    glow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
  },
  {
    icon: TrendingUp,
    label: "Division 2",
    title: "Master Programs",
    count: 8,
    color: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    accentBar: "from-emerald-500 to-teal-600",
    glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
  },
  {
    icon: Cog,
    label: "Division 3",
    title: "Engineering & Technology",
    count: 16,
    color: "text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    accentBar: "from-orange-500 to-amber-600",
    glow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
  },
  {
    icon: School,
    label: "Division 4",
    title: "School Programs",
    count: 12,
    color: "text-sky-400",
    iconBg: "bg-sky-500/10 border-sky-500/20",
    accentBar: "from-sky-500 to-blue-600",
    glow: "group-hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]",
  },

];

const FeaturedCourses = () => {
  return (
    <section className="relative z-10 py-28 overflow-hidden bg-[#050816]/10">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#7C3AED]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A855F7] uppercase mb-4">
            Explore
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-wider sm:text-5xl mb-4">
            Our Course <span className="gradient-text">Divisions</span>
          </h2>
          <p className="text-[#E5E7EB]/70 text-sm md:text-base max-w-2xl mx-auto font-medium">
            Master in-demand technologies across four specialized divisions designed for real-world success.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {divisions.map((div, i) => {
            const Icon = div.icon;
            const isExternal = div.external;

            const cardClasses = `group relative flex flex-col h-full rounded-2xl border border-[#7C3AED]/12 bg-[#0F172A]/25 p-6 backdrop-blur-md transition-all duration-500 hover:border-[#A855F7]/30 hover:bg-[#0F172A]/40 ${div.glow} hover:-translate-y-1.5 overflow-hidden shadow-xl`;

            const cardContent = (
              <>
                {/* top accent bar */}
                <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${div.accentBar} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${div.iconBg} border transition-all duration-300 group-hover:scale-105`}>
                    <Icon className={`h-5.5 w-5.5 ${div.color} text-glow`} />
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest ${div.color}`}>
                    {div.label}
                  </span>
                </div>

                <h3 className="font-display text-base font-extrabold tracking-wider text-white mb-2 leading-snug">
                  {div.title}
                </h3>
                
                {div.desc ? (
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed font-medium">{div.desc}</p>
                ) : (
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed font-medium">{div.count} Specialized Modules</p>
                )}

                <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-[#A855F7] transition-colors duration-300 uppercase tracking-wider">
                  <span>Explore</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </>
            );

            return (
              <motion.div
                key={div.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="h-full"
              >
                {isExternal ? (
                  <a
                    href={div.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClasses}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <Link
                    to="/courses"
                    className={cardClasses}
                  >
                    {cardContent}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
