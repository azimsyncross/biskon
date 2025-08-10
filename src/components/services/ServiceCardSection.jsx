import { serviceData } from "./data";
import ServiceCard from "./ServiceCard";

const ServiceCardsSection = () => {
  return (
    <section id="service-cards" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/grid.svg')] opacity-20" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span className="text-sm text-teal-300">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Digital Marketing Services{" "}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our wide range of services designed to elevate your app's
            performance, increase visibility, and maximize user engagement
            across all platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;
