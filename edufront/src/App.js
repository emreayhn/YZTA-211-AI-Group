import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDetail from './pages/StudentDetail';
// diğer sayfalar da buraya eklenir

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student/:studentId" element={<StudentDetail />} />
        <Route path="/parent" element={<ParentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
