import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("student");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setRole(selectedRole);

    // redirect to role page
    navigate(`/${selectedRole}`);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="instructor">Instructor</option>
          <option value="content-creator">Content Creator</option>
          <option value="student">Student</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
