import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/token/', {
                username,
                password
            });
            localStorage.setItem('token', res.data.access);

            // Kullanıcı tipine göre yönlendir
            const decoded = JSON.parse(atob(res.data.access.split('.')[1]));
            const isTeacher = decoded.role === 'teacher';
            navigate(isTeacher ? '/teacher' : '/parent');

        } catch (err) {
            alert("Giriş başarısız!");
        }
    };

    return (
        <div>
            <h2>Giriş Yap</h2>
            <input
                type="text"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br />
            <input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button onClick={handleLogin}>Giriş Yap</button>
        </div>
    );
};

export default LoginPage;
