import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
    const navigate = useNavigate();

    // Simüle edilmiş sınıflar ve öğrenciler
    const classes = [
        { id: 1, name: "5-A" },
        { id: 2, name: "6-B" },
    ];

    const students = {
        1: [
            { id: 101, name: "Ahmet Yılmaz" },
            { id: 102, name: "Ayşe Demir" },
        ],
        2: [
            { id: 201, name: "Can Korkmaz" },
            { id: 202, name: "Zeynep Koç" },
        ]
    };

    const [selectedClassId, setSelectedClassId] = useState(null);

    return (
        <div>
            <h2>📚 Öğretmen Paneli</h2>
            <h3>Sınıf Seç:</h3>
            <ul>
                {classes.map((cls) => (
                    <li key={cls.id}>
                        <button onClick={() => setSelectedClassId(cls.id)}>{cls.name}</button>
                    </li>
                ))}
            </ul>

            {selectedClassId && (
                <div>
                    <h3>👨‍🎓 {classes.find((c) => c.id === selectedClassId).name} Sınıfı Öğrencileri</h3>
                    <ul>
                        {students[selectedClassId].map((student) => (
                            <li key={student.id}>
                                <button onClick={() => navigate(`/student/${student.id}`)}>
                                    {student.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TeacherDashboard;
