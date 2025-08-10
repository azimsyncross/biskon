import {
  ArrowUpRight,
  CheckCircle,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import FooterBottom from "./FooterBottom";
import contactInfo from "./utils/contactInfo";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim()) {
      alert("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);

    // Simulate API call with 4 second delay
    await new Promise((resolve) => setTimeout(resolve, 4000));

    setIsSubscribing(false);
    setIsSubscribed(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 3000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-200 pt-20 pb-10 overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section with Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 pb-8 border-b border-gray-800">
          <Link
            to="/"
            className="flex items-center space-x-3 group mb-6 lg:mb-0"
          >
            <img src="/logo-1.png" alt="BISCON Logo" className="h-16 w-auto" />

            {/* <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-3xl font-bold text-white group-hover:text-teal-400 transition-colors">
              BISCON<span className="text-teal-400">.</span>
            </span> */}
          </Link>

          <div className="w-full lg:w-auto relative">
            {/* Success Message Overlay */}
            {isSubscribed && (
              <div className="absolute inset-0 bg-green-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Successfully subscribed!</span>
                </div>
              </div>
            )}

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-2 flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isSubscribing}
                className="flex-1 bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:outline-none disabled:opacity-50"
              />
              <button
                onClick={handleSubscribe}
                disabled={isSubscribing}
                className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl hover:opacity-90 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSubscribing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">About Us</h4>
            <p className="text-gray-400 mb-6 leading-relaxed">
              BISCON Apps is dedicated to empowering your application with
              innovative strategies in social media advertising, SEO, and ASO.
              We enhance visibility, drive growth, and ensure your success in
              the competitive digital landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { text: "Home", path: "/" },
                { text: "About Us", path: "/about" },
                { text: "Services", path: "/services" },
                { text: "Contact", path: "/contact" },
                // { text: "Blog", path: "/blog" },
                // { text: "Career", path: "/career" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Search Engine Optimization", hash: "#seo" },
                { label: "Advertising Campaigns", hash: "#ads" },
                { label: "Social Media Excellence", hash: "#social" },
                {
                  label: "Analytics & Business Intelligence",
                  hash: "#analytics",
                },
                { label: "Email Marketing Automation", hash: "#email" },
                { label: "Web Development & Design", hash: "#webdev" },
              ].map(({ label, hash }, index) => (
                <li key={index}>
                  <HashLink
                    smooth
                    to={`/services${hash}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-1" />
                <span className="text-gray-400">{contactInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
