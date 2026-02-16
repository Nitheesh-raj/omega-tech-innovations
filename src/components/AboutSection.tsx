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
            Omega Tech is a future-focused technology training and innovation center dedicated to empowering 
            students, graduates, and professionals with industry-ready skills. We bridge the gap between 
            academic knowledge and real-world industry expectations.
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
              To become a leading technology training and innovation hub that transforms students into skilled 
              tech professionals capable of solving real-world challenges using AI and emerging technologies.
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
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Industry-oriented training in trending technologies</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Practical, project-based learning experiences</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Creating employment-ready professionals</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Promoting innovation and entrepreneurship</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> Industry collaboration for real-time project exposure</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
