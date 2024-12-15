import React from "react";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

const Login: React.FC = () => {
    return (
        <div className="h-screen w-full flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Konten Utama */}
            <div className="flex-grow flex justify-center items-center">
                <div className="container h-full flex flex-col justify-center">
                    <div className="flex h-full items-center">
                        {/* Bagian Form */}
                        <div className="w-1/2 flex flex-col justify-center items-center">
                            <LoginForm />
                        </div>

                        {/* Bagian Background */}
                        <div className="w-1/2 h-5/6 me-6 flex justify-center items-center bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-3xl">
                            <h2 className="text-4xl font-bold px-8 text-center">
                                Hi kaka manies 👋<br />
                                Selamat datang di layanan reservasi online kami
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
