import PlusIcon from "@/app/assets/svg/plus";
import { formatCurrency } from "@/app/lib/formatCurrency";
import Image from "next/image";

interface Items {
  price: number;
  image: string;
  name: string;
  desc: string;
  amount: number;
}

interface CardProps {
  item: Items;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="bg-[#1E1E1E] rounded-lg p-3 flex flex-col justify-center">
      <div className="my-2">{formatCurrency(item.price, "NT")}</div>
      <div>
        <Image width={200} height={200} className="rounded-lg object-cover h-52 w-full" src={item.image} alt="image prduct" />
      </div>
      <div className="py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 from-40% to-pink-700">{item.name}</div>
      <div className="text-[#9F9F9F] text-sm h-20 overflow-hidden">{item.desc}</div>
      <div className="pt-2">{item.amount}pcs</div>
    </div>
  );
};

export default Card;
