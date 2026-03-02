import React from "react";
import { Link } from "react-router-dom";

function Navbar({ role }) {
  return (
    <nav>
      <h2>LMS</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/create-course">Create Course</Link></li>
        {role === "admin" && <li><Link to="/admin">Admin</Link></li>}
        {role === "instructor" && <li><Link to="/instructor">Instructor</Link></li>}
        {role === "content-creator" && <li><Link to="/content-creator">Content Creator</Link></li>}
        {role === "student" && <li><Link to="/student">Student</Link></li>}
      </ul>
    </nav>
  );
}

export default Navbar;
