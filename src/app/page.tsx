"use client";

import { useState } from "react";
import DownloadIcon from "./assets/svg/download";
import ProductIcon from "./assets/svg/product";
import Button from "./ui/button";
import FilterCategory from "./ui/filter-category";
import Footer from "./ui/footer";
import Layout from "./ui/layout";
import Modal from "./ui/modal";
import Product from "./ui/product";
import Search from "./ui/search";
import ModalForm from "./ui/modal-form";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col">
      <Layout
        header={{
          backBtn: true,
          title: (
            <div className="flex justify-center items-center">
              <div className="px-3 justify-center items-center">
                <ProductIcon width={25} height={25} />
              </div>
              <div className="text-2xl">Product list</div>
            </div>
          ),
        }}
      >
        <div className="flex justify-between ">
          <Search />
          <Button prefix={<DownloadIcon />} onClick={() => setIsModalOpen(true)}>
            Import
          </Button>
        </div>
        <div>
          <FilterCategory />
        </div>
        <div>
          <Product />
        </div>
      </Layout>
      <Footer />
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add menu"></ModalForm>
    </main>
  );
}
