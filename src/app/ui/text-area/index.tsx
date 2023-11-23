import React, { ChangeEvent, ReactNode } from "react";

interface TextAreaProps {
  name: string;
  label: string;
  prefix?: string | ReactNode;
  suffix?: string | ReactNode;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, rows, prefix, suffix, required = false, value, onChange, placeholder }) => {
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
        <textarea rows={rows} className={`w-full flex ${prefix ? "pl-12" : "pl-4"} ${suffix ? "pr-12" : "pr-4"} border bg-[#1A1A1A] rounded-md py-2 leading-tight focus:outline-none focus:border-[#AA5AFA]`} placeholder={placeholder} />
        {suffix && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500">{suffix}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextArea;
