import React from "react";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import Lottie from "lottie-react";
import doctorAnimation from "../lotties/Animation - 1734271406247.json"; // Sesuaikan path dengan lokasi file Anda

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
                        <div className="w-1/2 h-5/6 me-6 flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-3xl">
                            {/* Animasi Lottie */}
                            <Lottie animationData={doctorAnimation} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
