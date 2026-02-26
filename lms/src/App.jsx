import React, { useState } from 'react';
import './App.css';

// --- 1. ADMIN VIEW: Platform & User Management ---
const AdminView = () => {
  const [users] = useState([
    { id: 1, name: "Tanuj Dev", role: "Admin", status: "Active" },
    { id: 2, name: "Sarah Smith", role: "Instructor", status: "Active" },
    { id: 3, name: "Mike Ross", role: "Student", status: "Inactive" },
  ]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 animate-fadeIn">
      <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
        <span>⚙️</span> Admin: Manage Platform & Roles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-red-50 rounded-xl border border-red-100">
          <p className="text-red-800 text-xs font-bold uppercase">Total Users</p>
          <p className="text-2xl font-black">1,240</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-blue-800 text-xs font-bold uppercase">Active Courses</p>
          <p className="text-2xl font-black">42</p>
        </div>
        <div className="p-4 bg-green-50 rounded-xl border border-green-100">
          <p className="text-green-800 text-xs font-bold uppercase">Server Status</p>
          <p className="text-xl font-bold text-green-600">ONLINE</p>
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400 text-xs uppercase tracking-widest border-b">
            <th className="pb-3 px-2">User Name</th>
            <th className="pb-3 px-2">Assigned Role</th>
            <th className="pb-3 px-2 text-right">Settings</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border-b last:border-0 hover:bg-gray-50 transition">
              <td className="py-4 px-2 font-medium">{u.name}</td>
              <td className="py-4 px-2">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-black uppercase">
                  {u.role}
                </span>
              </td>
              <td className="py-4 px-2 text-right">
                <button className="text-blue-600 hover:underline font-bold text-sm">Update Permissions</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --- 2. INSTRUCTOR VIEW: Grading & Interaction ---
const InstructorView = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alex Johnson", assignment: "React State", marks: "" },
    { id: 2, name: "Maria Garcia", assignment: "CSS Flexbox", marks: "92" },
    { id: 3, name: "Jordan Smith", assignment: "API Integration", marks: "" },
  ]);

  const handleGradeChange = (id, val) => {
    setStudents(students.map(s => s.id === id ? { ...s, marks: val } : s));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 animate-fadeIn">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">👨‍🏫 Instructor: Grade Assignments</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 text-xs uppercase border-b">
              <th className="pb-3">Student</th>
              <th className="pb-3 text-center">Marks (0-100)</th>
              <th className="pb-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id} className="border-b">
                <td className="py-4 font-bold text-gray-700">{s.name}</td>
                <td className="py-4 text-center">
                  <input 
                    type="number" 
                    className="w-16 p-2 border-2 border-gray-100 rounded-lg text-center font-bold focus:border-blue-500 outline-none"
                    value={s.marks}
                    onChange={(e) => handleGradeChange(s.id, e.target.value)}
                  />
                </td>
                <td className="py-4 text-right">
                  {s.marks ? (
                    <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-black">GRADED</span>
                  ) : (
                    <span className="text-amber-500 bg-amber-50 px-3 py-1 rounded-full text-xs font-black">PENDING</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => alert("Grades Published!")} className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-100">
        Submit Final Grades
      </button>
    </div>
  );
};

// --- 3. CONTENT CREATOR VIEW: Development ---
const CreatorView = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 animate-fadeIn">
      <h2 className="text-2xl font-bold text-green-700 mb-6">🎨 Creator: Build Course Materials</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-xs font-black text-gray-400 uppercase mb-2">Module Title</label>
          <input type="text" placeholder="e.g., Introduction to Full Stack" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-green-500 font-medium" />
        </div>
        <div>
          <label className="block text-xs font-black text-gray-400 uppercase mb-2">Upload Assets</label>
          <div className="border-2 border-dashed border-green-200 rounded-2xl p-12 text-center bg-green-50 hover:bg-green-100 transition cursor-pointer">
            <p className="text-green-800 font-bold mb-1">Drag & Drop Lesson Content</p>
            <p className="text-xs text-green-600 font-medium uppercase tracking-widest">Video, PDF, or SCORM</p>
          </div>
        </div>
        <button className="w-full py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-lg shadow-green-100">Publish Content</button>
      </div>
    </div>
  );
};

// --- 4. STUDENT VIEW: Progress & Enrollment ---
const StudentView = () => {
  const courses = [
    { title: "React Fundamentals", progress: 85, grade: "A" },
    { title: "Advanced Backend", progress: 30, grade: "Pending" }
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 animate-fadeIn">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">📖 Student: My Learning</h2>
      <div className="space-y-4">
        {courses.map((c, i) => (
          <div key={i} className="p-5 border border-gray-100 rounded-2xl hover:border-purple-200 transition group cursor-pointer">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-gray-800 group-hover:text-purple-700 transition">{c.title}</h3>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-[10px] font-black">GRADE: {c.grade}</span>
            </div>
            <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
              <div className="bg-purple-600 h-full transition-all duration-700" style={{ width: `${c.progress}%` }}></div>
            </div>
            <p className="text-[10px] mt-2 font-black text-gray-400 uppercase tracking-widest">{c.progress}% Course Completed</p>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 py-3 border-2 border-purple-100 text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition">Enroll in New Course</button>
    </div>
  );
};

// --- MAIN APP: Login & Routing ---
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('Student');

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-600 p-6">
        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-sm w-full text-center">
          <h1 className="text-3xl font-black tracking-tighter mb-1">NEXUS<span className="text-blue-600">FLOW</span></h1>
          <p className="text-gray-400 text-xs mb-8 font-bold uppercase tracking-widest">LMS Portal Access</p>
          <div className="text-left mb-6">
            <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Select Your Role</label>
            <select 
              className="w-full p-4 mt-1 bg-gray-50 border-2 border-gray-100 rounded-2xl font-bold focus:border-blue-500 outline-none transition"
              value={role} 
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Admin</option>
              <option>Instructor</option>
              <option>Content Creator</option>
              <option>Student</option>
            </select>
          </div>
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-blue-700 hover:shadow-xl transition-all active:scale-95"
          >
            Login to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-10 bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tighter leading-none">NEXUS<span className="text-blue-600">FLOW</span></h1>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Logged in as: <span className="text-blue-600">{role}</span></p>
          </div>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="px-6 py-2 bg-gray-50 text-gray-400 rounded-xl text-[10px] font-black uppercase hover:text-red-500 transition-all border border-gray-100"
          >
            Logout
          </button>
        </header>

        <main>
          {role === 'Admin' && <AdminView />}
          {role === 'Instructor' && <InstructorView />}
          {role === 'Content Creator' && <CreatorView />}
          {role === 'Student' && <StudentView />}
        </main>
      </div>
    </div>
  );
}

export default App;