
import { motion } from "framer-motion";
import { Store, Package, DollarSign, Users } from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Expand Your Reach",
    description: "Connect with established African stores across the USA and showcase your products to new markets."
  },
  {
    icon: Package,
    title: "Quality Products",
    description: "Access a curated selection of authentic African products and brands for your store."
  },
  {
    icon: DollarSign,
    title: "Passive Income",
    description: "Earn commission on sales when you partner with brands and showcase their products."
  },
  {
    icon: Users,
    title: "Community Growth",
    description: "Join a thriving community of African entrepreneurs and business owners in the diaspora."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-sand/10 text-sand">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empowering African Commerce
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the benefits of joining our marketplace and being part of a growing community of African entrepreneurs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-terracotta/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-terracotta" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
