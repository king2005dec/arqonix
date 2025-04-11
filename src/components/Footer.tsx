
import React from "react";
import { ExternalLink } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-white/10 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Logo size="md" />
            </div>
            <p className="text-white/60 max-w-md">
              A vibrant Discord community for chilling, dating, gaming, and unforgettable events.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <a 
              href="https://discord.gg/ArqonIX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-discord hover:bg-discord-dark text-white px-5 py-2.5 rounded-md transition-colors hover-glow"
            >
              Join Discord
              <ExternalLink className="h-4 w-4" />
            </a>
            <div className="mt-4 text-white/40 text-sm">
              &copy; {new Date().getFullYear()} ArqonIX Community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
