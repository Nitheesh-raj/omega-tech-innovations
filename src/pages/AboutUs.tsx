import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import teamNisha from "@/assets/team-nisha.jpeg";
import teamNilopher from "@/assets/team-nilopher-new.jpg";
import teamPreethi from "@/assets/team-preethi.jpeg";
import teamLaviel from "@/assets/team-laviel.jpg";

import teamSanawar from "@/assets/team-sanawar.jpg";
import teamJoshna from "@/assets/team-joshna.jpg";
import teamJeyabanu from "@/assets/team-jeyabanu.jpg";
import teamPandimeena from "@/assets/team-pandimeena.jpg";
import teamPradeep from "@/assets/team-pradeep.jpg";
import teamSenthila from "@/assets/team-senthila.jpg";
import teamPraise from "@/assets/team-praise.jpg";
import teamLeona from "@/assets/team-leona.jpg";
import teamHelen from "@/assets/team-helen.jpg";
import teamPison from "@/assets/team-pison-new.jpg";
import teamEdwin from "@/assets/team-edwin.jpg";
import teamPriyanka from "@/assets/team-priyanka-new.jpg";
import teamAshna from "@/assets/team-ashna.jpg";
import teamAnanthbabu from "@/assets/team-ananthbabu.jpg";
import teamAbdul from "@/assets/team-abdul.jpeg";
import teamJeyabharathi from "@/assets/team-jeyabharathi.jpg";
import teamPackiyaraj from "@/assets/team-packiyaraj.jpg";

import teamThajinsha from "@/assets/team-thajinsha.jpeg";
import teamKarthiga from "@/assets/team-karthiga.jpeg";
import teamKaran from "@/assets/team-karan.jpeg";
import teamManoj from "@/assets/team-manoj.jpeg";
import teamMathumitha from "@/assets/team-mathumitha.jpeg";
import teamJansirajan from "@/assets/team-jansirajan.jpeg";
import teamRabik from "@/assets/team-rabik.jpeg";
import teamDeepan from "@/assets/team-deepan.jpeg";
import teamGodbrain from "@/assets/team-godbrain.jpeg";
import teamSafiulla from "@/assets/team-safiulla.jpeg";
import omegaLogo from "@/assets/omega-logo.jpg";
import officeInterior from "@/assets/office-interior.jpg";

