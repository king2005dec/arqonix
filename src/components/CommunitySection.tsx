
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Music, Sparkles } from "lucide-react";

const CommunitySection = () => {
  const atmosphereItems = [
    {
      id: 1,
      title: "Chill Vibes",
      icon: <Sparkles className="h-6 w-6 text-arqonix-blue" />,
      description: "A relaxed atmosphere where you can unwind and be yourself."
    },
    {
      id: 2,
      title: "Dating & Connections",
      icon: <Heart className="h-6 w-6 text-arqonix-pink" />,
      description: "Find meaningful connections with like-minded individuals."
    },
    {
      id: 3,
      title: "Music & Entertainment",
      icon: <Music className="h-6 w-6 text-arqonix-purple" />,
      description: "Share your favorite tunes and enjoy music together."
    }
  ];

  return (
    <section id="community" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">Community</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Join Our Vibrant Community</h2>
            <p className="text-white/70 mb-6">
              ArqonIX is more than just a Discord server - it's a thriving community of friends who enjoy hanging out, playing games, and forming meaningful connections.
            </p>
            
            <div className="space-y-6 mb-8">
              {atmosphereItems.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="p-2 bg-black/20 rounded-lg self-start">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button asChild size="lg" className="bg-discord hover:bg-discord-dark text-white font-medium px-8 hover-glow">
              <a href="https://discord.gg/ArqonIX" target="_blank" rel="noopener noreferrer">
                Join ArqonIX Now
              </a>
            </Button>
          </div>
          
          <div className="glass-card rounded-xl p-6 order-first md:order-last">
            <div className="aspect-video rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-arqonix-purple/70 to-arqonix-blue/70" />
              <img 
                src="/images/community.jpg" 
                alt="ArqonIX Community" 
                className="object-cover w-full h-full mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <video src="/images/animation.mp4" autoPlay muted loop className="w-full h-full object-cover"></video>
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/gamming.gif" 
                  className="object-cover w-full h-24 hover-scale -rotate-90 rounded-xl"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/images/cumstom.jpg" 
                  className="object-cover w-full h-24 hover-scale"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/music.gif" 
                  className="object-cover w-full h-24 hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
