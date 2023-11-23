import PlusIcon from "@/app/assets/svg/plus";
import Card from "../card";

interface ProductProps {}

interface EmtyProps {
  dataLength?: number;
}

const Product: React.FC<ProductProps> = () => {
  const listProduct = [
    {
      price: 15000,
      image: "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pack of Beer (6pcs of heineken)",
      desc: "Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol.",
      amount: 6,
    },
    {
      price: 15000,
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      name: "Pack of Beer (6pcs of heineken)",
      desc: "Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol.",
      amount: 6,
    },
    {
      price: 15000,
      image: "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pack of Beer (6pcs of heineken)",
      desc: "Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol.",
      amount: 6,
    },
    {
      price: 15000,
      image: "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pack of Beer (6pcs of heineken)",
      desc: "Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol.",
      amount: 6,
    },
    {
      price: 15000,
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      name: "Pack of Beer (6pcs of heineken)",
      desc: "Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol.",
      amount: 6,
    },
    {
      price: 15000,
      image: "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pack of Beer (6pcs of heineken)",
      desc: "Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol.",
      amount: 6,
    },
    {
      price: 15000,
      image: "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pack of Beer (6pcs of heineken)",
      desc: "Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol.",
      amount: 6,
    },
    {
      price: 15000,
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      name: "Pack of Beer (6pcs of heineken)",
      desc: "Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol.",
      amount: 6,
    },
    {
      price: 15000,
      image: "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pack of Beer (6pcs of heineken)",
      desc: "Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol.",
      amount: 6,
    },
    {
      price: 15000,
      image: "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pack of Beer (6pcs of heineken)",
      desc: "Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol.",
      amount: 6,
    },
    {
      price: 15000,
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      name: "Pack of Beer (6pcs of heineken)",
      desc: "Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol.",
      amount: 6,
    },
    {
      price: 15000,
      image: "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pack of Beer (6pcs of heineken)",
      desc: "Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol.",
      amount: 6,
    },
  ];

  const Emty = ({ dataLength }: EmtyProps) => {
    return (
      <div className="bg-[#1E1E1E] rounded-lg flex flex-col justify-center items-center h-52 min-h-full">
        <div className="mb-4">
          <PlusIcon />
        </div>
        {dataLength ? <div>Add Product</div> : <div>Add New Product</div>}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {listProduct?.map((item, idx) => {
        return <Card key={idx} item={item} />;
      })}
      <Emty dataLength={listProduct.length} />
    </div>
  );
};

export default Product;
