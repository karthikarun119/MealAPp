import React  from "react";
 import './Search.css';
const Search = ({
    handleSubmit,
    searchQuery,
    setSearchQuery
}) => {
   
    return(
        <form onSubmit={handleSubmit}>
        <input 
            value={searchQuery}
            className="form-control"
            placeholder="Search Meal by Name"
            name="searchQuery"
            onChange={(event) => setSearchQuery(event.target.value)}
        />   
        <input
            type="submit"
            className="btn"
            value="Search"
        />
    </form>
    )
}
export default Search;
