
import { useState, useEffect } from "react";


// DigitalDiary Component
const DigitalDiary = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("diaryNotes")) || []
  );
  const [noteText, setNoteText] = useState("");
  const [searchDate, setSearchDate] = useState("");

  // Persist notes to localStorage
  useEffect(() => {
    localStorage.setItem("diaryNotes", JSON.stringify(notes));
  }, [notes]);

  // Save a diary entry
  const saveNote = () => {
    if (!noteText) return;
    const date = new Date().toISOString().split("T")[0];
    setNotes([...notes, { date, noteText }]);
    setNoteText("");
  };

  const filteredNotes = searchDate
    ? notes.filter((n) => n.date === searchDate)
    : notes;

  return (
    <>
      

      <div className="min-h-screen bg-gray-100 font-roboto py-6">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl text-bl font-bold ack mt-4">
          📔 Digital Diary
        </h1>
        <p className="text-center text-yellow-500 mt-2 text-sm sm:text-base">
          Write your thoughts, one day at a time
        </p>

        {/* ===== DIARY CARD ===== */}
        <section
          className="bg-gradient-to-br from-[#22223b] to-[#1a1a2e] 
          w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]
          mx-auto mt-8 sm:mt-10 p-5 sm:p-6 md:p-8 rounded-2xl shadow-2xl shadow-gray-900"
        >
        <h2 className="flex  text-yellow-300 text-lg sm:text-xl md:text-2xl font-bold  items-center gap-3 mb-4">
            <i className="fa-solid fa-book text-pink-400 text-xl sm:text-2xl md:text-3xl"></i>{" "}
           📔 Write Diary
          </h2>

          <textarea
            placeholder="Write your diary entry..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            className="w-full mb-3 p-3 sm:p-4 rounded-xl bg-[#0f0f1a] text-white shadow-inner resize-y focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
          ></textarea>

          <button
            onClick={saveNote}
            className="w-full h-12 sm:h-14 md:h-16 mb-4 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition text-white text-sm sm:text-base"
          >
            Save Entry
          </button>

          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            className="w-full p-3 mb-4 rounded-xl bg-[#0f0f1a] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
          />

          <ul className="space-y-3 max-h-80 overflow-y-auto">
            {filteredNotes.map((n, i) => (
              <li
                key={i}
                className="bg-[#0f0f1a] p-3 sm:p-4 rounded-lg shadow-inner text-white break-words text-sm sm:text-base"
              >
                <b>{n.date}</b>
                <br />
                {n.noteText}
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

export default DigitalDiary;
