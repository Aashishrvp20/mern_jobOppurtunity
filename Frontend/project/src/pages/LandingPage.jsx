import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./LandingPage.css"

const LandingPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div id="image3" className="relative min-h-screen flex flex-col items-center justify-center  ">
    
      <h1 className="text-4xl font-extrabold text-blue-500 mb-4">Welcome to the Educational Platform</h1>
      <p className="mb-8 text-xl text-gray-700 text-center pb-4 hover:text-purple-700">
        Participate in Hackathons, Quizzes, Internships, and Job Opportunities!
      </p>

     
      {user ? (
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <p className="text-xl font-semibold text-gray-700">Hello, {user.name}! 🎉</p>
          
        </div>
      ) : (
        <div className="space-x-4">
          <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 shadow-md">
            Login
          </Link>
          <Link to="/register" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 shadow-md">
            Register
          </Link>
        </div>
      )}

      {/* Background Cards */}
      <div className="mt-[4rem]">
        <div className="grid grid-cols-3 gap-6 max-w-5xl">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-700">Hackathons</h3>
            <p className="text-sm text-gray-500">Join exciting coding competitions and showcase your skills.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-700">Quizzes</h3>
            <p className="text-sm text-gray-500">Participate in quizzes to test your knowledge and win rewards.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-700">Internships</h3>
            <p className="text-sm text-gray-500">Find internships to kickstart your career with top companies.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-700">Job Openings</h3>
            <p className="text-sm text-gray-500">Explore job openings and land your dream job.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-700">Workshops</h3>
            <p className="text-sm text-gray-500">Attend workshops to learn new skills and grow professionally.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
