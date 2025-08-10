import { ArrowRight, Search, Sparkles, Target, TrendingUp } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const WhyUs = () => {
  const content = {
    header: {
      title: "Elevate Your Brand's Success with",
      highlightedText: "Expert Digital Marketing & ASO",
      subtitle:
        "Discover why top brands trust BISCON for their SEO, ASO, and advertising needs",
    },
    slides: [
      {
        title: "Maximize Reach with Social Media Ads",
        subtitle:
          "Boost visibility on YouTube, Facebook, Instagram, and TikTok",
        content:
          "BISCON helps you create high-impact ad campaigns across YouTube, Facebook, Instagram, and TikTok, engaging your target audience and driving conversions with tailored digital advertising strategies.",
        icon: <TrendingUp className="w-6 h-6" />,
        color: "from-blue-600 to-green-600",
      },
      {
        title: "On-Page & Technical SEO Mastery",
        subtitle: "Optimize your website for both users and search engines",
        content:
          "We enhance your site&apos;s search performance with expert on-page SEO, technical audits, and keyword strategies to improve rankings, increase site speed, and attract more organic traffic.",
        icon: <Search className="w-6 h-6" />,
        color: "from-green-600 to-teal-600",
      },
      {
        title: "Expert ASO for App Visibility",
        subtitle: "Boost your app&apos;s ranking and downloads",
        content:
          "With BISCON&apos;s ASO strategies, we ensure your app ranks higher in app stores, optimizing listings, keywords, and visuals to increase downloads and user engagement.",
        icon: <Sparkles className="w-6 h-6" />,
        color: "from-teal-600 to-purple-600",
      },
      {
        title: "Tailored SEO & ASO Strategies for Success",
        subtitle: "Solutions customized to achieve your goals",
        content:
          "Whether it&apos;s improving SEO for your website or optimizing ASO for your app, BISCON offers personalized strategies designed for sustainable growth and long-term success.",
        icon: <Target className="w-6 h-6" />,
        color: "from-purple-600 to-indigo-600",
      },
    ],
    stats: [
      { value: "2000+", label: "Brands Served" },
      { value: "98%", label: "Client Satisfaction Rate" },
      { value: "350%", label: "Average Growth" },
    ],
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/grid.svg')] opacity-20" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-sm text-indigo-300">Why Choose BISCON</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {content.header.title}{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {content.header.highlightedText}
            </span>
          </h2>
          <p className="text-xl text-gray-300">{content.header.subtitle}</p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Image */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl rotate-6 blur-xl opacity-30" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-800/50 backdrop-blur-lg">
                <img
                  src="/img/why-us-bg.jpg"
                  alt="ASO Expertise"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {content.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-300">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Slider */}
          <div className="w-full lg:w-7/12">
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              effect="fade"
              loop={true}
              speed={800}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={1}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="why-us-swiper"
            >
              {content.slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="p-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50">
                    {/* Icon Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${slide.color} text-white`}
                      >
                        {slide.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {slide.title}
                        </h3>
                        <p className="text-gray-400">{slide.subtitle}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 mb-6 text-lg">
                      {slide.content}
                    </p>

                    {/* CTA Button */}
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity group">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
