import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816] text-[#E5E7EB] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#7C3AED]/5 blur-[90px] pointer-events-none" />
      </div>
      <div className="text-center z-10 space-y-4">
        <h1 className="text-8xl font-extrabold tracking-widest text-[#7C3AED] text-glow mb-2">404</h1>
        <p className="text-base text-slate-400 font-semibold tracking-wider">Oops! Page not found</p>
        <div className="pt-4">
          <a href="/" className="inline-block rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 px-6 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#7C3AED] hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

