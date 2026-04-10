import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";


import teamNisha from "@/assets/team-nisha.jpeg";
import teamNilopher from "@/assets/team-nilopher.jpeg";

const teamMembers = [
  {
    name: "Dr. S. Nisha",
    title: "Founder & Managing Director",
    description: "Architect of our organization's vision and strategic direction, leading with excellence and innovation.",
    image: teamNisha,
    imagePosition: "center top",
  },
  {
    name: "Nilofer",
    title: "Director of Operations (PRO)",
    description: "Managing the operational backbone of the organization while serving as the primary communications liaison.",
    image: teamNilopher,
    imagePosition: "50% 10%",
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

        {/* Team Section */}
        <section className="container py-20 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-4">
              Meet Our Team
            </h2>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto font-medium">
              The visionary leaders driving Omega Tech forward with strategic excellence and innovation.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative rounded-2xl border border-[#7B5BA7]/30 bg-white overflow-hidden transition-all duration-300 hover:border-[#7B5BA7]/60 hover:shadow-[0_8px_40px_rgba(123,91,167,0.15)] hover:-translate-y-1"
              >
                {/* Header Background */}
                <div className="absolute top-0 inset-x-0 h-32 bg-[#7B5BA7]/10" />
                <div className="absolute top-0 inset-x-0 h-1 bg-[#7B5BA7]" />

                <div className="p-6 sm:p-8 flex flex-col items-center text-center relative z-10">
                  <div className="relative mb-6 mt-4">
                    <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-[#7B5BA7]/20 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        style={{ objectPosition: member.imagePosition }}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1a103c] mb-2 font-sans">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#311b92] mb-4">
                    {member.title}
                  </p>
                  <div className="w-12 h-0.5 bg-[#7B5BA7]/30 mb-4 mx-auto rounded-full" />
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                    {member.description}
                  </p>
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
