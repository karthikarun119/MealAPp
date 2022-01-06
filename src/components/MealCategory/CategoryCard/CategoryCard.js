import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  const { idCategory, strCategory, strCategoryThumb } =
    category;
  return (
    <div className="card">
      <img src={strCategoryThumb} alt={strCategory} className="card-image" />
      <div className="card-body">
        <span className="category">
          {idCategory}:{strCategory}
        </span>
      </div>
    </div>
  );
};
export default CategoryCard;
