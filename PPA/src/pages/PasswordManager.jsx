import { useEffect, useState } from "react";


const PasswordManager = () => {
  const [site, setSite] = useState("");
  const [password, setPassword] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [passwords, setPasswords] = useState(
    JSON.parse(localStorage.getItem("passwords")) || []
  );

  useEffect(() => {
    localStorage.setItem("passwords", JSON.stringify(passwords));
  }, [passwords]);

  const encrypt = (text) => btoa(unescape(encodeURIComponent(text)));
  const decrypt = (text) => decodeURIComponent(escape(atob(text)));

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%!^&*";
    let pass = "";
    for (let i = 0; i < 16; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(pass);
    setShowInput(true);
  };

  const savePassword = () => {
    if (!site || !password) return alert("Fill all fields");

    setPasswords([...passwords, { site, pass: encrypt(password), show: false }]);
    setSite("");
    setPassword("");
    setShowInput(false);
  };

  const togglePassword = (index) => {
    const updated = [...passwords];
    updated[index].show = !updated[index].show;
    setPasswords(updated);
  };

  const deletePassword = (index) => {
    if (window.confirm("Delete this password?")) {
      setPasswords(passwords.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      

      <div className="min-h-screen bg-gray-100 font-roboto">
        {/* Heading */}
        <div className="text-center py-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            🔑 Password Manager
          </h1>
          <p className="text-yellow-500 text-sm sm:text-base mt-2">
            Store & generate secure passwords
          </p>
        </div>

        {/* Card */}
        <section className="bg-[#1a1a2e] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[35%] mx-auto mt-6 sm:mt-8 p-5 sm:p-6 md:p-8 rounded-2xl shadow-2xl shadow-gray-900">

       <h2 className="flex item-center text-yellow-300 text-lg sm:text-xl font-bold mb-4">
         🔑  Password Manager
        </h2>

          {/* Site Input */}
          <input
            type="text"
            placeholder="Username / Site"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            className="w-full p-3 sm:p-4 mb-3 rounded-xl bg-[#0f0f1a] outline-none text-white text-sm sm:text-base"
          />

          {/* Password Input */}
          <div className="relative">
            <input
              type={showInput ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 sm:p-4 pr-12 mb-3 rounded-xl bg-[#0f0f1a] outline-none text-white text-sm sm:text-base"
            />
            <span
              onClick={() => setShowInput(!showInput)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-yellow-400 text-sm sm:text-base"
            >
              {showInput ? "🙈" : "👁"}
            </span>
          </div>

          {/* Buttons */}
          <button
            onClick={generatePassword}
            className="w-full h-11 sm:h-12 md:h-14 mb-3 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition text-sm sm:text-base"
          >
            Generate Password
          </button>

          <button
            onClick={savePassword}
            className="w-full h-11 sm:h-12 md:h-14 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition text-sm sm:text-base"
          >
            Save Password
          </button>

          {/* Password List */}
          <ul className="mt-6 space-y-3 text-sm sm:text-base max-h-80 overflow-y-auto">
            {passwords.map((p, i) => (
              <li
                key={i}
                className="bg-[#0f0f1a] p-3 sm:p-4 rounded-lg flex justify-between items-center text-white"
              >
                <span>
                  <b className="text-sm sm:text-base">{p.site}</b>
                  <br />
                  {p.show ? decrypt(p.pass) : "••••••••"}
                </span>

                <div className="flex gap-3 sm:gap-4 text-yellow-300 text-base sm:text-lg">
                  <span className="cursor-pointer" onClick={() => togglePassword(i)}>
                    {p.show ? "🙈" : "👁"}
                  </span>
                  <span className="cursor-pointer" onClick={() => deletePassword(i)}>
                    🗑
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <footer className="bg-gray-900 text-white text-center py-8 mt-16">
                © 2026 Personal Productivity App | Designed for Smart Living
              </footer>
      </div>
    </>
  );
};

export default PasswordManager;
