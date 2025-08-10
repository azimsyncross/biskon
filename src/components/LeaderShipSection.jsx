import { motion } from "framer-motion";
import { Mail, MapPin, Phone, User } from "lucide-react";
import contactInfo from "./utils/contactInfo";

const LeadershipSection = () => {
  return (
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership Excellence
          </h2>
          <p className="text-lg text-gray-400">
            Guided by our visionary leader and supported by a dedicated team of
            marketing specialists who bring innovation and expertise to every
            engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-[#111827] rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-800/60"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Executive Leadership
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Column: Bio */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white">
                    {contactInfo.contactPerson}
                  </h4>
                  <p className="text-lg text-cyan-400 font-semibold mt-1">
                    {contactInfo.contactPersonRole}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mt-6 leading-relaxed">
                {contactInfo.contactPerson} brings strategic vision and
                operational excellence to the helm of BISCON LLC. With a focus
                on results-driven digital campaigns and team empowerment, she
                ensures the company remains a leader in marketing innovation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-cyan-900/50 text-cyan-300 text-sm font-medium px-4 py-1.5 rounded-full">
                  Executive Strategy
                </span>
                <span className="bg-cyan-900/50 text-cyan-300 text-sm font-medium px-4 py-1.5 rounded-full">
                  Brand Empowerment
                </span>
                <span className="bg-cyan-900/50 text-cyan-300 text-sm font-medium px-4 py-1.5 rounded-full">
                  Operational Excellence
                </span>
              </div>
            </div>

            {/* Right Column: Contact Info */}
            <div>
              <h5 className="text-xl font-bold text-white mb-4">
                Contact Information
              </h5>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-400 break-all">
                    {contactInfo.email}
                  </span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">{contactInfo.phone}</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">{contactInfo.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
