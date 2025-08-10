import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navigationItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Privacy & Policy", path: "/privacy" },
    { title: "Terms & Conditions", path: "/terms" },
  ];

  // Function to check if a nav item is active
  const isActiveNavItem = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-800 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={() => setIsOpen(false)}
          >
            <img src="/logo-1.png" alt="BISCON Logo" className="h-14 w-auto" />
            {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <span className="text-white text-2xl font-bold group-hover:text-teal-400 transition-colors">
              BISCON
              <span className="text-teal-400">.</span>
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navigationItems.map((item, index) => {
              const isActive = isActiveNavItem(item.path);
              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 relative flex items-center group ${
                      isActive
                        ? "text-white bg-gradient-to-r from-teal-500/20 to-blue-600/20 border border-teal-500/30"
                        : "text-gray-200 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.dropdown && (
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-200 ${
                          activeDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    {/* Active indicator line */}
                    {/* <span
                      className={`absolute inset-x-0 -bottom-1 h-0.5 bg-teal-400 transition-transform origin-left ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span> */}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.title && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-gray-900 shadow-lg border border-gray-700">
                      {item.dropdown.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-200"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 top-16 bg-gray-900/95 backdrop-blur-lg transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="container mx-auto px-4 py-6">
            {navigationItems.map((item, index) => {
              const isActive = isActiveNavItem(item.path);
              return (
                <div key={index} className="mb-4">
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-lg rounded-lg transition-all duration-200 relative ${
                      isActive
                        ? "text-white bg-gradient-to-r from-teal-500/20 to-blue-600/20 border-l-4 border-teal-400"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {item.title}
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                      )}
                    </span>
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          to={dropdownItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              to="/get-started"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 mt-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium text-center hover:opacity-90 hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-200"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
