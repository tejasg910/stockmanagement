"use client";

import React, { useState } from "react";

const Addproduct = ({}) => {
  const [stock, setStock] = useState({
    name: "",
    quantity: 0,
    price: 0,
  });

  const [key, setKey] = useState(null);

  const onChangeHanler = (e) => {
    let { name, value } = e.target;

    setStock({
      ...stock,
      [name]: value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setStock({
      ...stock,
      quantity: parseInt(stock.quantity),
      price: parseInt(stock.price),
    });

    //add to the database
  };
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Add a Stock</h1>
      {/* Add stock form */}
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <div className="flex items-center mb-4">
          <label htmlFor="stockName" className="mr-2">
            Stock Name:
          </label>
          <input
            required
            name="name"
            type="text"
            id="stockName"
            value={stock.slug}
            onChange={onChangeHanler}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="stockPrice" className="mr-2">
            Stock Price:
          </label>
          <input
            required
            name="price"
            value={stock.price}
            onChange={onChangeHanler}
            type="text"
            id="stockPrice"
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="stockQuantity" className="mr-2">
            Stock Quantity:
          </label>
          <input
            required
            name="quantity"
            value={stock.quantity}
            onChange={onChangeHanler}
            type="number"
            id="stockQuantity"
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded">
          Add Stock
        </button>
      </form>
    </div>
  );
};

export default Addproduct;
