import {
  CheckCircle,
  ChevronDown,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";
import contactInfo from "../utils/contactInfo";

// FAQCard component for the FAQ section
const FAQCard = ({ question, answer }) => (
  <div className="bg-[#1e293b]/60 rounded-xl p-6">
    <h3 className="text-lg font-semibold text-white mb-2">{question}</h3>
    <p className="text-gray-400">{answer}</p>
  </div>
);

// InputField component for the form
const InputField = ({
  id,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}) => (
  <div>
    <label
      htmlFor={id}
      className="text-sm font-medium text-gray-300 mb-2 block"
    >
      {placeholder}
      {required && <span className="text-purple-400"> *</span>}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-[#1e293b] border-2 border-transparent rounded-lg focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-500"
    />
  </div>
);

// SelectField component for the form dropdowns
const SelectField = ({ id, name, label, children, value, onChange }) => (
  <div>
    <label
      htmlFor={id}
      className="text-sm font-medium text-gray-300 mb-2 block"
    >
      {label}
    </label>
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-[#1e293b] border-2 border-transparent rounded-lg focus:outline-none focus:border-purple-500 appearance-none transition-colors"
      >
        {children}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    service: "",
    budget: "",
    details: "",
  });

  const faqs = [
    {
      question: "How quickly can we begin?",
      answer:
        "We can typically initiate your marketing campaigns within 1-2 business days after our initial consultation and agreement execution.",
    },
    {
      question: "Do you partner with businesses of all sizes?",
      answer:
        "Absolutely! We collaborate with startups, scaling businesses, and established enterprises. Our solutions are tailored to fit your specific requirements and investment level.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We monitor key performance indicators that align with your business objectives – lead generation, conversion optimization, revenue growth, and ROI. You receive comprehensive monthly analytics.",
    },
    {
      question: "What distinguishes you from other agencies?",
      answer:
        "Our data-driven methodology, partnership approach, and commitment to transparency differentiate us. We function as growth partners, not just service providers.",
    },
  ];

  const contactDetails = [
    {
      icon: User,
      title: "Executive Leadership",
      content: contactInfo.contactPerson,
    },
    {
      icon: Mail,
      title: "Email Contact",
      content: contactInfo.email,
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: contactInfo.phone,
    },
    {
      icon: MapPin,
      title: "Office Location",
      content: contactInfo.address,
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: contactInfo.businessHours,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.details) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call with 4 second delay
    await new Promise((resolve) => setTimeout(resolve, 4000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        companyName: "",
        phone: "",
        service: "",
        budget: "",
        details: "",
      });
    }, 3000);
  };

  return (
    <div className="bg-[#0B0F19] text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Top Section: Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white mb-4">
              Connect With Us
            </h1>
            <p className="text-gray-300 text-lg">
              We're dedicated to your business success. Reach out through any
              channel, and we'll respond with strategic insights within 24
              hours.
            </p>
            <div className="space-y-4 pt-4">
              {contactDetails.map(({ icon: Icon, title, content }) => (
                <div key={title} className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-400">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#111827] p-8 rounded-2xl relative">
            <h2 className="text-3xl font-bold text-white mb-8">
              Send Us a Message
            </h2>

            {/* Success Message Overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-[#111827]/95 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField
                  id="full-name"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField
                  id="company-name"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
                <InputField
                  id="phone-number"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <SelectField
                  id="service"
                  name="service"
                  label="Service Interest"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Select a service</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="seo">SEO</option>
                  <option value="web-design">Web Design</option>
                </SelectField>
                <SelectField
                  id="budget"
                  name="budget"
                  label="Budget Range"
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  <option value="">Select budget range</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </SelectField>
              </div>

              <div>
                <label
                  htmlFor="project-details"
                  className="text-sm font-medium text-gray-300 mb-2 block"
                >
                  Project Details<span className="text-purple-400"> *</span>
                </label>
                <textarea
                  id="project-details"
                  name="details"
                  rows="4"
                  placeholder="Tell us about your business goals, current challenges, and what you're looking to achieve..."
                  required
                  value={formData.details}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#1e293b] border-2 border-transparent rounded-lg focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-500"
                ></textarea>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg font-semibold shadow-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="text-center mt-24">
          <h2 className="text-4xl font-bold text-white mb-4">
            Visit Our Office
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Come see us in person or get directions to our location
          </p>
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.377417113341!2d-80.19391772582219!3d25.82410600602593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b15ef5d557b7%3A0x4d2a494faa359834!2s5205%20NE%202nd%20Ave%2C%20Miami%2C%20FL%2033137%2C%20USA!5e0!3m2!1sen!2sbd!4v1754844343621!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
              Common questions about our services and partnership approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <FAQCard
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
