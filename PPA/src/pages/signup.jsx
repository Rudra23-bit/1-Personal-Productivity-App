import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../components/firebase";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // 1️⃣ Create user in Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 2️⃣ Store user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        uid: user.uid,
        createdAt: new Date(),
      });

      alert("Account Created Successfully 🎉");

      navigate("/login"); // Redirect to login page
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-[90%] max-w-md text-center">
          <h2 className="text-yellow-400 text-2xl font-bold mb-6">
            Create Account
          </h2>

          <form onSubmit={handleRegister}>
            {/* Name */}
            <div className="mb-4">
              <div className="flex items-center bg-gray-700 px-4 py-3 rounded-lg">
                <FaUser className="text-pink-500 mr-3" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="bg-transparent outline-none text-white w-full"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <div className="flex items-center bg-gray-700 px-4 py-3 rounded-lg">
                <FaEnvelope className="text-pink-500 mr-3" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-transparent outline-none text-white w-full"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <div className="flex items-center bg-gray-700 px-4 py-3 rounded-lg">
                <FaLock className="text-pink-500 mr-3" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-transparent outline-none text-white w-full"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <div className="flex items-center bg-gray-700 px-4 py-3 rounded-lg">
                <FaLock className="text-pink-500 mr-3" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="bg-transparent outline-none text-white w-full"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <p className="text-gray-400 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-400 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
