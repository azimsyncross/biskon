import { Link } from "react-router-dom";
const FooterBottom = () => {
  return (
    <footer className="bg-[#0B0F19] border-t border-gray-800">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left Side: Payment Options */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm font-semibold text-cyan-300 mb-3">
              Payment Options
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img src="/visa.svg" alt="Visa" className="w-12 h-8" />
              <img
                src="/mastercard.svg"
                alt="Mastercard"
                className="w-12 h-8"
              />
            </div>
          </div>

          {/* Middle: Policy Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/refund"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Refund Policy
              </Link>
              {/* <span className="text-gray-600">•</span>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link> */}
            </div>
          </div>

          {/* Right Side: Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-sm text-gray-500">
              © 2025 BISCON LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
