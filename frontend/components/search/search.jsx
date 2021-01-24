import React from 'react'
import ReservationSearchForm from './reservation_form'
import SearchForm from './search_form'

class Search extends React.Component{
    render(){
        return(
            <div className="background-img">
            <div className="search-header">
                <h1>Find the perfect plate for any occasion</h1>
            </div>
                <ReservationSearchForm/>
                <SearchForm/>
            </div>
        )
    }
}
export default Search