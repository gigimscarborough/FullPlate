import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class CancelConf extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: "",
            time: new Date(this.props.reservation.reservation_datetime).toTimeString(),
            date: this.props.reservation.reservation_datetime.split("T")[0],
            guest_count: this.props.reservation.guest_count
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }



    restaurants(){

        const qualRests = this.props.restaurants.filter( rest => rest.name !== this.props.restaurant.name)

        const restaurants = qualRests.map(restaurant => (
            <Link key={restaurant.id} id="res-link" to={`/restaurants/${restaurant.id}`}>
            <div className="restaurant-icon">
                {/* <img src={restaurant.photoUrls[0]}></img> */}
                <img src={window.salmonplate}></img>
                <div className="res-info">
                    <h2>{restaurant.name}</h2>
                </div>
                <span className="icn-strs">
                    <i className="fas fa-star ifpst"></i>
                    <i className="fas fa-star ifpst"></i>
                    <i className="fas fa-star ifpst"></i>
                    <i className="fas fa-star ifpst"></i>
                    <i className="fas fa-star-half ifpstr"></i>
                    <i className="fas fa-star-half fpstl"></i>
                    <p>{Math.floor(Math.random() * 75)} reviews</p>
                </span>
                <div>
                    <div className="dols2">
                        <p>{restaurant.cuisine_type} &bull;</p>
                        {restaurant.price_range === "$$" ? <div className="dols-in2"><span>$$</span><span className="g-dol2">$$</span></div> : restaurant.price_range === "$$$" ? <div className="dols-in2"><span>$$$</span><span className="g-dol2">$</span></div> : <div className="dols-in2"><span>$$$$</span></div>}
                        <p id="nei">&bull; {restaurant.neighborhood}</p>
                    </div>
                </div>
            </div>
        </Link>
    ))

    return restaurants
    }
    
    newSearch(){
        const format = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }

        let options = []

        for (let i = 1; i <= 20; i++) {
            options.push(this.props.reservation.guest_count === i ? <option selected key={i} value={i} >{i < 2 ? `${i} person` : `${i} people`}</option> : <option key={i} value={i} >{i < 2 ? `${i} Person` : `${i} People`}</option>)
        }

        let resDate = new Date(this.props.reservation.reservation_datetime)
        resDate = new Date(resDate.getTime() + resDate.getTimezoneOffset() * 60000)
        return(
            <form onSubmit={this.handleSubmit}>
            <div className="mod-res-div2">
            <div className="mod-res-sel2">
                <div className="mod-guest">
                    <select onChange={this.handleChange('guest_count')}>
                        {options}
                    </select>
                    <i className="far fa-user"></i>
                </div>
                <div className="g-bord"></div>
                <div className="mod-date">
                    <input type="date" onChange={this.handleChange('date')} />
                    <div className="mod-date-s">{resDate.toLocaleDateString(undefined, format).split(", ").slice(1).join(", ")}</div>
                </div>
                <div className="g-bord"></div>
                <div className="mod-time">
                    <select onChange={this.handleChange('time')} >
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `12:00 AM` ? < option selected value={`00:00:00`}> 12:00 AM</option > : < option value={`00:00:00`}> 12:00 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `12:30 AM` ? < option selected value={`00:00:30`}> 12:30 AM</option > : < option value={`00:00:30`}> 12:30 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `1:00 AM` ? < option selected value={`01:00:00`}> 1:00 AM</option > : < option value={`01:00:00`}> 1:00 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `1:30 AM` ? < option selected value={`01:30:00`}> 1:30 AM</option > : < option value={`01:30:00`}> 1:30 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `2:00 AM` ? < option selected value={`02:00:00`}> 2:00 AM</option > : < option value={`02:00:00`}> 2:00 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `2:30 AM` ? < option selected value={`02:30:00`}> 2:30 AM</option > : < option value={`02:30:00`}> 2:30 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `3:00 AM` ? < option selected value={`03:00:00`}> 3:00 AM</option > : < option value={`03:00:00`}> 3:00 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `3:30 AM` ? < option selected value={`03:30:00`}> 3:30 AM</option > : < option value={`03:30:00`}> 3:30 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `4:00 AM` ? < option selected value={`04:00:00`}> 4:00 AM</option > : < option value={`04:00:00`}> 4:00 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `4:30 AM` ? < option selected value={`04:30:00`}> 4:30 AM</option > : < option value={`04:30:00`}> 4:30 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `5:00 AM` ? < option selected value={`05:00:00`}> 5:00 AM</option > : < option value={`05:00:00`}> 5:00 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `5:30 AM` ? < option selected value={`05:30:00`}> 5:30 AM</option > : < option value={`05:30:00`}> 5:30 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `6:00 AM` ? < option selected value={`06:00:00`}> 6:00 AM</option > : < option value={`06:00:00`}> 6:00 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `6:30 AM` ? < option selected value={`06:30:00`}> 6:30 AM</option > : < option value={`06:30:00`}> 6:30 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `7:00 AM` ? < option selected value={`07:00:00`}> 7:00 AM</option > : < option value={`07:00:00`}> 7:00 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `7:30 AM` ? < option selected value={`07:30:00`}> 7:30 AM</option > : < option value={`07:30:00`}> 7:30 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `8:00 AM` ? < option selected value={`08:00:00`}> 8:00 AM</option > : < option value={`08:00:00`}> 8:00 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `8:30 AM` ? < option selected value={`08:30:00`}> 8:30 AM</option > : < option value={`08:30:00`}> 8:30 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `9:00 AM` ? < option selected value={`09:00:00`}> 9:00 AM</option > : < option value={`09:00:00`}> 9:00 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `9:30 AM` ? < option selected value={`09:30:00`}> 9:30 AM</option > : < option value={`09:30:00`}> 9:30 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `10:00 AM` ? < option selected value={`10:00:00`}> 10:00 AM</option > : < option value={`10:00:00`}> 10:00 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `10:30 AM` ? < option selected value={`10:30:00`}> 10:30 AM</option > : < option value={`10:30:00`}> 10:30 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `11:00 AM` ? < option selected value={`11:00:00`}> 11:00 AM</option > : < option value={`11:00:00`}> 11:00 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `11:30 AM` ? < option selected value={`11:30:00`}> 11:30 AM</option > : < option value={`11:30:00`}> 11:30 AM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `12:00 PM` ? < option selected value={`12:00:00`}> 12:00 PM</option > : < option value={`12:00:00`}> 12:00 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `12:30 PM` ? < option selected value={`12:30:00`}> 12:30 PM</option > : < option value={`12:30:00`}> 12:30 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `1:00 PM` ? < option selected value={`13:00:00`}> 1:00 PM</option > : < option value={`13:00:00`}> 1:00 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `1:30 PM` ? < option selected value={`13:30:00`}> 1:30 PM</option > : < option value={`13:30:00`}> 1:30 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `2:00 PM` ? < option selected value={`14:00:00`}> 2:00 PM</option > : < option value={`14:00:00`}> 2:00 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `2:30 PM` ? < option selected value={`14:30:00`}> 2:30 PM</option > : < option value={`14:30:00`}> 2:30 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `3:00 PM` ? < option selected value={`15:00:00`}> 3:00 PM</option > : < option value={`15:00:00`}> 3:00 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `3:30 PM` ? < option selected value={`15:30:00`}> 3:30 PM</option > : < option value={`15:30:00`}> 3:30 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `4:00 PM` ? < option selected value={`16:00:00`}> 4:00 PM</option > : < option value={`16:00:00`}> 4:00 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `4:30 PM` ? < option selected value={`16:30:00`}> 4:30 PM</option > : < option value={`16:30:00`}> 4:30 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `5:00 PM` ? < option selected value={`17:00:00`}> 5:00 PM</option > : < option value={`17:00:00`}> 5:00 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `5:30 PM` ? < option selected value={`17:30:00`}> 5:30 PM</option > : < option value={`17:30:00`}> 5:30 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `6:00 PM` ? < option selected value={`18:00:00`}> 6:00 PM</option > : < option value={`18:00:00`}> 6:00 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `6:30 PM` ? < option selected value={`18:30:00`}> 6:30 PM</option > : < option value={`18:30:00`}> 6:30 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `7:00 PM` ? < option selected value={`19:00:00`}> 7:00 PM</option > : < option value={`19:00:00`}> 7:00 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `7:30 PM` ? < option selected value={`19:30:00`}> 7:30 PM</option > : < option value={`19:30:00`}> 7:30 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `8:00 PM` ? < option selected value={`20:00:00`}> 8:00 PM</option > : < option value={`20:00:00`}> 8:00 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `8:30 PM` ? < option selected value={`20:30:00`}> 8:30 PM</option > : < option value={`20:30:00`}> 8:30 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `9:00 PM` ? < option selected value={`21:00:00`}> 9:00 PM</option > : < option value={`21:00:00`}> 9:00 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `9:30 PM` ? < option selected value={`21:30:00`}> 9:30 PM</option > : < option value={`21:30:00`}> 9:30 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `10:00 PM` ? < option selected value={`22:00:00`}> 10:00 PM</option > : < option value={`22:00:00`}> 10:00 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `10:30 PM` ? < option selected value={`22:30:00`}> 10:30 PM</option > : < option value={`22:30:00`}> 10:30 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `11:00 PM` ? < option selected value={`23:00:00`}> 11:00 PM</option > : < option value={`23:00:00`}> 11:00 PM</option >}
                        {`${resDate.toLocaleTimeString().split(":").slice(0, 2).join(":")} ${resDate.toLocaleTimeString().split(" ").slice(1)}` === `11:30 PM` ? < option selected value={`23:30:00`}> 11:30 PM</option > : < option value={`23:30:00`}> 11:30 PM</option >}
                    </select>
                    <i className="far fa-clock"></i>
                </div>
            </div>
                    <div className="cncl-search-bar" >
                        <img src={window.search_icon} />
                        <input type="text" placeholder="Location or Restaurant" onChange={this.handleChange('keyword')} />
                    </div>
            <button>Let's go</button>
        </div>
        </form>
        )
    } 
    
    handleChange(type) {
        return (e) => (
            this.setState({ [type]: e.currentTarget.value })
        )

    }

    handleSubmit(e) {

        e.preventDefault()
        this.props.sendForm(this.state)
        // this.props.searchRestaurants(this.state.keyword)
        this.props.history.push("/search")
    }
    render() {
    
        const format = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }


        // if (this.props.restaurants.length <= 0) {
      
            return (
                <div className="cncld-body">
                    <div className="cncld-main">
                        <span className="cncld-head">{this.props.currentUser.first_name}, your reservation has been canceled</span>
                        <span className="cncld-txt">You can still get great food and support {this.props.restaurant.name}.</span>
                        <div className="cncld-takeout">
                            <div>
                                <span><img src={window.resticon}></img> <p>Order takeout</p></span>
                                <p>Call {this.props.restaurant.phone_number} to place your order.</p>
                            </div>
                            <div>

                            <a href={this.props.restaurant.website_url}>Visit restaurant website</a>
                            </div>
                        </div>
                        <div className="cncl-del">
                            <h2>Get it delivered</h2>
                            <div className="cncl-list" >
                                {this.restaurants().slice(1, 5)}
                            </div>
                        </div>
                        <div className="cncl-new">
                            <h2>Make a new reservation</h2>
                            {this.newSearch()}
                        </div>
                    </div>
                </div>
            )
        
    }
}
// export default CancelConf

const mSTP = (state, ownProps) => {

    return {

    }
}

const mDTP = (dispatch) => ({

})

export default withRouter(connect(mSTP, mDTP)(CancelConf))