import { motion } from "framer-motion";
import {
  Activity,
  Eye,
  Gem,
  Infinity,
  Lightbulb,
  Star,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Eye className="text-orange-500" />,
      label: "Maximized App Discovery with ASO",
    },
    {
      icon: <Infinity className="text-blue-500" />,
      label: "Ongoing SEO & ASO Enhancements",
    },
    {
      icon: <Star className="text-yellow-500" />,
      label: "Reliable SEO & Digital Ad Performance",
    },
    {
      icon: <Gem className="text-cyan-500" />,
      label: "Tailored Digital Advertising Strategies",
    },
    {
      icon: <Video className="text-indigo-500" />,
      label: "Video Ads to Boost Engagement",
    },
    {
      icon: <Lightbulb className="text-green-500" />,
      label: "Creative Campaigns for Social Media Growth",
    },
    {
      icon: <Activity className="text-red-500" />,
      label: "Targeted User Growth through SEO & Ads",
    },
    {
      icon: <Infinity className="text-purple-500" />,
      label: "Adaptable Strategies for SEO & Digital Ads",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 overflow-hidden bg-gray-900"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-blue-600/30" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/grid.svg')] opacity-10" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Text and Features List */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-extrabold text-white">
                Essential Features for{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Your Digital Growth
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    className="flex items-center p-4 bg-gray-800/60 backdrop-blur-md rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="p-2 bg-gray-700 rounded-full mr-4">
                      {feature.icon}
                    </div>
                    <span className="text-lg text-gray-200 font-medium">
                      {feature.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Details Section */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-3xl font-extrabold text-white mb-4">
                Elevate Your App&apos; Potential with
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  BISCON
                </span>
              </h3>
              <p className="text-gray-300 mb-6">
                BISCON offers proven strategies in digital advertising, SEO, and
                ASO to enhance visibility, drive organic growth, and elevate
                your app's success. Whether through targeted YouTube ads,
                Instagram campaigns, SEO optimization, or innovative ASO
                solutions, we help your app achieve long-term growth across
                multiple platforms.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-8 rounded-full hover:opacity-90 transition-opacity shadow-md"
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>

          {/* Phone Image */}
          <motion.div
            className="relative mx-auto lg:ml-auto"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            <div className="relative w-full aspect-[9/16] max-w-xs lg:max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl rotate-6 blur-xl opacity-20" />
              <img
                src="/img/iphone.png"
                alt="App Screenshot"
                className="relative rounded-3xl shadow-2xl border border-gray-800/50 backdrop-blur-lg"
              />
            </div>
            {/* Floating Elements */}
            <motion.div
              className="absolute -right-8 top-1/4 bg-gradient-to-br from-green-500 to-blue-600 p-4 rounded-xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <Star className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div
              className="absolute -left-8 bottom-1/4 bg-gradient-to-br from-blue-500 to-green-600 p-4 rounded-xl shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Activity className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
