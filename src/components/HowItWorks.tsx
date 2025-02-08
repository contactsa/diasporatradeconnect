
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      title: "Create Your Profile",
      description: "Sign up and create your business profile, whether you're a store owner or brand owner."
    },
    {
      title: "Connect & Collaborate",
      description: "Browse through our network and connect with potential partners that match your needs."
    },
    {
      title: "Start Selling",
      description: "List products, manage inventory, and track sales through our user-friendly platform."
    },
    {
      title: "Grow Together",
      description: "Earn commissions, expand your reach, and be part of our growing success story."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-gold/10 text-gold">
            Simple Steps
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our platform in just a few simple steps and start growing your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-6 rounded-xl bg-ivory shadow-md hover:shadow-lg transition-all">
                <div className="w-8 h-8 mb-4 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
