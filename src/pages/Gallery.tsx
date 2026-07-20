import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

// Gallery items
const galleryItems = [
  // MOU Ceremony
  { id: 1, src: "/mou-ceremony/1.jpg", alt: "MOU Ceremony 1", category: "MOU Ceremony" },
  { id: 2, src: "/mou-ceremony/2.jpg", alt: "MOU Ceremony 2", category: "MOU Ceremony" },
  { id: 3, src: "/mou-ceremony/3.jpg", alt: "MOU Ceremony 3", category: "MOU Ceremony" },
  { id: 4, src: "/mou-ceremony/4.jpg", alt: "MOU Ceremony 4", category: "MOU Ceremony" },
  { id: 5, src: "/mou-ceremony/5.jpg", alt: "MOU Ceremony 5", category: "MOU Ceremony" },
  { id: 6, src: "/mou-ceremony/8.jpg", alt: "MOU Ceremony Banner", category: "MOU Ceremony" },
  { id: 7, src: "/mou-ceremony/7.jpg", alt: "MOU Ceremony 7", category: "MOU Ceremony" },
  
  // Seminars
  { id: 8, src: "/seminars/1.jpg", alt: "Seminar 1", category: "Seminars" },
  { id: 13, src: "/seminars/2.jpg", alt: "Seminar 2", category: "Seminars" },
  { id: 14, src: "/seminars/3.jpg", alt: "Seminar 3", category: "Seminars" },

  // Workshops & Internships
  { id: 9, src: "/workshops/1.jpg", alt: "Workshop 1", category: "Workshops & Internships" },
  { id: 10, src: "/workshops/2.jpg", alt: "Workshop 2", category: "Workshops & Internships" },
  { id: 15, src: "/workshops/3.jpg", alt: "Workshop 3", category: "Workshops & Internships" },
  { id: 18, src: "/workshops/4.jpg", alt: "Workshop 4", category: "Workshops & Internships" },
  { id: 19, src: "/workshops/5.jpg", alt: "Workshop 5", category: "Workshops & Internships" },
  { id: 20, src: "/workshops/6.jpg", alt: "Workshop 6", category: "Workshops & Internships" },
  { id: 22, src: "/workshops/8.jpg", alt: "Workshop 8", category: "Workshops & Internships" },
  { id: 23, src: "/workshops/9.jpg", alt: "Workshop 9", category: "Workshops & Internships" },
  { id: 24, src: "/workshops/10.jpg", alt: "Workshop 10", category: "Workshops & Internships" },
  { id: 25, src: "/workshops/11.jpg", alt: "Workshop 11", category: "Workshops & Internships" },
  { id: 26, src: "/workshops/12.jpg", alt: "Workshop 12", category: "Workshops & Internships" },
  { id: 27, src: "/workshops/13.jpg", alt: "Workshop 13", category: "Workshops & Internships" },

  // Women Empowerment Programs
  { id: 11, src: "/women-empowerment/1.jpg", alt: "Women Empowerment 1", category: "Women Empowerment Programs" },
  { id: 12, src: "/women-empowerment/2.jpg", alt: "Women Empowerment 2", category: "Women Empowerment Programs" },
  { id: 16, src: "/women-empowerment/3.jpg", alt: "Women Empowerment 3", category: "Women Empowerment Programs" },
  { id: 17, src: "/women-empowerment/4.jpg", alt: "Women Empowerment 4", category: "Women Empowerment Programs" },

  // Internal Programs
  { id: 28, src: "/internal-programs/1.jpg", alt: "Internal Program 1", category: "Internal Programs" },
  { id: 29, src: "/internal-programs/2.jpg", alt: "Internal Program 2", category: "Internal Programs" },
  { id: 30, src: "/internal-programs/3.jpg", alt: "Internal Program 3", category: "Internal Programs" },
  { id: 31, src: "/internal-programs/4.jpg", alt: "Internal Program 4", category: "Internal Programs" },
  { id: 32, src: "/internal-programs/5.jpg", alt: "Internal Program 5", category: "Internal Programs" },
  { id: 33, src: "/internal-programs/6.jpg", alt: "Internal Program 6", category: "Internal Programs" },
  { id: 34, src: "/internal-programs/7.jpg", alt: "Internal Program 7", category: "Internal Programs" },
  { id: 35, src: "/internal-programs/8.jpg", alt: "Internal Program 8", category: "Internal Programs" },
  { id: 36, src: "/internal-programs/9.jpg", alt: "Internal Program 9", category: "Internal Programs" },
];

const categories = ["All", "MOU Ceremony", "Seminars", "Workshops & Internships", "Women Empowerment Programs", "Internal Programs"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-[#7C3AED]/30 flex flex-col relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 -left-1/4 w-[150%] h-[500px] bg-[#7C3AED]/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#3B82F6]/10 blur-[150px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />
      
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4 tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">Gallery</span>
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Explore moments from our ceremonies, events, workshops, and milestones.
              </p>
            </motion.div>
          </div>

          {/* Category Tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                    : "bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/30 hover:bg-[#7C3AED]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className={`relative group rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-white/5 backdrop-blur-sm
                    ${(activeCategory === "All" && index === 0) ? 'md:col-span-2 md:row-span-2' : ''}
                  `}
                  onClick={() => setSelectedImage(item.src)}
                >
                  <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center -z-10">
                    <span className="text-slate-500 text-sm font-medium">Loading Image...</span>
                  </div>
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000";
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-[#7C3AED] text-white text-xs font-bold rounded-md mb-2 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        <ZoomIn className="w-5 h-5 text-[#7C3AED]" />
                        View Image
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              No images found for this category.
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged gallery item" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000";
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
