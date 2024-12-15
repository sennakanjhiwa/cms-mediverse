import React from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";

const Login: React.FC = () => {
    return (
        <div className="h-screen w-full flex flex-col">
            <Navbar />
            <div className="h-screen flex justify-center items-center bg-white">
                <Dashboard />
            </div>
        </div>
    );
};

export default Login;
