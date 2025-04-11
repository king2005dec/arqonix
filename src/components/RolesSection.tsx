
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Shield, ShieldCheck, Crown, Star, Heart, Gamepad2, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";

const RolesSection = () => {
  const { toast } = useToast();
  const [customRoles, setCustomRoles] = useState<any[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const form = useForm({
    defaultValues: {
      roleName: "",
      roleDescription: "",
      saveRole: false
    }
  });
  
  const roles = [
    {
      id: 1,
      name: "Owner",
      description: "Server creator and ultimate decision maker",
      icon: <Crown className="h-6 w-6" />,
      color: "bg-yellow-500/20",
      border: "border-yellow-500/50",
      textColor: "text-yellow-400",
    },
    {
      id: 2,
      name: "Administrator",
      description: "Server managers with extensive permissions",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-red-500/20",
      border: "border-red-500/50",
      textColor: "text-red-400",
    },
    {
      id: 3,
      name: "Moderator",
      description: "Help maintain server rules and organization",
      icon: <ShieldCheck className="h-6 w-6" />,
      color: "bg-blue-500/20",
      border: "border-blue-500/50",
      textColor: "text-blue-400",
    },
    {
      id: 4,
      name: "Event Host",
      description: "Members who organize and run community events",
      icon: <Star className="h-6 w-6" />,
      color: "bg-green-500/20",
      border: "border-green-500/50",
      textColor: "text-green-400",
    },
    {
      id: 5,
      name: "Relationship Guru",
      description: "Dating advice experts and matchmakers",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-pink-500/20",
      border: "border-pink-500/50",
      textColor: "text-pink-400",
    },
    {
      id: 6,
      name: "Gaming Champion",
      description: "Top performers in our gaming tournaments",
      icon: <Gamepad2 className="h-6 w-6" />,
      color: "bg-purple-500/20",
      border: "border-purple-500/50",
      textColor: "text-purple-400",
    },
  ];
  
  const handleCreateRole = (data: any) => {
    const newRole = {
      id: roles.length + customRoles.length + 1,
      name: data.roleName,
      description: data.roleDescription,
      icon: <Smile className="h-6 w-6" />,
      color: "bg-cyan-500/20",
      border: "border-cyan-500/50",
      textColor: "text-cyan-400",
      isCustom: true
    };
    
    setCustomRoles([...customRoles, newRole]);
    setIsFormOpen(false);
    form.reset();
    
    toast({
      title: "Custom Role Created!",
      description: `The role "${data.roleName}" has been created successfully.`
    });
  };

  const roleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="roles" className="py-20 px-4 bg-black/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Roles</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Special Server Roles</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Our server features unique roles that members can earn through participation, contribution, and engagement within the ArqonIX community.
          </p>
          
          <div className="flex justify-center mb-8">
            <Button 
              onClick={() => setIsFormOpen(!isFormOpen)}
              variant="outline" 
              className="bg-arqonix-purple/20 border-arqonix-purple/50 hover:bg-arqonix-purple/30 transition-all"
            >
              {isFormOpen ? "Cancel" : "Create Custom Role"}
            </Button>
          </div>
          
          {isFormOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-md mx-auto glass-card p-6 rounded-xl border border-arqonix-purple/30 mb-10"
            >
              <h3 className="text-xl font-bold mb-4 text-white">Create Your Custom Role</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleCreateRole)} className="space-y-4">
                  <FormItem>
                    <FormLabel>Role Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter role name"
                        {...form.register("roleName", { required: true })}
                      />
                    </FormControl>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel>Role Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Describe what this role does"
                        {...form.register("roleDescription", { required: true })}
                      />
                    </FormControl>
                  </FormItem>
                  
                  <div className="flex items-center space-x-2 mt-2">
                    <Checkbox id="saveRole" {...form.register("saveRole")} />
                    <label
                      htmlFor="saveRole"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80"
                    >
                      Save this role for everyone to see
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-arqonix-purple hover:bg-arqonix-purple/80"
                  >
                    Create Role
                  </Button>
                </form>
              </Form>
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...roles, ...customRoles].map((role, i) => (
            <motion.div 
              key={role.id} 
              custom={i}
              variants={roleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`glass-card ${role.border} p-6 rounded-xl hover-scale hover-glow`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-full ${role.color}`}>
                  <div className={role.textColor}>{role.icon}</div>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${role.textColor}`}>
                    {role.name}
                    {role.isCustom && (
                      <Badge variant="outline" className="ml-2 text-xs">Custom</Badge>
                    )}
                  </h3>
                </div>
              </div>
              <p className="text-white/70">{role.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
