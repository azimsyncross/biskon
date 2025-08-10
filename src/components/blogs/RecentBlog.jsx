import { motion } from "framer-motion";
import { useState } from "react";

// Assuming you have a Modal component and posts data
import blogPosts from "../../utils/blogdata";
import BlogCard from "./BlogCard";
import Modal from "./Modal";

const RecentBlog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (title) => {
    const post = blogPosts.find((p) => p.title === title);
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <section id="recent-posts" className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/grid.svg')] opacity-20" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Recent{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Blog Posts
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {blogPosts.slice(0, 4).map((post, index) => (
            <BlogCard
              key={index}
              date={post.date}
              author={post.author}
              title={post.title}
              excerpt={post.excerpt}
              imgSrc={post.imgSrc}
              link={post.link}
              onReadMore={handleReadMore}
            />
          ))}
        </div>
      </div>

      {isModalOpen && <Modal post={selectedPost} onClose={closeModal} />}
    </section>
  );
};

export default RecentBlog;
