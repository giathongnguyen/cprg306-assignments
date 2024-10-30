"use client";

import Item from "./item.js";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");
    const sortedItems = [...items];

    if (sortBy === "name") {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === "category") {
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
        <div>
            <div className="flex gap-2">
                <p>Sort by:</p>
                <button className="mr-1 h-8 w-32 bg-blue-600 hover:bg-blue-300 font-bold focus:bg-yellow-300" onClick={() => setSortBy("name")}>Name</button>
                <button className="mr-1 h-8 w-32 bg-blue-600 hover:bg-blue-300 font-bold focus:bg-yellow-300" onClick={() => setSortBy("category")}>Category</button>
            </div>
            <ul>
                {sortedItems.map((item) => (
                    <Item 
                        key={item.name} 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} 
                        onSelect={() => onItemSelect(item)} 
                    />
                ))}
            </ul>
        </div>
    );
}
