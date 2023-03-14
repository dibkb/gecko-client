import React from "react";
interface InputProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div className="relative">
      <input
        required
        id={id}
        type={type}
        className="border-2 border-gray-200 w-full rounded-md text-base outline-none
              px-6
              pt-6
              pb-2
        appearance-none
        focus:outline-none
        focus:ring-0
        focus:border-primary
        peer
        invalid:border-b-1
        font-medium
         "
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="
        absolute 
        text-sm
      text-zinc-600
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-9 
        origin-[0] 
        left-6
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3
      "
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
