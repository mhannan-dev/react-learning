import React from "react";
import ProductSingle from "./ProductSingle";

const Products = () => {
  const productsArr = [
    { id: 1, title: "Product 1", imageUrl: "https://dummyimage.com/640x360/fff/aaa", desc: "Product description", price: 100 },
    { id: 2, title: "Product 2", imageUrl: "https://baconmockup.com/640/360", desc: "Product description", price: 200 },
    { id: 3, title: "Product 3", imageUrl: "https://fakeimg.pl/640x360", desc: "Product description", price: 300 },
    { id: 4, title: "Product 4", imageUrl: "https://dummyimage.com/640x360/fff/aaa", desc: "Product description", price: 400 },
    { id: 5, title: "Product 5", imageUrl: "https://baconmockup.com/640/360", desc: "Product description", price: 500 },
    { id: 6, title: "Product 6", imageUrl: "https://fakeimg.pl/640x360", desc: "Product description", price: 500 },
    { id: 7, title: "Product 7", imageUrl: "https://dummyimage.com/640x360/fff/aaa", desc: "Product description", price: 580 },
    { id: 8, title: "Product 8", imageUrl: "https://baconmockup.com/640/360", desc: "Product description", price: 150 },
    { id: 9, title: "Product 9", imageUrl: "https://fakeimg.pl/640x360", desc: "Product description", price: 115 },
    { id: 10, title: "Product 10", imageUrl: "https://dummyimage.com/640x360/fff/aaa", desc: "Product description", price: 144 },
    { id: 11, title: "Product 11", imageUrl: "https://baconmockup.com/640/360", desc: "Product description", price: 166 },
    { id: 12, title: "Product 12", imageUrl: "https://fakeimg.pl/640x360", desc: "Product description", price: 100 }
  ];

  return (
    <div className="row text-center py-3">
      {productsArr.map((product, index) => (
        <ProductSingle key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
