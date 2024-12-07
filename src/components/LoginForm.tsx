import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "/home/senna/Documents/refactory/mediverse/cms-mediverse/src/supabaseClient"

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            alert("Login gagal: " + error.message);
        } else {
            navigate("/dashboard"); // Arahkan ke Dashboard
        }
    };

    return (
        <form onSubmit={handleLogin} className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <div className="mb-4">
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    placeholder="Masukkan email"
                />
            </div>
            <div className="mb-4">
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    placeholder="Masukkan password"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">
                Login
            </button>
        </form>
    );
};

export default LoginForm;
