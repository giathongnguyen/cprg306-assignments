"use client";

import MealIdeas from './meal-ideas.js';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemData from './items.json';
import { useState } from 'react';

export default function Page() {
    const [items, setItems] = useState(itemData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleItemSelect = (item) => {
        const cleanedItemName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanedItemName);
    };

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return (
        <main className="m-3">
            <h1 className="text-3xl font-bold m-3">Shopping List</h1>
            <div className="flex">
                <div>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                    <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}