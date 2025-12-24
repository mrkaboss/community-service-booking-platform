

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-200 h-20 px-10 flex justify-between items-center">
      
      
      <Link to="/">
        <img 
          src="/Img/logo.png" 
          alt="Logo" 
          className="w-20 h-20 rounded-full object-cover"
        />
      </Link>

      
      <div className="flex text-white gap-6">
        <Link to="/" className="hover:text-blue-300 ">
          Landing
        </Link>

        <Link to="/services" className="hover:text-blue-300 transition">
          Services
        </Link>

        <Link to="/provider-dashboard" className="hover:text-blue-300 transition">
          Dashboard
        </Link>

        <Link to="/login" className="hover:text-blue-300 transition">
          Login
        </Link>

        <Link to="/register" className="hover:text-blue-300 transition">
          Register
        </Link>
        <Link to="/client-dashboard" className="hover:text-blue-300">
          ClientDashboard
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
