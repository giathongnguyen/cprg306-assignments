"use client";
import { useState } from "react";

export default function NewItem() {
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

    return (
        <div className="flex justify-between items-center m-4 p-2 h-10 w-36 bg-white">
            <p className="text-black">{quantity}</p>
            <div>
                <button className="mr-1 w-8 bg-blue-600 rounded-md hover:bg-blue-300 font-bold disabled:bg-gray-400 active:bg-yellow-300" onClick={() => decrement(quantity, setQuantity)} disabled={quantity <= 1}>-</button>
                <button className="w-8 bg-blue-600 rounded-md hover:bg-blue-300 font-bold disabled:bg-gray-400 active:bg-yellow-300" onClick={() => increment(quantity, setQuantity)} disabled={quantity >= 20}>+</button>
            </div>
        </div>
    );
}