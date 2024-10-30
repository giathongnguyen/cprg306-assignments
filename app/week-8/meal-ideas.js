"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient)
        setMeals(mealIdeas)
    }

    useEffect(() => {
        if (ingredient) {            
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h1 className="text-2xl font-bold">Meal Ideas</h1>   
            {meals.length !== 0 && <p>Here are some meal ideas using {ingredient}:</p>}         
            <ul>            
                {meals.map(meal => (
                    <li key={meal.idMeal}>                            
                        <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
                        <p className="font-bold bg-slate-400 mb-2 mt-2">{meal.strMeal}</p>                            
                    </li>
                ))}               
            </ul>
            {meals.length === 0 && <p>No meal ideas found for {ingredient}</p>}
        </div>
    );
}

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error(error);
    }
}
