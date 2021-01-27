import React from 'react'
import MainNavBar from '../navbar/main_navbar'
import ClickUserUpcomingDropdown from '../navbar/click_greeting_dropdown'
import ClickGreetingDropdown from '../navbar/click_greeting_dropdown'
import {Link} from 'react-router-dom'


class ReservationForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    render() {

        const restaurant = this.props.restaurant;
        if (typeof restaurant === "undefined") {
      
            return null;

        }


        return (
            <div>
                <MainNavBar />
                <div className="logo-nav">
                    <div className='logo-div'>
                        <Link className="logo" to="/"><img src={window.logo} /></Link>
                    </div>
                    <ul className="user-link-list">
                        <ClickUserUpcomingDropdown />
                        <ClickGreetingDropdown logout={this.props.logout} currentUser={this.props.currentUser} />
                        <li onClick={() => this.props.openModal('search')} className="search-icon rsearch"><img src={window.search_icon} /></li>
                    </ul>
                </div>
                <div className="res-loc-nav">
                    <Link to="/">Home</Link>
                    <div className="arrow"></div>
                    <p>United States</p>
                    <div className="arrow"></div>
                    <p>{this.props.restaurant.city}</p>
                </div>
            </div>
        )
    }
}

export default ReservationForm