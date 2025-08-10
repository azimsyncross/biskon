import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, User } from "lucide-react";
import teamMembers from '../../utils/teamdata';

const SocialButton = ({ Icon, hoverColor }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`
      w-10 h-10 flex items-center justify-center rounded-full
      bg-white/10 backdrop-blur-sm border border-white/20
      transition-colors duration-300
      ${hoverColor}
      group
    `}
  >
    <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
  </motion.button>
);

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "48px 48px"
        }} />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Meet Our Exceptional Team
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          />
          <p className="text-gray-300 text-lg">
            Passionate professionals driving innovation and excellence in everything we do
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-1">
                <div className="absolute inset-0 bg-gray-900 rounded-2xl transition-transform duration-300 group-hover:scale-95" />
                
                {/* Member Avatar */}
                <div className="relative h-full w-full flex items-center justify-center">
                  <User className="w-1/3 h-1/3 text-white/30 transition-all duration-300 group-hover:text-white/70 group-hover:scale-110" />
                </div>

                {/* Overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 font-medium mb-4">{member.role}</p>
                  
                  {/* Social Icons */}
                  <div className="flex justify-center space-x-3">
                    <SocialButton Icon={Twitter} hoverColor="hover:bg-blue-400" />
                    <SocialButton Icon={Facebook} hoverColor="hover:bg-blue-600" />
                    <SocialButton Icon={Instagram} hoverColor="hover:bg-pink-600" />
                    <SocialButton Icon={Linkedin} hoverColor="hover:bg-blue-700" />
                  </div>
                </motion.div>
              </div>

              {/* Member Info (visible on larger screens) */}
              <div className="mt-6 text-center hidden lg:block">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
