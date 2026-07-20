import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "The Python programming and Machine Learning training set my career trajectory. Working on live industrial systems built actual developer credentials. I cleared my interview on the first attempt!",
    author: "Vignesh S.",
    role: "Full Stack Engineer",
    program: "Engineering Division Graduate",
    rating: 5,
  },
  {
    quote: "Bridging core biological concepts with computational tools in Bioinformatics here allowed me to secure my research role immediately. The daily mentor guidance and case studies are exceptional.",
    author: "Priyadharshini K.",
    role: "Bioinformatics Analyst",
    program: "Arts & Science Division Graduate",
    rating: 5,
  },
  {
    quote: "The career assistance is comprehensive. They optimized my LinkedIn profile and rebuilt my resume to clear ATS filters. The mock interview sessions completely removed my speaking anxiety.",
    author: "Anand Kumar R.",
    role: "System Engineer",
    program: "Placement Support Candidate",
    rating: 5,
  },
  {
    quote: "Attending the Corporate Soft Skills and Communication workshops helped me transition smoothly from academic life into corporate meetings. Highly recommend this holistic curriculum.",
    author: "Shreya Sen",
    role: "Associate Consultant",
    program: "Master Program Graduate",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
    resetAutoPlay();
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetAutoPlay();
  };

  const startAutoPlay = () => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  const resetAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      startAutoPlay();
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="relative z-10 py-28 overflow-hidden bg-[#050816]/10">
      {/* Background radial glowing grid lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#A855F7]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A855F7] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-wider sm:text-5xl mb-4">
            Voices of <span className="gradient-text">Success</span>
          </h2>
          <p className="text-[#E5E7EB]/70 text-sm md:text-base max-w-2xl mx-auto font-medium">
            Hear from our graduates who transformed their skillsets and launched technical careers
          </p>
        </motion.div>

        {/* Carousel Slider */}
        <div className="relative max-w-4xl mx-auto min-h-[380px] sm:min-h-[300px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass-card relative w-full rounded-2xl p-8 sm:p-12 border border-[#7C3AED]/18 shadow-2xl flex flex-col justify-between"
            >
              {/* Giant quote decorator */}
              <div className="absolute top-6 right-8 text-[#7C3AED]/8 select-none pointer-events-none">
                <Quote className="h-20 w-20 transform scale-x-[-1]" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Stars rating visual */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[index].rating }).map((_, starIdx) => (
                    <span key={starIdx} className="text-[#D4AF37] text-glow-gold text-lg">★</span>
                  ))}
                </div>

                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium italic">
                  "{testimonials[index].quote}"
                </p>

                {/* Author profile indicators */}
                <div className="flex items-center justify-between border-t border-[#7C3AED]/15 pt-5">
                  <div>
                    <h4 className="font-display text-base font-extrabold text-white">
                      {testimonials[index].author}
                    </h4>
                    <p className="text-xs text-slate-400 font-semibold">
                      {testimonials[index].role}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-3 py-1 text-[10px] font-bold text-[#A855F7] tracking-wider uppercase">
                    {testimonials[index].program}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-16 sm:bottom-auto sm:-left-6 sm:right-auto z-20">
            <button
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#7C3AED]/20 bg-[#0F172A]/80 hover:bg-[#7C3AED] hover:text-white text-slate-300 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute -bottom-16 sm:bottom-auto sm:-right-6 sm:left-auto z-20">
            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#7C3AED]/20 bg-[#0F172A]/80 hover:bg-[#7C3AED] hover:text-white text-slate-300 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel indicators dots */}
        <div className="flex justify-center gap-2 mt-20 sm:mt-12">
          {testimonials.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => {
                setDirection(dotIdx > index ? 1 : -1);
                setIndex(dotIdx);
                resetAutoPlay();
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIdx === index ? "w-6 bg-[#7C3AED]" : "w-2 bg-[#7C3AED]/30 hover:bg-[#7C3AED]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
