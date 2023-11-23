import React, { ChangeEvent, useState } from "react";
import Modal from "../modal";
import TextInput from "../text-input";
import TextArea from "../text-area";
import Select from "../select";
import { listCategory } from "../filter-category/constanta";
import ArrowDown from "@/app/assets/svg/arrow-down";
import DownloadIcon from "@/app/assets/svg/download";
import Button from "../button";

interface ModalFormProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
}

interface FormData {
  name: string;
  price: number;
  category: string;
  image: File | null;
}

interface ProductFormProps {
  onSubmit: (data: FormData) => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose, title = "Modal Form" }: ModalFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSubmit(formData);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="flex w-full mr-2">
            <TextInput
              name="product_name"
              label="Your product name"
              placeholder="Product name"
              required
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setInputValue(e.target.value);
              }}
            />
          </div>
          <div className="w-full ml-2">
            <TextInput
              name="menu_code"
              label="Menu code"
              placeholder="Menu code"
              required
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setInputValue(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <Select
            name="category"
            label="Category"
            required
            suffix={<ArrowDown />}
            options={listCategory}
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div>
          <TextArea
            rows={4}
            name="description"
            label="Tell me more about your product"
            placeholder="Product description"
            required
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div className="flex">
          <div className="flex w-full mr-2">
            <TextInput
              name="price"
              label="Price"
              placeholder="Price"
              prefix="NT$"
              required
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setInputValue(e.target.value);
              }}
            />
          </div>
          <div className="flex w-full ml-2">
            <TextInput
              name="discount_price)"
              label="Discount price"
              placeholder="Discount price"
              prefix="NT$"
              required
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setInputValue(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex w-full">
          <TextInput
            name="image"
            type="file"
            label="Image"
            placeholder="Select File"
            suffix={<DownloadIcon fill="#AB5CFA" />}
            required
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div className="flex w-full">
          <TextInput
            name="enable_variant"
            type="checkbox"
            label="Enable Variant"
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        {/* Submit Button */}
        {/* <div className="flex items-center justify-center w-full">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div> */}
        <Button className="w-full h-10 bg-gradient-to-r from-[#AB5CFA] to-[#C801CC] border-0">Add product</Button>
      </form>
    </Modal>
  );
};

export default ModalForm;
