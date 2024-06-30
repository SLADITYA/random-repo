import './body.css';
import { useState } from 'react';

function Search (props) {

    const [searchText, updateSearchText] = useState("");

    function filteredRestaurent ()
    {
        props.searchFunction(searchText);
    }

    return (
        <>
            <div className="search">
                
                {/* <input type="text" onChange={(e) => props.searchFunction(e.target.value)}/> */}

                <input type="text" onChange={(e) => updateSearchText(e.target.value)}/>
                <button onClick={filteredRestaurent}>Search</button>
            </div>
        </>
    )
}

export default Search;