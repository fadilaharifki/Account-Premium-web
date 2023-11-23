import React, { ChangeEvent, ReactNode } from "react";

interface TextInputProps {
  name: string;
  type?: string;
  label: string;
  prefix?: string | ReactNode;
  suffix?: string | ReactNode;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ name, type = "text", label, prefix, suffix, required = false, value, onChange, placeholder }) => {
  switch (type) {
    case "checkbox":
      return (
        <div className="w-full mb-5 flex justify-between">
          <label className="block text-[#C9CACB] text-sm font-bold mb-2">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <div className="relative">
            {prefix && (
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500">{prefix}</span>
              </div>
            )}
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-[#C9CACB] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#AA5AFA] peer-checked:bg-[#AA5AFA]"></div>
            </label>

            {suffix && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500">{suffix}</span>
              </div>
            )}
          </div>
        </div>
      );
    case "file":
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
            <label className={`w-full flex ${prefix ? "pl-12" : "pl-4"} ${suffix ? "pr-12" : "pr-4"} border bg-[#1A1A1A]  rounded-md py-2 leading-tight focus:outline-none focus:border-[#AA5AFA]`}>
              <input type={type} className="hidden" />
              {placeholder}
            </label>

            {suffix && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500">{suffix}</span>
              </div>
            )}
          </div>
        </div>
      );

    default:
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
            <input type="text" className={`w-full flex ${prefix ? "pl-12" : "pl-4"} ${suffix ? "pr-12" : "pr-4"} border bg-[#1A1A1A]  rounded-md py-2 leading-tight focus:outline-none focus:border-[#AA5AFA]`} placeholder={placeholder} />
            {suffix && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500">{suffix}</span>
              </div>
            )}
          </div>
        </div>
      );
  }
};

export default TextInput;
