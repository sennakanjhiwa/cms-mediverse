import React from "react";

type InputProps = {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, icon }) => {
    return (
        <div className="flex items-center border rounded-lg px-3 py-2">
            {icon && <span className="mr-2">{icon}</span>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="outline-none flex-1"
            />
        </div>
    );
};

export default Input;
