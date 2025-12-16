import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 flex justify-start items-center h-20 px-10">
      <div className="flex text-white gap-5">
        <Link to="/" className="hover:text-gray-300 transition">
          Landing
        </Link>

        <Link to="/services" className="hover:text-gray-300 transition">
          Services
        </Link>

        <Link to="/provider-dashboard" className="hover:text-gray-300 transition">
          Dashboard
        </Link>

        <Link to="/login" className="hover:text-gray-300 transition">
          Login
        </Link>

        <Link to="/register" className="hover:text-gray-300 transition">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
