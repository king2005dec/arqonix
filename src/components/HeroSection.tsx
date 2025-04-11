
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from 'lucide-react';
import Logo from './Logo';

const HeroSection = () => {
  const chatMessages = [
    { 
      sender: "Admin", 
      avatar: "A", 
      avatarColor: "bg-arqonix-purple", 
      message: "Welcome to the server! We're hosting a PFP battle tonight 🔥",
      delay: 0.4
    },
    { 
      sender: "NewMember", 
      avatar: "N", 
      avatarColor: "bg-arqonix-blue", 
      message: "Can't wait! Is the BGMI tournament still happening this weekend?",
      delay: 0.6
    },
    { 
      sender: "Moderator", 
      avatar: "M", 
      avatarColor: "bg-arqonix-indigo", 
      message: "Yes! BGMI tournament starts Saturday at 8PM. Join the #events channel for details!",
      delay: 0.8
    },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex flex-col items-center justify-center pt-16 pb-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.9)), url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-arqonix-purple/20 blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.7, 0.9, 0.7],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-arqonix-indigo/20 blur-3xl" 
          animate={{ 
            y: [-30, 0, -30],
            opacity: [0.5, 0.8, 0.5],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-arqonix-blue/20 blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.6, 0.8, 0.6],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-block p-2 px-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium mb-6">
            The Ultimate Discord Community
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <Logo size="lg" withText={false} className="mx-auto" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gradient"
        >
          Welcome to ArqonIX
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
        >
          A vibrant community for chilling, dating, gaming, and unforgettable events.
          Join us for PFP battles, Among Us, BGMI, Chess, Singing sessions and more!
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-discord hover:bg-discord-dark text-white font-medium px-8 hover-glow">
            <motion.a 
              href="https://discord.gg/ArqonIX" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join ArqonIX
              <ExternalLink className="ml-2 h-4 w-4" />
            </motion.a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white">
            <motion.a 
              href="#events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Events
            </motion.a>
          </Button>
        </motion.div>
      </div>
      
      {/* Discord chat preview */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="mt-16 w-full max-w-3xl mx-auto glass-card rounded-xl overflow-hidden"
      >
        <div className="bg-[#2B2D31] px-4 py-3 flex items-center gap-3">
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-3 w-3 rounded-full bg-[#ED4245]"></motion.div>
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="h-3 w-3 rounded-full bg-[#FEE75C]"></motion.div>
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="h-3 w-3 rounded-full bg-[#57F287]"></motion.div>
          <div className="flex-1 text-center text-sm font-medium text-white/80">ArqonIX Discord</div>
        </div>
        <div className="bg-[#313338] p-4 space-y-4">
          {chatMessages.map((chat, index) => (
            <motion.div 
              key={index} 
              className="flex gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: chat.delay }}
            >
              <div className={`w-10 h-10 rounded-full ${chat.avatarColor} flex items-center justify-center text-white font-bold`}>
                {chat.avatar}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`font-medium ${chat.avatarColor === 'bg-arqonix-purple' ? 'text-arqonix-purple' : chat.avatarColor === 'bg-arqonix-blue' ? 'text-arqonix-blue' : 'text-arqonix-indigo'}`}>
                    {chat.sender}
                  </span>
                  <span className="text-xs text-white/50">Today at {4 + index}:20 PM</span>
                </div>
                <div className="text-white/90">{chat.message}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#events" className="text-white/50 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
