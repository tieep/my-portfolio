import avt from '../assets/avt.jpg'
import Resume from "../../public/Resume.pdf"

function Sidebar() {
  return (
    <div className="col-span-1 p-6 md:p-8 border-b md:border-b-0 md:border-r min-h-auto md:min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-slate-50">
      {/* Name Section */}
      <h1 className="text-2xl md:text-3xl font-bold mb-1 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
        Nguyen Tiep
      </h1>
      <p className="text-xs md:text-sm font-medium mb-6 md:mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Software Engineer</p>

      {/* Avatar */}
      <div className="mb-6 md:mb-8">
        <img
          src={avt}
          className="rounded-2xl h-64 md:h-80 mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow"
        />
      </div>

      {/* Bio */}
      <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6 md:mb-8 text-center">
        I am pursuing a degree in Software Engineering and enjoy building web applications and exploring AI technologies.
      </p>

      {/* Social Links */}
      <div className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-8">
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 md:py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 text-sm md:text-base"
        >
          <span>📄</span> Resume
        </a>
        <a
          href="https://github.com/tieep"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white font-semibold py-2 md:py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 text-sm md:text-base"
        >
          <span>🔗</span> GitHub
        </a>
      </div>

      {/* Skills Section */}
      {/* <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-4 shadow-md border border-purple-200 hover:shadow-lg transition-all">
        <h3 className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 text-sm uppercase tracking-widest">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {['React', 'JavaScript', 'TailwindCSS', 'Node.js'].map((skill) => (
            <span key={skill} className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold border border-purple-200 hover:border-purple-400 transition-all">
              {skill}
            </span>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;