import React, { ChangeEvent, ReactNode } from "react";
import { Control, RegisterOptions, useController } from "react-hook-form";

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
  rules: RegisterOptions;
  defaultValue?: string;
  control: Control<any>;
}

const TextArea: React.FC<TextAreaProps> = ({ control, defaultValue, name, rules, label, rows, prefix, suffix, required = false, value, onChange, placeholder }) => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    name,
    rules,
  });

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
        <textarea
          onChange={(e) => {
            field.onChange(e.target.value);
          }}
          rows={rows}
          className={`w-full flex ${prefix ? "pl-12" : "pl-4"} ${suffix ? "pr-12" : "pr-4"} border bg-[#1A1A1A] rounded-md py-2 leading-tight focus:outline-none focus:border-[#AA5AFA]`}
          placeholder={placeholder}
        />
        {suffix && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500">{suffix}</span>
          </div>
        )}
      </div>
      <div>{fieldState?.error && <div className="text-red-500 py-2 text-sm">{fieldState?.error?.message}</div>}</div>
    </div>
  );
};

export default TextArea;
