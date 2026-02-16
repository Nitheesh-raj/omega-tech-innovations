import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <span className="font-display text-base font-bold tracking-wider">
                OMEGA <span className="text-primary">TECH</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Future-focused technology training and innovation center. We don't just teach technology — we build innovators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold tracking-wider text-primary">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/courses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Courses</Link>
              <Link to="/internship" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Internship</Link>
              <Link to="/placement" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Placement</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold tracking-wider text-primary">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:Omegatechpvt@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-primary" /> Omegatechpvt@gmail.com
              </a>
              <a href="tel:+918754263141" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-primary" /> +91 87542 63141
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" /> India
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold tracking-wider text-primary">Programs</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>AI & Machine Learning</span>
              <span>Data Science</span>
              <span>Robotics & IoT</span>
              <span>Cybersecurity</span>
              <span>Cloud & DevOps</span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Omega Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
