import { motion } from "framer-motion";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gray-900">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-blue-500 to-purple-700 opacity-30"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Pre-title */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-full py-2 px-4">
              <Sparkles className="w-5 h-5 text-teal-400" />
              <span className="text-white font-medium">
                Unlock Your Business&apos;s Full Potential
              </span>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-8">
            <motion.h2
              className="text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Ready to Take Your Business to the Next Level?
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                With BISCON&apos;s Expertise, We’ll Drive Your Growth.
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              BISCON specializes in optimizing online performance, increasing
              user engagement, and driving sustainable growth across multiple
              digital channels. Whether it’s through targeted social media
              advertising, expert SEO strategies, app store optimization, or
              high-quality content creation, our tailored solutions are designed
              to boost your visibility, attract users, and maximize your ROI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="contact"
                className="group flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="services"
                className="group flex items-center gap-2 bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover More
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: "1,500+", label: "Successful Apps Optimized" },
                { number: "15M+", label: "Total Downloads Achieved" },
                { number: "98%", label: "Client Retention Rate" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 shadow-md"
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
