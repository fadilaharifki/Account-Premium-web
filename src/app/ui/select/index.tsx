import React, { ChangeEvent, ReactNode } from "react";

interface Ioption {
  name: string | number | readonly string[] | undefined;
  label: string;
}

interface SelectProps {
  name: string;
  label: string;
  prefix?: string | ReactNode;
  suffix?: string | ReactNode;
  required?: boolean;
  value: string;
  options: Ioption[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ name, label, prefix, suffix, required = false, value, options, onChange }) => {
  return (
    <div className="w-full mb-5">
      <label className="block text-[#C9CACB] text-sm font-bold mb-2">
        {label} {required ? <span className="text-red-500">*</span> : <span>(optional)</span>}
      </label>
      <div className="relative">
        {prefix && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500">{prefix}</span>
          </div>
        )}
        <select name={name} value={value} onChange={onChange} className="shadow bg-[#1A1A1A]  appearance-none border rounded w-full py-2 px-3 text-[#C9CACB] leading-tight focus:outline-none focus:shadow-outline" required={required}>
          {options.map((item, idx) => (
            <option className="text-[#C9CACB]" key={idx} value={item.name}>
              {item.label}
            </option>
          ))}
        </select>
        {suffix && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500">{suffix}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
