import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, BarChart3, Bot, Code, Shield, Cloud, Gamepad2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courseData = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    courses: [
      "Introduction to AI", "Machine Learning with Python", "Deep Learning & Neural Networks",
      "Generative AI & ChatGPT Development", "AI for Business Applications",
      "AI in Healthcare", "AI in Finance", "AI in Education",
    ],
  },
  {
    category: "Data Science & Analytics",
    icon: BarChart3,
    courses: [
      "Data Science Master Program", "Python for Data Science", "Data Analytics with Power BI",
      "Tableau & Business Intelligence", "Big Data & Hadoop", "SQL for Data Analysis",
    ],
  },
  {
    category: "Robotics & Automation",
    icon: Bot,
    courses: [
      "Robotics Fundamentals", "Arduino Programming", "IoT & Embedded Systems",
      "Industrial Automation", "AI-Based Robotics", "Drone Technology & Programming",
    ],
  },
  {
    category: "Software Development",
    icon: Code,
    courses: [
      "Full Stack Web Development", "Frontend Development (HTML, CSS, JS, React)",
      "Backend Development (Node.js, Django)", "Mobile App Development",
      "Flutter Development", "Software Testing & Automation",
    ],
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    courses: [
      "Ethical Hacking", "Cybersecurity Fundamentals", "Network Security",
      "Penetration Testing", "Cloud Security",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    courses: [
      "AWS Cloud Computing", "Microsoft Azure", "Google Cloud Platform",
      "DevOps & CI/CD", "Kubernetes & Docker",
    ],
  },
  {
    category: "Emerging Technologies",
    icon: Gamepad2,
    courses: [
      "Blockchain Development", "Metaverse Development", "AR/VR Development",
      "UI/UX Design", "Digital Marketing with AI Tools",
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
              Master the most in-demand technologies with our comprehensive, industry-oriented curriculum
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
