import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      className="input rounded-lg bg-[#EBEDF0] text-[#818C99] py-2 px-3 outline-none"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
