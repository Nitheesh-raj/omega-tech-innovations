import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-6">
            About Omega Tech
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Omega Tech is a dynamic technology training and skill development organization committed to 
            shaping future-ready professionals. We focus on bridging the gap between academic knowledge 
            and industry requirements through hands-on learning, expert mentorship, and real-world project exposure.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold tracking-wider text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be a leading force in technology training and skill development, empowering individuals 
              to become innovative, adaptable, and future-ready professionals who excel in the digital world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-display text-xl font-semibold tracking-wider text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide high-quality, hands-on technology education supported by expert mentorship and 
              real-world learning experiences. We equip learners with practical skills, confidence, and 
              career-focused guidance that drive long-term success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
