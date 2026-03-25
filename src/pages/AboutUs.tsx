import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import teamNisha from "@/assets/team-nisha.jpeg";
import teamBaladharani from "@/assets/team-baladharani.jpeg";
import teamPreethi from "@/assets/team-preethi.jpeg";
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
    name: "Bala Tharani",
    title: "Director of Finance (CAO)",
    description: "Responsible for financial health and integrity, overseeing financial planning, accounting, and investor relations.",
    image: teamBaladharani,
    imagePosition: "50% 30%",
    imageScale: 1.5,
  },
  {
    name: "Preethi",
    title: "Director of Business Development & R&D",
    description: "Driving growth through strategic partnerships, innovative product development, and market expansion.",
    image: teamPreethi,
    imagePosition: "center top",
  },
  {
    name: "Nilofer",
    title: "Director of Operations (PRO)",
    description: "Managing the operational backbone of the organization while serving as the primary communications liaison.",
    image: teamNilopher,
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
                Our Leadership
              </span>
              <h1 className="font-display text-4xl font-bold tracking-wider sm:text-5xl md:text-6xl gradient-text">
                Meet Our Team
              </h1>
              <p className="text-base text-muted-foreground md:text-lg leading-relaxed max-w-2xl mx-auto">
                The visionary leaders driving Omega Techs forward with strategic excellence and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Cards */}
        <section className="container pb-24 px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_8px_40px_hsl(265_90%_60%/0.15)] hover:-translate-y-1"
              >
                {/* Top gradient accent */}
                <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-6 sm:p-8 flex flex-col items-center text-center">
                  {/* Profile photo - using object-top to center on face */}
                  <div className="relative mb-5">
                    <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-[3px] border-primary/20 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_25px_hsl(265_90%_60%/0.25)]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        style={{ objectPosition: member.imagePosition, transform: member.imageScale ? `scale(${member.imageScale})` : undefined }}
                      />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute -inset-1.5 rounded-full border border-primary/10 group-hover:border-primary/20 transition-colors duration-300" />
                  </div>

                  <h3 className="font-display text-lg font-bold tracking-wider text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                    {member.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
