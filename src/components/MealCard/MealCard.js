import React  from "react";
import './MealCard.css';
 
const MealCard = ({meal}) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = meal;
    return(
        <div className="card">
        <img
            src={strMealThumb}
            alt={strMeal}
            className="card-image"
        />
        <div className="card-body">
            
            <span className="category">Category:{strCategory}</span>
            <h3>{strMeal}</h3>
            <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Instructions</a>
        </div>
    </div>
    )
}
export default MealCard;
