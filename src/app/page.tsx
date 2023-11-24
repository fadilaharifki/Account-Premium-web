"use client";

import DownloadIcon from "./assets/svg/download";
import ProductIcon from "./assets/svg/product";
import Button from "./ui/button";
import FilterCategory from "./ui/filter-category";
import Footer from "./ui/footer";
import Layout from "./ui/layout";
import Product from "./ui/product";
import Search from "./ui/search";

export default function Home() {
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
          <Button prefix={<DownloadIcon />}>Import</Button>
        </div>
        <div>
          <FilterCategory />
        </div>
        <div>
          <Product />
        </div>
      </Layout>
      <Footer />
    </main>
  );
}
