"use client";
import Link from "next/link";
import { PRODUCTSGEN } from "@/data/Data";
import ProductsInfo from "@/components/Products/ProductsInfo";
import "./ProductPage.css";

export default function ProductPage() {


  return (
    <>
      <div className="products">
        <div className="product-page">
          <h2>Our Products</h2>
          <Link href="/">Go Back</Link>
        </div>
        <div className="prods" >
          {PRODUCTSGEN.map((item, idx) => (
            <ProductsInfo
            itm={item}
              images={item.image}
              title={item.title}
              price={item.price}
              key={idx}
            />
          ))}
        </div>
      </div>
    </>
  );
}
