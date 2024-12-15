import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "/home/senna/Documents/refactory/mediverse/cms-mediverse/src/supabaseClient";
import Button from "./Button";
import Input from "./Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setError(error.message);
        } else {
            setError(null);
            navigate("/dashboard"); // Arahkan ke Dashboard
        }
    };

    return (
        <form onSubmit={handleLogin} className="w-3/5 mx-auto p-6 bg-white shadow rounded-lg border-t-4 border-purple-500">
            <h2 className="text-3xl font-bold mb-3">Selamat Datang</h2>
            <p className="text-lg mb-8 text-slate-600">Masuk dan kelola dashboard Mediverse Anda sekarang</p>
            <Input
                id="email"
                autocomplete="email"
                type="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<FaEnvelope />}
                required
                errorMessage={error && email === "" ? "Email tidak boleh kosong" : ""}
            />
            <Input
                id="password"
                autocomplete="current-password"
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<FaLock />}
                required
                errorMessage={error && password === "" ? "Password tidak boleh kosong" : ""}
            />
            <div className="pt-1 flex justify-between items-center">
                <Button label="Login" type="submit" variant="primary" size="medium" icon={<FaSignInAlt />} />
                <a href="#" className="text-base text-slate-500">Lupa kata sandi?</a>
            </div>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
    );
};

export default LoginForm;
