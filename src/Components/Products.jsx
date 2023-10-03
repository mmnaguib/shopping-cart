import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts } from "../app/Slices/ProductSlice";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function Products() {
  const products = useSelector((state) => state.product.filteredProducts);
  const error = useSelector((state) => state.product.error);
  const { type } = useParams();
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();

  return (
    <div className="pt-16">
      <div className="pl-14">
        <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none">
          {type}
        </h1>
      </div>
      <div className="grid grid-cols-4 justify-items-center py-8 gap-12 ">
        {products
          .filter((product) => product.type === type)
          .map((product, index) => {
            return (
              <div key={index} className="">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  price={product.price}
                  colors={product.color}
                ></ProductCard>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Products;
