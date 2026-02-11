
import { useEffect, useState } from "react";

const TodoReminder = () => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task || !time) {
      alert("Fill all fields");
      return;
    }

    setTasks([...tasks, { text: task, time, done: false }]);
    setTask("");
    setTime("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      

      {/* ===== HEADER ===== */}
      <div className="font-roboto bg-white text-center py-10 sm:py-16 md:py-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
          📝 Smart To-Do List
        </h1>
        <p className="text-yellow-500 text-sm sm:text-base">
          Task reminders with date & time
        </p>
      </div>

      {/* ===== CARD ===== */}
      <section
        className="
          bg-gradient-to-br from-[#22223b] to-[#1a1a2e]
          w-[95%] sm:w-[85%] md:w-[70%] lg:w-[45%] xl:w-[35%]
          mx-auto mt-8 sm:mt-10
          p-5 sm:p-6 md:p-8
          rounded-2xl shadow-2xl
          shadow-gray-900
        "
      >
        <h2 className="flex item-center text-yellow-300 text-lg sm:text-xl font-bold mb-4">
          🔔 Add Reminder
        </h2>

        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full p-3 mb-3 rounded-xl bg-[#0f0f1a] text-white outline-none"
        />

        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-3 mb-3 rounded-xl bg-[#0f0f1a] text-white outline-none"
        />

        <button
          onClick={addTask}
          className="w-full h-12 rounded-xl font-bold
          bg-gradient-to-tr from-purple-600 to-pink-500 hover:scale-105 transition"
        >
          Add Task
        </button>

        <ul className="mt-6 space-y-3">
          {tasks.map((t, i) => (
            <li
              key={i}
              className={`bg-[#0f0f1a] p-3 rounded-lg flex justify-between items-center
              ${t.done ? "line-through opacity-60" : ""}`}
            >
              <span>
                {t.text}
                <br />
                <small className="text-gray-400">{t.time}</small>
              </span>

              <div className="flex gap-3 text-yellow-300">
                <span onClick={() => toggleTask(i)} className="cursor-pointer">
                  ✔
                </span>
                <span onClick={() => deleteTask(i)} className="cursor-pointer">
                  🗑
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="text-center py-5 mt-14 bg-[#0f0f1a] text-sm text-white opacity-80">
        © 2026 Personal Productivity App | Todo Reminder
      </footer>
    </>
  );
};

export default TodoReminder;
