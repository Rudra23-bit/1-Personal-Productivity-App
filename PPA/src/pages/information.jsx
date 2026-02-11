
import { FaWallet, FaListCheck, FaLock, FaBook } from "react-icons/fa6";


export default function Information() {
  return (
    <>
      

      <div className="bg-white text-gray-900 font-roboto">
        
        {/* ===== HERO SECTION ===== */}
        <section className="text-center py-20 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
            About Our Application
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl  text-gray-600">
            Personal Productivity App is an all-in-one solution designed to help users
            manage daily activities efficiently — from finances to personal notes.
          </p>
        </section>

        {/* ===== INFO CARDS ===== */}
        <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 sm:px-8 md:px-10">

          <div className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl hover:scale-105 transition shadow-xl text-center shadow-gray-900">
            <FaWallet className="text-pink-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-yellow-400 text-xl font-bold mb-2">Expense Tracker</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Track daily income and expenses, analyze spending habits, and manage monthly budgets effectively.
            </p>
          </div>

          <div className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl hover:scale-105 transition shadow-xl text-center shadow-gray-900">
            <FaListCheck className="text-pink-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-yellow-400 text-xl font-bold mb-2">Smart To-Do List</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Create tasks, set reminders, and stay productive with an easy-to-use task management system.
            </p>
          </div>

          <div className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl hover:scale-105 transition shadow-xl text-center shadow-gray-900">
            <FaLock className="text-pink-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-yellow-400 text-xl font-bold mb-2">Password Manager</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Securely store and manage passwords using encrypted storage for maximum safety.
            </p>
          </div>

          <div className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl hover:scale-105 transition shadow-xl text-center shadow-gray-900">
            <FaBook className="text-pink-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-yellow-400 text-xl font-bold mb-2">Digital Diary</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Write personal notes and daily experiences in a secure digital diary anytime.
            </p>
          </div>

        </section>

        {/* ===== FOOTER ===== */}
        <footer className="bg-gray-900 text-white text-center py-8 mt-16">
          © 2026 Personal Productivity App | Designed for Smart Living
        </footer>
      </div>
    </>
  );
}
