import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import MainNavBar from '../navbar/main_navbar'
import ClickUserUpcomingDropdown from '../navbar/click_user_upcoming_dropdown'
import ClickGreetingDropdown from '../navbar/click_greeting_dropdown'

class ReviewConf extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchRestaurants()
    }

    navBar(){
        return (
            <div>
                <MainNavBar />
                <div className="logo-nav">
                    <div className='logo-div'>
                        <Link className="logo" to="/"><img src={window.logo} /></Link>
                        <div className="copy-r">&copy;</div>
                    </div>
                    <ul className="user-link-list">
                        <ClickUserUpcomingDropdown />
                        <ClickGreetingDropdown logout={this.props.logout} currentUser={this.props.currentUser} />
                    </ul>
                </div>
            </div>
        )
    }

    render(){
        return (
            <div>
                {this.navBar()}
                <div className=>

                </div>
            </div>
        )
    }
}



const mSTP = (state, ownProps) => {

    return {
        restaurants: state.entities.restaurants,
        currentUser: state.entities.users[state.session.id],

    }
}


const mDTP = (dispatch) => ({
    // fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(mSTP, mDTP)(ReviewConf) 

