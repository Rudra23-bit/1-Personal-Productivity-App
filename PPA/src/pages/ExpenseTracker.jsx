import { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ExpenseTracker() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [balance, setBalance] = useState(0);

  const addExpense = () => {
    const value = Number(amount);
    if (!value || value <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    setBalance(type === "income" ? balance + value : balance - value);
    setAmount("");
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <div className="font-roboto bg-white text-center py-10 sm:py-16 md:py-20">
        <h1 className=" text-center  text-2xl sm:text-3xl lg:text-4xl mt-4 font-bold text-black">
          💰 Expense Tracker
        </h1>
        <p className="text-yellow-500 mt-2 text-sm sm:text-base">
          Track income & expenses smartly
        </p>
      </div>

      {/* ===== EXPENSE CARD ===== */}
      <section
        className="
          bg-gradient-to-br from-[#22223b] to-[#1a1a2e]
          w-[90%]
          sm:w-[80%]
          md:w-[60%]
          lg:w-[40%]
          mx-auto
          mt-10
          p-6 sm:p-8
          rounded-3xl
          shadow-2xl  shadow-gray-900
        "
      >
        <h2 className="flex items-center gap-3 text-yellow-300 text-lg sm:text-2xl font-bold mb-4">
          <FaWallet className="text-pink-400 text-2xl sm:text-3xl " />
          Expense Tracker
        </h2>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full h-11 sm:h-12 px-4 mb-4 rounded-xl bg-[#0f0f1a] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full h-11 sm:h-12 px-4 mb-4 rounded-xl bg-[#0f0f1a] text-white "
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button
          onClick={addExpense}
          className="
            w-full h-12 sm:h-14
            rounded-xl font-bold
            bg-gradient-to-r from-purple-500 to-pink-500
            hover:scale-105 transition
          "
        >
          Add Transaction
        </button>

        <h3 className="text-center text-lg sm:text-xl text-yellow-300 mt-6">
          Total Balance: ₹ {balance}
        </h3>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="text-center py-5 mt-14 bg-[#0f0f1a] text-xs sm:text-sm opacity-80 text-white">
        © 2026 Personal Productivity App | Expense Tracker
      </footer>
    </>
  );
}
