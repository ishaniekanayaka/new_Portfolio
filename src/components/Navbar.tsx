import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">ISHA</div>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-blue-300 transition duration-300">Home</Link>
          <Link to="/projects" className="hover:text-blue-300 transition duration-300">Projects</Link>
          <Link to="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;