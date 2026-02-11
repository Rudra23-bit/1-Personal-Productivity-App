
import { FaWallet, FaListCheck, FaLock, FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {




  return (
    <div className = 'home'>
        <div className="font-roboto bg-white text-center py-10 sm:py-16 md:py-20">
              
              {/* Heading */}
              <h1 className="
                text-2xl 
                sm:text-3xl 
                md:text-4xl 
                lg:text-5xl 
                font-bold mb-4
                text-black
              ">
                💰Personal Productivity App
              </h1>
        
              {/* Sub text */}
              <p className="
                text-sm 
                sm:text-base 
                md:text-lg 
                text-gray-600 mb-8 sm:mb-10
              ">
                Manage expenses, tasks, passwords & notes
              </p>
        
              {/* Cards */}
              <section className="
               max-w-7xl mx-auto px-4 py-16
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-4 
                gap-4 sm:gap-6 
                sm:px-8 md:px-10 
              ">
                <div className="bg-gradient-to-tr from-gray-800 to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl font-bold hover:scale-105 transition duration-300  shadow-xl text-center shadow-gray-900">
                <FaWallet className= "text-pink-500 text-5xl mb-4 mx-auto" />
                <h3 className="text-yellow-400 text-xl font-bold mb-2">Expense Tracker</h3> 
                <p className="text-gray-300 text-sm leading-relaxed">
                    Track income & expenses easily .
                  </p>
                   <Link to="/expense"
  className="inline-block start-btn bg-gradient-to-tr from-purple-600 to-pink-500 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
  Start
</Link>
                  </div>
        
                <div className="bg-gradient-to-tr from-gray-800 to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl font-bold hover:scale-105 transition duration-300  shadow-xl text-center shadow-gray-900">
                <FaListCheck className="text-pink-500 text-5xl mb-4 mx-auto" />
                 <h3 className="text-yellow-400 text-xl font-bold mb-2">Smart To-Do List</h3>
                 <p className="text-gray-300 text-sm leading-relaxed">
                    Plan tasks with reminders.
                  </p>
                  <Link to="/todo"
  className="inline-block start-btn bg-gradient-to-tr from-purple-600 to-pink-500 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
  Start
</Link>
                </div>
        
                <div className="bg-gradient-to-tr from-gray-800 to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl font-bold hover:scale-105 transition duration-300
                shadow-xl text-center shadow-gray-900">
                <FaLock className="text-pink-500 text-5xl mb-4 mx-auto" />
                 <h3 className="text-yellow-400 text-xl font-bold mb-2">Password Manager</h3>
                 <p className="text-gray-300 text-sm leading-relaxed">
                    Securely store and manage passwords.
                  </p>
                  <Link to="/passwords"
  className="inline-block start-btn bg-gradient-to-tr from-purple-600 to-pink-500 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
  Start
</Link>
                </div>
        
                <div className="bg-gradient-to-tr from-gray-800 to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl font-bold hover:scale-105 transition duration-300 shadow-xl text-center shadow-gray-900">
                  <FaBook className="text-pink-500 text-5xl mb-4 mx-auto" />
                 <h3 className="text-yellow-400 text-xl font-bold mb-2">Digital Diary</h3>
                 <p className="text-gray-300 text-sm leading-relaxed">
                    Write and search daily notes.
                  </p>
                  <Link to="/diary"
    className="inline-block start-btn bg-gradient-to-tr from-purple-600 to-pink-500 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
    Start
  </Link></div>
              </section>
        
              {/* ===== FOOTER ===== */}
              <footer className="bg-gray-900 text-white text-center py-8 mt-16">
                © 2026 Personal Productivity App | Designed for Smart Living
              </footer>
              </div> 
    </div>
  )
};

export default Home