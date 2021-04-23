import React from 'react';

const SearchForm = () => {
    return(
        <div id="splash-search-div">
            <div className="splash-search-bar" >
                <img src={window.search_icon} />
                <input type="text" placeholder="Location, Restaurant, or Cuisine"/>
            </div>
        <button className="search-form-btn">Let's Go</button>
        </div>
    );
}


export default SearchForm;