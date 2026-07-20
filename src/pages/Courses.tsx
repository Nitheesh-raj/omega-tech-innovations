import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Palette, TrendingUp, Cog, School, BookOpen, Star, Zap, ChevronRight, ChevronDown, 
  ArrowRight, Play, Check, Users, Target, Laptop, MessageSquare, User, Lightbulb, 
  Code, Cloud, Image as ImageIcon, Smartphone, Camera, Megaphone, Gamepad, Scissors, 
  Database, Home, LayoutDashboard, Brain, Car, Calculator, FileText, Receipt, 
  Wind, Droplet, Layers, Eye, Calendar, Sun, Landmark, Bot, Network, Coins, 
  ShieldAlert, FileCode, FileSpreadsheet, HeartPulse, ClipboardList, ShieldCheck,
  X, Sparkles, Award, ArrowUpRight, Cpu
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Extended Divisions Data ──────────────────────────────────────────────────
interface CourseDetail {
  name: string;
  icon: any;
  duration: string;
  level: string;
  description: string;
}

interface Category {
  name: string;
  icon: any;
  courses: CourseDetail[];
}

interface Division {
  id: number;
  label: string;
  title: string;
  icon: any;
  accentColor: string;
  textColor: string;
  badgeColor: string;
  borderHover: string;
  glowColor: string;
  iconBg: string;
  iconColor: string;
  description: string;
  image: string;
  categories: Category[];
  extraCourses: { name: string; icon: any; description: string }[];
}

