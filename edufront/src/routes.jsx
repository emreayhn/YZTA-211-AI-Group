import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TeacherDashboard from './components/TeacherDashboard';
import ParentDashboard from './components/ParentDashboard';
import NotFound from './pages/NotFound';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/parent" element={<ParentDashboard />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default RoutesComponent;
