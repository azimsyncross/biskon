import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import PropsType from "prop-types";

const BlogCard = ({ date, author, title, excerpt, imgSrc, onReadMore }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700/50"
      whileHover={{ y: -5 }}
    >
     <div className="w-full h-64 overflow-hidden"> {/* Set fixed height */}
    <img
      src={imgSrc}
      alt={title}
      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
    />
  </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <User className="w-4 h-4 mr-2" />
          <span>{author}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
          {title}
        </h3>
        {/* <p className="text-gray-300 mb-4">{excerpt}</p> */}
        <button
          onClick={() => onReadMore(title)}
          className="inline-flex items-center text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors duration-300"
        >
          Read More
          <ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default BlogCard;

BlogCard.propTypes = {
  date: PropsType.string.isRequired,
  author: PropsType.string.isRequired,
  title: PropsType.string.isRequired,
  excerpt: PropsType.string.isRequired,
  imgSrc: PropsType.string.isRequired,
  onReadMore: PropsType.func.isRequired,
};
