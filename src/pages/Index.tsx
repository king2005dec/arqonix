
import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import RolesSection from "@/components/RolesSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { AnimatePresence, motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScroll } from "@/hooks/use-scroll";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const { scrollY, scrollDirection, scrollPercentage, isScrolling } = useScroll();
  
  useEffect(() => {
    toast({
      title: "Welcome to ArqonIX",
      description: "Explore our vibrant Discord community with exciting new events!"
    });
  }, [toast]);
  
  // Create scroll-triggered animation for parallax effect
  const calculateParallax = (baseValue: number) => {
    return isMobile ? baseValue * 0.3 : baseValue;
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-arqonix-dark text-white overflow-x-hidden"
    >
      {/* Enhanced background with animated gradients */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-arqonix-dark to-black"
          animate={{ 
            background: [
              "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(26,31,44,1), rgba(0,0,0,1))",
              "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(30,28,50,1), rgba(0,0,0,1))",
              "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(26,31,44,1), rgba(0,0,0,1))"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>
      
      {/* Floating particles with more dynamic movement */}
      <div className="fixed inset-0 z-[0] pointer-events-none overflow-hidden">
        {Array.from({ length: isMobile ? 10 : 20 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-4 h-4 rounded-full bg-arqonix-purple/10 blur-xl"
            animate={{
              x: [
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`,
              ],
              y: [
                `${Math.random() * 100}vh`,
                `${Math.random() * 100}vh`,
                `${Math.random() * 100}vh`,
              ],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
          />
        ))}
      </div>
      
      <Header />
      <AnimatePresence>
        <div className="relative z-10">
          {/* Apply parallax effect to sections based on scroll */}
          <motion.div 
            style={{ 
              y: scrollY * 0.1 * calculateParallax(1) 
            }}
          >
            <HeroSection />
          </motion.div>
          
          {/* Each section gets unique scroll animation behavior */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", zIndex: 2 }}
          >
            <EventsSection />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ 
              y: scrollY * -0.05 * calculateParallax(1),
              position: "relative", 
              zIndex: 3
            }}
          >
            <RolesSection />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", zIndex: 4 }}
          >
            <CommunitySection />
          </motion.div>
        </div>
      </AnimatePresence>
      <Footer />
      
      {/* Animated cursor - conditionally shown only on desktop */}
      <div 
        id="cursor-glow" 
        className="hidden lg:block fixed w-[200px] h-[200px] rounded-full bg-arqonix-purple/10 blur-3xl pointer-events-none z-[-1] transition-transform duration-100" 
        style={{transform: "translate(-50%, -50%)"}}
      ></div>
      
      {/* Enhanced Mobile scroll indicator with animation based on scroll percentage */}
      {isMobile && (
        <motion.div
          className="fixed bottom-4 right-4 z-50 bg-arqonix-purple/20 backdrop-blur-sm p-2 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollPercentage < 95 ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ 
              y: [0, 5, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-white/70"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </motion.div>
        </motion.div>
      )}

      {/* Mobile drawer for quick event access */}
      {isMobile && (
        <Drawer>
          <DrawerTrigger asChild>
            <motion.button
              className="fixed bottom-16 right-4 z-50 bg-arqonix-purple/80 backdrop-blur-sm p-3 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </motion.button>
          </DrawerTrigger>
          <DrawerContent className="bg-arqonix-dark/95 backdrop-blur-lg text-white border-t border-arqonix-purple/20">
            <div className="p-4">
              <h3 className="text-lg font-bold mb-4 text-gradient">Quick Events Access</h3>
              <div className="grid grid-cols-3 gap-2">
                {['PFP Battle', 'Among Us', 'BGMI', 'Chess', 'Singing', 'Bedwars', 'Movie Night', 'Comedy', 'Custom'].map((event, i) => (
                  <motion.button
                    key={i}
                    className="bg-arqonix-purple/20 hover:bg-arqonix-purple/30 backdrop-blur-sm p-2 rounded-md flex flex-col items-center justify-center gap-1 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(155, 89, 182, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xs">{event}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      )}
      
      {/* Scroll-triggered animations */}
      {isScrolling && isMobile && (
        <motion.div 
          className="fixed inset-0 pointer-events-none z-[1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute top-1/3 w-full h-20 bg-arqonix-purple/5 blur-3xl"
            animate={{ 
              y: scrollDirection === "down" ? [0, 50] : [50, 0],
              opacity: [0.2, 0]
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

// Add cursor effect
if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    const cursor = document.getElementById("cursor-glow");
    if (cursor) {
      window.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      });
    }
  });
}

export default Index;
