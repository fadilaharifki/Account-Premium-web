import React from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, title = "Modal" }: ModalProps) => {
  return (
    <div className={`fixed z-50 inset-0 ${isOpen ? "flex" : "hidden"} items-center justify-center overflow-auto max-[640px]:pt-96 `}>
      <div className="absolute bg-black opacity-50 inset-0" onClick={onClose}></div>
      <div className="bg-[#222222] p-4 z-10 min-w-[35%] rounded-lg">
        <div className="flex justify-end">
          <button className="hover:bg-slate-500 p-2 rounded-lg" onClick={onClose}>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        </div>
        <div className="text-lg text-center  font-bold mb-5">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
