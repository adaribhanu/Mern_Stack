import { FiSearch, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Brand */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">Product<span className="text-gray-800">Store</span></Link>
        </div>

        {/* Search */}
        <div className="w-full md:w-1/3">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 bg-transparent outline-none flex-grow text-sm text-gray-700"
            />
          </div>
        </div>

        {/* Nav links + Profile */}
        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <ul className="flex space-x-6 font-medium">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Products</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Contact</Link></li>
          </ul>

          <div className="p-2 bg-blue-100 rounded-full shadow hover:shadow-md transition cursor-pointer">
            <FiUser className="text-blue-600 text-lg" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
