import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  useEffect(() => {
    // Force refresh ScrollTrigger on mount to prevent lag or shifts
    ScrollTrigger.refresh();

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        lerp: 0.08,
        infinite: false,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default ScrollProvider;
