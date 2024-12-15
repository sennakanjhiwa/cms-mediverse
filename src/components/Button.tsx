import React from "react";

type ButtonProps = {
    label?: string; // Jika hanya menggunakan ikon, label bisa opsional
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Opsional
    type?: "button" | "submit" | "reset"; // Tambahkan tipe tombol
    variant?: "primary" | "secondary" | "danger";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    icon?: React.ReactNode; // Ikon opsional
    ariaLabel?: string; // Untuk aksesibilitas jika hanya menggunakan ikon
};

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = "button", // Default type adalah "button"
    variant = "primary",
    size = "medium",
    disabled = false,
    icon,
    ariaLabel,
}) => {
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
            type={type} // Properti type ditambahkan
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={disabled}
            aria-label={ariaLabel || label} // Untuk aksesibilitas
        >
            {icon && <span className={`${label ? "mr-2" : ""}`}>{icon}</span>}
            {label}
        </button>
    );
};

export default Button;
