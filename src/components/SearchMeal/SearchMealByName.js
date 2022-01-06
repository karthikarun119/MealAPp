/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from 'react';
import Search from "../Search/Search";
import MealCard from '../MealCard/MealCard';
import './SearchMealByName.css';


const apiURLForSearchMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


const SearchMealByName = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [meals , setMeals]= useState([]);

  const searchMealsByName = async () => {
    const url = apiURLForSearchMeal + searchQuery;
    const res =  await fetch(url);
    const data = await res.json();
    console.log(data.meals);
    setMeals(data.meals);

    }
    useEffect( () =>{
      searchMealsByName();
    },[])
    const handleSubmit = (event) => {
      event.preventDefault();
      searchMealsByName();
    }
  
  return (
    <div className="Container">
     <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSubmit={handleSubmit}
      />
      <div className="meals">
        
        {meals ? meals.map(meal => (
          <MealCard
             key={meal.idMeal}
             meal = {meal}
          />
        )) : "No Results."}
      </div>
    </div>
  );
}

export default SearchMealByName;
