import React from "react";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 flex flex-col justify-center items-center bg-gray-50">
                <LoginForm />
            </div>
            <div className="w-1/2 bg-gradient-to-r from-purple-500 to-purple-700 text-white flex justify-center items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-2">Your Personal Healthcare Assistant</h2>
                </div>
            </div>
        </div>
    );
};

export default Login;