const divisions: Division[] = [
  {
    id: 0,
    label: "Division 1",
    title: "Arts & Science",
    icon: Palette,
    accentColor: "from-purple-500 to-violet-600",
    textColor: "text-purple-400",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    glowColor: "shadow-[0_8px_40px_rgba(139,92,246,0.15)]",
    borderHover: "hover:border-purple-500/40",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    description: "Enhance your creativity, communication, and analytical skills for a strong foundation.",
    image: "/assets/div_arts_science.png",
    categories: [
      {
        name: "Core Courses",
        icon: BookOpen,
        courses: [
          { name: "Communication & Soft Skills", icon: MessageSquare, duration: "4 Weeks", level: "Beginner", description: "Master interpersonal communication, corporate ethics, and professional presentation skills. Includes mock interviews and verbal drills." },
          { name: "Personality Development", icon: User, duration: "3 Weeks", level: "Beginner", description: "Build self-confidence, body language, emotional intelligence, and learn to lead with empathy. Focuses on personal branding." },
          { name: "Entrepreneurship", icon: Lightbulb, duration: "6 Weeks", level: "Intermediate", description: "Learn business planning, startup validation, funding basics, and product-market fit strategies from industry experts." },
          { name: "Python Programming", icon: Code, duration: "8 Weeks", level: "Beginner", description: "Learn core Python programming including variables, loops, object-oriented concepts, and basic data structures." },
          { name: "Cloud Computing & Azure", icon: Cloud, duration: "8 Weeks", level: "Intermediate", description: "Introduction to cloud architecture, virtual machines, serverless computing, database hosting, and Azure administration." },
          { name: "Graphic Design & Photoshop", icon: ImageIcon, duration: "6 Weeks", level: "Beginner", description: "Learn photoshop tools, masking, color theory, layout design, typography, and premium UI asset generation." },
          { name: "Mobile App Development", icon: Smartphone, duration: "10 Weeks", level: "Advanced", description: "Build beautiful iOS & Android apps using React Native, UI components, state management, and external API integrations." },
          { name: "MATLAB & Photography", icon: Camera, duration: "6 Weeks", level: "Intermediate", description: "Master numerical computation with MATLAB paired with digital photography techniques and image processing." },
        ],
      }
    ],
    extraCourses: [
      { name: "Digital Marketing", icon: Megaphone, description: "SEO, SEM, Social Media marketing, and data analytics dashboards." },
      { name: "UI/UX Design", icon: Sparkles, description: "Framer, Figma prototyping, user research, wireframing, and visual system creation." },
      { name: "Business Analytics", icon: TrendingUp, description: "SQL, Excel data models, and interactive Tableau dashboards." },
      { name: "Clinical Research", icon: Database, description: "Drug development phases, clinical trials guidelines, and FDA compliance protocols." },
      { name: "BLS & ACLS", icon: HeartPulse, description: "Basic Life Support and Advanced Cardiac Life Support emergency techniques." },
      { name: "Tally ERP", icon: ClipboardList, description: "GST compliance, enterprise accounting, payroll management, and bookkeeping." },
      { name: "FSSAI Certification", icon: ShieldCheck, description: "Food safety standards regulations, quality auditing, and food safety management systems." }
    ]
  },
  {
    id: 1,
    label: "Division 2",
    title: "Master Programs",
    icon: TrendingUp,
    accentColor: "from-emerald-500 to-teal-600",
    textColor: "text-emerald-400",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    glowColor: "shadow-[0_8px_40px_rgba(16,185,129,0.15)]",
    borderHover: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    description: "Advanced programs for deep expertise and professional growth.",
    image: "/assets/div_masters.png",
    categories: [
      {
        name: "Core Programs",
        icon: BookOpen,
        courses: [
          { name: "Banking & Finance", icon: Landmark, duration: "12 Weeks", level: "Advanced", description: "Learn commercial banking operations, investment management, and corporate financial analysis." },
          { name: "Stock Market", icon: TrendingUp, duration: "8 Weeks", level: "Intermediate", description: "Technical and fundamental stock market analysis, options trading, risk management, and portfolio strategy." },
          { name: "Embedded Systems", icon: Cpu, duration: "10 Weeks", level: "Intermediate", description: "Microcontroller programming, hardware interfacing, RTOS principles, and firmware optimization." },
          { name: "Robotics", icon: Bot, duration: "12 Weeks", level: "Intermediate", description: "Design robotic mechanics, kinematics analysis, sensor integration, and micro-controller command loops." },
          { name: "Networking & ALS", icon: Network, duration: "8 Weeks", level: "Intermediate", description: "Core IP networking, routing tables, switch setup, subnetting, and advanced logical systems." },
        ],
      }
    ],
    extraCourses: [
      { name: "FinTech Innovations", icon: Coins, description: "Blockchain technology, digital banking structures, smart contracts, and decentralized finance." },
      { name: "Advanced Robotics", icon: Bot, description: "ROS programming, robot arm kinematics, and autonomous pathfinding algorithms." },
      { name: "Cyber Security Management", icon: ShieldAlert, description: "Threat vectors analysis, network penetration testing, and security policy frameworks." }
    ]
  },
  {
    id: 2,
    label: "Division 3",
    title: "Engineering & Technology",
    icon: Cog,
    accentColor: "from-orange-500 to-amber-600",
    textColor: "text-orange-400",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    glowColor: "shadow-[0_8px_40px_rgba(249,115,22,0.15)]",
    borderHover: "hover:border-orange-500/40",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    description: "Learn cutting-edge technologies and build solutions for the future.",
    image: "/assets/div_engineering.png",
    categories: [
      {
        name: "Core Programs",
        icon: BookOpen,
        courses: [
          { name: "EV & Vehicle Design", icon: Car, duration: "16 Weeks", level: "Intermediate", description: "Electric vehicle powertrain design, battery cell management system, and structural safety modeling." },
          { name: "Robotics & Automation", icon: Cog, duration: "14 Weeks", level: "Advanced", description: "Industrial automation control loops, PLC programming, robotic arm interfaces, and automation hardware." },
          { name: "Software Development", icon: Code, duration: "12 Weeks", level: "Intermediate", description: "Full-stack software development principles, databases, APIs, and modern deployment strategies." },
          { name: "AI & Machine Learning", icon: Brain, duration: "16 Weeks", level: "Advanced", description: "Deep neural networks, computer vision, natural language processing, and model training pipelines." },
        ],
      }
    ],
    extraCourses: [
      { name: "HVAC & Electrical Design", icon: Wind, description: "Heating, ventilation, air conditioning system engineering and electrical load calculations." },
      { name: "Plumbing & Firefighting Design", icon: Droplet, description: "Hydraulics flow calculations, building safety plumbing codes, and firefighting network design." },
      { name: "Revit MEP Essentials", icon: Layers, description: "3D BIM modeling for mechanical, electrical, and plumbing engineering drafting." },
      { name: "V-Ray & Lumion Visualization", icon: Eye, description: "Photorealistic architectural rendering and landscape design visualization." },
      { name: "Primavera Project Management", icon: Calendar, description: "Gantt charts, critical path scheduling, resource leveling, and project management control." },
      { name: "PCB Design & Fabrication", icon: Cpu, description: "Schematic capture, board routing patterns, and industrial PCB fabrication assembly." },
      { name: "Solar PV System", icon: Sun, description: "Solar farm sizing, inverter selection, and photovoltaic array grid connections." },
      { name: "Smart Grid Technology", icon: Zap, description: "Modern electricity grid automation, microgrids distribution, and smart metering devices." },
      { name: "3D Design & Printing", icon: BoxOpenIcon, description: "CAD modeling, slicing software calibration, and additive manufacturing techniques." },
      { name: "Accounting Executive (AECP)", icon: Calculator, description: "Corporate corporate tax filings, balance sheet analysis, and financial reporting audits." },
      { name: "Taxation Master (TMCP)", icon: FileText, description: "Direct and indirect taxes codes, income tax audits, and corporate tax structuring." },
      { name: "Payroll Management", icon: Receipt, description: "Employee salaries processing, benefits allocation, and regulatory compliance reporting." }
    ]
  },
  {
    id: 3,
    label: "Division 4",
    title: "School Programs",
    icon: School,
    accentColor: "from-blue-500 to-sky-600",
    textColor: "text-blue-400",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    glowColor: "shadow-[0_8px_40px_rgba(59,130,246,0.15)]",
    borderHover: "hover:border-blue-500/40",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    description: "Empowering school students with practical skills and knowledge.",
    image: "/assets/div_school.png",
    categories: [
      {
        name: "All Programs",
        icon: BookOpen,
        courses: [
          { name: "Robotics & Coding", icon: Bot, duration: "8 Weeks", level: "Beginner", description: "Introduction to logical coding loops and simple robotics hardware assembly for kids." },
          { name: "AI & Data Science", icon: Brain, duration: "8 Weeks", level: "Beginner", description: "Fun, kid-friendly introduction to data gathering, sorting, and AI predictions." },
          { name: "IoT & Electronics", icon: RadioIcon, duration: "8 Weeks", level: "Beginner", description: "Smart bulbs, sensors, and basic circuits prototyping with Arduino." },
          { name: "Web Development & Apps", icon: Laptop, duration: "10 Weeks", level: "Beginner", description: "Introduction to HTML, CSS, and basic JavaScript to build personal portfolios." },
          { name: "Spoken English", icon: MessageSquare, duration: "6 Weeks", level: "Beginner", description: "Conversational English, public speaking games, and social dialogue drills." },
          { name: "Gamepad & VR Development", icon: Gamepad, duration: "10 Weeks", level: "Beginner", description: "Build 2D arcade games and explore spatial VR virtual environments." },
          { name: "MS Office Essentials", icon: FileSpreadsheet, duration: "4 Weeks", level: "Beginner", description: "Word formatting, Excel charts, PowerPoint slides, and documentation shortcuts." },
          { name: "Home Automation for Kids", icon: Home, duration: "8 Weeks", level: "Beginner", description: "Build simple voice-controlled switches and automated smart projects." },
          { name: "HTML/CSS/PHP Basics", icon: FileCode, duration: "8 Weeks", level: "Beginner", description: "Learn the core markup and scripting language powering the classic web." },
          { name: "Aptitude & Verbal Reasoning", icon: ShieldAlert, duration: "6 Weeks", level: "Beginner", description: "Puzzles, patterns analysis, analytical logical thinking, and verbal comprehension." },
          { name: "Art & Craft", icon: Scissors, duration: "4 Weeks", level: "Beginner", description: "Origami, structure crafts, paper designs, and coloring fundamentals." },
          { name: "Advanced Data Science Basics", icon: Database, duration: "10 Weeks", level: "Intermediate", description: "Introduction to python tables, visualization plots, and relational tables." },
        ],
      }
    ],
    extraCourses: []
  },
];

