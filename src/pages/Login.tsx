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
            <div className="flex-grow flex justify-center items-center px-4 md:px-8 py-4 sm:py-0">
                <div className="container lg:h-full flex flex-col justify-center">
                    <div className="flex flex-col-reverse lg:flex-row h-full items-center gap-6">
                        {/* Bagian Form */}
                        <div className="w-full order-last lg:order-first lg:w-1/2 flex flex-col justify-center items-center">
                            <LoginForm />
                        </div>

                        {/* Bagian Background */}
                        <div className="w-full lg:w-1/2 h-auto lg:h-5/6 flex justify-center items-center bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-3xl p-6">
                            {/* Animasi Lottie */}
                            <Lottie animationData={doctorAnimation} loop={true} className="w-full max-w-xs lg:max-w-lg xl:max-w-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
