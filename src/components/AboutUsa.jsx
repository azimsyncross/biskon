// src/components/AboutBISCON.js
import { motion } from "framer-motion";
import { BookOpen, Briefcase, Target, Users } from "lucide-react";

const AboutUsa = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#0B0F19] text-white py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-cyan-400">BISCON</span>
          </h1>
          <p className="text-lg text-gray-400">
            We are a forward-thinking team of digital marketing innovators
            dedicated to transforming business performance through strategic
            marketing solutions and accelerated growth methodologies.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Our Identity */}
          <motion.div
            className="bg-[#111827] p-8 rounded-2xl border border-gray-800/60"
            variants={itemVariants}
          >
            <div className="flex items-center text-cyan-400 mb-4">
              <BookOpen className="w-8 h-8 mr-4" />
              <h3 className="text-2xl font-bold">Our Identity</h3>
            </div>
            <p className="text-gray-300">
              BISCON is a leading digital marketing consultancy that specializes
              in developing innovative online marketing strategies through
              advanced technology integration and data-driven excellence.
            </p>
          </motion.div>

          {/* Our Partners */}
          <motion.div
            className="bg-[#111827] p-8 rounded-2xl border border-gray-800/60"
            variants={itemVariants}
          >
            <div className="flex items-center text-cyan-400 mb-4">
              <Users className="w-8 h-8 mr-4" />
              <h3 className="text-2xl font-bold">Our Partners</h3>
            </div>
            <p className="text-gray-300">
              We partner with visionary entrepreneurs, scaling enterprises, and
              established organizations seeking to enhance their digital
              footprint and achieve exceptional online marketing performance.
            </p>
          </motion.div>

          {/* Our Solutions */}
          <motion.div
            className="bg-[#111827] p-8 rounded-2xl border border-gray-800/60"
            variants={itemVariants}
          >
            <div className="flex items-center text-cyan-400 mb-4">
              <Briefcase className="w-8 h-8 mr-4" />
              <h3 className="text-2xl font-bold">Our Solutions</h3>
            </div>
            <p className="text-gray-300">
              We deliver integrated digital marketing services including search
              optimization, strategic advertising, social engagement, email
              automation, web development, and comprehensive analytics
              solutions.
            </p>
          </motion.div>

          {/* Our Purpose */}
          <motion.div
            className="bg-[#111827] p-8 rounded-2xl border border-gray-800/60"
            variants={itemVariants}
          >
            <div className="flex items-center text-cyan-400 mb-4">
              <Target className="w-8 h-8 mr-4" />
              <h3 className="text-2xl font-bold">Our Purpose</h3>
            </div>
            <p className="text-gray-300">
              Our purpose is to empower organizations to achieve digital
              excellence through strategic marketing initiatives that generate
              quantifiable results and establish enduring competitive
              advantages.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsa;
