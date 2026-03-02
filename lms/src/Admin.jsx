import React, { useState } from "react";

function Admin() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", role: "student" },
    { id: 2, name: "Bob", role: "instructor" },
  ]);

  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics" },
    { id: 2, title: "Python Fundamentals" },
  ]);

  const removeUser = (id) => setUsers(users.filter(u => u.id !== id));
  const removeCourse = (id) => setCourses(courses.filter(c => c.id !== id));

  return (
    <div className="dashboard">
      <h2>Admin Panel</h2>
      <h3>Users</h3>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} ({u.role})
            <button onClick={() => removeUser(u.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h3>Courses</h3>
      <ul>
        {courses.map(c => (
          <li key={c.id}>
            {c.title}
            <button onClick={() => removeCourse(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
