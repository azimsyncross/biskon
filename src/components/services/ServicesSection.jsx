import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle,
  Globe,
  Mail,
  MousePointerClick,
  Search,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";

// Data for the detailed service cards, matching the image
const serviceDetails = [
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Advanced SEO methodologies that enhance online visibility and drive qualified organic traffic through strategic optimization techniques.",
    features: [
      "Comprehensive Keyword Analysis",
      "Technical SEO Implementation",
      "Content Strategy & Development",
      "Authority Building & Outreach",
      "Local Search Enhancement",
      "Performance Analytics & Reporting",
    ],
    price: "1,400",
  },
  {
    id: "ads",
    icon: MousePointerClick,
    title: "Strategic Advertising Campaigns",
    description:
      "Intelligent advertising solutions across Google, Facebook, and premium platforms engineered to maximize ROI and drive conversions.",
    features: [
      "Campaign Strategy & Architecture",
      "Multi-Platform Coordination",
      "Creative Asset Development",
      "Budget Optimization & Management",
      "Conversion Tracking & Analysis",
      "Performance Intelligence Reports",
    ],
    price: "1,700",
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Excellence",
    description:
      "Comprehensive social media strategies that build authentic brand connections and engage target audiences across all major platforms.",
    features: [
      "Social Strategy Development",
      "Content Creation & Curation",
      "Community Engagement Management",
      "Social Media Advertising",
      "Influencer Partnership Programs",
      "Analytics & Performance Insights",
    ],
    price: "1,200",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Business Intelligence",
    description:
      "Advanced analytics implementation that transforms data into actionable insights for strategic business decision-making.",
    features: [
      "Analytics Configuration & Setup",
      "Custom Dashboard Development",
      "Performance Monitoring Systems",
      "Conversion Analysis & Optimization",
      "ROI Measurement & Tracking",
      "Strategic Recommendations & Insights",
    ],
    price: "1,000",
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Marketing Automation",
    description:
      "Sophisticated email marketing systems that nurture prospects and convert leads through intelligent customer journey mapping.",
    features: [
      "Email Strategy & Planning",
      "List Building & Segmentation",
      "Campaign Design & Development",
      "Automation Workflow Creation",
      "A/B Testing & Optimization",
      "Performance Analytics & Insights",
    ],
    price: "1,100",
  },
  {
    id: "webdev",
    icon: Globe,
    title: "Web Development & Design",
    description:
      "Professional website development that integrates stunning design with optimal performance and exceptional user experience.",
    features: [
      "Custom Website Architecture",
      "Responsive Design Implementation",
      "E-commerce Platform Solutions",
      "Content Management Integration",
      "Performance & Speed Optimization",
      "Ongoing Maintenance & Support",
    ],
    price: "1,500",
  },
];

const ServiceDetailCard = ({ service, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      id={service.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col h-full p-8 rounded-2xl bg-[#111827] border border-gray-800/50 shadow-lg"
    >
      <div className="flex-grow">
        <div className="mb-6">
          <div className="inline-block p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white">
            <service.icon className="w-8 h-8" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-400 mb-6">{service.description}</p>
        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center text-gray-300">
              <span className="w-4 h-4 text-cyan-400 mr-3">
                <CheckCircle size={16} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-700/50">
        <p className="text-lg font-semibold text-cyan-400 mb-4">
          Starting at ${service.price}/month
        </p>
        <Link
          to="/contact"
          className="block w-full text-center font-semibold py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:opacity-90 transition-opacity"
        >
          Get Started
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-[#0B0F19] py-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services that{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Accelerate Success
            </span>
          </h1>
          <p className="text-lg text-gray-400">
            Professional digital marketing services designed to amplify business
            growth, enhance brand visibility, and generate measurable results
            through innovative strategies and proven methodologies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service, index) => (
            <ServiceDetailCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
