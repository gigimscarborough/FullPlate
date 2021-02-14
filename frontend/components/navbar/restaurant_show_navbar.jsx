import React from 'react';
import { Link } from 'react-router-dom';
import {openModal} from '../../actions/modal_actions';
import MainNavBar from './main_navbar';
import ClickUserUpcomingDropdown from './click_user_upcoming_dropdown';
import ClickGreetingDropdown from './click_greeting_dropdown';


class RestaurantShowNavBar extends React.Component {
    render() {
   
        const first = 0;

        const restaurant = this.props.restaurant;
        if (typeof restaurant === "undefined"){

            return null;
        
        }
        if (this.props.currentUser){

            return (
                <div>
                <MainNavBar />
                <div className="logo-nav">
                    <div className='logo-div'>
                        <Link className="logo" to="/"><img src={window.logo} /></Link>
                            <div className="copy-r">&copy;</div>
                        <div className="logo-border2"></div>
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
                    <div className="arrow"></div>
                    <p>{this.props.restaurant.neighborhood}</p>
                </div>
                <div className="res-nav-div">
                    <img className="res-img-nav" src={this.props.restaurant.photoUrls[first]}/>
                        <button className="res-fav-btn">
                            <i className=" far2 far fa-bookmark"></i>
                            Add To Favorites
                        </button>
                </div>
            </div>
            )

            } else {
                
                return (
                    <div>
                    <MainNavBar />
                    <div className="logo-nav">
                        <div className='logo-div'>
                            <Link className="logo" to="/"><img src={window.logo} /></Link>
                                <div className="copy-r">&copy;</div>
                            <div className="logo-border2"></div>
                        </div>
                        <div className="not-logged-links">
                            <button className="sign-up-btn" onClick={() => this.props.openModal('signup')}> Sign up</button>
                            <button className="log-in-btn" onClick={() => this.props.openModal('login')}> Sign in </button>
                            <Link className="search-icon" to="/"><img src={window.search_icon} /></Link>
                        </div>
                    </div>

                        <div className="res-loc-nav">
                            <Link to="/">Home</Link>
                            <div className="arrow"></div>
                            <p>United States</p>
                            <div className="arrow"></div>
                            <p>{this.props.restaurant.city}</p>
                            <div className="arrow"></div>
                            <p>{this.props.restaurant.neighborhood}</p>
                        </div>
                        <div className="res-nav-div">
                            <img className="res-img-nav" src={this.props.restaurant.photoUrls[first]} />
                            <button className="res-fav-btn">
                                <i className=" far2 far fa-bookmark"></i>
                            Add To Favorites
                        </button>
                        </div>
                </div>
                
            )
        }
    }
}

export default RestaurantShowNavBar