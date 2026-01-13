import { useState } from "react";
import "./FilterSidebar.css";

export default function FilterSidebar() {
  const [category, setCategory] = useState("ALL");
  const [brand, setBrand] = useState("ALL");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999);

  const categories = ["ALL", "MOBILE", "HEADPHONE", "LAPTOP", "TV"];

  const resetFilters = () => {
    setCategory("ALL");
    setBrand("ALL");
    setMinPrice(0);
    setMaxPrice(999999);
  };

  return (
    <aside className="w-72 bg-gray-50 p-4 rounded-lg shadow">
      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full mb-6 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      {/* Category */}
      <h3 className="font-semibold mb-3">Category</h3>
      <div className="space-y-2 mb-6">
        {categories.map((item) => (
          <label
            key={item}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="category"
              value={item}
              checked={category === item}
              onChange={() => setCategory(item)}
              className="accent-pink-600"
            />
            <span>{item}</span>
          </label>
        ))}
      </div>

      {/* Brand */}
      <h3 className="font-semibold mb-3">Brand</h3>
      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="w-full mb-6 px-3 py-2 border rounded-md"
      >
        <option value="ALL">ALL</option>
        <option value="APPLE">APPLE</option>
        <option value="SAMSUNG">SAMSUNG</option>
        <option value="SONY">SONY</option>
      </select>

      {/* Price Range */}
      <h3 className="font-semibold mb-2">Price Range</h3>
      <p className="text-sm mb-3">
        Price Range: ₹{minPrice} - ₹{maxPrice}
      </p>

      <div className="flex gap-2 mb-3">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-1/2 px-2 py-1 border rounded-md"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-1/2 px-2 py-1 border rounded-md"
        />
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="999999"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="w-full accent-pink-600 mb-6"
      />

      {/* Reset Button */}
      <button
        onClick={resetFilters}
        className="w-full py-2 bg-pink-700 text-white rounded-md font-medium hover:bg-pink-800"
      >
        Reset Filters
      </button>
    </aside>
  );
}
