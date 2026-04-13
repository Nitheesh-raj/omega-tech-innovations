import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import teamNisha from "@/assets/team-nisha.jpeg";
import teamNilopher from "@/assets/team-nilopher.jpeg";
import teamLaviel from "@/assets/team-laviel.jpg";

import teamSanawar from "@/assets/team-sanawar.jpg";
import teamJoshna from "@/assets/team-joshna.jpg";
import teamJeyabanu from "@/assets/team-jeyabanu.jpg";
import teamPandimeena from "@/assets/team-pandimeena.jpg";
import teamPradeep from "@/assets/team-pradeep.jpg";
import teamSenthila from "@/assets/team-senthila.jpg";
import teamPraise from "@/assets/team-praise.jpg";
import teamLeona from "@/assets/team-leona.jpg";
import teamPriyanka from "@/assets/team-priyanka.jpg";
import teamAshna from "@/assets/team-ashna.jpg";
import teamAnanthbabu from "@/assets/team-ananthbabu.jpg";
import teamAlaaudeen from "@/assets/team-alaaudeen.jpg";

const categorizedTeams = [
  {
    title: "👑 Top Leadership",
    members: [
      {
        name: "Dr. S. Nisha",
        designation: "Founder & Managing Director",
        qualification: "",
        details: "Architect of our organization's vision and strategic direction, leading with excellence and innovation.",
        image: teamNisha,
        imagePosition: "center top",
      },
      {
        name: "Nilofer",
        designation: "Director of Operations (PRO)",
        qualification: "",
        details: "Managing the operational backbone of the organization while serving as the primary communications liaison.",
        image: teamNilopher,
        imagePosition: "50% 10%",
      },
    ],
  },
  {
    title: "🧠 Board of Excellence",
    members: [
      {
        name: "Dr. R. Ananth Babu",
        designation: "Senior Research Head – Academic Excellence & Curriculum Development",
        qualification: "",
        details: "Leads curriculum design, research initiatives, and academic quality",
        image: teamAnanthbabu,
        imagePosition: "center top",
      },
      {
        name: "Dr. K. M. Alaaudeen",
        designation: "Senior Research Mentor – Technology, IoT & Engineering Innovation",
        qualification: "",
        details: "Guides technical programs, innovation projects, and engineering training",
        image: teamAlaaudeen,
        imagePosition: "center top",
      },
      {
        name: "Dr. Praise Dyice Mohanraj",
        designation: "Senior Mentor – Psychological Services & Student Wellness",
        qualification: "",
        details: "Supports student wellbeing, counselling, and mental health programs",
        image: teamPraise,
        imagePosition: "center top",
      },
      {
        name: "Dr. B. Pradeep Kumar (PT)",
        designation: "Senior Mentor – Physiotherapy & Rehabilitation Training",
        qualification: "MPT (Neuro), MIAP",
        details: "Leads physiotherapy training and rehabilitation practices",
        image: teamPradeep,
        imagePosition: "center top",
      },
      {
        name: "Dr. P. Pandimeena (PT)",
        designation: "Lead Trainer – Clinical & Orthopedic Rehabilitation",
        qualification: "MPT (Ortho)",
        details: "Delivers specialized clinical and orthopedic training sessions",
        image: teamPandimeena,
        imagePosition: "center top",
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
        details: "Drives online growth, branding, and marketplace performance",
        image: teamSanawar,
        imagePosition: "center top",
      },
      {
        name: "Priyanka Lawrence",
        designation: "Head – Soft Skills, Communication & Corporate Training",
        qualification: "MA., M.Phil., NET, (PhD)",
        details: "Leads communication, personality, and corporate skill development",
        image: teamPriyanka,
        imagePosition: "center top",
      },
      {
        name: "D. Senthila Devi",
        designation: "Head – Academic Planning & Bioinformatics Programs",
        qualification: "MSc, MPhil, MEd, PG Diploma in Bioinformatics",
        details: "Manages academic structure and specialized program development",
        image: teamSenthila,
        imagePosition: "center top",
      },
    ],
  },
  {
    title: "🎓 Training & Academic Leads",
    members: [
      {
        name: "Jeyabanu A",
        designation: "Lead – Aptitude & Competitive Exam Training",
        qualification: "DCE, BA (History), MA (Sociology)",
        details: "Handles aptitude training and exam preparation programs",
        image: teamJeyabanu,
        imagePosition: "center 20%",
      },
      {
        name: "G. Laviel Abraham M.A.",
        designation: "Lead – English Language & Communication Training",
        qualification: "",
        details: "Focuses on language skills and communication improvement",
        image: teamLaviel,
        imagePosition: "center",
      },
    ],
  },
  {
    title: "💼 Specialized Trainers & Executives",
    members: [
      {
        name: "Leona Hemslee B",
        designation: "Senior Trainer – Medical Coding & Healthcare Processes",
        qualification: "BE (CSE)",
        details: "Trains students in medical coding and healthcare documentation",
        image: teamLeona,
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
      {
        name: "Ashna Lancy BA., MA.",
        designation: "Trainer – Soft Skills & Personality Development",
        qualification: "",
        details: "Conducts sessions on confidence, personality, and workplace skills",
        image: teamAshna,
        imagePosition: "center top",
      },
    ],
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
            <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          </div>
          <div className="container relative z-10 py-20 sm:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-3xl space-y-5"
            >
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
                About Us
              </span>
              <h1 className="font-display text-4xl font-bold tracking-wider sm:text-5xl md:text-6xl gradient-text">
                About Omega Tech
              </h1>
              <p className="text-base text-slate-700 md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
                A dynamic technology training and skill development organization committed to shaping 
                future-ready professionals for the digital world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="container py-20 pb-24 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-4">
              Meet Our Team
            </h2>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto font-medium">
              The visionary leaders and dedicated professionals driving Omega Tech forward with strategic excellence and innovation.
            </p>
          </motion.div>

          <div className="space-y-24 max-w-6xl mx-auto">
            {categorizedTeams.map((teamCategory, categoryIndex) => (
              <div key={teamCategory.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10 text-center"
                >
                  <h3 className="inline-flex items-center justify-center font-display text-2xl font-bold tracking-wide text-[#311b92] bg-[#7B5BA7]/10 px-6 py-2 rounded-full border border-[#7B5BA7]/20">
                    {teamCategory.title}
                  </h3>
                </motion.div>

                <div className={`grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${teamCategory.members.length < 3 ? 'lg:justify-center lg:flex lg:flex-wrap' : ''}`}>
                  {teamCategory.members.map((member, i) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className={`group relative rounded-2xl border border-[#7B5BA7]/20 bg-white overflow-hidden transition-all duration-300 hover:border-[#7B5BA7]/50 hover:shadow-[0_12px_48px_rgba(123,91,167,0.18)] hover:-translate-y-1.5 flex flex-col ${teamCategory.members.length < 3 ? 'lg:w-[calc(33.333%-1rem)] w-full' : ''}`}
                    >
                      {/* Top accent bar */}
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#7B5BA7] via-[#9B7BC7] to-[#7B5BA7]" />
                      {/* Header gradient background */}
                      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#7B5BA7]/8 to-transparent" />

                      <div className="p-6 sm:p-7 flex flex-col items-center text-center relative z-10 flex-1">
                        {/* Profile Image */}
                        <div className="relative mb-5 mt-4">
                          <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-[0_4px_20px_rgba(123,91,167,0.25)] group-hover:border-[#7B5BA7]/20 transition-all duration-300">
                            {member.image ? (
                              <img
                                src={member.image}
                                alt={member.name}
                                className="h-full w-full object-cover"
                                style={{ objectPosition: member.imagePosition }}
                              />
                            ) : (
                              <div className="h-full w-full bg-gradient-to-br from-[#7B5BA7]/20 to-[#7B5BA7]/5 flex items-center justify-center">
                                <span className="text-3xl font-bold text-[#7B5BA7]/60">
                                  {member.name.split(" ").slice(0, 2).map(n => n.replace(/[^a-zA-Z]/g, '')[0]).join("")}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Name */}
                        <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#1a103c] mb-2 font-sans leading-snug">
                          {member.name}
                        </h3>

                        {/* Designation */}
                        {member.designation && (
                          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-[#311b92] mb-3 leading-relaxed line-clamp-3">
                            {member.designation}
                          </p>
                        )}

                        <div className="w-10 h-0.5 bg-[#7B5BA7]/30 mb-3 mx-auto rounded-full" />

                        {/* Qualification */}
                        {member.qualification && (
                          <p className="text-sm leading-relaxed text-slate-600 font-medium mb-2">
                            {member.qualification}
                          </p>
                        )}

                        {/* Additional Details */}
                        {member.details && (
                          <p className="text-sm leading-relaxed text-slate-500 font-medium mt-auto pt-2 line-clamp-4">
                            {member.details}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
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
