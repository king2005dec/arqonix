
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Gamepad2, UserRound, Music, Trophy, BookImage, Film, Mic, Smile } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const EventsSection = () => {
  const isMobile = useIsMobile();
  const [activeEvent, setActiveEvent] = useState(0);
  
  const events = [
    {
      id: 1,
      title: "PFP Battle",
      description: "Show off your best profile pictures and vote for your favorites",
      image: "/images/pfpbattle.png",
      icon: <BookImage className="h-5 w-5" />,
      date: "Monthly"
    },
    {
      id: 2,
      title: "Among Us Night",
      description: "Find the impostor among us in this thrilling game night",
      image: "/images/amongusnight.webp",
      icon: <Gamepad2 className="h-5 w-5" />,
      date: "Every Friday"
    },
    {
      id: 3,
      title: "BGMI / FF Tournament",
      description: "Battle it out in our monthly BGMI / FF tournament for prizes",
      image: "/images/Freefire-BGMI-1.webp",
      icon: <Trophy className="h-5 w-5" />,
      date: "Monthly"
    },
    {
      id: 4,
      title: "Chess Challenge",
      description: "Test your strategic skills in our chess tournaments",
      image: "/images/chess.avif",
      icon: <UserRound className="h-5 w-5" />,
      date: "Bi-weekly"
    },
    {
      id: 5,
      title: "Singing Contest",
      description: "Show off your vocal talent and win community recognition",
      image: "/images/sining.jpg",
      icon: <Music className="h-5 w-5" />,
      date: "Monthly"
    },
    {
      id: 6,
      title: "Bedwars Championship",
      description: "Defend your bed and destroy others in this Minecraft event",
      image: "/images/beswar.webp",
      icon: <Gamepad2 className="h-5 w-5" />,
      date: "Every Saturday"
    },
    {
      id: 7,
      title: "Movie Night",
      description: "Join us for a community movie viewing with live reactions",
      image: "/images/movienight.jpg",
      icon: <Film className="h-5 w-5" />,
      date: "Every Thursday"
    },
    {
      id: 8,
      title: "Standup Comedy",
      description: "Laugh together as community members showcase their comedy skills",
      image: "/images/stand-up comdedy.avif",
      icon: <Mic className="h-5 w-5" />,
      date: "Bi-weekly"
    },
    {
      id: 9,
      title: "Custom Event",
      description: "Propose and organize your own community event",
      image: "/images/cumstom.jpg",
      icon: <Smile className="h-5 w-5" />,
      date: "Anytime"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  // Mobile-specific card animation variants
  const mobileCardVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="events" className="py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-arqonix-dark/80 via-arqonix-dark/95 to-arqonix-dark z-0"></div>
      
      {/* Animated orbs */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-arqonix-purple/10 blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-arqonix-indigo/10 blur-3xl"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">Events</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Join Our Exciting Events</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We host regular events for our community members to participate in, have fun, and win prizes.
          </p>
        </motion.div>
        
        {isMobile ? (
          // Enhanced Mobile view with carousel for better UX
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              onSelect={(index) => setActiveEvent(index || 0)}
            >
              <CarouselContent className="-ml-1">
                {events.map((event) => (
                  <CarouselItem key={event.id} className="pl-2 sm:basis-1/2 lg:basis-1/3">
                    <motion.div 
                      className="glass-card rounded-lg overflow-hidden flex-shrink-0 hover-scale hover-glow transition-all duration-300"
                      variants={mobileCardVariants}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AspectRatio ratio={16 / 9}>
                        <div className="relative h-full w-full overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={event.title} 
                            className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                          />
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"
                            whileHover={{ opacity: 0.4 }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.div
                            className="absolute top-2 right-2 bg-arqonix-purple/80 rounded-full p-1"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {event.icon}
                          </motion.div>
                        </div>
                      </AspectRatio>
                      <div className="p-5 relative">
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div 
                            className="bg-arqonix-purple/20 p-2 rounded-md"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {event.icon}
                          </motion.div>
                          <h3 className="font-bold text-xl">{event.title}</h3>
                        </div>
                        <p className="text-white/70 mb-4">{event.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm text-white/60">
                            <Clock className="h-4 w-4 mr-1" />
                            {event.date}
                          </div>
                          <Sheet>
                            <SheetTrigger asChild>
                              <Button 
                                size="sm" 
                                variant="secondary" 
                                className="hover:bg-arqonix-purple/20 transition-colors"
                              >
                                Join Now
                              </Button>
                            </SheetTrigger>
                            <SheetContent side="bottom" className="bg-arqonix-dark/95 backdrop-blur-lg text-white border-t border-arqonix-purple/20">
                              <div className="pt-6">
                                <h3 className="text-2xl font-bold mb-2 text-gradient">{event.title}</h3>
                                <p className="text-white/70 mb-4">{event.description}</p>
                                <div className="flex items-center gap-2 text-white/60 mb-4">
                                  <Clock className="h-4 w-4" />
                                  <span>{event.date}</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                  <Button className="w-full bg-arqonix-purple hover:bg-arqonix-purple/80">Join Event</Button>
                                  <Button variant="outline" className="w-full border-white/20">Add to Calendar</Button>
                                </div>
                              </div>
                            </SheetContent>
                          </Sheet>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="flex justify-center mt-4">
                <motion.div 
                  className="flex space-x-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {events.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full ${activeEvent === index ? 'bg-arqonix-purple' : 'bg-arqonix-purple/30'}`}
                      animate={{
                        scale: activeEvent === index ? [1, 1.3, 1] : 1,
                      }}
                      transition={{
                        duration: activeEvent === index ? 0.6 : 0.2,
                        repeat: activeEvent === index ? Infinity : 0,
                        repeatDelay: 1,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none"
              >
                <CarouselPrevious className="relative pointer-events-auto left-0 lg:left-1 bg-arqonix-purple/20 hover:bg-arqonix-purple/40 border-none text-white" />
                <CarouselNext className="relative pointer-events-auto right-0 lg:right-1 bg-arqonix-purple/20 hover:bg-arqonix-purple/40 border-none text-white" />
              </motion.div>
            </Carousel>
            
            {/* Swipe indicator for mobile */}
            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white/50 text-xs flex items-center"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.5, 1, 0.5],
                x: [-52, -50, -52]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <path d="M14 2v6h6"></path>
                <path d="M9 15h6"></path>
                <path d="M9 11h1"></path>
                <path d="M9 19h6"></path>
              </svg>
              <span className="ml-1">Swipe for more</span>
            </motion.div>
          </motion.div>
        ) : (
          // Desktop view with grid layout
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {events.map((event) => (
              <motion.div 
                key={event.id} 
                className="glass-card rounded-lg overflow-hidden hover-scale hover-glow transition-all duration-300"
                variants={itemVariants}
              >
                <AspectRatio ratio={16 / 9}>
                  <div className="relative h-full w-full overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                  </div>
                </AspectRatio>
                <div className="p-5 relative">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-arqonix-purple/20 p-2 rounded-md">
                      {event.icon}
                    </div>
                    <h3 className="font-bold text-xl">{event.title}</h3>
                  </div>
                  <p className="text-white/70 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-white/60">
                      <Clock className="h-4 w-4 mr-1" />
                      {event.date}
                    </div>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button 
                          size="sm" 
                          variant="secondary" 
                          className="hover:bg-arqonix-purple/20 transition-colors"
                        >
                          Learn More
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="bg-arqonix-dark/95 backdrop-blur-lg text-white border-l border-arqonix-purple/20">
                        <div className="pt-6">
                          <motion.img 
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          />
                          <h3 className="text-2xl font-bold mb-2 text-gradient">{event.title}</h3>
                          <p className="text-white/70 mb-4">{event.description}</p>
                          <div className="flex items-center gap-2 text-white/60 mb-4">
                            <Clock className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex flex-col gap-3">
                            <Button className="w-full bg-arqonix-purple hover:bg-arqonix-purple/80">Join Event</Button>
                            <Button variant="outline" className="w-full border-white/20">Add to Calendar</Button>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
