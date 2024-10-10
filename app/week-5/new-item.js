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
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setCategory("produce");
        setQuantity(1);
    }

    return (
        <form className="bg-slate-500" onSubmit={handleSubmit}>
            <div>
                <input className="bg-black text-white p-2 rounded-md m-4" type="text" placeholder="Item Name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <select className="bg-black text-white p-2 rounded-md m-4" value={category} onChange={(event) => setCategory(event.target.value)}>
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
            <div className="flex justify-between items-center m-4 p-2 h-10 w-36 bg-white">
                <p className="text-black">{quantity}</p>
                <div>
                    <button className="mr-1 w-8 bg-blue-600 rounded-md hover:bg-blue-300 font-bold disabled:bg-gray-400 active:bg-yellow-300" onClick={() => decrement(quantity, setQuantity)} disabled={quantity <= 1}>-</button>
                    <button className="w-8 bg-blue-600 rounded-md hover:bg-blue-300 font-bold disabled:bg-gray-400 active:bg-yellow-300" onClick={() => increment(quantity, setQuantity)} disabled={quantity >= 20}>+</button>
                </div>
            </div>
            <button type="submit">Add Item</button>
        </form>

    );
}

