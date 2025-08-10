import { ArrowLeft, Calendar, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import blogPosts from "../utils/blogdata";

const SingleBlogPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <main className="container mx-auto px-4">
        <Link
          to="/blog"
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-3xl mx-auto">
          {/* Title and Meta */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center text-gray-400 mb-8">
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center mb-2">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl rotate-1 blur-xl opacity-30" />
            <img
              src={post.imgSrc}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-xl relative"
            />
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.details }} />
          </div>
        </article>
      </main>
    </div>
  );
};

export default SingleBlogPage;
