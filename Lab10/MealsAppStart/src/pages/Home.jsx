import Search from "../components/Search";
import Favorites from "../components/Favorites";
import MealCard from "../components/MealCard";
import { useEffect, useState } from "react";

const RANDOM_API = import.meta.env.VITE_RANDOM_MEAL_API;
const MEAL_BYID_API = import.meta.env.VITE_MEAL_BYID_API;
const SEARCH_API = import.meta.env.VITE_SEARCH_MEAL_API;


const Home = () => {
  const [randomMeals, setRandomMeals] = useState([]);
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  useEffect(() => {
    loadRandomMeals();
  }, []);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteMeals")) || [];
    setFavoriteMeals(storedFavorites);
    setFavoriteMealIds(storedFavorites.map(meal => meal.idMeal));
  }, []);

  const getMealById = async (id) => {
    const res = await fetch(MEAL_BYID_API + id);
    const data = await res.json();
    let meal = data.meals[0];

    return meal;
  }

  const searchForMeal = async (searchKey) => {
    const res = await fetch(SEARCH_API + searchKey);
    const data = await res.json();
    let meal = data.meals[0];

    return meal;
  }

  const loadRandomMeals = async (count = 5) => {
    const fetches = Array(count).fill().map(() =>
      fetch(RANDOM_API).then(res => res.json())
    );
    const results = await Promise.all(fetches);
    const meals = results
      .map(res => res.meals?.[0])
      .filter(Boolean);
  
    setRandomMeals(meals);
  };

  const toggleFavorite = async (id) => {
    console.log(id);
    if (favoriteMealIds.includes(id)) {
      // Remove from favorites
      const updatedFavorites = favoriteMeals.filter(meal => meal.idMeal !== id);
      setFavoriteMeals(updatedFavorites);
      setFavoriteMealIds(updatedFavorites.map(meal => meal.idMeal));
      localStorage.setItem("favoriteMeals", JSON.stringify(updatedFavorites));
    } else {
      const meal = await getMealById(id);
      const updatedFavorites = [...favoriteMeals, meal];
      setFavoriteMeals(updatedFavorites);
      setFavoriteMealIds(updatedFavorites.map(meal => meal.idMeal));
      localStorage.setItem("favoriteMeals", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="store">
      <Search/>
      
      <Favorites
        favoriteMeals={favoriteMeals}
        toggleFavorite={toggleFavorite}
      />

      <div className="meals" id="meals">
        {randomMeals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            mealData={meal}
            isFavorite={favoriteMealIds.includes(meal.idMeal)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
