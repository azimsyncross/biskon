import { motion } from "framer-motion";
import { Award, BrainCircuit, Rocket, Users } from "lucide-react";

const values = [
  {
    icon: BrainCircuit,
    title: "Innovation-First Approach",
    description:
      "We leverage cutting-edge technology and creative thinking to deliver solutions that drive measurable business transformation.",
  },
  {
    icon: Users,
    title: "Strategic Collaboration",
    description:
      "We function as trusted advisors, aligning our expertise with your vision to achieve sustainable competitive advantages.",
  },
  {
    icon: Award,
    title: "Excellence Standards",
    description:
      "We maintain rigorous quality benchmarks and consistently deliver work that surpasses client expectations and industry standards.",
  },
  {
    icon: Rocket,
    title: "Growth Acceleration",
    description:
      "We embrace advanced methodologies and emerging technologies to keep your business at the forefront of market evolution.",
  },
];

const ValueCard = ({ value, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.15 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-[#111827] p-8 rounded-2xl border border-gray-800/60 shadow-lg text-center h-full flex flex-col"
    >
      <div className="mx-auto mb-6">
        <div className="inline-block p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white">
          <value.icon className="w-8 h-8" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
      <p className="text-gray-400 flex-grow">{value.description}</p>
    </motion.div>
  );
};

const ValuesSection = () => {
  return (
    <section className="bg-[#0B0F19] py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Foundational Values
          </h2>
          <p className="text-lg text-gray-400">
            These core principles guide our methodology and define our
            commitment to delivering exceptional client outcomes.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
