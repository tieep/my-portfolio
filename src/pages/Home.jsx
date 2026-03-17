import Sidebar from "../components/Sidebar";
import Project from "../components/Project";
function Home() {

  const projects = [
    {
      title: "HealthBooking",
      description:
        "A full-stack healthcare booking platform that allows patients to find nearby doctors, check availability, schedule appointments, make payments, and manage booking history. Doctors can manage their schedules and view appointment lists. Built with modern technologies including JWT authentication and email notifications.",
      github: "https://github.com/angsongji/health_booking_frontend",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "SpringBoot", "JWT", "JavaMail", "RAG"]
    },
    {
      title: "English Master",
      description:
        "An interactive English learning website focused on building practical language skills. This solo project helped deepen understanding of React components and modern frontend styling practices. Features responsive design and engaging UI for learners of all levels.",
      github: "https://github.com/tieep/english_learning",
      tags: ["React", "TailwindCSS", "JavaScript", "Responsive Design"]
    },
    {
      title: "BookStore",
      description:
        "A collaborative team project developing an online bookstore with separate interfaces for administrators and customers. Implemented using React and Sass, providing experience with modern frontend technologies and collaborative development workflows.",
      github: "https://github.com/tieep/book_store_cnpm",
      tags: ["React", "Sass", "JavaScript", "Collaborative Dev"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen bg-gray-50">
      <Sidebar/>

      <div className="col-span-1 md:col-span-3 p-6 md:p-10 bg-white">
        {/* Header Section */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Explore my recent projects that showcase my skills in full-stack development, modern frontend frameworks, and collaborative teamwork.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 animate-fade-in">
          {projects.map((p, i) => (
            <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
              <Project
                title={p.title}
                description={p.description}
                github={p.github}
                tags={p.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;