import { HelpCircle } from "lucide-react";
import contactInfo from "../utils/contactInfo";

// Reusable component for each terms section
const TermsSection = ({ number, title, description, points }) => (
  <div className="mb-10">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
      {number}. {title}
    </h2>
    {description && (
      <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
    )}
    {points && (
      <ul className="space-y-3 pl-5">
        {points.map((point, index) => (
          <li key={index} className="flex">
            <span className="text-purple-400 mr-3 mt-1">•</span>
            <span className="text-gray-300 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const TermsAndConditions = () => {
  const termsData = [
    {
      number: 1,
      title: "Acceptance of Terms",
      description:
        "By accessing and using the services provided by BISCON LLC, you accept and agree to be bound by the terms and provisions of this agreement. These terms apply to all visitors, users, and others who access or use our services. If you do not agree to abide by the above, please do not use our services. We reserve the right to change these terms at any time by posting updates on this page.",
    },
    {
      number: 2,
      title: "Service Description",
      description:
        "BISCON LLC provides digital marketing services including but not limited to:",
      points: [
        "Search Engine Optimization (SEO)",
        "Strategic Advertising Campaigns",
        "Social Media Marketing Excellence",
        "Content Marketing Strategy",
        "Email Marketing Automation",
        "Website Development and Design",
        "Analytics and Business Intelligence",
      ],
    },
    {
      number: 3,
      title: "Client Responsibilities",
      description: "Clients are responsible for:",
      points: [
        "Providing accurate and complete information necessary for service delivery",
        "Timely payment of all fees and charges",
        "Providing feedback and approvals within agreed timeframes",
        "Maintaining confidentiality of login credentials and account information",
        "Ensuring compliance with applicable laws and regulations",
      ],
    },
    {
      number: 4,
      title: "Payment Terms",
      description: "Payment terms and conditions:",
      points: [
        "Monthly services are billed in advance on the same date each month",
        "Payment is due within 15 days of invoice date",
        "Late payments may incur additional fees",
        "Services may be suspended for non-payment",
        "All fees are non-refundable unless otherwise specified",
      ],
    },
    {
      number: 5,
      title: "Intellectual Property",
      description: "Intellectual property rights and ownership:",
      points: [
        "Client retains ownership of their brand, trademarks, and proprietary content",
        "BISCON LLC retains ownership of methodologies, processes, and tools",
        "Work products created specifically for clients become client property upon full payment",
        "Neither party may use the other’s intellectual property without written consent",
      ],
    },
    {
      number: 6,
      title: "Confidentiality",
      description: "Both parties agree to maintain confidentiality of:",
      points: [
        "Business strategies and proprietary information",
        "Customer data and personal information",
        "Financial information and business metrics",
        "Technical processes and methodologies",
        "Any information marked as confidential",
      ],
    },
    {
      number: 7,
      title: "Limitation of Liability",
      description: "BISCON LLC’s liability is limited as follows:",
      points: [
        "Total liability shall not exceed the amount paid for services in the preceding 12 months",
        "We are not liable for indirect, incidental, or consequential damages",
        "We do not guarantee specific results or outcomes",
        "Client assumes responsibility for business decisions based on our recommendations",
      ],
    },
    {
      number: 8,
      title: "Termination",
      description: "Either party may terminate the agreement:",
      points: [
        "With 30 days written notice for convenience",
        "Immediately for material breach of contract",
        "Immediately for non-payment after notice period",
        "Upon completion of project-based work. Upon termination, all work completed will be delivered, and final payment will be due within 15 days.",
      ],
    },
    {
      number: 9,
      title: "Dispute Resolution",
      description: "In case of disputes:",
      points: [
        "Parties will first attempt to resolve through direct negotiation",
        "If unsuccessful, disputes will be resolved through mediation",
        "Final disputes will be resolved through binding arbitration",
        "All proceedings will be conducted under Washington state law",
      ],
    },
    {
      number: 10,
      title: "Governing Law",
      description:
        "These terms are governed by the laws of the State of Washington, United States. Any legal action must be brought in the courts of Washington.",
    },
    {
      number: 11,
      title: "Changes to Terms",
      description:
        "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.",
    },
    {
      number: 12,
      title: "Contact Information",
      description: "For refund requests or questions about this policy:",
      points: [
        <>
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-cyan-400 hover:underline"
          >
            {contactInfo.email}
          </a>
        </>,
        <>
          <strong>Phone:</strong> {contactInfo.phone}
        </>,
        <>
          <strong>Address:</strong> {contactInfo.address}
        </>,
        <>
          <strong>Business Hours:</strong> {contactInfo.businessHours}
        </>,
      ],
    },
  ];

  return (
    <div className="bg-[#0B0F19]">
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {termsData.map((section) => (
            <TermsSection
              key={section.number}
              number={section.number}
              title={section.title}
              description={section.description}
              points={section.points}
            />
          ))}

          {/* Clarification Box */}
          <div className="mt-16 bg-blue-900/30 border border-blue-700 rounded-xl p-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <HelpCircle className="h-8 w-8 text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  Need Clarification?
                </h3>
                <p className="text-gray-300">
                  If you have questions about any of these terms or need
                  clarification on how they apply to your specific situation,
                  please don't hesitate to contact us. We're here to ensure you
                  understand your rights and responsibilities as our valued
                  client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
