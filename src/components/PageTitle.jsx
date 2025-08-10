import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PageTitle = ({
  title,
  breadcrumbs,
  backgroundImage,
  highlightedText,
}) => {
  return (
    <div className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          {title}
        </h1>

        <nav className="flex justify-center">
          <ol className="flex flex-wrap items-center text-sm md:text-base text-gray-400">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="w-4 h-4 mx-2 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {breadcrumb.link ? (
                  <Link
                    to={breadcrumb.link}
                    className={`hover:text-white transition-colors duration-200 ${
                      breadcrumb.current ? "text-indigo-400" : ""
                    }`}
                  >
                    {breadcrumb.name}
                  </Link>
                ) : (
                  <span className={breadcrumb.current ? "text-indigo-400" : ""}>
                    {breadcrumb.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Conditionally rendered highlighted text */}
        {highlightedText && (
          <div className="mt-4">
            <p className="inline-block rounded-full bg-teal-900/60 px-4 py-1 text-sm font-medium text-teal-300">
              {highlightedText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
      current: PropTypes.bool,
    })
  ).isRequired,
  backgroundImage: PropTypes.string.isRequired,
  // Add new prop for the highlighted text, it's optional
  highlightedText: PropTypes.string,
};

PageTitle.defaultProps = {
  // Set default value to null so nothing renders if it's not provided
  highlightedText: null,
};

export default PageTitle;
