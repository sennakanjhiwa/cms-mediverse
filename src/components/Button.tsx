import React from "react";

type ButtonProps = {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "danger";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "primary", size = "medium", disabled = false, icon }) => {
    const baseStyles = "rounded-lg font-semibold flex items-center justify-center";
    const variants = {
        primary: "bg-purple-600 text-white hover:bg-purple-700",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
    };
    const sizes = {
        small: "py-1 px-3 text-sm",
        medium: "py-2 px-4 text-base",
        large: "py-3 px-6 text-lg",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={disabled}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {label}
        </button>
    );
};

export default Button;
