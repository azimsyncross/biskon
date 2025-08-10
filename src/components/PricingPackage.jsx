import { motion } from "framer-motion";
import { CheckCircle2, Diamond } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    title: "Growth Starter",
    price: "2,100",
    description:
      "Ideal for emerging businesses ready to establish their digital presence and accelerate online growth.",
    features: [
      "Search Engine Optimization",
      "Social Media Management (2 platforms)",
      "Basic Analytics Implementation",
    ],
    isPopular: false,
  },
  {
    title: "Business Accelerator",
    price: "3,800",
    description:
      "Comprehensive solution for scaling businesses ready to dominate their market and achieve exponential growth.",
    features: [
      "Everything in Growth Starter",
      "Strategic Advertising Management",
      "Advanced SEO Implementation",
    ],
    isPopular: true,
  },
  {
    title: "Enterprise Excellence",
    price: "6,800",
    description:
      "Premium solution for established businesses seeking market leadership and maximum competitive advantage.",
    features: [
      "Everything in Business Accelerator",
      "Custom Strategy Development",
      "Advanced Analytics & Intelligence",
    ],
    isPopular: false,
  },
];

const PricingCard = ({ plan, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`relative flex flex-col h-full p-8 rounded-2xl bg-[#111827] border ${
        plan.isPopular ? "border-cyan-500" : "border-gray-700/50"
      }`}
    >
      {plan.isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-x-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-md">
            <Diamond className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-white text-center mb-2">
          {plan.title}
        </h3>
        <div className="text-center mb-6">
          <span className="text-5xl font-extrabold text-cyan-400">
            ${plan.price}
          </span>
          <span className="text-lg text-gray-400">/month</span>
        </div>
        <p className="text-gray-400 text-center mb-8 min-h-[6rem]">
          {plan.description}
        </p>
        <ul className="space-y-4">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-cyan-900/50 text-cyan-400 rounded-full flex items-center justify-center mr-3">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <Link
          to="/contact"
          className={`w-full text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
            plan.isPopular
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:opacity-90"
              : "bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white"
          }`}
        >
          Get Started
        </Link>
      </div>
    </motion.div>
  );
};

const PricingPackagesSection = () => {
  return (
    <div className="bg-[#0B0F19] overflow-hidden">
      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose the ideal package for your business objectives.
            </h2>
            <p className="text-lg text-gray-400">
              Each plan includes professional execution, comprehensive
              reporting, and dedicated support to ensure exceptional outcomes.
            </p>
          </motion.div>

          {/* Pricing Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            {pricingPlans.map((plan, index) => (
              <PricingCard key={plan.title} plan={plan} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-gray-900 via-[#111827] to-transparent">
        <div className="relative container mx-auto px-6 text-center">
          <div className="absolute -inset-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl opacity-40"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Partner with us to develop powerful marketing strategies that
              deliver exceptional results and establish your business as the
              industry leader in today's competitive digital marketplace.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:opacity-90 transition-opacity transform hover:scale-105"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPackagesSection;
