import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import teamNisha from "@/assets/team-nisha.jpeg";
import teamBaladharani from "@/assets/team-baladharani.jpeg";
import teamPreethi from "@/assets/team-preethi.jpeg";
import teamNilopher from "@/assets/team-nilopher.jpeg";

const teamMembers = [
  {
    name: "Dr. S. Nisha",
    title: "Founder & Managing Director",
    description: "Architect of our organization's vision and strategic direction, leading with excellence and innovation.",
    initials: "SN",
    image: teamNisha,
  },
  {
    name: "Bala Tharani",
    title: "Director of Finance (CAO)",
    description: "Responsible for financial health and integrity, overseeing financial planning, accounting, and investor relations.",
    initials: "BT",
    image: teamBaladharani,
  },
  {
    name: "Preethi",
    title: "Director of Business Development & R&D",
    description: "Driving growth through strategic partnerships, innovative product development, and market expansion.",
    initials: "PR",
    image: teamPreethi,
  },
  {
    name: "Nilofer",
    title: "Director of Operations (PRO)",
    description: "Managing the operational backbone of the organization while serving as the primary communications liaison.",
    initials: "NL",
    image: teamNilopher,
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
          <div className="container relative z-10 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-3xl space-y-6"
            >
              <h1 className="font-display text-4xl font-bold tracking-wider sm:text-5xl md:text-6xl gradient-text">
                Meet Our Team
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
                The visionary leaders driving Omega Techs forward with strategic excellence and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Cards */}
        <section className="container pb-24">
          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm text-center transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(265_90%_60%/0.1)] hover:-translate-y-1"
              >
                <Avatar className="mx-auto mb-5 h-24 w-24 border-2 border-primary/30 transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-[0_0_20px_hsl(265_90%_60%/0.2)]">
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  <AvatarFallback className="bg-primary/10 font-display text-lg text-primary">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-display text-lg font-semibold tracking-wider text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">{member.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
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
