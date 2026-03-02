import React, { useState } from "react";

function Instructor() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");

  const addCourse = (e) => {
    e.preventDefault();
    setCourses([...courses, { id: Date.now(), title }]);
    setTitle("");
  };

  return (
    <div className="dashboard">
      <h2>Instructor Dashboard</h2>
      <form onSubmit={addCourse}>
        <input 
          type="text" 
          placeholder="New Course Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <button type="submit">Add Course</button>
      </form>
      <h3>Your Courses</h3>
      <ul>
        {courses.map(c => <li key={c.id}>{c.title}</li>)}
      </ul>
    </div>
  );
}

export default Instructor;
