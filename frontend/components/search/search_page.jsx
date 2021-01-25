import React from 'react'
import SplashNavBar from '../navbar/splash_navbar'
import SearchPageNav from './search_page_nav'

class SearchPage extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.searchRestaurants(this.props.search.keyword)
    }

    render(){
        const restaurants = this.props.restaurants.map(restaurant => restaurant.name)

        return(
            <div>
                <SplashNavBar/>
                <SearchPageNav sendForm={this.props.sendForm} searchRestaurants={this.props.searchRestaurants} currentUser={this.props.currentUser}/>
            
                <h1>
                    {restaurants}
                </h1>

            </div>
        )
    }
}

export default SearchPage

