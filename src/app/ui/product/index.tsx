import PlusIcon from "@/app/assets/svg/plus";
import Card from "../card";
import ModalForm from "../modal-form";
import { useState } from "react";
import { listProduct } from "./dummy";

interface ProductProps {}

interface EmtyProps {
  dataLength?: number;
}

const Product: React.FC<ProductProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Emty = ({ dataLength }: EmtyProps) => {
    return (
      <div onClick={() => setIsModalOpen(true)} className="bg-[#1E1E1E] cursor-pointer hover:bg-[#3a3a3a] rounded-lg flex flex-col justify-center items-center h-52 min-h-full">
        <div className="mb-4">
          <PlusIcon />
        </div>
        {dataLength ? <div>Add Product</div> : <div>Add New Product</div>}
      </div>
    );
  };

  return (
    <div className="grid max-[640px]:grid-cols-1 max-[768px]:grid-cols-2 max-[1024px]:grid-cols-2 grid-cols-4 gap-4">
      {listProduct?.map((item, idx) => {
        return <Card key={idx} item={item} />;
      })}
      <Emty dataLength={listProduct.length} />
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add menu"></ModalForm>
    </div>
  );
};

export default Product;
