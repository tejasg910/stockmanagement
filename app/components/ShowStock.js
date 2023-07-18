"use client";

import React, { useEffect, useState } from "react";
import { getAllProducts } from "../utilities/getAllData";

const ShowStock = ({}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      //its hightly not recomanded
      //should fetch the data in the server components
      try {
        const res = await fetch("http://localhost:3000/api/product");
        const data = await res.json();
        console.log(data);
        setProducts(data.allProducts);
      } catch (error) {
        console.log("thisis file ");
        console.log(error);
      }
    }
    getProducts();
  }, []);
  return (
    <div className="container mx-auto bg-indigo-100 p-4">
      <h2 className="text-xl font-semibold">Current Stock</h2>
      {/* Table for displaying stock */}
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th className="py-2 border text-left">Stock Name</th>
            <th className="py-2 border text-left">Price</th>
            <th className="py-2 border text-left">Quantity</th>
            <th className="py-2 border text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace the following rows with actual stock data */}

          {products &&
            products.map((item, index) => {
              return (
                <tr>
                  <td className="py-2 border ">{item.name}</td>
                  <td className="py-2 border">Rs. {item.price}</td>
                  <td className="py-2 border">{item.quantity}</td>
                  <td className="py-2 border">
                    <button className="px-2 py-1 bg-indigo-500 text-white rounded">
                      Buy
                    </button>
                    <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded">
                      Sell
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowStock;

export async function getServerSideProps() {
  // Fetch stock data using your API function
  const stocks = await getAllProducts();

  // Pass the fetched data as props to the component
  return {
    props: {
      stocks,
    },
  };
}
