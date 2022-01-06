import React from "react";
import { useState, useEffect } from "react";
import "./MealCategory.css";
import CategoryCard from "./CategoryCard/CategoryCard";

const apiURLForListAllMealCategory =
  "https://www.themealdb.com/api/json/v1/1/categories.php";

const MealCategory = () => {
  const [categories, setCategories] = useState([]);
  const listAllMealCategory = async () => {
    const url = apiURLForListAllMealCategory;
    const res = await fetch(url);
    const data = await res.json();
    setCategories(data.categories);
    console.log(data.categories);
  };
  useEffect(() => {
    listAllMealCategory();
  }, []);
  return (
    <div className="container">
      <div className="category">
        {categories
          ? categories.map((category) => (
              <CategoryCard key={category.idCategory} category={category} />
            ))
          : "No Results."}
      </div>
    </div>
  );
};
export default MealCategory;
