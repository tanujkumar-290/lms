import React, { useState } from "react";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Course Created: ${title}`);
  };

  return (
    <div>
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Course Title" value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Course Description" value={description}
          onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}

export default CreateCourse;
