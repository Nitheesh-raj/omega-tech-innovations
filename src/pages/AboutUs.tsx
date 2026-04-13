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

const teamMembers = [
  {
    name: "Dr. S. Nisha",
    designation: "Founder & Managing Director",
    qualification: "",
    details: "Architect of our organization's vision and strategic direction, leading with excellence and innovation.",
    image: teamNisha,
    imagePosition: "center top",
  },
  {
    name: "Priyanka Lawrence",
    designation: "Soft Skills & Communication Trainer | Assistant Professor | POSH Certified Trainer",
    qualification: "MA., M.Phil., NET, (PhD)",
    details: "",
    image: teamPriyanka,
    imagePosition: "center top",
  },
  {
    name: "Dr. Praise Dyice Mohanraj",
    designation: "Medical Psychologist, Student Counsellor, Relationship Coach, Psychotherapist, Life Coach, POSH Trainer, Theological Psychologist",
    qualification: "",
    details: "",
    image: teamPraise,
    imagePosition: "center top",
  },
  {
    name: "Leona Hemslee B",
    designation: "Senior Medical Coder",
    qualification: "BE (CSE)",
    details: "",
    image: teamLeona,
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
  {
    name: "G. Laviel Abhraham M.A.",
    designation: "English",
    qualification: "",
    details: "Subject Expert in English, guiding students towards comprehensive linguistic proficiency.",
    image: teamLaviel,
    imagePosition: "center",
  },
  {
    name: "Mohammed Sanawar R",
    designation: "Senior Digital Marketing Specialist at Amazon",
    qualification: "BE in Civil Engineering, MBA in Marketing",
    details: "Professional Certified in Digital Marketing for Performance and Growth from IIM Kozhikode",
    image: teamSanawar,
    imagePosition: "center top",
  },
  {
    name: "Joshna Shelly B",
    designation: "Digital Creator",
    qualification: "BSc (CS)",
    details: "",
    image: teamJoshna,
    imagePosition: "center top",
  },
  {
    name: "Jeyabanu A",
    designation: "",
    qualification: "DCE, BA (History), MA (Sociology)",
    details: "",
    image: teamJeyabanu,
    imagePosition: "center 20%",
  },
  {
    name: "Dr. P. Pandimeena",
    designation: "Co-Director, QualityMend Physiotherapy Clinic & QualityEd Institute; Assistant Professor, Kalasalingam School of Physiotherapy",
    qualification: "MPT (Ortho)",
    details: "",
    image: teamPandimeena,
    imagePosition: "center top",
  },
  {
    name: "Dr. B. Pradeep Kumar",
    designation: "Director, QualityMend Physiotherapy Clinic & QualityEd Institute; Assistant Professor, Kalasalingam School of Physiotherapy",
    qualification: "MPT (Neuro), MIAP",
    details: "",
    image: teamPradeep,
    imagePosition: "center top",
  },
  {
    name: "D. Senthila Devi",
    designation: "",
    qualification: "MSc, MPhil, MEd, PG Diploma in Bioinformatics",
    details: "",
    image: teamSenthila,
    imagePosition: "center top",
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
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-4">
              Meet Our Team
            </h2>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto font-medium">
              The visionary leaders driving Omega Tech forward with strategic excellence and innovation.
            </p>
          </motion.div>

          <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-[#7B5BA7]/20 bg-white overflow-hidden transition-all duration-300 hover:border-[#7B5BA7]/50 hover:shadow-[0_12px_48px_rgba(123,91,167,0.18)] hover:-translate-y-1.5 flex flex-col"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#7B5BA7] via-[#9B7BC7] to-[#7B5BA7]" />
                {/* Header gradient background */}
                <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#7B5BA7]/8 to-transparent" />

                <div className="p-6 sm:p-7 flex flex-col items-center text-center relative z-10 flex-1">
                  {/* Profile Image */}
                  <div className="relative mb-5 mt-4">
                    <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-[0_4px_20px_rgba(123,91,167,0.25)] group-hover:border-[#7B5BA7]/20 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        style={{ objectPosition: member.imagePosition }}
                      />
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
                    <p className="text-xs leading-relaxed text-slate-400 font-medium mt-auto pt-2 line-clamp-3">
                      {member.details}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
