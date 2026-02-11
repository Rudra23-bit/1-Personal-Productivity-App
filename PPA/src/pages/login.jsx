import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";




export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      alert("Fill all fields");
      return;
    }

    try {
      const result = await dispatch(loginUser(form)).unwrap();
      console.log("Login successful:", result);
      navigate("/"); // go to home after login
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };


  return (
    <>
      
      
      
      
      
      {/* ===== LOGIN CARD ===== */}
      <div className="flex-grow flex items-center justify-center 
                      px-4 sm:px-6 lg:px-8 font-roboto">
        
        <div
          className="
            
            bg-gradient-to-tr from-gray-800 to-gray-900
            max-w-[420px] w-[92%]
            mx-auto my-[50px]
            px-[30px] py-[35px]
            rounded-[22px]
            shadow-[12px_12px_35px_#0b0b14,_-12px_-12px_35px_#2a2a40]
            text-center
          "
        >
          <h2 className="text-yellow-400 
                         text-lg sm:text-2xl lg:text-3xl 
                         font-bold text-center 
                         mb-5 sm:mb-8">
            User Authentication
          </h2>

          <form onSubmit={handleSubmit}>
            
            {/* Email */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm text-gray-300 mb-1">
                Email
              </label>

              <div className="flex items-center gap-3 sm:gap-4 
                              bg-gray-900 
                              px-3 sm:px-4 
                              py-3 sm:py-4 
                              rounded-xl">
                <FaEnvelope className="text-pink-500 text-base sm:text-lg" />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={form.username}
                  className="bg-transparent outline-none text-white 
                             w-full text-sm sm:text-base"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-5 sm:mb-7">
              <label className="block text-xs sm:text-sm text-gray-300 mb-1">
                Password
              </label>

              <div className="flex items-center gap-3 sm:gap-4 
                              bg-gray-900 
                              px-3 sm:px-4 
                              py-3 sm:py-4 
                              rounded-xl">
                <FaLock className="text-pink-500 text-base sm:text-lg" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={form.password}
                  className="bg-transparent outline-none text-white 
                             w-full text-sm sm:text-base"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Button */}
            <button  type="submit"
             className=" login-in-btn w-full 
                         py-3 sm:py-4 
                         rounded-xl 
                         font-bold 
                         text-sm sm:text-base lg:text-lg
                         text-white 
                         bg-gradient-to-r from-purple-600 to-pink-500 
                         hover:scale-105 transition shadow-lg"
                         
                         >
              LOGIN IN
            </button>
          </form>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white text-center 
                         py-5 sm:py-7 lg:py-8">
        
        

        <Link
          to="/signup"
          className="block text-white text-sm sm:text-base 
                     font-medium hover:underline mb-4"
        >
          Create new account
        </Link>
 <div className="mt-4">
       <p> © 2026 Personal Productivity App | Designed for Smart Living</p>
         </div>
       
      </footer>
    
    </>
  );
}
