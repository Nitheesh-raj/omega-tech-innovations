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
import teamAbdul from "@/assets/team-abdul.jpeg";
import teamThajinsha from "@/assets/team-thajinsha.jpeg";
import teamKarthiga from "@/assets/team-karthiga.jpeg";
import teamKaran from "@/assets/team-karan.jpeg";
import teamManoj from "@/assets/team-manoj.jpeg";
import teamMathumitha from "@/assets/team-mathumitha.jpeg";
import teamJansirajan from "@/assets/team-jansirajan.jpeg";
import teamRabik from "@/assets/team-rabik.jpeg";
import teamDeepan from "@/assets/team-deepan.jpeg";

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
    ],
  },
  {
    title: "🎯 Director",
    members: [
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
        details: "Leads research, curriculum design, and academic quality",
        image: teamAnanthbabu,
        imagePosition: "center top",
      },
      {
        name: "Dr. K. M. Alaaudeen",
        designation: "Senior Research Mentor – Technology & Innovation",
        qualification: "",
        details: "Guides engineering, IoT, and innovation programs",
        image: teamAlaaudeen,
        imagePosition: "center top",
      },
      {
        name: "Dr. Praise Dyice Mohanraj",
        designation: "Senior Mentor – Psychological Services & Student Wellness",
        qualification: "",
        details: "Supports counselling and student wellbeing",
        image: teamPraise,
        imagePosition: "center top",
      },
      {
        name: "Dr. B. Pradeep Kumar (PT)",
        designation: "Senior Mentor – Physiotherapy & Rehabilitation",
        qualification: "MPT (Neuro), MIAP",
        details: "Leads healthcare and rehab training",
        image: teamPradeep,
        imagePosition: "center top",
      },
      {
        name: "Dr. P. Pandimeena (PT)",
        designation: "Senior Research Mentor – Clinical Rehabilitation",
        qualification: "MPT (Ortho)",
        details: "Focuses on clinical and orthopedic training",
        image: teamPandimeena,
        imagePosition: "center top",
      },
      {
        name: "Abdul Rahman",
        designation: "Senior Research Mentor – IT & Academic Development",
        qualification: "",
        details: "Teaching, research guidance, and academic coordination",
        image: teamAbdul,
        imagePosition: "center",
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
      },
      {
        name: "D. Senthila Devi",
        designation: "Head – Academic Planning & Bioinformatics",
        qualification: "MSc, MPhil, MEd, PG Diploma in Bioinformatics",
        details: "Manages curriculum planning and academic programs",
        image: teamSenthila,
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
        name: "Thajinsha M",
        designation: "Trainer – Vedic Maths & Quantitative Skills",
        qualification: "",
        details: "Conducts math and shortcut calculation training",
        image: teamThajinsha,
        imagePosition: "center top",
      },
      {
        name: "Leona Hemslee B",
        designation: "Senior Trainer – Medical Coding",
        qualification: "BE (CSE)",
        details: "Handles healthcare coding training",
        image: teamLeona,
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

          <div className="space-y-32 max-w-7xl mx-auto px-4 sm:px-8">
            {categorizedTeams.map((teamCategory, categoryIndex) => (
              <div key={teamCategory.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-14 text-center"
                >
                  <h3 className="inline-flex items-center justify-center font-display text-3xl font-bold tracking-wide text-[#311b92] bg-[#7B5BA7]/10 px-8 py-3 rounded-full border border-[#7B5BA7]/20">
                    {teamCategory.title}
                  </h3>
                </motion.div>

                <div className={`grid gap-10 sm:gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${teamCategory.members.length < 3 ? 'lg:justify-center lg:flex lg:flex-wrap' : ''}`}>
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
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#7B5BA7] via-[#9B7BC7] to-[#7B5BA7]" />
                      {/* Header gradient background */}
                      <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#7B5BA7]/8 to-transparent" />

                      <div className="p-8 sm:p-10 flex flex-col items-center text-center relative z-10 flex-1">
                        {/* Profile Image */}
                        <div className="relative mb-6 mt-4">
                          <div className="h-36 w-36 sm:h-44 sm:w-44 rounded-full overflow-hidden border-[6px] border-white shadow-xl group-hover:shadow-[0_8px_30px_rgba(123,91,167,0.25)] group-hover:border-[#7B5BA7]/30 transition-all duration-300">
                            {member.image ? (
                              <img
                                src={member.image}
                                alt={member.name}
                                className="h-full w-full object-cover"
                                style={{ objectPosition: member.imagePosition }}
                              />
                            ) : (
                              <div className="h-full w-full bg-gradient-to-br from-[#7B5BA7]/20 to-[#7B5BA7]/5 flex items-center justify-center">
                                <span className="text-4xl font-bold text-[#7B5BA7]/60">
                                  {member.name.split(" ").slice(0, 2).map(n => n.replace(/[^a-zA-Z]/g, '')[0]).join("")}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Name */}
                        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1a103c] mb-3 font-sans leading-snug">
                          {member.name}
                        </h3>

                        {/* Designation */}
                        {member.designation && (
                          <p className="text-sm sm:text-base font-bold uppercase tracking-[0.12em] text-[#311b92] mb-4 leading-relaxed line-clamp-3">
                            {member.designation}
                          </p>
                        )}

                        <div className="w-12 h-1 bg-[#7B5BA7]/30 mb-4 mx-auto rounded-full" />

                        {/* Qualification */}
                        {member.qualification && (
                          <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-semibold mb-3">
                            {member.qualification}
                          </p>
                        )}

                        {/* Additional Details */}
                        {member.details && (
                          <p className="text-base leading-relaxed text-slate-600 font-medium mt-auto pt-3 line-clamp-4">
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
