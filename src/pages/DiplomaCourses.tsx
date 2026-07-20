import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  CheckCircle2, Clock, GraduationCap, Briefcase, ChevronRight, 
  ChevronLeft, GraduationCap as GradCap, Download, Plane, 
  ChefHat, Hotel, Megaphone, Leaf, Shirt, Truck, Award,
  ShieldCheck, FileText, UserCheck, Star
} from "lucide-react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// Import Assets
import aviationImg from "../assets/diploma-aviation.png";
import chefImg from "../assets/diploma-chef.png";
import priyankaImg from "../assets/team-priyanka.jpg";
import nishaImg from "../assets/team-nisha.jpeg";

const DiplomaCourses = () => {
  useEffect(() => {
    document.title = "Diploma Courses | OMEGA TECH - Premium Futurist Training";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050512] text-[#E5E7EB] font-sans selection:bg-[#8B5CF6]/30 flex flex-col">
      <Navbar />

      <main className="flex-1 relative z-10 w-full mx-auto pb-20">
        
        {/* 1. HERO SECTION */}
        <section className="relative w-full min-h-[90vh] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <img src={aviationImg} alt="Hero Background" className="w-full h-full object-cover object-[center_30%]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050512] via-[#050512]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050512] via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-12">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/20 px-4 py-1.5 mb-8 backdrop-blur-md"
            >
              <GradCap className="w-4 h-4 text-[#C4B5FD]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#C4B5FD]">
                OUR DIPLOMA COURSES
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-3xl"
            >
              Omega Tech – CVESD Affiliation No:<br />
              <span className="text-[#A78BFA]">TN/120526/1176</span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-2xl"
            >
              Comprehensive Diploma Course Catalog
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-xl text-slate-300 text-sm md:text-base leading-relaxed mb-10"
            >
              Industry-approved diploma programs designed with practical training, modern curriculum, certification, and placement assistance to prepare students for successful careers.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white px-8 py-6 rounded-lg font-bold flex items-center gap-2 transition-all">
                Explore Diploma Courses <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-lg font-bold flex items-center gap-2 bg-transparent backdrop-blur-sm transition-all">
                Download Brochure <Download className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. STATS STRIP */}
        <section className="relative z-20 -mt-10 px-4 md:px-12 max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#0F0F2D] border border-white/10 rounded-xl p-6 shadow-2xl"
          >
            {[
              { icon: GradCap, title: "120+", desc: "Diploma Courses" },
              { icon: ShieldCheck, title: "CVESD", desc: "Government Affiliation" },
              { icon: Briefcase, title: "100%", desc: "Placement Assistance" },
              { icon: UserCheck, title: "Industry", desc: "Expert Trainers" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-full border border-[#8B5CF6]/30 flex items-center justify-center text-[#A78BFA]">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{stat.title}</h4>
                  <p className="text-xs text-slate-400 font-medium">{stat.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* 3. CATEGORIES GRID */}
        <section className="pt-24 pb-16 px-6 max-w-[1200px] mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Explore Our <span className="text-[#A78BFA]">Diploma</span> Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {[
              { icon: Plane, label: "Aviation" },
              { icon: ChefHat, label: "Catering & Hospitality" },
              { icon: Hotel, label: "Hotel Management" },
              { icon: Megaphone, label: "Digital Marketing" },
              { icon: Leaf, label: "Beauty & Wellness" },
              { icon: Shirt, label: "Fashion Design" },
              { icon: Truck, label: "Logistics & Supply Chain" },
            ].map((cat, i) => (
              <div key={i} className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-[#0B0B20] border border-white/5 hover:border-[#8B5CF6]/50 hover:bg-[#111133] transition-all cursor-pointer">
                <cat.icon className="w-10 h-10 text-[#6D28D9] group-hover:text-[#A78BFA] transition-colors" strokeWidth={1.5} />
                <span className="text-xs font-semibold text-slate-300 text-center leading-tight">{cat.label}</span>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="text-white hover:bg-white/5 border border-white/10 rounded-full px-6 flex items-center gap-2 mx-auto">
            View All Courses <ChevronRight className="w-4 h-4" />
          </Button>
        </section>

        {/* 4. SPLIT-SCREEN COURSE CATALOG BLOCKS */}
        <section className="space-y-8 px-4 md:px-12 max-w-[1400px] mx-auto py-12">
          
          {/* AVIATION BLOCK */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row rounded-3xl border border-[#8B5CF6]/20 bg-[#0B0B20] overflow-hidden shadow-[0_0_50px_rgba(109,40,217,0.1)]"
          >
            {/* Left */}
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded bg-[#6D28D9]/20 px-3 py-1 mb-6 border border-[#6D28D9]/30 w-max">
                <Plane className="w-3 h-3 text-[#A78BFA]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A78BFA]">AVIATION</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">Diploma in Aviation & Cabin Crew</h3>
              <p className="text-sm font-semibold text-[#8B5CF6] mb-6">Affiliation No: TN/120526/1176</p>
              <p className="text-sm text-slate-400 mb-10 max-w-md">Kickstart your career in the aviation industry with world-class training in hospitality, cabin operations, passenger handling, and safety protocols.</p>
              
              <div className="rounded-xl border border-white/[0.08] bg-[#050512] overflow-hidden">
                <div className="grid grid-cols-[100px_1fr] bg-[#11112D] p-4 border-b border-white/[0.08] text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">
                  <div>Course Code</div>
                  <div>Course Name</div>
                </div>
                <div className="divide-y divide-white/[0.05]">
                  {[
                    { code: "CAV101", name: "Aviation & Cabin Crew" },
                    { code: "CAV102", name: "Airport Ground Staff" },
                    { code: "CAV103", name: "Air Ticketing & Reservation" },
                    { code: "CAV104", name: "Travel & Tourism" },
                    { code: "AV301", name: "Airport Customer Service" },
                    { code: "AV302", name: "Cargo & Logistics" },
                    { code: "AV303", name: "Aviation Safety" },
                    { code: "AV304", name: "Airline Customer Relations" }
                  ].map((course, cIdx) => (
                    <div key={cIdx} className="grid grid-cols-[100px_1fr] p-3 md:p-4 text-xs md:text-sm font-medium text-slate-300 hover:bg-white/[0.02]">
                      <div className="text-slate-500 font-mono">{course.code}</div>
                      <div>{course.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img src={aviationImg} alt="Aviation" className="absolute inset-0 w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B20] via-transparent to-transparent hidden lg:block w-32" />
              
              {/* Floating Info Boxes */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                {[
                  { icon: Clock, title: "Duration", val: "12 Months" },
                  { icon: GradCap, title: "Eligibility", val: "10th / 12th Pass" },
                  { icon: Briefcase, title: "Mode", val: "Full Time" }
                ].map((info, idx) => (
                  <div key={idx} className="bg-[#050512]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center w-28 text-center shadow-2xl">
                    <info.icon className="w-5 h-5 text-[#A78BFA] mb-2" />
                    <span className="text-[10px] text-slate-400 uppercase font-semibold mb-1">{info.title}</span>
                    <span className="text-xs font-bold text-white">{info.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CATERING BLOCK */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row rounded-3xl border border-[#8B5CF6]/20 bg-[#0B0B20] overflow-hidden shadow-[0_0_50px_rgba(109,40,217,0.1)]"
          >
            {/* Left */}
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded bg-[#6D28D9]/20 px-3 py-1 mb-6 border border-[#6D28D9]/30 w-max">
                <ChefHat className="w-3 h-3 text-[#A78BFA]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A78BFA]">CATERING & HOSPITALITY</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">Diploma in Catering &<br/>Hospitality Management</h3>
              <p className="text-sm font-semibold text-[#8B5CF6] mb-6">Affiliation No: TN/120526/1176</p>
              <p className="text-sm text-slate-400 mb-10 max-w-md">Build your career in the hospitality industry with hands-on training in food production, service, and hotel operations.</p>
              
              <div className="rounded-xl border border-white/[0.08] bg-[#050512] overflow-hidden">
                <div className="grid grid-cols-[100px_1fr] bg-[#11112D] p-4 border-b border-white/[0.08] text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">
                  <div>Course Code</div>
                  <div>Course Name</div>
                </div>
                <div className="divide-y divide-white/[0.05]">
                  {[
                    { code: "CHM201", name: "Catering & Hospitality Management" },
                    { code: "CHM202", name: "Hotel Management" },
                    { code: "CHM203", name: "Bakery & Confectionery" },
                    { code: "CHM204", name: "Food Production" },
                    { code: "CHM205", name: "Front Office Operations" },
                    { code: "CHM206", name: "Housekeeping Management" },
                    { code: "CHM207", name: "Nutrition & Dietetics" },
                    { code: "CHM208", name: "Food & Beverage Service" }
                  ].map((course, cIdx) => (
                    <div key={cIdx} className="grid grid-cols-[100px_1fr] p-3 md:p-4 text-xs md:text-sm font-medium text-slate-300 hover:bg-white/[0.02]">
                      <div className="text-slate-500 font-mono">{course.code}</div>
                      <div>{course.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img src={chefImg} alt="Chef" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B20] via-transparent to-transparent hidden lg:block w-32" />
              
              {/* Floating Info Boxes */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                {[
                  { icon: Clock, title: "Duration", val: "12 Months" },
                  { icon: GradCap, title: "Eligibility", val: "10th / 12th Pass" },
                  { icon: Briefcase, title: "Mode", val: "Full Time" }
                ].map((info, idx) => (
                  <div key={idx} className="bg-[#050512]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center w-28 text-center shadow-2xl">
                    <info.icon className="w-5 h-5 text-[#A78BFA] mb-2" />
                    <span className="text-[10px] text-slate-400 uppercase font-semibold mb-1">{info.title}</span>
                    <span className="text-xs font-bold text-white">{info.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 5. WHY CHOOSE OMEGA TECH */}
        <section className="pt-24 pb-16 px-6 max-w-[1200px] mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Why Choose <span className="text-[#A78BFA]">Omega Tech?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: FileText, title: "Industry-Aligned Curriculum", desc: "Designed as per industry standards and requirements." },
              { icon: CheckCircle2, title: "Practical Training", desc: "Hands-on training with real-time industry exposure." },
              { icon: ShieldCheck, title: "Government Affiliation", desc: "Affiliated with CVESD, Government of Tamil Nadu." },
              { icon: Briefcase, title: "Placement Support", desc: "100% placement assistance for eligible students." },
              { icon: UserCheck, title: "Expert Trainers", desc: "Learn from industry experts and certified trainers." },
              { icon: Award, title: "Certification", desc: "Recognized diploma certificate upon completion." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-[#0B0B20] border border-[#8B5CF6]/10 rounded-2xl hover:bg-[#11112D] transition-colors">
                <div className="w-12 h-12 rounded-full border border-[#8B5CF6]/30 flex items-center justify-center text-[#A78BFA] mb-4">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-[10px] text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. PLACEMENT PARTNERS */}
        <section className="py-12 border-y border-white/5 bg-[#050512]">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-10">
              Our <span className="text-[#A78BFA]">Placement Partners</span>
            </h3>
            <div className="flex items-center justify-between opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <ChevronLeft className="w-6 h-6 text-slate-400 cursor-pointer" />
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                <span className="text-xl md:text-2xl font-sans font-bold italic tracking-tighter text-white">IndiGo</span>
                <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-widest uppercase">Air India</span>
                <span className="text-2xl md:text-3xl font-serif text-white uppercase tracking-widest">Taj</span>
                <span className="text-lg md:text-xl font-sans font-bold text-white uppercase tracking-wider">ITC Hotels</span>
                <span className="text-xl md:text-2xl font-serif font-bold text-white italic">Marriott</span>
                <span className="text-xl md:text-2xl font-script text-white italic">Radisson</span>
                <span className="text-xl md:text-2xl font-sans font-light tracking-[0.3em] text-white uppercase">Hyatt</span>
              </div>
              <ChevronRight className="w-6 h-6 text-slate-400 cursor-pointer" />
            </div>
          </div>
        </section>

        {/* 7. STUDENT SUCCESS STORIES */}
        <section className="pt-24 pb-16 px-6 max-w-[1200px] mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Student <span className="text-[#A78BFA]">Success Stories</span>
          </h3>
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
              <ChevronLeft className="w-5 h-5 text-slate-400" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 px-8">
              {[
                { 
                  name: "Priya Sharma", role: "Cabin Crew, IndiGo", img: priyankaImg,
                  quote: "Omega Tech gave me the confidence and skills to build my career in aviation. Today, I'm proud to be a Cabin Crew with IndiGo Airlines."
                },
                { 
                  name: "Vikram N.", role: "Front Office Executive, Taj Hotels", img: nishaImg,
                  quote: "The practical training and placement support helped me get a job in a 5-star hotel right after my course."
                },
                { 
                  name: "Ananya R.", role: "Guest Relations, Marriott", img: priyankaImg,
                  quote: "Excellent faculty, great environment, and industry exposure. Highly recommended for hospitality aspirants."
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-[#0B0B20] border border-white/5 rounded-2xl p-6 text-left relative flex flex-col justify-between hover:border-[#8B5CF6]/30 transition-all shadow-lg">
                  <span className="text-[#A78BFA] text-4xl absolute top-4 left-4 opacity-20 font-serif">"</span>
                  <p className="text-xs text-slate-300 leading-relaxed italic mb-6 relative z-10 pt-2">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.img} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{testimonial.name}</h4>
                      <p className="text-[10px] text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="pt-16 pb-24 px-6 max-w-[1000px] mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Frequently Asked <span className="text-[#A78BFA]">Questions</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              "What is the eligibility for diploma courses?",
              "What is the duration of diploma programs?",
              "Are the diplomas government recognized?",
              "Is placement assistance provided?",
              "Do you provide internship support?",
              "What is the fee structure?"
            ].map((q, i) => (
              <div key={i} className="flex justify-between items-center p-5 rounded-xl border border-white/5 bg-[#0B0B20] hover:bg-[#11112D] cursor-pointer transition-colors">
                <span className="text-sm font-semibold text-slate-300">{q}</span>
                <span className="text-slate-500 font-light text-xl">+</span>
              </div>
            ))}
          </div>
        </section>

        {/* 9. BOTTOM CTA */}
        <section className="px-6 max-w-[1200px] mx-auto pb-16">
          <div className="rounded-[24px] bg-gradient-to-r from-[#6D28D9] to-[#3B0764] p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute right-10 opacity-10">
              <Plane className="w-40 h-40 rotate-45" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-2">Start Your Career with Omega Tech Today!</h3>
              <p className="text-white/70 text-sm">Join our CVESD-affiliated diploma programs and become industry-ready.</p>
            </div>
            <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
              <Button className="bg-[#A78BFA] hover:bg-[#8B5CF6] text-slate-900 w-full md:w-auto px-8 font-bold">Apply Now <ChevronRight className="w-4 h-4 ml-2"/></Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full md:w-auto bg-transparent backdrop-blur-sm">Download Prospectus <Download className="w-4 h-4 ml-2"/></Button>
            </div>
          </div>
        </section>

      </main>

      {/* 10. FOOTER STRIP */}
      <Footer />
      
    </div>
  );
};

export default DiplomaCourses;
