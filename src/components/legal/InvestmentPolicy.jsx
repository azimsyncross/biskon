import { Info } from "lucide-react";
import contactInfo from "../utils/contactInfo";

// Reusable policy section component
const PolicySection = ({ number, title, description, points }) => (
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

// Main component
const InvestmentPolicy = () => {
  const policyData = [
    {
      number: 1,
      title: "General Investment Framework",
      description:
        "At BISCON LLC, we are committed to delivering exceptional service quality and ensuring client satisfaction. Our investment policy is designed to be fair and transparent while recognizing the specialized nature of strategic digital marketing services.",
      points: [
        "Important: Due to the specialized nature of strategic digital marketing services, which involve comprehensive planning, ongoing implementation, and campaign optimization, refunds are evaluated on a case-by-case basis and are subject to the conditions outlined below.",
      ],
    },
    {
      number: 2,
      title: "Monthly Service Plans",
      description: "For monthly recurring service subscriptions:",
      points: [
        "First Month Guarantee: If you are not satisfied with our services within the first 30 days, you may request a refund for the current month's service fee.",
        "Service Cancellation: You may cancel your monthly subscription at any time with 30 days written notice.",
        "No Partial Refunds: We do not provide partial refunds for unused portions of a billing cycle.",
        "Work Delivery: Any work completed during the billing period will be delivered regardless of cancellation.",
      ],
    },
    {
      number: 3,
      title: "Annual Service Plans",
      description: "For annual prepaid service subscriptions:",
      points: [
        "60-Day Guarantee: If you are not satisfied within the first 60 days, you may request a prorated refund for the unused portion.",
        "After 60 Days: No refunds are available after the initial 60-day period.",
        "Early Termination: If you choose to terminate after 60 days, no refund will be provided for the unused portion.",
        "Work Delivery: All work completed up to the termination date will be delivered.",
      ],
    },
    {
      number: 4,
      title: "Setup Fees and One-Time Projects",
      description: "For setup fees and one-time project work:",
      points: [
        "Setup Fees: Non-refundable once work has begun.",
        "Project-Based Work: Refunds considered only if we fail to deliver agreed-upon deliverables.",
        "Completed Work: No refunds for work that has been completed and delivered.",
        "Milestone Payments: Refunds only available for incomplete milestone work.",
      ],
    },
    {
      number: 5,
      title: "Advertising Spend",
      description: "For paid advertising campaigns:",
      points: [
        "Ad Spend: Advertising budget paid to platforms (Google, Facebook, etc.) is non-refundable.",
        "Management Fees: Management fees for advertising campaigns follow the same refund policy as our service plans.",
        "Unused Budget: Any unused advertising budget will remain in your advertising accounts.",
        "Platform Policies: Refunds for advertising spend are subject to the respective platform's policies.",
      ],
    },
    {
      number: 6,
      title: "Refund Exclusions",
      description: "Refunds will NOT be provided in the following situations:",
      points: [
        "Failure to provide necessary access, information, or approvals.",
        "Changes in business circumstances or priorities.",
        "Dissatisfaction with results due to factors beyond our control.",
        "Violation of our Partnership Terms.",
        "Fraudulent or chargeback activity.",
        "Services already delivered and accepted.",
      ],
    },
    {
      number: 7,
      title: "Refund Request Process",
      description: "To request a refund:",
      points: [
        <>
          Contact us in writing at{" "}
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-cyan-400 hover:underline"
          >
            {contactInfo.email}
          </a>
        </>,
        "Include your account information and reason for the refund request.",
        "Provide any relevant documentation supporting your request.",
        "Allow 5-10 business days for review and response.",
        "If approved, refunds will be processed within 10-15 business days.",
        "Refunds will be issued to the original payment method.",
      ],
    },
    {
      number: 8,
      title: "Alternative Solutions",
      description:
        "In certain cases, instead of a monetary refund, we may offer:",
      points: [
        "Service credits for future work.",
        "Additional services at no charge.",
        "Extended service periods.",
        "Alternative service solutions.",
      ],
    },
    {
      number: 9,
      title: "Dispute Resolution",
      description: "If you dispute our refund decision:",
      points: [
        "Request a review by a senior team member.",
        "Provide additional documentation if available.",
        "Consider mediation if direct negotiation fails.",
        "Final decisions will be made in accordance with our Partnership Terms.",
      ],
    },
    {
      number: 10,
      title: "Chargeback Policy",
      description:
        "Initiating a chargeback without first contacting us may result in:",
      points: [
        "Immediate suspension of all services.",
        "Forfeiture of any remaining service credits.",
        "Additional fees to cover chargeback costs.",
        "Termination of business relationship.",
      ],
    },
    {
      number: 11,
      title: "Satisfaction Commitment",
      description: "Our commitment to you:",
      points: [
        "We will work diligently to address any concerns.",
        "Regular communication and reporting.",
        "Adjustments to strategy based on performance.",
        "Professional service delivery at all times.",
        "Transparency in all our business dealings.",
      ],
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
          <strong>Business Hours:</strong> {contactInfo.hours}
        </>,
      ],
    },
  ];

  return (
    <div className="bg-[#0B0F19]">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {policyData.map((section) => (
            <PolicySection
              key={section.number}
              number={section.number}
              title={section.title}
              description={section.description}
              points={section.points}
            />
          ))}

          {/* Assistance box */}
          <div className="mt-16 bg-cyan-900/40 border border-cyan-700 rounded-xl p-8">
            <div className="flex items-start">
              <Info className="h-8 w-8 text-cyan-400" />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  Need Assistance?
                </h3>
                <p className="text-gray-300">
                  Before requesting a refund, please contact us to discuss your
                  concerns. Our team is dedicated to finding solutions and
                  ensuring your satisfaction. Many issues can be resolved
                  through clear communication and strategy adjustments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPolicy;
