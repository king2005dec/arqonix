
import * as React from "react";

export function useScroll() {
  const [scrollY, setScrollY] = React.useState(0);
  const [scrollDirection, setScrollDirection] = React.useState<"up" | "down" | null>(null);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [scrollPercentage, setScrollPercentage] = React.useState(0);
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      
      // Calculate scroll percentage
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = windowHeight > 0 ? (currentScrollY / windowHeight) * 100 : 0;
      setScrollPercentage(scrolled);
      
      setLastScrollY(currentScrollY);
      setScrollY(currentScrollY);
      
      // Set scrolling state
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150) as unknown as number;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial call to set correct values
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(window.scrollTimeout);
    };
  }, [lastScrollY]);

  return { scrollY, scrollDirection, scrollPercentage, isScrolling };
}
