import Image from "next/image";
import Navbar from "./components/Navbar";
import Addproduct from "./components/Addproduct";
import ShowStock from "./components/ShowStock";
import { getAllProducts } from "./utilities/getAllData";
import CreateStock from "./components/server/createStock";

export default async function Home() {
  return (
    <div>
      <Navbar />

      {/* Displaying current stock */}
      <ShowStock />
      {/* <Addproduct /> */}
      <CreateStock />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold">All Stocks</h1>
        {/* search the stock */}
        <div className="container mx-auto mt-8 flex justify-center flex-col items-center">
          <h1 className="text-2xl font-semibold mb-4">Search the Stocks</h1>
          <div className="flex items-center mb-4">
            <input
              type="text"
              id="stockSearch"
              className="border border-gray-300 rounded px-2 py-1 mr-2"
              placeholder="Search by stock name"
            />
            <select
              id="stockType"
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="">All Types</option>
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="retail">Retail</option>
            </select>
          </div>
        </div>
        {/* Table for displaying all stocks */}
        <table className="mt-4 w-full">
          <thead>
            <tr>
              <th className="py-2 border">Stock Name</th>
              <th className="py-2 border">Price</th>
              <th className="py-2 border">Quantity</th>
              <th className="py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace the following rows with actual stock data */}
            <tr>
              <td className="py-2 border">Stock 1</td>
              <td className="py-2 border">$100</td>
              <td className="py-2 border">10</td>
              <td className="py-2 border">
                <button className="px-2 py-1 bg-indigo-500 text-white rounded">
                  Buy
                </button>
                <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded">
                  Sell
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-2 border">Stock 2</td>
              <td className="py-2 border">$200</td>
              <td className="py-2 border">5</td>
              <td className="py-2 border">
                <button className="px-2 py-1 bg-indigo-500 text-white rounded">
                  Buy
                </button>
                <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded">
                  Sell
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
