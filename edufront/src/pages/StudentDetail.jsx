import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function StudentDetail() {
    const { studentId } = useParams(); // URL'den öğrenci id'sini al
    const [grade, setGrade] = useState('');
    const [file, setFile] = useState(null);

    const handleGradeSubmit = () => {
        // API'ye not gönderme işlemi (şimdilik console)
        console.log(`Not: ${grade} gönderildi (Öğrenci ID: ${studentId})`);
    };

    const handleFileUpload = () => {
        if (file) {
            console.log(`Dosya yüklendi: ${file.name}`);
            // API’ye dosya yükleme kodu buraya gelecek
        }
    };

    const handleVeliBilgilendirme = () => {
        // Bu kısımda AI yorumları API'den çekeceğiz
        alert("AI: Öğrencinin eksik olduğu konular şunlardır... (placeholder)");
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Öğrenci Detay Sayfası</h2>
            <p>Öğrenci ID: {studentId}</p>

            <div>
                <label>Not Gir:</label>
                <input
                    type="number"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />
                <button onClick={handleGradeSubmit}>Notu Kaydet</button>
            </div>

            <div style={{ marginTop: 20 }}>
                <label>Sınav Kağıdı Yükle:</label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button onClick={handleFileUpload}>Yükle</button>
            </div>

            <div style={{ marginTop: 20 }}>
                <button onClick={handleVeliBilgilendirme}>Veli Bilgilendirme</button>
            </div>
        </div>
    );
}

export default StudentDetail;
