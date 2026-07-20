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
      page: window.location.pathname || "/",
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbywxHZ3gJzzSFRS66ZqhVsyFt9zk30uDCB605EdDVu2MhHra7K_zqVnMmnFAs3nJji8/exec", {
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
    <section id="contact" className="relative z-10 py-28 overflow-hidden bg-[#050816]/10">
      {/* Background neon orbs */}
      <div className="absolute top-1/2 left-1/3 h-96 w-96 rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-[#A855F7]/3 blur-[100px] pointer-events-none" />

      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A855F7] uppercase mb-4">
            Connect
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-wider sm:text-5xl mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[#E5E7EB]/70 text-sm md:text-base max-w-2xl mx-auto font-medium">
            Start your journey towards becoming a future-ready technology professional
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 max-w-6xl mx-auto">
          {/* Contact Info (HUD panels) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="font-display text-xl font-bold tracking-wider text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <a href="mailto:Omegatechpvt@gmail.com" className="group flex items-center gap-4 rounded-xl border border-[#7C3AED]/12 bg-[#0F172A]/20 p-4 transition-all hover:border-[#7C3AED]/40 hover:bg-[#0F172A]/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/15 group-hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5 text-[#7C3AED]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">Omegatechpvt@gmail.com</p>
                </div>
              </a>

              <a href="tel:+918754263141" className="group flex items-center gap-4 rounded-xl border border-[#7C3AED]/12 bg-[#0F172A]/20 p-4 transition-all hover:border-[#7C3AED]/40 hover:bg-[#0F172A]/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/15 group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5 text-[#7C3AED]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">+91 87542 63141</p>
                </div>
              </a>

              {/* Head Office */}
              <div className="group relative rounded-xl border border-[#7C3AED]/15 bg-[#0F172A]/20 p-5 transition-all duration-300 hover:border-[#A855F7]/30 hover:shadow-[0_4px_25px_rgba(124,58,237,0.1)]">
                <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-gradient-to-r from-violet-500 to-purple-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/15 mt-0.5 group-hover:scale-105 transition-transform">
                    <MapPin className="h-5 w-5 text-[#7C3AED]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <p className="text-xs font-bold text-white uppercase tracking-wider">Head Office</p>
                      <span className="rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 px-2 py-0.5 text-[9px] font-extrabold text-[#A855F7] tracking-wider uppercase">Chennai</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                      Pallikaranai, Chennai – 600100
                    </p>
                  </div>
                </div>
              </div>

              {/* Branch Office */}
              <div className="group relative rounded-xl border border-[#7C3AED]/15 bg-[#0F172A]/20 p-5 transition-all duration-300 hover:border-[#A855F7]/30 hover:shadow-[0_4px_25px_rgba(124,58,237,0.1)]">
                <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-gradient-to-r from-violet-500 to-purple-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/15 mt-0.5 group-hover:scale-105 transition-transform">
                    <MapPin className="h-5 w-5 text-[#7C3AED]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <p className="text-xs font-bold text-white uppercase tracking-wider">Branch Office</p>
                      <span className="rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 px-2 py-0.5 text-[9px] font-extrabold text-[#A855F7] tracking-wider uppercase">Theni, Ramanathapuram</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                      Theni, Ramanathapuram
                    </p>
                  </div>
                </div>
              </div>

              <a href="https://www.omegatechs.in" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-xl border border-[#7C3AED]/12 bg-[#0F172A]/20 p-4 transition-all hover:border-[#7C3AED]/40 hover:bg-[#0F172A]/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/15 group-hover:scale-105 transition-transform">
                  <Globe className="h-5 w-5 text-[#7C3AED]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Website</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">www.omegatechs.in</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-[#7C3AED]/15 bg-[#0F172A]/15 p-8 sm:p-10 backdrop-blur-md shadow-2xl relative">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-extrabold tracking-wider text-slate-300 uppercase">Name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    required
                    className="bg-[#050816]/60 border-[#7C3AED]/25 text-white placeholder-slate-500 focus:border-[#A855F7] focus:ring-[#A855F7] h-12 rounded-xl transition-all"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-extrabold tracking-wider text-slate-300 uppercase">Email</label>
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                    required
                    className="bg-[#050816]/60 border-[#7C3AED]/25 text-white placeholder-slate-500 focus:border-[#A855F7] focus:ring-[#A855F7] h-12 rounded-xl transition-all"
                  />
                </div>
              </div>
              
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-extrabold tracking-wider text-slate-300 uppercase">Phone</label>
                  <Input
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                    className="bg-[#050816]/60 border-[#7C3AED]/25 text-white placeholder-slate-500 focus:border-[#A855F7] focus:ring-[#A855F7] h-12 rounded-xl transition-all"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-extrabold tracking-wider text-slate-300 uppercase">Subject</label>
                  <Input
                    placeholder="Inquiry subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
                    className="bg-[#050816]/60 border-[#7C3AED]/25 text-white placeholder-slate-500 focus:border-[#A855F7] focus:ring-[#A855F7] h-12 rounded-xl transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-extrabold tracking-wider text-slate-300 uppercase">Message</label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  required
                  className="bg-[#050816]/60 border-[#7C3AED]/25 text-white placeholder-slate-500 focus:border-[#A855F7] focus:ring-[#A855F7] rounded-xl transition-all"
                />
              </div>

              <div className="relative group pt-2">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(124,58,237,0.2)]" />
                <Button type="submit" disabled={isSubmitting} className="w-full relative h-13 bg-[#050816] text-[#E5E7EB] hover:bg-[#7C3AED] hover:text-white border border-[#7C3AED]/40 font-display text-xs tracking-widest uppercase transition-all duration-300 rounded-xl">
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Send className="h-4 w-4 mr-2" />}
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
