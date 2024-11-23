import React from "react";
import Spinner from "../atoms/Spinner";

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    label: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    type = "button",
    label,
    onClick,
    className,
    disabled = false,
    isLoading = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || isLoading}
            className={`w-full cursor-pointer rounded-md bg-primary py-2.5 text-[1rem] font-semibold tracking-wide text-white duration-300 hover:opacity-[.8] ${
                className ? className : ""
            } ${disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <Spinner />
                    Loading...
                </div>
            ) : (
                label
            )}
        </button>
    );
};

export default Button;
