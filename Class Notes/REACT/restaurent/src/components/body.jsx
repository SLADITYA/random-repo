import { restaurentDetails } from "../utils/mockData";
import RestaurentCard from "./restaurentCard";
import Search from "./search";
import TopRatedRestaurents from "./topRated";
import { useState } from "react";
import './body.css';

function Body () {
    
    /**
     * Whenever your state variable changes, your component gets re-rendered
     * Hooks (use) are the special type of functions  
    */

    const [filteredRestaurents, setFilteredRestaurents] = useState(restaurentDetails);

    // share data from child component to parent component
    function searchRestaurent (searchText)
    {
        let searchRestaurents = restaurentDetails.filter(res => res.name.toUpperCase().includes(searchText.toUpperCase()));
        setFilteredRestaurents(searchRestaurents);
    }

    function topRatedRestaurent ()
    {
        let topRatedRestaurents = restaurentDetails.filter(res => res.avgRating > 4);
        setFilteredRestaurents(topRatedRestaurents);
    }

    return (
        <>
            {
                // <RestaurentCard resDetails = {restaurentDetails[0]} />
                // <RestaurentCard resDetails = {restaurentDetails[1]} />
            }
            <div className="filtering-components">
                <Search searchFunction = {searchRestaurent}/>
                <TopRatedRestaurents topRatedFunction = {topRatedRestaurent}/>
            </div>
            <div className="restaurent-container">
            {
                filteredRestaurents.map(res => <RestaurentCard key={res.id} resDetails={res} />)
            }
            </div>
        </>
    )
}

export default Body;
