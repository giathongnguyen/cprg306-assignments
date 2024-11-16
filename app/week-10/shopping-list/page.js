"use client";

import MealIdeas from './meal-ideas.js';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import { useState, useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context.js';
import { getItems, addItem } from '../_services/shopping-list-service.js';

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user } = useUserAuth();

    if (!user) {
        return (
            <main>
                <p>You must be logged in to view this page.</p>
            </main>
        );
    }

    const handleItemSelect = (item) => {
        const cleanedItemName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanedItemName);
    };

    const handleAddItem = async (newItem) => {
        try {
            const itemId = await addItem(user.uid, newItem);
            setItems([...items, { ...newItem, id: itemId }]);
        } catch (error) {
            console.error("Failed to add item:", error);
        }
    };

    const loadItems = async () => {
        try {
            const fetchedItems = await getItems(user.uid);
            setItems(fetchedItems); 
        } catch (error) {
            console.error("Failed to load items:", error);
        }
    };

    useEffect(() => {
        const loadItems = async () => {
            try {
                const fetchedItems = await getItems(user.uid);
                setItems(fetchedItems);
            } catch (error) {
                console.error("Failed to load items:", error);
            }
        };

        loadItems();
    }, [user.uid]);

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

