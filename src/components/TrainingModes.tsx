import { motion } from "framer-motion";
import { Building, Monitor, Layers, Factory, GraduationCap } from "lucide-react";

const modes = [
  { icon: Building, title: "Offline Classroom", desc: "In-person instructor-led training at our center" },
  { icon: Monitor, title: "Online Live Classes", desc: "Interactive live sessions from anywhere" },
  { icon: Layers, title: "Hybrid Training", desc: "Best of both online and offline modes" },
  { icon: Factory, title: "Corporate Training", desc: "Customized programs for organizations" },
  { icon: GraduationCap, title: "College Tie-ups", desc: "Collaborative programs with institutions" },
];

const TrainingModes = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-4">
            Training Modes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible learning options to suit your schedule and preferences
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm transition-all hover:border-primary/30 hover:box-glow"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <mode.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xs font-semibold tracking-wider text-foreground mb-2">{mode.title}</h3>
              <p className="text-xs text-muted-foreground">{mode.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingModes;
