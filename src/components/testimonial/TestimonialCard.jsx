import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-800/30 to-pink-800/30 backdrop-blur-md rounded-2xl shadow-xl p-8 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Gradient Orb Decoration */}
      <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-blue-500 to-pink-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
      {/* Quote Icon */}
      <Quote
        size={40}
        className="absolute top-6 right-6 text-blue-300 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
      />

      {/* User Information */}
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-md"
        />
        <div>
          <h4 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors duration-300">
            {testimonial.name}
          </h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
          <p className="text-gray-500 text-sm">{testimonial.company}</p>
        </div>
      </div>

      {/* Testimonial Quote */}
      <p className="text-gray-300 mb-6 italic relative z-10">
        "{testimonial.quote}"
      </p>

      {/* Rating (Stars) */}
      <div className="flex gap-1 relative z-10">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Star className="fill-yellow-400 text-yellow-400" size={20} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
