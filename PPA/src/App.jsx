import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Information from "./pages/Information";
import ExpenseTracker from "./pages/ExpenseTracker";
import Todo from "./pages/Todo";
import PasswordManager from "./pages/PasswordManager";
import DigitalDiary from "./pages/DigitalDiary";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div className="app">
      <Navbar />
       
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/information" element={<Information />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/expense" element={<ExpenseTracker />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/passwords" element={<PasswordManager />} />
          <Route path="/diary" element={<DigitalDiary />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
