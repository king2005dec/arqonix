
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Home</a>
          <a href="#events" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Events</a>
          <a href="#roles" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Roles</a>
          <a href="#community" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Community</a>
          <Button asChild size="sm" className="bg-discord hover:bg-discord-dark text-white">
            <a href="https://discord.gg/ArqonIX" target="_blank" rel="noopener noreferrer">
              Join Discord
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 animate-slide-in-right">
          <nav className="container flex flex-col py-4 space-y-4">
            <a 
              href="#home" 
              className="text-base font-medium text-white/80 hover:text-white transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#events" 
              className="text-base font-medium text-white/80 hover:text-white transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </a>
            <a 
              href="#roles" 
              className="text-base font-medium text-white/80 hover:text-white transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Roles
            </a>
            <a 
              href="#community" 
              className="text-base font-medium text-white/80 hover:text-white transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <div className="px-4 pt-2">
              <Button asChild className="w-full bg-discord hover:bg-discord-dark text-white">
                <a href="https://discord.gg/ArqonIX" target="_blank" rel="noopener noreferrer">
                  Join Discord
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
