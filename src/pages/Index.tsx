
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSession() {
      try {
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        setSession(currentSession);
      } catch (error) {
        console.error('Error fetching session:', error);
      } finally {
        setLoading(false);
      }
    }

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        description: error.message,
      });
    } else {
      toast({
        description: "Signed out successfully",
      });
    }
  };

  if (loading) {
    return null; // or return a loading spinner if you prefer
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-4 right-4 z-50">
        {session ? (
          <Button
            onClick={handleSignOut}
            variant="outline"
            className="text-terracotta border-terracotta hover:bg-terracotta/10"
          >
            Sign Out
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/auth")}
            variant="outline"
            className="text-terracotta border-terracotta hover:bg-terracotta/10"
          >
            Sign In
          </Button>
        )}
      </div>
      <Hero />
      <Features />
      <HowItWorks />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-terracotta text-white text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community today and be part of the African commerce revolution
          </p>
          <Button
            onClick={() => navigate("/auth")}
            className="px-8 py-3 bg-white text-terracotta hover:bg-white/90 font-medium transform transition-all hover:scale-105"
          >
            Join Now
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
