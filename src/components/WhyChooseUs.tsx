import { motion } from "framer-motion";
import { BookOpen, Briefcase, Award, Users, GraduationCap, IndianRupee, Wrench } from "lucide-react";

const benefits = [
  { icon: BookOpen, title: "Industry-Oriented Curriculum", desc: "Courses designed with real industry requirements" },
  { icon: Wrench, title: "Live Projects & Case Studies", desc: "Hands-on experience with real-world projects" },
  { icon: Award, title: "Internship with Certification", desc: "Earn recognized certificates upon completion" },
  { icon: Briefcase, title: "Placement Assistance", desc: "Career support and job referral programs" },
  { icon: Users, title: "Expert Mentors", desc: "Learn from experienced industry professionals" },
  { icon: IndianRupee, title: "Affordable Fees", desc: "Quality education at accessible pricing" },
  { icon: GraduationCap, title: "Real-time Practical Training", desc: "Learn by doing with hands-on practice" },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-4">
            Why Choose Omega Tech?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide everything you need to launch a successful career in technology
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:box-glow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold tracking-wider text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
