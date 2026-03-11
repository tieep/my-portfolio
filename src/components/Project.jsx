function Project({title, description}) {
  return (

    <div className="mb-10 border-b pb-8">

      <h2 className="font-semibold text-lg mb-2">
        {title}
      </h2>

      <div className="flex gap-2 text-xs mb-3">

        <span className="bg-yellow-200 px-2 py-1 rounded">
          Colab
        </span>

        <span className="bg-gray-200 px-2 py-1 rounded">
          GitHub
        </span>

      </div>

      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>

      <div className="h-40 bg-gray-200 rounded"></div>

    </div>

  );
}

export default Project;