import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, TrendingUp, Cog, School } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courseData = [
  {
    category: "Division 1 — Arts & Science",
    icon: Palette,
    courses: [
      "Communication & Soft Skills", "Personality Development", "Entrepreneurship",
      "Python Programming", "Cloud Computing & Azure", "Graphic Design & Photoshop",
      "Mobile App Development", "MATLAB & Photography",
      "Digital Marketing", "UI/UX Design", "Business Analytics",
    ],
  },
  {
    category: "Division 2 — Master Programs",
    icon: TrendingUp,
    courses: [
      "Banking & Finance", "Stock Market", "Embedded Systems",
      "Robotics", "Networking & ALS",
      "FinTech Innovations", "Advanced Robotics", "Cyber Security Management",
    ],
  },
  {
    category: "Division 3 — Engineering & Technology",
    icon: Cog,
    courses: [
      "EV & Vehicle Design", "Robotics & Automation", "Software Development",
      "AI & Machine Learning", "HVAC & Electrical Design", "Plumbing & Firefighting Design",
      "Revit MEP", "V-Ray & Lumion", "Primavera", "PCB Design",
      "Solar PV System", "Smart Grid", "3D Design & Printing",
      "Accounting Executive (AECP)", "Taxation Master (TMCP)", "Payroll Management",
    ],
  },
  {
    category: "Division 4 — School Programs",
    icon: School,
    courses: [
      "Robotics & Coding", "AI & Data Science", "IoT & Electronics",
      "Web Dev & Apps", "Spoken English", "Game Dev & VR",
    ],
  },
];

const Courses = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl font-bold tracking-wider sm:text-5xl gradient-text mb-4">
              Our Courses
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master in-demand technologies with our comprehensive, industry-oriented curriculum across four specialized divisions
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {courseData.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground box-glow"
                    : "border border-border/50 bg-card/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                <cat.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 flex items-center gap-3">
              {(() => {
                const Icon = courseData[activeTab].icon;
                return <Icon className="h-6 w-6 text-primary" />;
              })()}
              <h2 className="font-display text-xl font-semibold tracking-wider text-foreground">
                {courseData[activeTab].category}
              </h2>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {courseData[activeTab].courses.length} courses
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {courseData[activeTab].courses.map((course, i) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/30 hover:box-glow"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{course}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
