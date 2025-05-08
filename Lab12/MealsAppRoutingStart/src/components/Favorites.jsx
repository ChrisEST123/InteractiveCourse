import { useNavigate } from 'react-router-dom';

const Favorites = ({favoriteMeals, removeFavorite}) => {
  const navigate = useNavigate();

  const handleClick = (meal) => {
    navigate(`/meal/${meal.idMeal}`);
  };

  return (
    <div className="favorites-section">
      <h3>Favorites</h3>
      <ul className="favorites">
        {favoriteMeals.map(meal => (
          <li key={meal.idMeal}>
            <img 
              id="fav-img" 
              src={meal.strMealThumb} 
              alt={meal.strMeal}
              onClick={() => handleClick(meal)}
            />
            <span>{meal.strMeal}</span>
            <button className="clear" onClick={() => removeFavorite(meal.idMeal)}>
              <i className="fas fa-window-close"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favorites
