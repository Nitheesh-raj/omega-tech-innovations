import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxZEqykcz4eNy54U6_rh-q73Y2eMb50C0zZZ6fwBtKmzMUB5ZVvlXjvuIcg88q8C0UQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      toast({
        title: "Inquiry sent successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-wider sm:text-4xl gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start your journey towards becoming a future-ready technology professional
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold tracking-wider text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:Omegatechpvt@gmail.com" className="flex items-center gap-4 rounded-lg border border-border/50 bg-card/50 p-4 transition-colors hover:border-primary/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">Omegatechpvt@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+918754263141" className="flex items-center gap-4 rounded-lg border border-border/50 bg-card/50 p-4 transition-colors hover:border-primary/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium text-foreground">+91 87542 63141</p>
                  </div>
                </a>
                {/* Head Office */}
                <div className="group relative rounded-lg border border-border/50 bg-card/50 p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_4px_20px_hsl(265_90%_60%/0.1)]">
                  <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-lg bg-gradient-to-r from-violet-500 to-purple-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-semibold text-foreground">Head Office</p>
                        <span className="rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-medium text-primary tracking-wider uppercase">Chennai</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        773, 7th Cross Street,<br />
                        Sai Ganesh Nagar,<br />
                        Jallidenpet, Pallikaranai,<br />
                        Chennai – 600100
                      </p>
                    </div>
                  </div>
                </div>

                {/* Branch Office */}
                <div className="group relative rounded-lg border border-border/50 bg-card/50 p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_4px_20px_hsl(265_90%_60%/0.1)]">
                  <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-lg bg-gradient-to-r from-violet-500 to-purple-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-semibold text-foreground">Branch Office</p>
                        <span className="rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-medium text-primary tracking-wider uppercase">Theni</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Opposite Cooperative Bank,<br />
                        Thenkarai, Periyakulam,<br />
                        Theni District – 625601
                      </p>
                    </div>
                  </div>
                </div>
                <a href="https://www.omegatechs.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg border border-border/50 bg-card/50 p-4 transition-colors hover:border-primary/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Website</p>
                    <p className="text-sm font-medium text-foreground">www.omegatechs.in</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    required
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Email</label>
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                    required
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Phone</label>
                  <Input
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Subject</label>
                  <Input
                    placeholder="Inquiry subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  required
                  className="bg-secondary/50 border-border/50"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full font-display text-sm tracking-wider box-glow group">
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
