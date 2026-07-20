import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Progress counter simulation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      radius: number;
      color: string;
      speed: number;
      angle: number;
      distance: number;
      rotationSpeed: number;

      constructor() {
        const theta = Math.random() * Math.PI * 2;
        const rad = Math.max(width, height) * 0.6;
        this.x = width / 2 + Math.cos(theta) * rad;
        this.y = height / 2 + Math.sin(theta) * rad;
        this.targetX = width / 2;
        this.targetY = height / 2;
        this.radius = Math.random() * 2 + 0.5;
        this.color = Math.random() > 0.5 ? "#7C3AED" : "#A855F7";
        this.speed = Math.random() * 0.03 + 0.01;
        this.angle = theta;
        this.distance = rad;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
      }

      update(p: number) {
        // Move towards target in a spiral
        this.distance = this.distance * 0.96;
        this.angle += this.rotationSpeed;
        this.x = width / 2 + Math.cos(this.angle) * this.distance;
        this.y = height / 2 + Math.sin(this.angle) * this.distance;

        // If progress is near complete, push outward
        if (p >= 95) {
          const theta = Math.random() * Math.PI * 2;
          this.x += Math.cos(theta) * 15;
          this.y += Math.sin(theta) * 15;
          this.radius *= 0.95;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.shadowBlur = 8;
        c.shadowColor = this.color;
        c.fill();
        c.shadowBlur = 0; // reset
      }
    }

    const particles: Particle[] = Array.from({ length: 80 }, () => new Particle());

    const render = () => {
      ctx.fillStyle = "rgba(5, 8, 22, 0.25)";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update(progress);
        p.draw(ctx);
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816]"
        >
          <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* SVG Logo Container with Glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[#7C3AED]/20 rounded-full blur-2xl h-32 w-32 -translate-x-4 -translate-y-4" />
              
              <svg viewBox="0 0 100 100" className="h-24 w-24 text-primary relative">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                </defs>
                {/* Rotating dash ring */}
                <motion.circle 
                  cx="50" 
                  cy="50" 
                  r="44" 
                  stroke="url(#logoGrad)" 
                  strokeWidth="1" 
                  fill="none" 
                  opacity="0.3" 
                  strokeDasharray="4 6"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                />
                <circle cx="50" cy="50" r="38" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" opacity="0.5" />
                {/* Omega symbol */}
                <motion.path 
                  d="M 28 65 L 38 65 C 38 56 42 45 50 45 C 58 45 62 56 62 65 L 72 65 C 75 65 75 62 75 58 C 75 42 66 30 50 30 C 34 30 25 42 25 58 C 25 62 25 65 28 65 Z" 
                  fill="none" 
                  stroke="url(#logoGrad)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>

            {/* Typography */}
            <div className="text-center space-y-2">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display tracking-[0.25em] text-lg text-white font-bold"
              >
                OMEGA <span className="text-[#7C3AED]">TECH</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.5 }}
                className="text-[10px] tracking-[0.3em] text-[#E5E7EB] uppercase"
              >
                Knowledge • Skills • Excellence
              </motion.p>
            </div>

            {/* Loader Line and Progress */}
            <div className="w-48 flex flex-col items-center gap-2">
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7]" 
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-[#E5E7EB] opacity-60">
                {Math.min(progress, 100)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
