import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

function BestSeller() {
    const {products} =useAppContext();
    console.log("sellser producrts",products);
    
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>

      <div>
        <ProductCard product={products[0]} />
      </div> 
    </div>
  );
}

export default BestSeller;
