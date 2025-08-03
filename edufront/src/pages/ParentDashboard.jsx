import React, { useState } from 'react';

const ParentDashboard = () => {
    // Örnek veriler
    const studentName = "Mert Yılmaz";
    const lessons = [
        { id: 1, name: "Matematik", exam1: 72, exam2: 88 },
        { id: 2, name: "Fen Bilimleri", exam1: 60, exam2: 45 },
        { id: 3, name: "Türkçe", exam1: 80, exam2: 91 }
    ];

    const [feedback, setFeedback] = useState(null);

    const handleFeedbackClick = () => {
        // Normalde burada backend'e istek atılır. Simüle edelim:
        const aiGeneratedFeedback = `
📌 ${studentName} özellikle "Fen Bilimleri" dersinde ikinci sınavda düşük performans sergilemiştir.

    `;
        setFeedback(aiGeneratedFeedback);
    };

    return (
        <div>
            <h2>👪 Veli Paneli</h2>
            <p><strong>Öğrenci:</strong> {studentName}</p>
            <h3>Ders Notları</h3>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Ders</th>
                        <th>Sınav 1</th>
                        <th>Sınav 2</th>
                    </tr>
                </thead>
                <tbody>
                    {lessons.map((lesson) => (
                        <tr key={lesson.id}>
                            <td>{lesson.name}</td>
                            <td>{lesson.exam1}</td>
                            <td>{lesson.exam2}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button style={{ marginTop: '20px' }} onClick={handleFeedbackClick}>
                📊 Yapay Zeka Öğrenci Yorumunu Gör
            </button>

            {feedback && (
                <div style={{ marginTop: '20px', backgroundColor: '#f3f3f3', padding: '15px' }}>
                    <pre>{feedback}</pre>
                </div>
            )}
        </div>
    );
};

export default ParentDashboard;
