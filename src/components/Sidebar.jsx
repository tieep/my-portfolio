import avt from '../assets/avt.png'
function Sidebar() {
  return (
    <div className="col-span-1 p-8 border-r min-h-screen">

      <h1 className="text-xl font-bold mb-6 text-blue-600">
        Nguyen Tiep
      </h1>

      <img
        src={avt}
        className="rounded-full w-40 mx-auto mb-6"
      />

      <div className="text-center space-x-2 text-sm text-blue-600">
        <a href="#">Resume</a>
        <a href="#">GitHub</a>
      </div>

      <p className="text-sm text-gray-600 mt-6 leading-relaxed">
        I am pursuing a degree in Software Engineering and enjoy
        building web applications and exploring AI technologies.
      </p>

    </div>
  );
}

export default Sidebar;