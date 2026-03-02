import React, { useState } from "react";

function ContentCreator() {
  const [materials, setMaterials] = useState([]);
  const [content, setContent] = useState("");

  const addMaterial = (e) => {
    e.preventDefault();
    setMaterials([...materials, { id: Date.now(), content }]);
    setContent("");
  };

  return (
    <div className="dashboard">
      <h2>Content Creator Dashboard</h2>
      <form onSubmit={addMaterial}>
        <textarea 
          placeholder="Write course material..." 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <button type="submit">Add Material</button>
      </form>
      <h3>Course Materials</h3>
      <ul>
        {materials.map(m => <li key={m.id}>{m.content}</li>)}
      </ul>
    </div>
  );
}

export default ContentCreator;
