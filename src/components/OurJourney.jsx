// src/components/OurJourney.js
import { motion } from "framer-motion";

const OurJourney = () => {
  return (
    <div className="bg-[#0B0F19] text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8">Our Journey</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                BISCON was established with the mission of democratizing
                advanced digital marketing strategies for businesses across all
                sectors. We identified the increasing demand for results-focused
                marketing solutions that deliver authentic business
                transformation.
              </p>
              <p>
                Our foundation was built through comprehensive analysis of
                digital marketplace dynamics. We’ve concentrated on creating
                strategic frameworks and innovative solutions that address these
                challenges through validated methodologies and success-oriented
                principles.
              </p>
              <p>
                Today, we function as strategic marketing advisors who
                comprehend your business objectives and develop tailored
                solutions that accelerate growth and establish market dominance
                in the digital ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800/60">
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To deliver organizations with transformative digital marketing
                solutions that are strategically robust, results-oriented, and
                engineered to scale with business evolution and market dynamics.
              </p>
            </div>
            <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800/60">
              <h3 className="text-3xl font-bold text-white mb-4">
                Our Objective
              </h3>
              <p className="text-gray-300">
                To establish ourselves as the premier digital marketing
                consultancy for organizations seeking professional excellence,
                innovative solutions, and quantifiable results that drive
                significant business advancement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
