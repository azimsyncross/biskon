import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Digital advertising services including YouTube, Facebook, Instagram, and TikTok ads.",
    "Comprehensive SEO services such as technical SEO, keyword optimization, and on-page SEO.",
    "Tailored ASO strategies to boost app visibility and downloads.",
    "Expert content creation to engage your target audience and enhance brand presence.",
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-gray-900 text-gray-200 overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Revolutionizing{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Digital Growth and Optimization
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
          {/* Image */}
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl rotate-6 blur-xl opacity-40" />
              <img
                src="/img/about.jpg"
                className="relative rounded-2xl shadow-2xl border border-gray-800/50 backdrop-blur-lg"
                alt="About Boostify Apps"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-300 mb-8">
              At BISCON, we specialize in enhancing digital presence through
              tailored strategies in digital advertising, SEO, ASO, and content
              creation. Our goal is to help your brand rank higher, engage more
              users, and grow your presence across platforms.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <CheckCircle className="w-6 h-6 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
