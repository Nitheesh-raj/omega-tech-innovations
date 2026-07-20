import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Courses", path: "/courses" },
  { label: "Diploma Courses", path: "/diploma-courses" },
  { label: "Internship", path: "/internship" },
  { label: "Digital Solutions", path: "/digital-solutions" },
  { label: "Our Partnership Institutions", path: "/partnership-institutions" },
  { label: "Placement", path: "/placement" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Removed legacy scroll logic to #contact since we now have a dedicated contact page


  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    navigate("/contact");
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-[#050816]/75 border-b border-[#7C3AED]/20 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]" 
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-[#7C3AED]/30 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/favicon.ico"
              alt="Omega Tech Logo"
              className="h-9 w-9 rounded-lg border border-[#7C3AED]/20 bg-[#0F172A]/85 relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <span className="font-display text-lg font-extrabold tracking-widest text-white">
            OMEGA <span className="text-[#7C3AED] text-glow">TECH</span>
          </span>
        </Link>

        {/* Desktop Nav with Gliding Hover Effect */}
        <nav className="hidden items-center gap-1 md:flex">
          <div className="flex items-center gap-0.5 bg-[#0F172A]/40 border border-[#7C3AED]/10 rounded-full px-2.5 py-1 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={() => setHoveredPath(link.path)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`relative rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider transition-colors duration-300 uppercase ${
                  isActive(link.path)
                    ? "text-[#7C3AED]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {/* Active Underline Pill */}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Hover Pill */}
                {hoveredPath === link.path && !isActive(link.path) && (
                  <motion.span
                    layoutId="hoverNavTab"
                    className="absolute inset-0 bg-white/5 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 35 }}
                  />
                )}
                
                {link.label}
              </Link>
            ))}
          </div>

          <button onClick={handleContactClick} className="ml-4 group relative">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#A855F7] opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
            <Button size="sm" className="relative font-display text-xs tracking-widest uppercase bg-[#0F172A] border border-[#7C3AED]/30 text-white hover:bg-[#7C3AED] hover:text-white transition-all duration-300 rounded-lg px-5 py-2.5">
              Contact Us
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </button>
        </nav>

        {/* Mobile Nav Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-white/5 border border-white/10 text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-[#7C3AED]/20 bg-[#050816]/95 backdrop-blur-2xl text-white">
            <div className="mt-12 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-5 py-4 text-sm font-semibold tracking-widest uppercase border border-transparent transition-all ${
                    isActive(link.path)
                      ? "bg-[#7C3AED]/10 border-[#7C3AED]/30 text-[#7C3AED]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button onClick={handleContactClick} className="w-full mt-4">
                <Button className="w-full font-display text-xs tracking-widest uppercase bg-[#7C3AED] text-white hover:bg-[#A855F7] border border-[#7C3AED]/30 shadow-lg shadow-[#7C3AED]/20 py-6 rounded-xl">
                  Contact Us
                </Button>
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

