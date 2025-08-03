import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeacherDashboard = () => {
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState(null);
    const [students, setStudents] = useState([]);

    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/teacher/classes/', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => setClasses(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleClassSelect = (classId) => {
        setSelectedClass(classId);
        axios.get(`http://127.0.0.1:8000/api/teacher/class/${classId}/students/`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => setStudents(res.data))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h2>Öğretmen Paneli</h2>
            <h3>Sınıflar</h3>
            <ul>
                {classes.map(cls => (
                    <li key={cls.id} onClick={() => handleClassSelect(cls.id)}>{cls.name}</li>
                ))}
            </ul>

            {selectedClass && (
                <>
                    <h3>Öğrenciler</h3>
                    <ul>
                        {students.map(std => (
                            <li key={std.id}>{std.name}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default TeacherDashboard;
