import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParentDashboard = () => {
    const [courses, setCourses] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/parent/courses/', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => setCourses(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Veli Paneli</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        {course.name} - Sınav 1: {course.exam1_score} / Sınav 2: {course.exam2_score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ParentDashboard;
