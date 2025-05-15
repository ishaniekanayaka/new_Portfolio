const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to ISHA's Portfolio</h1>
        <p className="text-lg text-gray-600 mb-4">
          Hi, I'm Isha! I'm a passionate developer creating amazing web experiences.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Me</h2>
          <p className="text-gray-600">
            I specialize in building modern web applications with React, Vite, and Tailwind CSS.
            With a focus on clean code and user-friendly interfaces, I create solutions that
            are both functional and beautiful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;