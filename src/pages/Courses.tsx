import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, TrendingUp, Cog, School, BookOpen, Star, Zap, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Course Data ────────────────────────────────────────────────────────────

const divisions = [
  {
    id: 0,
    label: "Division 1",
    title: "Arts & Science",
    icon: Palette,
    accentColor: "from-violet-500 to-purple-600",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    glowColor: "hover:shadow-[0_8px_40px_rgba(139,92,246,0.2)]",
    borderHover: "hover:border-violet-500/40",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    categories: [
      {
        name: "Core Courses",
        icon: BookOpen,
        courses: [
          "Communication & Soft Skills",
          "Personality Development",
          "Entrepreneurship",
          "Python Programming",
          "Cloud Computing & Azure",
          "Graphic Design & Photoshop",
          "Mobile App Development",
          "MATLAB & Photography",
        ],
      },
      {
        name: "Extra Courses",
        icon: Star,
        courses: [
          "Digital Marketing",
          "UI/UX Design",
          "Business Analytics",
          "Clinical Research",
          "BLS & ACLS",
          "Tally ERP",
          "FSSAI Certification",
        ],
      },
    ],
  },
  {
    id: 1,
    label: "Division 2",
    title: "Master Programs",
    icon: TrendingUp,
    accentColor: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    glowColor: "hover:shadow-[0_8px_40px_rgba(16,185,129,0.2)]",
    borderHover: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    categories: [
      {
        name: "Core Programs",
        icon: BookOpen,
        courses: [
          "Banking & Finance",
          "Stock Market",
          "Embedded Systems",
          "Robotics",
          "Networking & ALS",
        ],
      },
      {
        name: "Advanced",
        icon: Zap,
        courses: [
          "FinTech Innovations",
          "Advanced Robotics",
          "Cyber Security Management",
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Division 3",
    title: "Engineering & Technology",
    icon: Cog,
    accentColor: "from-orange-500 to-amber-600",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    glowColor: "hover:shadow-[0_8px_40px_rgba(249,115,22,0.2)]",
    borderHover: "hover:border-orange-500/40",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    categories: [
      {
        name: "Core Programs",
        icon: BookOpen,
        courses: [
          "EV & Vehicle Design",
          "Robotics & Automation",
          "Software Development",
          "AI & Machine Learning",
        ],
      },
      {
        name: "More Programs",
        icon: Zap,
        courses: [
          "HVAC & Electrical Design",
          "Plumbing & Firefighting Design",
          "Revit MEP Essentials",
          "V-Ray & Lumion Visualization",
          "Primavera Project Management",
          "PCB Design & Fabrication",
          "Solar PV System",
          "Smart Grid Technology",
          "3D Design & Printing",
          "Accounting Executive (AECP)",
          "Taxation Master (TMCP)",
          "Payroll Management",
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Division 4",
    title: "School Programs",
    icon: School,
    accentColor: "from-sky-500 to-blue-600",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    glowColor: "hover:shadow-[0_8px_40px_rgba(14,165,233,0.2)]",
    borderHover: "hover:border-sky-500/40",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
    categories: [
      {
        name: "All Programs",
        icon: BookOpen,
        courses: [
          "Robotics & Coding",
          "AI & Data Science",
          "IoT & Electronics",
          "Web Development & Apps",
          "Spoken English",
          "Game Development & VR",
          "MS Office",
          "Home Automation",
          "HTML/CSS/PHP",
          "Aptitude & Verbal Reasoning",
          "Art & Craft",
          "Advanced Data Science",
        ],
      },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const Courses = () => {
  const [activeTab, setActiveTab] = useState(0);
  const division = divisions[activeTab];
  const totalCourses = division.categories.reduce((s, c) => s + c.courses.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container px-4 sm:px-6">

          {/* ── Hero Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase mb-4">
              Our Programs
            </span>
            <h1 className="font-display text-4xl font-bold tracking-wider sm:text-5xl md:text-6xl gradient-text mb-4">
              Course Divisions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Industry-aligned programs across four specialized divisions — designed to bridge academia and real-world careers.
            </p>
          </motion.div>

          {/* ── Division Tab Selector ── */}
          <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map((div, i) => {
              const Icon = div.icon;
              const isActive = activeTab === i;
              const count = div.categories.reduce((s, c) => s + c.courses.length, 0);
              return (
                <motion.button
                  key={div.id}
                  onClick={() => setActiveTab(i)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className={`relative group flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-primary/50 bg-primary/10 shadow-[0_4px_24px_hsl(265_90%_60%/0.15)]"
                      : "border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card/80"
                  }`}
                >
                  {isActive && (
                    <div className={`absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-gradient-to-r ${div.accentColor}`} />
                  )}
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${div.iconBg}`}>
                    <Icon className={`h-5 w-5 ${div.iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-0.5 ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      {div.label}
                    </p>
                    <p className={`text-sm font-semibold leading-tight truncate ${isActive ? "text-foreground" : "text-foreground/80"}`}>
                      {div.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{count} courses</p>
                  </div>
                  {isActive && <ChevronRight className="ml-auto h-4 w-4 text-primary shrink-0" />}
                </motion.button>
              );
            })}
          </div>

          {/* ── Active Division Content ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {/* Division Header Banner */}
              <div className={`relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-r ${division.accentColor} p-6 sm:p-8`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_white_0%,_transparent_60%)]" />
                <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    <division.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">{division.label}</p>
                    <h2 className="text-white font-display text-2xl sm:text-3xl font-bold tracking-wider">{division.title}</h2>
                  </div>
                  <div className="sm:ml-auto flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 w-fit">
                    <BookOpen className="h-4 w-4 text-white" />
                    <span className="text-white text-sm font-semibold">{totalCourses} Courses</span>
                  </div>
                </div>
              </div>

              {/* Categories & Course Cards */}
              <div className="space-y-10">
                {division.categories.map((cat, catIdx) => {
                  const CatIcon = cat.icon;
                  return (
                    <motion.div
                      key={cat.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIdx * 0.1 }}
                    >
                      {/* Category Label */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${division.iconBg}`}>
                          <CatIcon className={`h-4 w-4 ${division.iconColor}`} />
                        </div>
                        <h3 className="font-display text-base font-semibold tracking-wider text-foreground">
                          {cat.name}
                        </h3>
                        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${division.badgeColor}`}>
                          {cat.courses.length}
                        </span>
                        <div className="flex-1 h-px bg-border/40" />
                      </div>

                      {/* Course Cards Grid */}
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {cat.courses.map((course, i) => (
                          <motion.div
                            key={course}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: catIdx * 0.1 + i * 0.04 }}
                            className={`group relative flex items-center gap-3 rounded-xl border border-border/50 bg-card/60 p-4 backdrop-blur-sm cursor-default
                              transition-all duration-300 ${division.borderHover} ${division.glowColor} hover:-translate-y-0.5`}
                          >
                            <div className={`h-2 w-2 rounded-full bg-gradient-to-br ${division.accentColor} shrink-0 
                              group-hover:scale-125 transition-transform duration-300`} />
                            <span className="text-sm font-medium text-foreground leading-snug">
                              {course}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
