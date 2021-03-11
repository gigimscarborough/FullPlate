import React from 'react';
import { Link } from 'react-router-dom';
import {openModal} from '../../actions/modal_actions';
import MainNavBar from './main_navbar';
import AltClickUserUpcomingDropdown from './alt_click_user_upcoming_dropdown';
import AltClickGreetingDropdown from './alt_click_greeting_dropdown';


class RestaurantShowNavBar extends React.Component {

    constructor(props) {
        super(props)

        this.handleFav = this.handleFav.bind(this)
    }

    bookmark(){

        const favs = Object.values(this.props.currentUser.favorites).filter(favorite => favorite.restaurant_id === this.props.restaurant.id)[0]
   
        if (!favs){
            return(
                <button onClick={() => this.props.createFavorite({ user_id: this.props.currentUser.id, restaurant_id: this.props.restaurant.id }).then(() => this.props.fetchUser(this.props.currentUser.id))} className="res-fav-btn">
                    <i className=" far2 far fa-bookmark"></i>
                            Add To Favorites
                </button>
            )
        } else{
            return (
                <button onClick={() => this.props.deleteFavorite(favs.id).then(() => this.props.fetchUser(this.props.currentUser.id))} className="res-fav-btn">
                    <i className="fas2 fas fa-bookmark"></i>
                            Restaurant saved!
                </button>
            )
        }

    }

    handleFav(e){
        e.preventDefault()

        const favs = this.props.currentUser.favorites.filter(favorite => favorite.restaurant_id === this.props.restaurant.id)[0]

        if (!favs){
            this.props.createFavorite({ user_id: this.props.currentUser.id, restaurant_id: this.props.restaurant.id})
                .then(() => this.props.fetchUser(this.props.currentUser.id))
        } else{
            this.props.deleteFavorite(favs.id)
                .then(() => this.props.fetchUser(this.props.currentUser.id))
        }
    }

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
                        <AltClickUserUpcomingDropdown />
                        <AltClickGreetingDropdown logout={this.props.logout} currentUser={this.props.currentUser} />
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
                    {/* <img className="res-img-nav" src={window.salmonplate}/> */}
                        {/* <button className="res-fav-btn">
                            <i className=" far2 far fa-bookmark"></i>
                            Add To Favorites
                        </button> */}
                        {this.bookmark()}
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
                            {/* <img className="res-img-nav" src={window.salmonplate} /> */}
                            {/* <button className="res-fav-btn">
                                <i className=" far2 far fa-bookmark"></i>
                            Add To Favorites
                        </button> */}
                        {/* {this.bookmark()} */}
                        </div>
                </div>
                
            )
        }
    }
}

export default RestaurantShowNavBar