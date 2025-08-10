import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon: Icon, color, index }) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      {/* Set flex and min-h-full for equal height */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col h-full">
        <div className="p-6 flex flex-col flex-grow">
          {/* Icon */}
          <div
            className={`p-3 bg-gradient-to-br ${color} rounded-lg w-12 h-12 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        </div>

        {/* Optional CTA Button (if needed) */}
        {/* <div className="p-4">
          <a
            href="#"
            className="block text-center text-indigo-400 font-semibold hover:text-teal-400 transition-colors"
          >
            Learn More
          </a>
        </div> */}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
