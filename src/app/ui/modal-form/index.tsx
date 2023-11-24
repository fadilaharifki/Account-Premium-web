import React, { ChangeEvent, useState } from "react";
import Modal from "../modal";
import TextInput from "../text-input";
import TextArea from "../text-area";
import Select from "../select";
import { listCategory } from "../filter-category/constanta";
import ArrowDown from "@/app/assets/svg/arrow-down";
import DownloadIcon from "@/app/assets/svg/download";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../button";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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

  const schemaValidation = yup
    .object({
      product_name: yup.string().required("Product Name cann't be empty"),
      description: yup.string().required("Description cann't be empty"),
      menu_code: yup.string().required("Menu Code cann't be empty"),
      category: yup.string().required("Category cann't be empty"),
      image: yup.string().required("Image Name cann't be empty"),
      price: yup.string().required("Price Name cann't be empty"),
    })
    .required();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isDirty, dirtyFields },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = (val: any) => {
    console.log(val);

    // onSubmit(formData);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="flex max-[640px]:flex-col">
        <div className="flex w-full mr-2">
          <TextInput
            rules={{
              required: true,
            }}
            control={control}
            name="product_name"
            label="Your product name"
            placeholder="Product name"
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div className="w-full ml-2 max-[640px]:ml-0">
          <TextInput
            rules={{
              required: true,
            }}
            control={control}
            name="menu_code"
            label="Menu code"
            placeholder="Menu code"
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
          rules={{
            required: true,
          }}
          control={control}
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div className="flex max-[640px]:flex-col">
        <div className="flex w-full mr-2">
          <TextInput
            rules={{
              required: true,
            }}
            control={control}
            name="price"
            label="Price"
            placeholder="Price"
            prefix="NT$"
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div className="flex w-full ml-2 max-[640px]:ml-0">
          <TextInput
            rules={{
              required: false,
            }}
            control={control}
            name="discount_price"
            label="Discount price"
            placeholder="Discount price"
            prefix="NT$"
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex w-full">
        <TextInput
          rules={{
            required: true,
          }}
          control={control}
          name="image"
          type="file"
          label="Image"
          placeholder="Select File"
          suffix={<DownloadIcon fill="#AB5CFA" />}
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div className="flex w-full">
        <TextInput
          rules={{
            required: false,
          }}
          control={control}
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
      <Button onClick={handleSubmit(onSubmit)} className="w-full h-10 bg-gradient-to-r border-0 from-[#AB5CFA] to-[#C801CC] border-transparent hover:from-[#914ad8] hover:to-[#9d1b9f]">
        Add product
      </Button>
    </Modal>
  );
};

export default ModalForm;
