import React from "react";

type InputProps = {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string; // Mendukung asosiasi label
    name?: string; // Mendukung formulir
    required?: boolean; // Validasi
    disabled?: boolean; // Keadaan input
    errorMessage?: string; // Pesan error
    icon?: React.ReactNode;
    autocomplete?: string;
};

const Input: React.FC<InputProps> = ({
    type,
    placeholder,
    value,
    onChange,
    id,
    name,
    required = false,
    disabled = false,
    errorMessage,
    icon,
    autocomplete,
}) => {
    return (
        <div className="mb-4">
            <div className={`flex items-center rounded-lg px-3 py-2 bg-purple-50 ${errorMessage ? "border-red-500" : ""}`}>
                {icon && <span className="mr-2">{icon}</span>}
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    autoComplete={autocomplete}
                    className={`outline-none flex-1 bg-purple-50 ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
                />
            </div>
            {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
        </div>
    );
};

export default Input;
