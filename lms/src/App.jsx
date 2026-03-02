import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Dashboard from "./dashboard.jsx";
import CreateCourse from "./CreateCourse.jsx";
import Admin from "./Admin.jsx";
import Instructor from "./Instructor.jsx";
import ContentCreator from "./ContentCreator.jsx";
import Student from "./Student.jsx";

function App() {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login setRole={setRole} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/content-creator" element={<ContentCreator />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
