"use client";
"use name";
"use category";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);

  function increment(quantity, setQuantity) {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement(quantity, setQuantity) {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let item = { name, category, quantity };
    console.log(item);
    alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setCategory("produce");
    setQuantity(1);
  }

return (
    <form className="bg-slate-500 p-2 m-4" onSubmit={handleSubmit}>
        <div>
            <input
                className="bg-white text-black p-2 rounded-md w-full mb-4"
                type="text"
                placeholder="Item name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />
        </div>
        <div className="flex items-center h-10 mb-4 w-full">
            <div className="flex justify-between items-center mr-20 p-2 h-10 w-36 bg-white rounded-md">
                <p className="text-black mr-2">{quantity}</p>
                <div>
                    <button
                            className="mr-1 w-8 bg-blue-600 rounded-md hover:bg-blue-300 font-bold disabled:bg-gray-400 active:bg-yellow-300"
                            type="button"
                            onClick={() => decrement(quantity, setQuantity)}
                            disabled={quantity <= 1}
                    >
                            -
                    </button>
                    <button
                            className="w-8 bg-blue-600 rounded-md hover:bg-blue-300 font-bold disabled:bg-gray-400 active:bg-yellow-300"
                            type="button"
                            onClick={() => increment(quantity, setQuantity)}
                            disabled={quantity >= 20}
                    >
                            +
                    </button>
                </div>
            </div>
            <div>
                <select
                    className="bg-white text-black p-2 rounded-md h-12 w-36"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    name="Category"
                >
                    <option value="" disabled>Category</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen</option>
                    <option value="canned">Canned</option>
                    <option value="dry">Dry</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </div>
        <div className="flex justify-center">
            <button className="font-bold w-full h-10 bg-blue-600 rounded-md" type="submit">
                +
            </button>
        </div>
    </form>
);
}
