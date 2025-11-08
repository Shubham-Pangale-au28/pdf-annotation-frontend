import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition duration-200">
            📄 PDF Annotate
          </Link>

          <div className="flex items-center space-x-6">
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 underline underline-offset-4 font-medium transition duration-150">
                  Dashboard
                </Link>

                {user.role === "admin" && (
                  <Link to="/admin" className="text-gray-700 hover:text-blue-600 underline underline-offset-4 font-medium transition duration-150">
                    Admin
                  </Link>
                )}

                <div className="flex items-center space-x-3">
                  <span className="text-gray-700 font-semibold">{user.name}</span>
                  <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded-lg transition duration-200">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600 transition duration-150 font-medium">
                  Login
                </Link>
                <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition duration-200">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