// Helper components for local elements
function BoxOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function RadioIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="2" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M7.76 16.24a6 6 0 0 1 0-8.49" />
      <path d="M4.93 19.07a10 10 0 0 1 0-14.14" />
    </svg>
  );
}

const Courses = () => {
  const navigate = useNavigate();
  const [selectedDivisionId, setSelectedDivisionId] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"overview" | "detail">("overview");
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [expandedExtra, setExpandedExtra] = useState<string | null>(null);
  
  // Modals state
  const [demoOpen, setDemoOpen] = useState(false);
  const [recommendOpen, setRecommendOpen] = useState(false);

  // AI Recommend wizard states
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardRole, setWizardRole] = useState<string>("");
  const [wizardInterest, setWizardInterest] = useState<string>("");
  const [isWizardAnalyzing, setIsWizardAnalyzing] = useState(false);
  const [recommendedCourse, setRecommendedCourse] = useState<any>(null);

  const activeDivision = divisions[selectedDivisionId];
  const totalCoursesCount = activeDivision.categories.reduce((s, c) => s + c.courses.length, 0) + activeDivision.extraCourses.length;

  useEffect(() => {
    document.title = "Courses | OMEGA TECH - Premium Futurist Training";
    window.scrollTo(0, 0);
  }, []);

  const selectDivision = (id: number) => {
    setSelectedDivisionId(id);
    setExpandedCourse(null);
    setExpandedExtra(null);
    setViewMode("detail");
    
    // Smooth scroll down to detailed section in desktop
    if (window.innerWidth >= 1024) {
      const el = document.getElementById("detailed-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleRecommendWizard = () => {
    setRecommendOpen(true);
    setWizardStep(1);
    setWizardRole("");
    setWizardInterest("");
    setRecommendedCourse(null);
  };

  const runRecommendationEngine = () => {
    setIsWizardAnalyzing(true);
    setWizardStep(3);
    setTimeout(() => {
      // Logic to pick a matched course based on inputs
      let match = null;
      if (wizardRole === "School Student") {
        match = {
          name: "Robotics & Coding (School Programs)",
          compatibility: "98%",
          description: "An engaging beginner program designed specifically to teach school students computational thinking and hands-on circuits.",
          tag: "Division 4",
          color: "from-blue-500 to-sky-500"
        };
      } else if (wizardInterest === "Coding" || wizardInterest === "AI & Tech") {
        match = {
          name: "AI & Machine Learning (Engineering & Tech)",
          compatibility: "96%",
          description: "Our advanced engineering specialisation covering deep learning pipelines, computer vision systems, and analytics models.",
          tag: "Division 3",
          color: "from-orange-500 to-amber-500"
        };
      } else if (wizardInterest === "Design") {
        match = {
          name: "UI/UX Design (Arts & Science Extra)",
          compatibility: "97%",
          description: "Immersive program exploring user empathy maps, grid design systems, interactive prototyping, and Framer portfolios.",
          tag: "Division 1",
          color: "from-purple-500 to-violet-500"
        };
      } else {
        match = {
          name: "Banking & Finance (Master Programs)",
          compatibility: "94%",
          description: "A comprehensive course focusing on fintech structures, stock evaluations, risk pricing models, and asset charts.",
          tag: "Division 2",
          color: "from-emerald-500 to-teal-500"
        };
      }
      setRecommendedCourse(match);
      setIsWizardAnalyzing(false);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#070B18] text-[#E5E7EB] relative font-sans overflow-x-hidden selection:bg-[#7C3AED]/30 selection:text-white pb-24 md:pb-0 overflow-x-hidden">
      <Navbar />

      {/* ── Ambient Glowing Lighting ── */}
      <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full bg-[#7C3AED]/12 blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#3B82F6]/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[550px] h-[550px] rounded-full bg-[#A855F7]/8 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[2%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#10B981]/6 blur-[120px] pointer-events-none z-0" />

      <main className="pt-28 pb-20 relative z-10 px-4 sm:px-6 max-w-7xl mx-auto">
        
        {/* ── Hero Section ── */}
        <section className="mb-20 md:mb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse shadow-[0_0_8px_#A855F7]" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#E5E7EB]/80">
                OMEGA TECH ACADEMY
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white leading-[1.1]"
            >
              Build Skills.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A855F7] via-[#7C3AED] to-[#3B82F6] text-glow font-extrabold">
                Shape Your Future.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed"
            >
              Industry-aligned programs designed across specialized divisions — structured to bridge the gap between academic education and global careers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                id="cta-explore"
                onClick={() => {
                  const el = document.getElementById("divisions-grid");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="relative group overflow-hidden px-6.5 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white transition-transform hover:scale-[1.03]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] transition-transform duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#A855F7] to-[#7C3AED] transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Divisions <ArrowRight className="h-4.5 w-4.5" />
                </span>
              </button>

              <button
                id="cta-demo"
                onClick={() => setDemoOpen(true)}
                className="group px-6.5 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] backdrop-blur-md transition-all flex items-center gap-2 hover:scale-[1.03]"
              >
                <Play className="h-4 w-4 text-[#A855F7] fill-[#A855F7] group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Animated glowing neon rings background */}
            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-purple-500/20 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-[#3B82F6]/10 animate-[spin_25s_linear_infinite_reverse] border-dashed" />
            <div className="absolute w-[180px] h-[180px] rounded-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] opacity-[0.06] blur-2xl animate-pulse" />

            {/* Glowing developer floating icons */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 left-12 p-2.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-lg"
            >
              <Code className="h-4.5 w-4.5 text-purple-400" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-16 right-10 p-2.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-lg"
            >
              <Cloud className="h-4.5 w-4.5 text-blue-400" />
            </motion.div>

            <motion.div 
              animate={{ x: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-36 right-12 p-2.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-lg"
            >
              <Brain className="h-4.5 w-4.5 text-orange-400" />
            </motion.div>

            {/* Floating student illustration */}
            <motion.img
              src="/assets/courses_hero_student.png"
              alt="Omega Tech Student"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-[260px] sm:w-[340px] h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(124,58,237,0.35)]"
            />
          </motion.div>
        </section>

        {/* ── Desktop & Mobile Responsive Grid Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT AREA: Selected Division details on desktop OR switchable block on Mobile */}
          <section id="detailed-section" className={`lg:col-span-7 space-y-10 ${viewMode === "detail" ? "block" : "hidden lg:block"}`}>
            
            {/* If Mobile view detail is active, display a header card to let user go back */}
            {viewMode === "detail" && (
              <div className="lg:hidden flex items-center mb-6">
                <button
                  id="btn-back-overview"
                  onClick={() => setViewMode("overview")}
                  className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight className="h-4 w-4 rotate-180" /> Back to Divisions
                </button>
              </div>
            )}

            {/* Active Division Summary Header Card */}
            <motion.div
              layoutId={`div-banner-${activeDivision.id}`}
              className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${activeDivision.accentColor} p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-6`}
            >
              {/* Radial subtle white glow inside */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_65%)]" />
              <div className="absolute inset-0 bg-[#070B18]/15 z-0" />

              <div className="relative z-10 space-y-4 text-left flex-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white border border-white/10">
                  <activeDivision.icon className="h-3.5 w-3.5" />
                  {activeDivision.label}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight font-display">
                  {activeDivision.title}
                </h2>
                <p className="text-white/80 text-sm leading-relaxed max-w-md font-medium">
                  {activeDivision.description}
                </p>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase text-white shadow-sm border border-white/5">
                  <BookOpen className="h-3.5 w-3.5" />
                  {totalCoursesCount} Courses Available
                </div>
              </div>

              {/* Banner Visual Asset */}
              <img
                src={activeDivision.image}
                alt={activeDivision.title}
                className="w-[140px] md:w-[170px] h-auto object-contain relative z-10 select-none drop-shadow-2xl md:translate-y-2"
              />
            </motion.div>

            {/* Core Courses Accordion */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className={`h-8.5 w-8.5 rounded-xl ${activeDivision.iconBg} flex items-center justify-center border border-white/5`}>
                    <BookOpen className={`h-4.5 w-4.5 ${activeDivision.iconColor}`} />
                  </div>
                  <h3 className="font-display text-sm font-extrabold tracking-wider uppercase text-white">
                    CORE COURSES
                  </h3>
                  <span className={`text-[10px] font-extrabold px-2.5 py-1.5 rounded-full border ${activeDivision.badgeColor}`}>
                    {activeDivision.categories[0].courses.length}
                  </span>
                </div>
              </div>

              {/* Customizable Accordion Rows */}
              <div className="space-y-3.5">
                {activeDivision.categories[0].courses.map((course, idx) => {
                  const CourseIcon = course.icon;
                  const isExpanded = expandedCourse === course.name;
                  
                  return (
                    <div 
                      key={course.name}
                      className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isExpanded 
                          ? "border-[#7C3AED]/40 bg-white/[0.03] shadow-[0_10px_30px_rgba(124,58,237,0.08)]"
                          : "border-white/[0.06] bg-[#0E1325]/40 hover:border-white/[0.12] hover:bg-white/[0.015]"
                      }`}
                    >
                      <button
                        onClick={() => setExpandedCourse(isExpanded ? null : course.name)}
                        className="w-full flex items-center gap-4 p-5 text-left transition-colors"
                      >
                        <div className={`h-10 w-10 shrink-0 rounded-xl flex items-center justify-center transition-all ${
                          isExpanded 
                            ? "bg-[#7C3AED] text-white" 
                            : `bg-white/[0.03] text-slate-400 group-hover:text-white group-hover:bg-white/[0.06] border border-white/[0.05]`
                        }`}>
                          <CourseIcon className="h-4.5 w-4.5" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-extrabold uppercase tracking-widest mb-0.5 ${
                            isExpanded ? activeDivision.textColor : "text-slate-500"
                          }`}>
                            MODULE {idx + 1}
                          </p>
                          <h4 className="text-sm font-bold text-white tracking-wide truncate">
                            {course.name}
                          </h4>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="hidden sm:inline-block text-[10px] font-extrabold uppercase tracking-widest text-slate-500 bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded-md">
                            {course.duration}
                          </span>
                          <div className={`p-1.5 rounded-lg border transition-transform duration-300 ${
                            isExpanded 
                              ? "bg-[#7C3AED]/15 border-[#7C3AED]/35 text-[#7C3AED] rotate-180" 
                              : "bg-white/[0.03] border-white/5 text-slate-400"
                          }`}>
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-5 pb-5 pt-1 text-slate-350 border-t border-white/[0.05] text-xs leading-relaxed space-y-4 bg-white/[0.005]">
                              <p className="font-medium text-slate-300 text-sm">
                                {course.description}
                              </p>
                              
                              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/[0.03] text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                <div>
                                  <span className="text-slate-500 block mb-1">PROGRAM LEVEL:</span>
                                  <span className="text-[#A855F7]">{course.level}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 block mb-1">DURATION:</span>
                                  <span className="text-white">{course.duration}</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Banner Upgrade Card inside detail section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-gradient-to-br from-[#0F1325]/85 to-[#070B18]/95 p-8 shadow-2xl flex flex-col md:flex-row items-center gap-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.1),transparent_50%)]" />
              
              <div className="relative z-10 space-y-4 text-left flex-1">
                <h3 className="text-2xl font-extrabold tracking-tight text-white font-display">
                  Upgrade Your Skills.<br />
                  <span className="text-[#A855F7] text-glow">Accelerate Your Career.</span>
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                  Explore our wide range of expert-led courses and projects to build practical portfolios and stay future-ready.
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById("divisions-grid");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7C3AED]/10 hover:bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-xs font-bold uppercase tracking-widest text-[#A855F7] hover:text-white transition-all hover:scale-[1.02]"
                >
                  Explore All Courses 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <img
                src="/assets/banner_upgrade.png"
                alt="Upgrade Skills Rocket"
                className="w-[150px] md:w-[190px] h-auto object-contain relative z-10 drop-shadow-[0_15px_30px_rgba(124,58,237,0.2)]"
              />
            </motion.div>

            {/* Extra Courses Section (if any are available in this division) */}
            {activeDivision.extraCourses.length > 0 && (
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className={`h-8.5 w-8.5 rounded-xl ${activeDivision.iconBg} flex items-center justify-center border border-white/5`}>
                    <Star className={`h-4.5 w-4.5 ${activeDivision.iconColor}`} />
                  </div>
                  <h3 className="font-display text-sm font-extrabold tracking-wider uppercase text-white">
                    EXTRA COURSES
                  </h3>
                  <span className="text-[10px] font-extrabold px-2.5 py-1.5 rounded-full border bg-white/[0.04] border-white/10 text-white/80">
                    {activeDivision.extraCourses.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeDivision.extraCourses.map((course) => {
                    const CourseIcon = course.icon;
                    const isExpanded = expandedExtra === course.name;
                    return (
                      <motion.div
                        layout
                        key={course.name}
                        className={`rounded-2xl border p-4.5 text-left transition-all ${
                          isExpanded 
                            ? "border-purple-500/40 bg-purple-500/5" 
                            : "border-white/[0.06] bg-[#0E1325]/30 hover:border-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-xl bg-purple-500/10 border border-purple-500/15 flex items-center justify-center text-purple-400">
                              <CourseIcon className="h-4.5 w-4.5" />
                            </div>
                            <h4 className="text-sm font-bold text-white tracking-wide">
                              {course.name}
                            </h4>
                          </div>

                          <button
                            onClick={() => setExpandedExtra(isExpanded ? null : course.name)}
                            className="p-1 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                          >
                            <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180 text-purple-400" : ""}`} />
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <p className="text-slate-400 text-xs leading-relaxed mt-3 pt-3 border-t border-white/[0.04] font-medium">
                                {course.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

          </section>

          {/* RIGHT AREA: Divisions hub selector, Stats grid, recommendation widget */}
          <section id="divisions-grid" className={`lg:col-span-5 space-y-10 ${viewMode === "overview" ? "block" : "hidden lg:block"}`}>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-black tracking-tight text-white font-display uppercase">
                All Divisions
              </h2>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                Choose a division below to explore industry-aligned modules, syllabus structures, and project counts.
              </p>
            </div>

            {/* 4 Division Selection Cards */}
            <div className="space-y-5">
              {divisions.map((div) => {
                const DivIcon = div.icon;
                const isSelected = selectedDivisionId === div.id;
                const count = div.categories[0].courses.length + div.extraCourses.length;
                
                return (
                  <motion.div
                    key={div.id}
                    layoutId={`div-card-${div.id}`}
                    whileHover={{ y: -3, scale: 1.01 }}
                    onClick={() => selectDivision(div.id)}
                    className={`relative cursor-pointer rounded-[28px] p-6 border transition-all backdrop-blur-md overflow-hidden ${
                      isSelected
                        ? "border-[#7C3AED]/65 bg-[#0E1325]/85 " + div.glowColor
                        : "border-white/[0.06] bg-[#0E1325]/45 hover:border-white/15"
                    }`}
                  >
                    {/* Glowing Accent Indicator Bar inside active selection card */}
                    {isSelected && (
                      <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${div.accentColor}`} />
                    )}

                    <div className="flex gap-5 items-center">
                      {/* Left: icon & details info */}
                      <div className="flex-1 space-y-3.5 text-left">
                        <div className="flex items-center gap-2">
                          <div className={`h-8.5 w-8.5 rounded-xl ${div.iconBg} flex items-center justify-center`}>
                            <DivIcon className={`h-4.5 w-4.5 ${div.iconColor}`} />
                          </div>
                          <span className={`text-[10px] font-extrabold uppercase tracking-widest ${div.textColor}`}>
                            {div.label}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-white tracking-wide font-display">
                            {div.title}
                          </h3>
                          <p className="text-slate-505 text-xs font-semibold mt-1">
                            {count} Courses
                          </p>
                        </div>

                        <p className="text-slate-400 text-xs leading-relaxed max-w-xs truncate font-medium">
                          {div.description}
                        </p>
                      </div>

                      {/* Right: Illustration & circular arrow btn */}
                      <div className="flex flex-col items-end justify-between self-stretch shrink-0">
                        {/* 3D graphic image preview */}
                        <img
                          src={div.image}
                          alt={div.title}
                          className="h-[65px] w-auto object-contain select-none filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform"
                        />

                        {/* Circular Arrow Action trigger */}
                        <div className={`h-8 w-8 rounded-full border flex items-center justify-center transition-all ${
                          isSelected 
                            ? "bg-[#7C3AED]/20 border-[#7C3AED]/60 text-white" 
                            : "bg-white/[0.03] border-white/5 text-slate-400 group-hover:text-white"
                        }`}>
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Statistics Section Grid */}
            <div className="space-y-6 pt-4">
              <h3 className="text-base font-extrabold tracking-wider uppercase text-white font-display text-left">
                Academy Statistics
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "4", label: "Divisions", desc: "Specialized tech paths", icon: Layers, border: "border-purple-500/10 text-purple-400" },
                  { value: "41+", label: "Courses", desc: "Professional modules", icon: BookOpen, border: "border-blue-500/10 text-blue-400" },
                  { value: "1000+", label: "Students", desc: "Trained & placed", icon: Users, border: "border-emerald-500/10 text-emerald-400" },
                  { value: "Expert", label: "Trainers", desc: "Industry mentors", icon: Award, border: "border-orange-500/10 text-orange-400" },
                ].map((stat, i) => {
                  const StatIcon = stat.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className={`p-5 rounded-2xl border bg-[#0E1325]/35 border-white/[0.04] text-left hover:bg-white/[0.005] transition-colors`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-black text-white font-display">
                          {stat.value}
                        </span>
                        <StatIcon className={`h-4 w-4 text-slate-500`} />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-355">
                        {stat.label}
                      </p>
                      <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                        {stat.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* AI Recommendation Card Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-[#0E1325]/45 p-6 md:p-8 flex gap-6 items-center shadow-xl"
            >
              {/* Concentric rings backing target */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(59,130,246,0.06),transparent_60%)]" />

              <div className="flex-1 text-left space-y-4 z-10 relative">
                <h3 className="text-lg font-bold text-white tracking-wide font-display">
                  Not Sure Which Course?
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed max-w-xs font-medium">
                  Take our interactive AI-powered compatibility assessment to find the program matching your career goals.
                </p>
                <button
                  id="btn-recommend-wizard"
                  onClick={handleRecommendWizard}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7C3AED]/15 hover:bg-[#7C3AED]/25 border border-[#7C3AED]/35 text-xs font-bold uppercase tracking-widest text-[#A855F7] hover:text-white transition-all"
                >
                  Find Your Course
                  <Sparkles className="h-3.5 w-3.5 text-[#A855F7] group-hover:scale-110 transition-transform animate-pulse" />
                </button>
              </div>

              {/* Glowing SVG Target Dartboard graphic */}
              <div className="relative shrink-0 w-[95px] h-[95px] flex items-center justify-center">
                {/* Concentric gradient circles */}
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-ping opacity-35" />
                
                <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" viewBox="0 0 100 100">
                  {/* Outer ring */}
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(124, 58, 237, 0.25)" strokeWidth="4" />
                  {/* Middle ring */}
                  <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(59, 130, 246, 0.35)" strokeWidth="4" />
                  {/* Inner ring */}
                  <circle cx="50" cy="50" r="18" fill="none" stroke="rgba(124, 58, 237, 0.5)" strokeWidth="4" />
                  {/* Bullseye */}
                  <circle cx="50" cy="50" r="6" fill="#3B82F6" className="animate-pulse" />
                  
                  {/* Metallic Dart Arrow striking the center */}
                  <g transform="translate(50, 50) rotate(-45)">
                    <line x1="0" y1="0" x2="35" y2="35" stroke="#E5E7EB" strokeWidth="2.5" strokeLinecap="round" />
                    <polygon points="0,0 -8,-2 -2,-8" fill="#3B82F6" />
                    {/* Feather flights */}
                    <polygon points="35,35 32,45 28,41" fill="#7C3AED" />
                    <polygon points="35,35 45,32 41,28" fill="#7C3AED" />
                  </g>
                </svg>
              </div>
            </motion.div>

          </section>

        </div>

      </main>

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── Bottom Navigation Float (Mobile Viewport only) ── */}
      <div className="fixed bottom-4 inset-x-0 z-50 px-4 md:hidden">
        <div className="max-w-md mx-auto rounded-full bg-black/45 backdrop-blur-xl border border-white/[0.08] px-6 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex items-center justify-between">
          <Link
            to="/"
            className="flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white"
          >
            <Home className="h-4.5 w-4.5" />
            Home
          </Link>

          <button
            onClick={() => {
              setViewMode("overview");
              window.scrollTo({ top: 300, behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#A855F7] text-glow relative"
          >
            <BookOpen className="h-4.5 w-4.5" />
            Courses
            {/* Glowing active indicator dot */}
            <span className="absolute -bottom-1 w-1 h-1 bg-[#A855F7] rounded-full shadow-[0_0_6px_#A855F7]" />
          </button>

          <button
            onClick={() => alert("This demo Dashboard interface is under construction!")}
            className="flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white"
          >
            <LayoutDashboard className="h-4.5 w-4.5" />
            Dashboard
          </button>

          <button
            onClick={() => alert("The User Profile section is coming soon in the next release!")}
            className="flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white"
          >
            <User className="h-4.5 w-4.5" />
            Profile
          </button>
        </div>
      </div>

      {/* ── WATCH DEMO VIDEO DIALOG MODAL ── */}
      <AnimatePresence>
        {demoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDemoOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl rounded-[32px] border border-white/[0.08] bg-[#0E1325] p-6 shadow-2xl z-10 overflow-hidden"
            >
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => setDemoOpen(false)}
                  className="p-2 rounded-full bg-white/[0.05] border border-white/5 hover:border-white/15 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Glowing header banner inside popup */}
              <div className="mb-6 space-y-1">
                <div className="flex items-center gap-2 text-[#A855F7] text-[10px] font-extrabold uppercase tracking-widest">
                  <Play className="h-3 w-3 fill-current" /> Omega Tech Tour
                </div>
                <h3 className="text-xl font-bold text-white font-display text-left">
                  Syllabus Overview & Facilities Tour
                </h3>
              </div>

              {/* Video Mock Canvas Player */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/5 group flex items-center justify-center">
                {/* Visual grid backing */}
                <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                
                {/* Glowing neon ring vector inside simulation player */}
                <div className="absolute w-24 h-24 rounded-full bg-[#7C3AED]/20 blur-xl animate-pulse" />
                
                {/* Simulated play state */}
                <div className="text-center space-y-4 z-10 px-6">
                  <div className="h-16 w-16 mx-auto rounded-full bg-[#7C3AED] hover:bg-[#A855F7] text-white flex items-center justify-center cursor-pointer shadow-lg shadow-[#7C3AED]/30 transition-transform hover:scale-105">
                    <Play className="h-7 w-7 fill-white translate-x-0.5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Interactive Streaming Demo</p>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                      Click to stream the presentation covering our labs, project cohorts, and corporate tie-ups.
                    </p>
                  </div>
                </div>

                {/* Stream controls mock overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                  <span>00:00 / 03:45</span>
                  <span>HD 1080P</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── AI RECOMMENDATION WIZARD DIALOG MODAL ── */}
      <AnimatePresence>
        {recommendOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setRecommendOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg rounded-[32px] border border-white/[0.08] bg-[#0E1325] p-8 shadow-2xl z-10 overflow-hidden"
            >
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => setRecommendOpen(false)}
                  className="p-2 rounded-full bg-white/[0.05] border border-white/5 hover:border-white/15 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Wizard Content Step Manager */}
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Select Profile */}
                {wizardStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6 text-left"
                  >
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1 text-[#A855F7] text-[10px] font-extrabold uppercase tracking-widest">
                        <Sparkles className="h-3 w-3" /> Step 1 of 2
                      </div>
                      <h3 className="text-xl font-bold text-white font-display">
                        Tell us about yourself
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        What is your current occupational background? We tailor curricula for different age groups.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        "School Student",
                        "College Student / Graduate",
                        "Working Tech Professional",
                        "Looking to Switch Careers"
                      ].map((role) => (
                        <button
                          key={role}
                          onClick={() => setWizardRole(role)}
                          className={`w-full p-4 rounded-xl border text-left text-xs font-bold tracking-wide transition-all flex items-center justify-between ${
                            wizardRole === role
                              ? "bg-[#7C3AED]/15 border-[#7C3AED]/60 text-white"
                              : "bg-white/[0.02] border-white/5 text-slate-350 hover:bg-white/[0.04] hover:border-white/10"
                          }`}
                        >
                          {role}
                          {wizardRole === role && (
                            <Check className="h-4.5 w-4.5 text-[#A855F7]" />
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        disabled={!wizardRole}
                        onClick={() => setWizardStep(2)}
                        className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-[#7C3AED] hover:bg-[#A855F7] disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed transition-all shadow-lg shadow-[#7C3AED]/15"
                      >
                        Continue
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Select Area of Interest */}
                {wizardStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6 text-left"
                  >
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1 text-[#A855F7] text-[10px] font-extrabold uppercase tracking-widest">
                        <Sparkles className="h-3 w-3" /> Step 2 of 2
                      </div>
                      <h3 className="text-xl font-bold text-white font-display">
                        Choose your primary interest
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        Select the technology stack or creative domain you want to master.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Coding & Dev", val: "Coding", icon: Code },
                        { label: "Design & UX", val: "Design", icon: Palette },
                        { label: "AI & Data Tech", val: "AI & Tech", icon: Brain },
                        { label: "Business Management", val: "Management", icon: Landmark },
                      ].map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <button
                            key={item.val}
                            onClick={() => setWizardInterest(item.val)}
                            className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-28 ${
                              wizardInterest === item.val
                                ? "bg-[#7C3AED]/15 border-[#7C3AED]/65 text-white"
                                : "bg-white/[0.02] border-white/5 text-slate-400 hover:bg-white/[0.04] hover:border-white/10"
                            }`}
                          >
                            <ItemIcon className="h-5 w-5 text-slate-400" />
                            <span className="text-xs font-bold tracking-wide text-left">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex gap-4 pt-2">
                      <button
                        onClick={() => setWizardStep(1)}
                        className="flex-1 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-slate-350 border border-white/5 hover:bg-white/5 transition-all"
                      >
                        Back
                      </button>
                      <button
                        disabled={!wizardInterest}
                        onClick={runRecommendationEngine}
                        className="flex-1 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-[#7C3AED] hover:bg-[#A855F7] disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed transition-all shadow-lg"
                      >
                        Generate Match
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Analysis Spinner and Match Output */}
                {wizardStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-6"
                  >
                    {isWizardAnalyzing ? (
                      <div className="space-y-6">
                        {/* Custom futuristic scanning animation */}
                        <div className="relative h-20 w-20 mx-auto flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#7C3AED] animate-[spin_8s_linear_infinite]" />
                          <div className="absolute inset-2 rounded-full border border-blue-500/35 animate-[spin_4s_linear_infinite_reverse]" />
                          <Sparkles className="h-6 w-6 text-[#A855F7] animate-pulse" />
                        </div>
                        
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-white uppercase tracking-wider animate-pulse">
                            Processing Profile...
                          </p>
                          <p className="text-xs text-slate-500 font-medium max-w-xs mx-auto">
                            Our matching algorithm is evaluating modules against your background and interests.
                          </p>
                        </div>
                      </div>
                    ) : (
                      // Final output matching card
                      <div className="space-y-6 text-left">
                        <div className="text-center space-y-2">
                          <div className="inline-flex items-center gap-1 bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                            Success! Matches Found
                          </div>
                          <h3 className="text-xl font-bold text-white font-display">
                            Your Recommendation
                          </h3>
                        </div>

                        {recommendedCourse && (
                          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-5 space-y-4">
                            <div className="flex items-start justify-between">
                              <div className="space-y-1">
                                <span className={`text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded bg-[#7C3AED]/10 text-[#A855F7] border border-[#7C3AED]/15`}>
                                  {recommendedCourse.tag}
                                </span>
                                <h4 className="text-base font-black text-white leading-snug pt-1 font-display">
                                  {recommendedCourse.name}
                                </h4>
                              </div>
                              
                              <div className="text-right">
                                <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                                  COMPATIBILITY
                                </span>
                                <span className="text-lg font-black text-[#10B981] font-display text-glow">
                                  {recommendedCourse.compatibility}
                                </span>
                              </div>
                            </div>

                            <p className="text-xs text-slate-400 leading-relaxed font-medium">
                              {recommendedCourse.description}
                            </p>

                            <div className="pt-2 flex gap-3">
                              <button
                                onClick={() => {
                                  setRecommendOpen(false);
                                  // Locate the matched division index
                                  const divIndex = recommendedCourse.tag === "Division 4" ? 3 :
                                                   recommendedCourse.tag === "Division 3" ? 2 :
                                                   recommendedCourse.tag === "Division 2" ? 1 : 0;
                                  setSelectedDivisionId(divIndex);
                                  setViewMode("detail");
                                }}
                                className="flex-1 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 text-xs font-bold uppercase tracking-widest text-white transition-all text-center"
                              >
                                View Syllabus
                              </button>
                              
                              <button
                                onClick={() => {
                                  setRecommendOpen(false);
                                  // Scroll to Contact us or navigate
                                  const contactEl = document.getElementById("contact");
                                  if (contactEl) {
                                    contactEl.scrollIntoView({ behavior: "smooth" });
                                  } else {
                                    navigate("/#contact");
                                  }
                                }}
                                className="flex-1 py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#A855F7] text-xs font-bold uppercase tracking-widest text-white transition-all shadow-md text-center"
                              >
                                Enroll Now
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}

              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Courses;
