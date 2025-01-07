// src/components/Navbar.js
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import NotificationBadge from './NotificationBadge';
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-slate-700 text-white shadow-lg border border-2 rounded pr-8 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <Link to="/" className="text-xl font-bold hover:text-green-500 ml-9">
          Education Platform
        </Link>

        <ul className="flex space-x-6 items-center">
          

          <li>
            <Link to="/" className="hover:text-green-500">
              Home
            </Link>
          </li>
          {user ? (
            <>
              {console.log(user.role)}
              {user.role === "Admin" && (
                <>
                  <li>
                    <Link to="/dashboard/admin" className="hover:text-blue-600">
                      Admin Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/users" className="text-m  hover:text-yellow-600">
                      UserProfile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/submissions"
                      className="text-m  hover:text-yellow-600"
                    >
                      View Submission
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/view-opportunity"
                      className="hover:text-gray-300"
                    >
                      Manage Opportunities
                    </Link>
                  </li>
                 
                </>
              )}
              {user.role === "Recruiter" && (
                <>
                  <li>
                    <Link
                      to="/dashboard/recruiter"
                      className="hover:text-gray-300"
                    >
                      Recruiter Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/users" className="text-m  hover:text-gray-300">
                      UserProfile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/view-opportunity"
                      className="hover:text-gray-300"
                    >
                      Manage Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/submissions"
                      className="text-m  hover:text-gray-300"
                    >
                      View Submission
                    </Link>
                  </li>
                </>
              )}
              {user.role === "Participant" && (
                <>
                  <li>
                    <Link
                      to="/dashboard/participant"
                      className="hover:text-gray-300"
                    >
                      Participant Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/users" className="text-m  hover:text-gray-300">
                      UserProfile
                    </Link>
                  </li>
                  
                  
                  <li>
                    <Link
                      to="/view-opportunity"
                      className="hover:text-gray-300"
                    >
                      Browse Opportunities
                    </Link>
                  </li>
                  <li>
                <Link to="/notifications" className="hover:text-green-500">
                  <NotificationBadge />
                </Link>
              </li>
                </>
              )}

              {/* Profile and Logout */}

              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
        
              <li>
                <Link to="/login" className="hover:text-green-500">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-green-500">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