const categorizedTeams = [
  {
    title: "🎯 Director",
    members: [
      {
        name: "Preethi",
        designation: "Director / COO",
        qualification: "",
        details: "Leading the organization with strategic vision and directing all operations to ensure excellence.",
        image: teamPreethi,
        imagePosition: "center 15%",
        imageScale: "1.0",
        imageOrigin: "center top",
      },
      {
        name: "Leona Hemslee B",
        designation: "Director / CFO",
        qualification: "",
        details: "Strategic financial leader managing all fiscal operations, budgeting, and corporate administration.",
        image: teamLeona,
        imagePosition: "center 15%",
        imageScale: "1.0",
        imageOrigin: "center top",
      },
    ],
  },
  {
    title: "🧠 Board of Excellence",
    members: [
      {
        name: "Prof. D. Edwin Raja Kumar",
        designation: "Senior Research & Academic Consultant",
        qualification: "",
        details: "Award-winning academician with extensive experience in teaching, research, and mentoring, contributing significantly to higher education and student development.",
        image: teamEdwin,
        imagePosition: "center 15%",
        imageScale: "1.1",
        imageOrigin: "center 15%",
      },
      {
        name: "Dr. R. Ananth Babu",
        designation: "Senior Research Head – Academic Excellence & Curriculum Development",
        qualification: "",
        details: "Leads research, curriculum design, and academic quality",
        image: teamAnanthbabu,
        imagePosition: "center top",
        imageScale: "1.1",
        imageOrigin: "center top",
      },
      {
        name: "Abdul Rahman",
        designation: "Senior Research Mentor – IT & Academic Development",
        qualification: "",
        details: "Teaching, research guidance, and academic coordination",
        image: teamAbdul,
        imagePosition: "50% 30%",
        imageScale: "1.15",
        imageOrigin: "50% 30%",
      },
      {
        name: "Dr. Praise Dyice Mohanraj",
        designation: "Senior Mentor – Psychological Services & Student Wellness",
        qualification: "",
        details: "Supports counselling and student wellbeing",
        image: teamPraise,
        imagePosition: "center top",
        imageScale: "1.15",
        imageOrigin: "center top",
      },
      {
        name: "Dr. B. Pradeep Kumar (PT)",
        designation: "Senior Mentor – Physiotherapy & Rehabilitation",
        qualification: "MPT (Neuro), MIAP",
        details: "Leads healthcare and rehab training",
        image: teamPradeep,
        imagePosition: "center top",
        imageScale: "1.1",
        imageOrigin: "center top",
      },
      {
        name: "Dr. P. Pandimeena (PT)",
        designation: "Senior Research Mentor – Clinical Rehabilitation",
        qualification: "MPT (Ortho)",
        details: "Focuses on clinical and orthopedic training",
        image: teamPandimeena,
        imagePosition: "center top",
        imageScale: "1.15",
        imageOrigin: "center top",
      },
      {
        name: "Dr. Packiya Raj Senthamarai",
        designation: "Senior Research & Academic Consultant",
        qualification: "",
        details: "Accomplished academician, researcher, and international educator with over 15 years of experience in higher education, curriculum development, research supervision, and academic leadership. Renowned for excellence in teaching, mentoring, and fostering innovative learning environments, with significant contributions to research, faculty development, and student success across national and international institutions.",
        image: teamPackiyaraj,
        imagePosition: "center top",
        imageScale: "1.1",
        imageOrigin: "center top",
      },
    ],
  },
  {
    title: "🚀 Strategic Department Heads",
    members: [
      {
        name: "Mohammed Sanawar R",
        designation: "Head – Digital Marketing & E-Commerce Strategy",
        qualification: "BE in Civil Engineering, MBA in Marketing",
        details: "Drives digital growth and marketplace performance",
        image: teamSanawar,
        imagePosition: "center top",
      },
      {
        name: "Priyanka Lawrence",
        designation: "Head – Soft Skills & Corporate Training",
        qualification: "MA., M.Phil., NET, (PhD)",
        details: "Leads communication and personality development programs",
        image: teamPriyanka,
        imagePosition: "center top",
        imageScale: "1.1",
        imageOrigin: "center top",
      },
      {
        name: "D. Senthila Devi",
        designation: "Head – Academic Planning & Bioinformatics",
        qualification: "MSc, MPhil, MEd, PG Diploma in Bioinformatics",
        details: "Manages curriculum planning and academic programs",
        image: teamSenthila,
        imagePosition: "center top",
      },
      {
        name: "Joshna Shelly B",
        designation: "Creative Lead – Digital Content & Media Production",
        qualification: "BSc (CS)",
        details: "Creates and manages digital content, branding visuals, and media",
        image: teamJoshna,
        imagePosition: "center top",
      },
    ],
  },
  {
    title: "💼 Specialized Trainers & Skill Experts",
    members: [
      {
        name: "Deepan Jayarajan",
        designation: "CPR & BLS Trainer",
        qualification: "AHA Certified",
        details: "Specialized trainer in Cardiopulmonary Resuscitation (CPR) and Basic Life Support (BLS), certified by the American Heart Association (AHA).",
        image: teamDeepan,
        imagePosition: "center top",
      },
      {
        name: "Karthiga Devi",
        designation: "Senior Trainer – English & Soft Skills",
        qualification: "",
        details: "Communication and language training expert",
        image: teamKarthiga,
        imagePosition: "center top",
      },
      {
        name: "Helen Jeevakani P",
        designation: "English & Communication Trainer",
        qualification: "",
        details: "Passionate English trainer with strong expertise in language teaching, lesson planning, and student engagement, dedicated to enhancing communication skills and academic performance.",
        image: teamHelen,
        imagePosition: "center 20%",
        imageScale: "1.1",
      },
      {
        name: "Pison Campbell Raj .R",
        designation: "Aptitude & Communication Trainer",
        qualification: "",
        details: "Dedicated trainer with a strong foundation in English and communication, skilled in guiding students to improve aptitude, problem-solving, and interpersonal skills for career growth.",
        image: teamPison,
        imagePosition: "center top",
        imageScale: "1.2",
        imageOrigin: "center 15%",
      },
      {
        name: "Nilofer",
        designation: "Soft Skill & Communication Trainer",
        qualification: "",
        details: "Dedicated trainer specializing in soft skills, communicative English, and professional personality development.",
        image: teamNilopher,
        imagePosition: "center 20%",
        imageScale: "1.3",
        imageOrigin: "center 20%",
      },
      {
        name: "C. Jeyabharathi",
        designation: "Penmanship and Creative Arts Instructor",
        qualification: "",
        details: "Passionate and dedicated Penmanship and Creative Arts Instructor with extensive experience in developing handwriting excellence, artistic creativity, and fine motor skills among learners of all age groups. Committed to fostering confidence, self-expression, and creativity through engaging, skill-based instruction in handwriting, drawing, and creative arts.",
        image: teamJeyabharathi,
        imagePosition: "center top",
        imageScale: "1.1",
        imageOrigin: "center top",
      },
    ],
  },
  {
    title: "⚙️ Operations & Technical Executives",
    members: [
      {
        name: "Karan S",
        designation: "Senior Process Associate – Technical Operations",
        qualification: "",
        details: "Supports technical workflows and process handling",
        image: teamKaran,
        imagePosition: "center top",
      },
      {
        name: "Manoj M",
        designation: "Senior Process Associate – Academic Operations",
        qualification: "",
        details: "Assists in training coordination and data handling",
        image: teamManoj,
        imagePosition: "center top",
      },
      {
        name: "Mathumitha M",
        designation: "Junior Executive – Accounts & Medical Coding Support",
        qualification: "",
        details: "Supports Tally, coding, and administrative tasks",
        image: teamMathumitha,
        imagePosition: "center top",
      },
    ],
  },
  {
    title: "🎓 Training & Academic Leads",
    members: [
      {
        name: "Jeyabanu A",
        designation: "Lead – Aptitude Training",
        qualification: "DCE, BA (History), MA (Sociology)",
        details: "Handles reasoning and competitive exam training",
        image: teamJeyabanu,
        imagePosition: "center 20%",
      },
      {
        name: "G. Laviel Abraham",
        designation: "Lead – English & Communication Training",
        qualification: "",
        details: "Focuses on language and communication skills",
        image: teamLaviel,
        imagePosition: "center",
      },
      {
        name: "Jansi Rajan",
        designation: "Trainer – Vedic Maths",
        qualification: "",
        details: "Specializes in speed maths and shortcut techniques",
        image: teamJansirajan,
        imagePosition: "center top",
      },
      {
        name: "J. Mohamed Safiulla",
        designation: "Trainer – Soft Skills & Digital Marketing",
        qualification: "",
        details: "Conducts communication, employability skills, and basic digital marketing training",
        image: teamSafiulla,
        imagePosition: "center top",
      },
      {
        name: "Thajinsha M",
        designation: "Trainer – Vedic Maths & Quantitative Skills",
        qualification: "",
        details: "Conducts math and shortcut calculation training",
        image: teamThajinsha,
        imagePosition: "center top",
      },
      {
        name: "God brain",
        designation: "Robotic trainer Expert",
        qualification: "",
        details: "Expert in robotics training, industrial automation, and hands-on technical skill development.",
        image: teamGodbrain,
        imagePosition: "center top",
      },
      {
        name: "S. Mohamed Rabik",
        designation: "Tally Trainer",
        qualification: "",
        details: "Specializes in Tally ERP 9, Prime, and accounting software training.",
        image: teamRabik,
        imagePosition: "center top",
      },
      {
        name: "Ashna Lancy",
        designation: "Trainer – Soft Skills & Personality Development",
        qualification: "",
        details: "Focuses on confidence and workplace skills",
        image: teamAshna,
        imagePosition: "center top",
      },
    ],
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative flex items-center justify-center overflow-hidden pt-24">
          {/* Subtle auroras */}
          <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#A855F7]/3 blur-[100px] pointer-events-none" style={{ animationDelay: "1.5s" }} />

          <div className="container relative z-10 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl space-y-6 flex flex-col items-center"
            >
              {/* White brand logo badge */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-2 w-28 h-28 rounded-full overflow-hidden border border-[#7C3AED]/35 bg-white p-2.5 shadow-[0_0_25px_rgba(124,58,237,0.3)] hover:scale-105 transition-transform duration-500"
              >
                <img src={omegaLogo} alt="Omega Tech Logo" className="w-full h-full object-contain" />
              </motion.div>

              <span className="inline-block rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A855F7] uppercase">
                About Us
              </span>
              <h1 className="font-display text-4xl font-extrabold tracking-wider sm:text-5xl md:text-6xl gradient-text">
                About Omega Tech
              </h1>
              <p className="text-sm sm:text-base text-slate-350 max-w-2xl mx-auto font-medium leading-relaxed">
                A dynamic technology training and skill development organization committed to shaping 
                future-ready professionals for the digital world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Campus / Corporate Office Section */}
        <section className="relative z-10 py-16 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#7C3AED]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container px-4">
            <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-6 text-left"
              >
                <span className="inline-block rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A855F7] uppercase">
                  Our Corporate Facility
                </span>
                <h2 className="font-display text-3xl font-extrabold tracking-wider text-white">
                  State-of-the-Art <span className="gradient-text">Headquarters</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                  Omega Tech operates from a modern, tech-enabled corporate facility designed to foster 
                  innovation, research, and collaborative excellence. Our campus houses high-performance 
                  development environments, Vedic mathematics research hubs, and collaborative workspaces 
                  to bridge academia with hands-on corporate operations.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 relative group"
              >
                {/* Glowing border outline */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] opacity-20 blur-md group-hover:opacity-40 transition duration-550" />
                
                {/* Image panel */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0F172A]/50 p-2 backdrop-blur-md">
                  <img 
                    src={officeInterior} 
                    alt="Omega Tech Corporate Facility" 
                    className="w-full h-[280px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent opacity-80 rounded-xl" />
                  <div className="absolute bottom-6 left-6 right-6 text-left">
                    <p className="text-[10px] tracking-[0.2em] font-extrabold uppercase text-[#A855F7] mb-1">Corporate HQ</p>
                    <p className="text-xs font-bold text-white tracking-wider">Strategic Operations & Tech Lab</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="container py-20 pb-28 px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="font-display text-4xl font-extrabold tracking-wider sm:text-5xl mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-medium">
              The visionary leaders and dedicated professionals driving Omega Tech forward with strategic excellence and innovation.
            </p>
          </motion.div>

          <div className="space-y-32 max-w-7xl mx-auto px-4 sm:px-8">
            {/* Founder Feature Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                {/* Left Column: Founder Card */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-5 flex justify-center"
                >
                  <div className="group relative rounded-3xl border border-[#D4AF37]/35 bg-[#0F172A]/40 overflow-visible transition-all duration-500 hover:border-[#FFD700]/70 hover:shadow-[0_20px_50px_-5px_rgba(212,175,55,0.35),_0_0_35px_rgba(255,215,0,0.2)] hover:-translate-y-2 flex flex-col backdrop-blur-md w-full sm:w-[350px] md:w-[380px] lg:w-[400px] min-h-[480px] z-20">
                    {/* Top accent bar */}
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity rounded-t-3xl" />
                    
                    {/* Header gradient background */}
                    <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#D4AF37]/8 to-transparent pointer-events-none rounded-t-3xl" />

                    <div className="p-6 sm:p-8 flex flex-col items-center relative z-10 flex-1">
                      {/* Profile Image with 3D glow */}
                      <div className="relative mb-6 mt-4 w-full flex justify-center">
                        <div className="absolute -inset-6 bg-gradient-to-tr from-[#D4AF37]/40 via-[#FFD700]/25 to-transparent rounded-3xl opacity-50 blur-xl group-hover:opacity-85 transition-all duration-700 pointer-events-none -z-10 animate-pulse" />
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B] rounded-2xl opacity-40 blur-md group-hover:opacity-85 transition duration-500 pointer-events-none -z-10" />

                        <div className="h-80 w-60 sm:h-96 sm:w-72 rounded-2xl overflow-hidden border-[4px] border-[#D4AF37]/40 shadow-[0_0_30px_rgba(212,175,55,0.25)] group-hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] group-hover:border-[#FFD700]/70 transition-all duration-300 relative">
                          <img
                            src={teamNisha}
                            alt="Dr. S. Nisha"
                            className="h-full w-full object-cover"
                            style={{ 
                              objectPosition: "center 15%",
                              transform: "scale(1.0)",
                              transformOrigin: "center top"
                            }}
                          />
                          {/* Shining Light Sweep Effect */}
                          <div className="absolute top-0 left-[-150%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:left-[150%] pointer-events-none" />
                        </div>
                      </div>

                      {/* Translucent overlay name badge like the screenshot */}
                      <div className="w-full bg-[#050816]/75 border border-[#D4AF37]/20 rounded-2xl p-4 backdrop-blur-md shadow-2xl text-center">
                        <h3 className="text-xl sm:text-2xl font-black tracking-wider text-white mb-1 font-sans text-glow-gold leading-tight">
                          Dr. S. Nisha
                        </h3>
                        <p className="text-[10px] tracking-[0.1em] font-semibold text-slate-400 mb-1.5">
                          M.A., B.Ed., M.Phil., (Ph.d)
                        </p>
                        <div className="w-12 h-0.5 bg-[#D4AF37]/40 mx-auto mb-2 rounded-full" />
                        <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37] leading-none">
                          FOUNDER & CEO
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column: Tagline & Content */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:col-span-7 space-y-6 text-left"
                >
                  <h3 className="font-display text-lg sm:text-xl font-extrabold italic tracking-wide text-[#D4AF37] leading-relaxed">
                    Leading with Purpose. Transforming with Expertise.
                  </h3>
                  
                  <div className="space-y-4 text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                    <p>
                      Dr. S. Nisha is an accomplished academic and business development professional based in Tamil Nadu, India. With deep expertise in English language teaching, soft skills training, and corporate sales development, she combines an educator's rigor with an entrepreneur's drive.
                    </p>
                    <p>
                      As the Founder/CEO of Omega Tech, she has spearheaded educational marketing initiatives across Tamilnadu, building bridges between institutions and opportunity.
                    </p>
                    <p>
                      Her contributions have earned her the prestigious <strong>Tamil Nadu Business Iconic Award (2024)</strong> and the <strong>Doctorate Award at Southern American Association for Education (2023)</strong> — recognitions that reflect both her professional impact and her engaging personality.
                    </p>
                    <p>
                      Dr. Nisha continues to champion educational entrepreneurship as a path to community growth, mentoring others while expanding her own vision for accessible, quality education with skill.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {categorizedTeams.map((teamCategory, categoryIndex) => (
              <div key={teamCategory.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-16 text-center"
                >
                  <h3 className="inline-flex items-center justify-center font-display text-base font-extrabold tracking-wider uppercase text-white bg-[#7C3AED]/10 px-8 py-3.5 rounded-full border border-[#7C3AED]/25 shadow-[0_0_15px_rgba(124,58,237,0.15)] text-glow">
                    {teamCategory.title}
                  </h3>
                </motion.div>

                <div className={`grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${teamCategory.members.length < 3 ? 'lg:justify-center lg:flex lg:flex-wrap' : ''}`}>
                  {teamCategory.members.map((member, i) => {
                    const isFounder = false; // Founder is now in a separate section
                    const isDirector = teamCategory.title.includes("Director");
                    return (
                      <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.08 }}
                        className={
                          isDirector
                            ? `group relative rounded-3xl border border-[#60A5FA]/25 bg-[#0F172A]/25 overflow-visible transition-all duration-500 hover:border-[#60A5FA]/60 hover:shadow-[0_20px_45px_-5px_rgba(96,165,250,0.3),_0_0_25px_rgba(192,132,252,0.15)] hover:-translate-y-2 flex flex-col backdrop-blur-md w-full sm:w-[330px] lg:w-[365px] mx-auto min-h-[480px] z-10`
                            : `group relative rounded-2xl border border-[#7C3AED]/15 bg-[#0F172A]/20 overflow-hidden transition-all duration-500 hover:border-[#A855F7]/30 hover:shadow-[0_15px_35px_-10px_rgba(124,58,237,0.15)] hover:-translate-y-1.5 flex flex-col backdrop-blur-md ${teamCategory.members.length < 3 ? 'lg:w-[calc(33.333%-1rem)] w-full' : ''}`
                        }
                      >
                        {/* Top accent bar */}
                        {isDirector ? (
                          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#60A5FA] via-[#A855F7] to-[#60A5FA] opacity-80 group-hover:opacity-100 transition-opacity rounded-t-3xl" />
                        ) : (
                          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#7C3AED] opacity-70 group-hover:opacity-100 transition-opacity" />
                        )}
                        
                        {/* Header gradient background */}
                        {isDirector ? (
                          <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#60A5FA]/6 to-transparent pointer-events-none rounded-t-3xl" />
                        ) : (
                          <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#7C3AED]/5 to-transparent pointer-events-none" />
                        )}

                        <div className="p-8 sm:p-10 flex flex-col items-center text-center relative z-10 flex-1">
                          {/* Profile Image */}
                          <div className="relative mb-6 mt-4">
                            {/* Glowing aura / 3D light highlight for Director */}
                            {isDirector && (
                              <>
                                <div className="absolute -inset-6 bg-gradient-to-tr from-[#60A5FA]/40 via-[#A855F7]/25 to-transparent rounded-3xl opacity-35 blur-xl group-hover:opacity-70 transition-all duration-700 pointer-events-none -z-10 animate-pulse" />
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#60A5FA]/40 to-[#A855F7]/30 rounded-2xl opacity-30 blur-md group-hover:opacity-60 transition duration-500 pointer-events-none -z-10" />
                              </>
                            )}

                            <div className={
                              isDirector
                                ? "h-72 w-48 sm:h-80 sm:w-56 rounded-2xl overflow-hidden border-[4px] border-[#60A5FA]/30 shadow-[0_0_20px_rgba(96,165,250,0.15)] group-hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] group-hover:border-[#60A5FA]/60 transition-all duration-300 relative"
                                : "h-48 w-40 sm:h-56 sm:w-48 rounded-2xl overflow-hidden border-[4px] border-[#0F172A] shadow-xl group-hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] group-hover:border-[#7C3AED]/40 transition-all duration-300 relative"
                            }>
                              {member.image ? (
                                <>
                                  <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover"
                                    style={{ 
                                      objectPosition: member.imagePosition,
                                      transform: (member as any).imageScale ? `scale(${(member as any).imageScale})` : 'none',
                                      transformOrigin: (member as any).imageOrigin || 'center'
                                    }}
                                  />
                                  {/* Shining Light Sweep Effect */}
                                  <div className="absolute top-0 left-[-150%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:left-[150%] pointer-events-none" />
                                </>
                              ) : (
                                <div className="h-full w-full bg-gradient-to-br from-[#7C3AED]/10 to-[#0F172A] flex items-center justify-center">
                                  <span className="text-3xl font-extrabold text-[#7C3AED]/50">
                                    {member.name.split(" ").slice(0, 2).map(n => n.replace(/[^a-zA-Z]/g, '')[0]).join("")}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Name */}
                          <h3 className="text-lg sm:text-xl font-extrabold tracking-wide text-white mb-2.5 font-sans leading-snug">
                            {member.name}
                          </h3>

                          {/* Designation */}
                          {member.designation && (
                            <p className={
                              isDirector
                                ? "text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-[#60A5FA] mb-4 leading-relaxed"
                                : "text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#A855F7] mb-4 leading-relaxed"
                            }>
                              {member.designation}
                            </p>
                          )}

                          <div className={
                            isDirector
                              ? "w-12 h-0.5 bg-[#60A5FA]/40 mb-4 mx-auto rounded-full"
                              : "w-10 h-0.5 bg-[#7C3AED]/20 mb-4 mx-auto rounded-full"
                          } />

                          {/* Qualification */}
                          {member.qualification && (
                            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-semibold mb-3">
                              {member.qualification}
                            </p>
                          )}

                          {/* Additional Details */}
                          {member.details && (
                            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-medium mt-auto pt-3 line-clamp-4">
                              {member.details}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
