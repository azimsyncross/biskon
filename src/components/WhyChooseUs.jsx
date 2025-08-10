// src/components/WhyChooseUs.js

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0B0F19] py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-2xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center mb-6">
            <CheckCircle className="w-12 h-12 text-white mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Choose BISCON
            </h2>
          </div>
          <p className="text-xl text-white max-w-4xl mx-auto">
            We integrate strategic innovation, creative excellence, and
            analytical precision to deliver marketing solutions that establish
            market leadership and maximize your business potential.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
