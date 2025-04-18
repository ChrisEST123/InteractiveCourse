import Search from "../components/Search";
import Favorites from "../components/Favorites";
import MealCard from "../components/MealCard";
import { useEffect, useState } from "react";

const RANDOM_API = import.meta.env.VITE_RANDOM_MEAL_API;
const MEAL_BYID_API = import.meta.env.VITE_MEAL_BYID_API;
const SEARCH_API = import.meta.env.VITE_SEARCH_MEAL_API;


const Home = () => {
  const [randomMeal, setRandomMeal] = useState(null);
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  useEffect(() => {
    loadRandomMeal();
  }, []);

  const getMealById = async (id) => {
    const res = await fetch(MEAL_BYID_API + id);
    const data = await res.json();
    let meal = data.meals[0];

    return meal;
  }

  const loadRandomMeal = async () => {
    const res = await fetch(RANDOM_API);
    const data = await res.json();
    let meal = data.meals[0];

    setRandomMeal(meal);
  }

  const loadRandomMeal = async () => {
    const res = await fetch(RANDOM_API);
    const data = await res.json();
    let meal = data.meals[0];

    setRandomMeal(meal);
  }
  return (
    <div className="store">
    <Search/>
    
    <Favorites />
    
    <div className="meals" id="meals">
      {randomMeal && (
        <MealCard
          mealData={randomMeal}
          isRandom={true}
        />
      )}
    </div>
    
  </div>
  )
}

export default Home
