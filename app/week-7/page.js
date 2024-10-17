"use client";

import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemData from './items.json';
import { useState } from 'react';

export default function Page() {
    const [items, setItems] = useState(itemData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return (
        <main className="m-3">
            <h1 className="text-3xl font-bold m-3">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}