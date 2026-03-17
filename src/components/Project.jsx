function Project({ title, description, github, tags }) {
  return (
    <div className="mb-8 bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-300 transform hover:scale-100 md:hover:scale-102 group overflow-hidden">
      {/* Content Section */}
      <div className="p-4 md:p-8">
        {/* Header with Icons */}
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <h2 className="font-bold text-lg md:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
            {title}
          </h2>
          {/* <span className="text-3xl">💼</span> */}
        </div>

        {/* Description */}
        <p className="text-gray-700 text-xs md:text-base leading-relaxed mb-4 md:mb-6 group-hover:text-gray-800 transition-colors">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="mb-4 md:mb-6">
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {tags && tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700 text-xs font-semibold px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-purple-200 hover:border-purple-400 transition-all hover:shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Button */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg active:scale-95 duration-200 text-sm md:text-base"
        >
          <span>🔗</span>
          View Code on GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;