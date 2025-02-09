
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-ivory to-white">
      <div className="absolute inset-0 z-0 bg-[url('/pattern.svg')] opacity-5" />
      <div className="container mx-auto px-4 z-10">
        {/* Logo Section */}
        <div className="w-full flex justify-center mb-12">
          <img 
            src="/logo.svg" 
            alt="Seller Africa Logo" 
            className="h-24 w-auto"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h4 className="inline-block px-4 py-1 mb-6 text-sm font-extrabold rounded-full bg-terracotta/10 text-terracotta animate-fade-in">
            Connect & Grow Together
          </h4>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-terracotta to-sand">
            Your Bridge to African Commerce in the USA
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in">
            Join our diaspora community to connect African brands with store owners across the USA. 
            Create lasting partnerships and unlock new revenue streams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://sellerafrica.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 rounded-lg bg-terracotta text-white font-medium transform transition-all hover:scale-105 hover:shadow-lg"
            >
              I'm a Store Owner
            </a>
            <a 
              href="https://sellerafrica.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 rounded-lg bg-sand text-white font-medium transform transition-all hover:scale-105 hover:shadow-lg"
            >
              I'm a Brand Owner
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
