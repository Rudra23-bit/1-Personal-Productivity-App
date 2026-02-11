import { Link } from "react-router-dom";

const Navbar = () => {

const changeLang = (lang) => {
    if (!lang) return;
    alert(`Language changed to: ${lang}`);
  };

  return (
  <div className="navbar">
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-400 shadow-lg font-roboto">
      <div className=" max-w-7xl mx-auto flex  justify-between  items-center px-6 py-4">

        {/* Brand */}
        <div className="font-bold text-lg  text-white">
          💰 Personal Productivity App
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
         <Link to="/" className="text-white font-semibold hover:underline">Home</Link>
          <Link to="/information" className="text-white hover:underline">Information</Link>
          <Link to="/login" className="text-white hover:underline">Login</Link>
          <Link to="/signup" className="text-white hover:underline">Sign Up</Link>

          {/* International Language selector */}
          <select
            className="text-black px-2 py-1 rounded"
            onChange={(e) => changeLang(e.target.value)}
          >
            <option value="">🌐 Language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="zh">Chinese</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
      </div>
    </nav>
   </div>
  );
};



export default Navbar;
