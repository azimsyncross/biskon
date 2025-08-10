/* eslint-disable react/prop-types */
import { ArrowRight, BarChart2, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

// Content Object
const content = {
  hero: {
    title: "Ignite Your Brand's Growth with BISCON",
    subtitle:
      "Drive impactful results with targeted digital advertising, SEO strategies that elevate your site, and ASO that makes your app stand out. Let BISCON propel your brand across Google, Facebook, Instagram, and beyond!",
    buttonText: "Get Started",
    badgeText: "Digital Advertising & SEO Experts",
    badgeDescription: "Ignite Your Brand's Growth",
    stats: [
      { icon: Star, value: "5.0", label: "App Rating" },
      { icon: Users, value: "1,000+", label: "Satisfied Clients" },
      { icon: BarChart2, value: "300%", label: "Growth Increase" },
    ],
  },
};

const StatsCard = ({ icon: Icon, value, label }) => (
  <div className="bg-gray-800/60 backdrop-blur-lg rounded-xl p-4 flex items-center space-x-4">
    <div className="p-2 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/grid.svg')] opacity-20" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
          {/* Left Column - Main Content */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-sm text-teal-300">
                {content.hero.badgeText}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {content.hero.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {content.hero.subtitle}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:opacity-90 transition-opacity"
            >
              {content.hero.buttonText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Right Column - Stats */}
          <div className="flex flex-col space-y-4">
            {content.hero.stats.map((stat, index) => (
              <StatsCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
