import { createStock } from "@/app/actions/addStock";

const CreateStock = ({}) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Add a Stock</h1>
      {/* Add stock form */}
      <form action={createStock}>
        <div className="flex items-center mb-4">
          <label htmlFor="stockName" className="mr-2">
            Stock Name:
          </label>
          <input
            required
            name="name"
            type="text"
            id="stockName"
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

export default CreateStock;
