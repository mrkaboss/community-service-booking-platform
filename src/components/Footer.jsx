import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        
        <div>
          <h2 className="text-2xl font-bold text-white">
            Community Services
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Connecting clients with trusted local service providers
            for fast, reliable, and secure bookings.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-white transition">
                Register
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <div className="flex items-center gap-2 text-sm">
            <MdEmail className="text-lg" />
            <span>info@communityservices.com</span>
          </div>

          <div className="flex items-center gap-2 text-sm mt-2">
            <MdPhone className="text-lg" />
            <span>+250 7XX XXX XXX</span>
          </div>

          <div className="flex gap-4 mt-5 text-xl">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Community Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
