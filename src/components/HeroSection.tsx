import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import omega3DLogo from "@/assets/omega-3d-logo.jpg";

class BackgroundStar {
  x: number = 0;
  y: number = 0;
  size: number = 0;
  brightness: number = 0;
  speed: number = 0;
  constructor(w: number, h: number) {
    this.reset(w, h, true);
  }
  reset(w: number, h: number, init = false) {
    this.x = Math.random() * w;
    this.y = init ? Math.random() * h : 0;
    this.size = Math.random() * 1.5 + 0.3;
    this.brightness = Math.random() * 0.6 + 0.2;
    this.speed = Math.random() * 0.12 + 0.04;
  }
  update(w: number, h: number) {
    this.y += this.speed;
    if (this.y > h) this.reset(w, h);
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness * (0.6 + Math.sin(Date.now() * 0.0015 + this.x) * 0.4)})`;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

class GlowingParticle {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
  size: number = 0;
  color: string = "";
  alpha: number = 0;
  decay: number = 0;
  phase: number = 0;
  constructor(w: number, h: number) {
    this.reset(w, h);
  }
  reset(w: number, h: number) {
    this.x = w / 2 + (Math.random() - 0.5) * 150;
    this.y = h / 2 + (Math.random() - 0.5) * 150;
    this.vx = (Math.random() - 0.5) * 1.2;
    this.vy = (Math.random() - 0.5) * 1.2 - 0.25;
    this.size = Math.random() * 2.2 + 0.6;
    this.color = Math.random() > 0.45 ? "#A855F7" : "#C084FC";
    this.alpha = Math.random() * 0.7 + 0.2;
    this.decay = Math.random() * 0.003 + 0.001;
    this.phase = Math.random() * Math.PI * 2;
  }
  update(w: number, h: number) {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.decay;
    this.phase += 0.025;
    if (this.alpha <= 0 || this.x < 0 || this.x > w || this.y < 0 || this.y > h) {
      this.reset(w, h);
    }
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.alpha * (0.7 + Math.sin(this.phase) * 0.3);
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 8;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class HexagonalParticle {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
  size: number = 0;
  rotation: number = 0;
  rotSpeed: number = 0;
  alpha: number = 0;
  decay: number = 0;
  constructor(w: number, h: number) {
    this.reset(w, h);
  }
  reset(w: number, h: number) {
    this.x = w / 2 + (Math.random() - 0.5) * 220;
    this.y = h / 2 + (Math.random() - 0.5) * 220;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8 - 0.15;
    this.size = Math.random() * 5 + 2;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.015;
    this.alpha = Math.random() * 0.35 + 0.1;
    this.decay = Math.random() * 0.0025 + 0.0008;
  }
  update(w: number, h: number) {
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotSpeed;
    this.alpha -= this.decay;
    if (this.alpha <= 0) this.reset(w, h);
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = "rgba(168, 85, 247, 0.08)";
    ctx.strokeStyle = "rgba(192, 132, 252, 0.5)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = this.rotation + (i * Math.PI) / 3;
      const px = this.x + Math.cos(angle) * this.size;
      const py = this.y + Math.sin(angle) * this.size;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}

class GeometricShard {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
  size: number = 0;
  rotation: number = 0;
  rotSpeed: number = 0;
  alpha: number = 0;
  decay: number = 0;
  points: { dx: number; dy: number }[] = [];
  constructor(w: number, h: number) {
    this.reset(w, h);
  }
  reset(w: number, h: number) {
    this.x = w / 2 + (Math.random() - 0.5) * 250;
    this.y = h / 2 + (Math.random() - 0.5) * 250;
    this.vx = (Math.random() - 0.5) * 1.1;
    this.vy = (Math.random() - 0.5) * 1.1 - 0.15;
    this.size = Math.random() * 7 + 3;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.02;
    this.alpha = Math.random() * 0.4 + 0.1;
    this.decay = Math.random() * 0.002 + 0.0006;
    this.points = [];
    for (let i = 0; i < 3; i++) {
      const a = (i * Math.PI * 2) / 3 + (Math.random() - 0.5) * 0.4;
      this.points.push({
        dx: Math.cos(a) * this.size,
        dy: Math.sin(a) * this.size,
      });
    }
  }
  update(w: number, h: number) {
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotSpeed;
    this.alpha -= this.decay;
    if (this.alpha <= 0) this.reset(w, h);
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    const grad = ctx.createLinearGradient(-this.size, -this.size, this.size, this.size);
    grad.addColorStop(0, "rgba(255, 255, 255, 0.45)");
    grad.addColorStop(0.5, "rgba(168, 85, 247, 0.15)");
    grad.addColorStop(1, "rgba(124, 58, 237, 0.02)");
    ctx.fillStyle = grad;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(this.points[0].dx, this.points[0].dy);
    ctx.lineTo(this.points[1].dx, this.points[1].dy);
    ctx.lineTo(this.points[2].dx, this.points[2].dy);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}

class ElectricSpark {
  x: number = 0;
  y: number = 0;
  points: { x: number; y: number }[] = [];
  alpha: number = 0;
  color: string = "#C084FC";
  constructor(cx: number, cy: number) {
    this.reset(cx, cy);
  }
  reset(cx: number, cy: number) {
    this.x = cx + (Math.random() - 0.5) * 110;
    this.y = cy + (Math.random() - 0.5) * 110;
    this.alpha = Math.random() * 0.75 + 0.25;
    this.points = [{ x: this.x, y: this.y }];
    let px = this.x;
    let py = this.y;
    const segments = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i < segments; i++) {
      px += (Math.random() - 0.5) * 16;
      py += (Math.random() - 0.5) * 16;
      this.points.push({ x: px, y: py });
    }
  }
  update() {
    this.alpha -= 0.12;
  }
  draw(ctx: CanvasRenderingContext2D) {
    if (this.alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1.2;
    ctx.shadowColor = "#A855F7";
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);
    for (let i = 1; i < this.points.length; i++) {
      ctx.lineTo(this.points[i].x, this.points[i].y);
    }
    ctx.stroke();
    ctx.restore();
  }
}

class NeonStreak {
  x: number = 0;
  y: number = 0;
  length: number = 0;
  speed: number = 0;
  alpha: number = 0;
  constructor(w: number, h: number) {
    this.reset(w, h);
  }
  reset(w: number, h: number) {
    this.x = -200;
    this.y = Math.random() * h;
    this.length = Math.random() * 140 + 70;
    this.speed = Math.random() * 5 + 3;
    this.alpha = Math.random() * 0.5 + 0.2;
  }
  update(w: number, h: number) {
    this.x += this.speed;
    if (this.x > w + 200) {
      this.reset(w, h);
    }
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    const grad = ctx.createLinearGradient(this.x - this.length, this.y, this.x, this.y);
    grad.addColorStop(0, "rgba(168, 85, 247, 0)");
    grad.addColorStop(0.5, "rgba(168, 85, 247, 0.7)");
    grad.addColorStop(1, "rgba(255, 255, 255, 0.8)");
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(this.x - this.length, this.y);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
    ctx.restore();
  }
}

class PulseWave {
  cx: number;
  cy: number;
  r: number = 0;
  maxR: number = 240;
  alpha: number = 1;
  speed: number = 2.2;
  constructor(cx: number, cy: number) {
    this.cx = cx;
    this.cy = cy;
  }
  update() {
    this.r += this.speed;
    this.alpha = 1 - this.r / this.maxR;
  }
  draw(ctx: CanvasRenderingContext2D) {
    if (this.alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.alpha * 0.3;
    ctx.strokeStyle = "#A855F7";
    ctx.shadowColor = "#A855F7";
    ctx.shadowBlur = 12;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(this.cx, this.cy, this.r, this.r * 0.35, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [logoCanvas, setLogoCanvas] = useState<HTMLCanvasElement | null>(null);

  // Load the 3D rendered logo image and key out its white background dynamically
  useEffect(() => {
    const img = new Image();
    img.src = omega3DLogo;
    img.onload = () => {
      const offscreen = document.createElement("canvas");
      offscreen.width = img.width;
      offscreen.height = img.height;
      const offCtx = offscreen.getContext("2d")!;
      offCtx.drawImage(img, 0, 0);
      
      const imgData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
      const data = imgData.data;
      
      // Real-time high-quality chroma key background removal
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        const brightness = (r + g + b) / 3;
        if (brightness > 242) {
          data[i + 3] = 0; // completely transparent
        } else if (brightness > 220) {
          // smooth alpha feathering for edges
          const factor = (242 - brightness) / 22;
          data[i + 3] = Math.floor(factor * 255);
        }
      }
      offCtx.putImageData(imgData, 0, 0);
      setLogoCanvas(offscreen);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.tx = e.clientX - rect.left - width / 2;
      mouseRef.current.ty = e.clientY - rect.top - height / 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particle Setup
    const stars: BackgroundStar[] = [];
    for (let i = 0; i < 75; i++) stars.push(new BackgroundStar(width, height));

    const particles: GlowingParticle[] = [];
    for (let i = 0; i < 110; i++) particles.push(new GlowingParticle(width, height));

    const hexagons: HexagonalParticle[] = [];
    for (let i = 0; i < 30; i++) hexagons.push(new HexagonalParticle(width, height));

    const shards: GeometricShard[] = [];
    for (let i = 0; i < 15; i++) shards.push(new GeometricShard(width, height));

    const sparks: ElectricSpark[] = [];
    const streaks: NeonStreak[] = [];
    for (let i = 0; i < 2; i++) streaks.push(new NeonStreak(width, height));

    const pulses: PulseWave[] = [];

    let frameCount = 0;

    const render = () => {
      ctx.fillStyle = "rgba(5, 8, 22, 0.12)";
      ctx.fillRect(0, 0, width, height);

      frameCount++;

      if (frameCount % 270 === 0) {
        pulses.push(new PulseWave(width / 2, height / 2));
      }

      if (Math.random() < 0.03 && sparks.length < 8) {
        sparks.push(new ElectricSpark(width / 2, height / 2));
      }

      const mouse = mouseRef.current;
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      const logoX = width / 2 + mouse.x * 0.15;
      const logoY = height / 2 + mouse.y * 0.15;

      // 1. Draw Starfield
      stars.forEach(star => {
        star.update(width, height);
        star.draw(ctx);
      });

      // 2. Volumetric Ray Light
      const rayGrad = ctx.createRadialGradient(logoX, logoY, 0, logoX, logoY, 190 + Math.sin(frameCount * 0.04) * 15);
      rayGrad.addColorStop(0, "rgba(168, 85, 247, 0.12)");
      rayGrad.addColorStop(0.5, "rgba(124, 58, 237, 0.03)");
      rayGrad.addColorStop(1, "rgba(5, 8, 22, 0)");
      ctx.fillStyle = rayGrad;
      ctx.beginPath();
      ctx.arc(logoX, logoY, 220, 0, Math.PI * 2);
      ctx.fill();

      // 3. Holographic energy base ring
      ctx.save();
      ctx.strokeStyle = "rgba(168, 85, 247, 0.4)";
      ctx.shadowColor = "#A855F7";
      ctx.shadowBlur = 10;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 12]);
      ctx.lineDashOffset = -frameCount * 0.15;
      ctx.beginPath();
      ctx.ellipse(logoX, logoY + 125, 135, 42, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // 4. Update and draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        pulses[i].update();
        pulses[i].draw(ctx);
        if (pulses[i].alpha <= 0) pulses.splice(i, 1);
      }

      // 5. Draw 3D Rotating Logo Image (instead of vector pattern)
      if (logoCanvas) {
        const rotY = frameCount * 0.009;
        const scaleX = Math.cos(rotY + mouse.x * 0.001);
        
        ctx.save();
        ctx.translate(logoX, logoY);
        ctx.scale(scaleX, 1.0);
        
        // Premium bloom glow shadow
        ctx.shadowColor = "#A855F7";
        ctx.shadowBlur = 32;
        ctx.globalAlpha = 0.95;
        
        // Draw the keyed-out 3D logo canvas
        ctx.drawImage(logoCanvas, -140, -140, 280, 280);
        ctx.restore();
      }

      // 6. Draw Spikes Sparks and Neon Streaks
      for (let i = sparks.length - 1; i >= 0; i--) {
        sparks[i].update();
        sparks[i].draw(ctx);
        if (sparks[i].alpha <= 0) sparks.splice(i, 1);
      }

      streaks.forEach(streak => {
        streak.update(width, height);
        streak.draw(ctx);
      });

      // 7. Draw Drifting Particles
      particles.forEach(p => {
        p.update(width, height);
        p.draw(ctx);
      });

      hexagons.forEach(h => {
        h.update(width, height);
        h.draw(ctx);
      });

      shards.forEach(s => {
        s.update(width, height);
        s.draw(ctx);
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [logoCanvas]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#050816] to-[#0A0D23] z-0" />
      <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-royal-violet/5 blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-[#A855F7]/3 blur-[160px] pointer-events-none z-0" />

      {/* Main Grid Wrapper */}
      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[calc(100vh-100px)]">
          
          {/* Left Column: 7D Interactive Canvas */}
          <div className="lg:col-span-6 flex justify-center items-center relative h-[360px] sm:h-[480px] lg:h-[620px] w-full order-1">
            <canvas ref={canvasRef} className="absolute inset-0 z-0 block h-full w-full pointer-events-none" />
          </div>

          {/* Right Column: Typography & Content */}
          <div className="lg:col-span-6 text-left space-y-8 order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/5 px-4.5 py-2 text-[10px] font-extrabold tracking-widest text-[#A855F7] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
                </span>
                Enterprise Grade Training
              </div>

              {/* Headings */}
              <div className="space-y-1">
                <h1 className="font-display text-6xl font-black leading-none tracking-widest sm:text-7xl md:text-8xl text-white">
                  OMEGA
                </h1>
                <h1 className="font-display text-6xl font-black leading-none tracking-widest sm:text-7xl md:text-8xl text-[#A855F7] text-glow-purple" style={{ textShadow: "0 0 35px rgba(168, 85, 247, 0.45)" }}>
                  TECH
                </h1>
              </div>

              {/* Sub-tagline */}
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-display text-xs font-bold tracking-[0.25em] text-[#D4AF37] sm:text-sm uppercase text-glow-gold">
                  Knowledge <span className="text-[#7C3AED]">•</span> Skills <span className="text-[#7C3AED]">•</span> Excellence
                </h2>
                <div className="h-0.5 w-36 bg-gradient-to-r from-[#7C3AED]/65 to-transparent rounded-full" />
              </div>

              {/* Paragraph */}
              <p className="max-w-xl text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold tracking-wide">
                A premier technology training and skill development organization committed to shaping 
                future-ready professionals for the digital world.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4.5 pt-3">
                <Link to="/courses" className="w-full sm:w-auto relative group">
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#A855F7] opacity-55 blur-md group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)]" />
                  <Button size="lg" className="w-full relative bg-[#050816]/95 hover:bg-[#7C3AED] hover:text-white border border-[#7C3AED]/40 font-display text-xs tracking-widest uppercase transition-all duration-300 py-6.5 px-9 rounded-lg text-[#E5E7EB]">
                    Explore Courses
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <Link to="/internship" className="w-full sm:w-auto group">
                  <Button size="lg" variant="outline" className="w-full font-display text-xs tracking-widest uppercase border-[#7C3AED]/35 hover:bg-[#7C3AED]/10 text-white bg-[#0F172A]/25 backdrop-blur-md transition-all duration-300 py-6.5 px-9 rounded-lg">
                    Apply for Internship
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mouse scroll down indicator */}
      <div className="absolute bottom-6 inset-x-0 flex flex-col items-center gap-1.5 z-10 pointer-events-none">
        <div className="w-5 h-9 rounded-full border border-slate-400/40 p-1 flex justify-center">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 rounded-full bg-slate-400"
          />
        </div>
        <span className="text-[8px] font-extrabold uppercase tracking-[0.25em] text-slate-500">
          Scroll Down
        </span>
      </div>

      {/* Bottom ambient transition base */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default HeroSection;
