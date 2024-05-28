import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/Data";

import "./Products.css";
import ProductsInfo from "./ProductsInfo";

export default function Products() {
  return (
    <div className="products">
      <div className="product-page">
        <h2>Our Products</h2>
        <Link href="/product">See all</Link>
      </div>
      <div className="prods">
        {PRODUCTS.map((item) => (
          <ProductsInfo
             itm={item}
            images={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
