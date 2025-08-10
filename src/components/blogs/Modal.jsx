import { ArrowRight, Calendar, User, X } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Modal = ({ post, onClose }) => {
  if (!post) return null;

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        className="bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 rounded-full p-2 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-4">{post.title}</h2>
          <div className="flex items-center space-x-4 mb-6 text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span className="text-sm">{post.author}</span>
            </div>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl rotate-1 blur-sm opacity-30" />
            <img
              src={post.imgSrc}
              alt={post.title}
              className="w-full h-80 object-cover rounded-xl relative"
            />
          </div>

          <p className="text-gray-300 mb-8 leading-relaxed">{post.excerpt}</p>

          <div className="flex justify-between items-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
            <Link
              to={`/blog/${post.id}`}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center group"
            >
              Read More
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
