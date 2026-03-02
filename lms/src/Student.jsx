import React, { useState } from "react";

function Student() {
  const [enrolled, setEnrolled] = useState([]);
  const courses = ["React Basics", "Python Fundamentals", "CSS Styling"];

  const enroll = (course) => {
    if (!enrolled.includes(course)) {
      setEnrolled([...enrolled, course]);
    }
  };

  return (
    <div className="dashboard">
      <h2>Student Dashboard</h2>
      <h3>Available Courses</h3>
      <ul>
        {courses.map(c => (
          <li key={c}>
            {c} <button onClick={() => enroll(c)}>Enroll</button>
          </li>
        ))}
      </ul>

      <h3>Enrolled Courses</h3>
      <ul>
        {enrolled.map(c => <li key={c}>{c}</li>)}
      </ul>
    </div>
  );
}

export default Student;
