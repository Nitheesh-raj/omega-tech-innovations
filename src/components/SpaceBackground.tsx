import { useEffect, useRef } from "react";

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Track mouse coordinates for reactive lighting and parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.tx = e.clientX;
      mouseRef.current.ty = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Initialize particles (stars & nodes)
    const particleCount = Math.min(Math.floor((width * height) / 22000), 75);
    interface Star {
      x: number;
      y: number;
      ox: number;
      oy: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      pulseSpeed: number;
      color: string;
    }

    const stars: Star[] = Array.from({ length: particleCount }, () => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      return {
        x,
        y,
        ox: x, // original position
        oy: y,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        color: Math.random() > 0.6 ? "#7C3AED" : Math.random() > 0.4 ? "#A855F7" : "#E5E7EB",
      };
    });

    // Floating gradient orb coordinates
    const orbs = [
      { x: width * 0.2, y: height * 0.3, vx: 0.15, vy: 0.1, radius: 280, color: "rgba(124, 58, 237, 0.03)" },
      { x: width * 0.8, y: height * 0.7, vx: -0.1, vy: 0.15, radius: 320, color: "rgba(168, 85, 247, 0.03)" },
      { x: width * 0.5, y: height * 0.5, vx: 0.05, vy: -0.1, radius: 250, color: "rgba(212, 175, 55, 0.015)" },
    ];

    const drawOrbs = (c: CanvasRenderingContext2D) => {
      orbs.forEach((orb) => {
        // Move orb
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce boundaries
        if (orb.x < 0 || orb.x > width) orb.vx *= -1;
        if (orb.y < 0 || orb.y > height) orb.vy *= -1;

        // Draw soft radial blur glow
        const grad = c.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "rgba(5, 8, 22, 0)");
        c.fillStyle = grad;
        c.beginPath();
        c.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        c.fill();
      });
    };

    const render = () => {
      // Background base
      ctx.fillStyle = "#050816";
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse coordinate tracking (lerp)
      const mouse = mouseRef.current;
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      // 1. Draw drifting glowing orbs
      drawOrbs(ctx);

      // 2. Draw mouse-reactive spotlight (radial lighting gradient)
      if (mouse.x > 0 && mouse.y > 0) {
        const lightGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 450);
        lightGrad.addColorStop(0, "rgba(168, 85, 247, 0.045)");
        lightGrad.addColorStop(0.5, "rgba(124, 58, 237, 0.015)");
        lightGrad.addColorStop(1, "rgba(5, 8, 22, 0)");
        ctx.fillStyle = lightGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 450, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Draw neural network stars and connections
      stars.forEach((s) => {
        // Soft drift
        s.ox += s.vx;
        s.oy += s.vy;

        // Wrap around boundaries
        if (s.ox < 0) s.ox = width;
        if (s.ox > width) s.ox = 0;
        if (s.oy < 0) s.oy = height;
        if (s.oy > height) s.oy = 0;

        // Parallax effect based on mouse distance from center
        const dx = (mouse.x - width / 2) * 0.018 * (s.size * 0.5);
        const dy = (mouse.y - height / 2) * 0.018 * (s.size * 0.5);

        s.x = s.ox + dx;
        s.y = s.oy + dy;

        // Pulse alpha
        s.alpha += s.pulseSpeed;
        if (s.alpha > 0.8 || s.alpha < 0.15) {
          s.pulseSpeed *= -1;
        }

        // Draw star
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0, Math.min(s.alpha, 1));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1; // reset alpha

      // Connect stars (neural lines)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const s1 = stars[i];
          const s2 = stars[j];
          const dist = Math.hypot(s1.x - s2.x, s1.y - s2.y);

          if (dist < 110) {
            const opacity = (1 - dist / 110) * 0.12;
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden pointer-events-none noise-bg">
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_60%,#050816_100%)] opacity-80" />
      <div className="absolute inset-0 bg-transparent noise-bg opacity-[0.015]" />
    </div>
  );
};

export default SpaceBackground;
