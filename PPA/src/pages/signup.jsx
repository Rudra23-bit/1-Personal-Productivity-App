import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


export default function Signup() {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account created successfully for: " + email);
  };

  return (
  <>
      
      {/* ===== SIGNUP CARD ===== */}
      <div className="flex-grow flex items-center justify-center px-3 sm:px-6 lg:px-8 font-roboto">
        <div className="
          
          bg-gradient-to-tr from-gray-800 to-gray-900 
          max-w-[420px] w-[92%]
    mx-auto my-[50px]
    px-[30px] py-[35px]
    rounded-[22px]
    shadow-[12px_12px_35px_#0b0b14,_-12px_-12px_35px_#2a2a40]
    text-center
        "
        >
          <h2 className="
            text-yellow-400 
            text-xl sm:text-2xl 
            font-bold text-center mb-6 sm:mb-8"
          >
            Create Account
          </h2>

          <form onSubmit={handleSubmit}>
            
            {/* Full Name */}
            <div className="mb-4 sm:mb-5">
              <label className="block text-xs sm:text-sm text-gray-300 mb-1">
                Full Name
              </label>
              <div className="
                flex items-center gap-3 sm:gap-4 
                bg-gray-900 
                px-3 sm:px-4 
                py-3 sm:py-4 
                rounded-xl"
              >
                <FaUser className="text-pink-500 text-base sm:text-lg" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="bg-transparent outline-none text-white w-full text-sm sm:text-base"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4 sm:mb-5">
              <label className="block text-xs sm:text-sm text-gray-300 mb-1">
                Email
              </label>
              <div className="flex items-center gap-3 sm:gap-4 bg-gray-900 px-3 sm:px-4 py-3 sm:py-4 rounded-xl">
                <FaEnvelope className="text-pink-500 text-base sm:text-lg" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none text-white w-full text-sm sm:text-base"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4 sm:mb-5">
              <label className="block text-xs sm:text-sm text-gray-300 mb-1">
                Password
              </label>
              <div className="flex items-center gap-3 sm:gap-4 bg-gray-900 px-3 sm:px-4 py-3 sm:py-4 rounded-xl">
                <FaLock className="text-pink-500 text-base sm:text-lg" />
                <input
                  type="password"
                  name="password"
                  placeholder="Create password"
                  className="bg-transparent outline-none text-white w-full text-sm sm:text-base"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-5 sm:mb-6">
              <label className="block text-xs sm:text-sm text-gray-300 mb-1">
                Confirm Password
              </label>
              <div className="flex items-center gap-3 sm:gap-4 bg-gray-900 px-3 sm:px-4 py-3 sm:py-4 rounded-xl">
                <FaLock className="text-pink-500 text-base sm:text-lg" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="bg-transparent outline-none text-white w-full text-sm sm:text-base"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className=" create-account-btn 
                w-full 
                py-3 sm:py-4 
                rounded-xl 
                font-bold 
                text-sm sm:text-base
                text-white 
                bg-gradient-to-r from-purple-600 to-pink-500 
                hover:scale-105 transition shadow-lg"
                onClick={() => navigate("/signup")}
            >
              CREATE ACCOUNT
            </button>
          </form>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white text-center py-6 sm:py-8">
        <Link
          to="/login"
          className="block text-white text-sm sm:text-base font-medium hover:underline"
        >
          Already have an account? Sign In
        </Link>
        <div className="mt-4">
       <p> © 2026 Personal Productivity App | Designed for Smart Living</p>
         </div>
      </footer>
    
    </>
  );
}
