import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { sendForm } from '../../actions/search_actions'
import { searchRestaurants } from '../../actions/restaurant_actions'
import { withRouter } from 'react-router-dom'


class SearchPageNav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: "",
            date: "",
            time: "",
            guestCount: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(type) {
        return (e) => (
            this.setState({ [type]: e.currentTarget.value })
        )

    }

    handleSubmit(e) {

        e.preventDefault()
        this.props.sendForm(this.state)
        this.props.searchRestaurants(this.state.search)
        // this.props.history.push("/search")
    }


    render() {

        const dateToday = new Date()
        const hours = dateToday.getHours() < 10 ? `0${dateToday.getHours()}` : dateToday.getHours()
        const minutes = dateToday.getMinutes() < 10 ? `0${dateToday.getMinutes()}` : dateToday.getMinutes()
        const month = dateToday.getMonth() < 10 ? `0${dateToday.getMonth() + 1}` : dateToday.getMonth() + 1
        const date = dateToday.getDate() < 10 ? `0${dateToday.getDate()}` : dateToday.getDate()
        const year = dateToday.getFullYear()

        let options = []

        for (let i = 1; i <= 20; i++) {
            options.push(<option key={i} value={1} >{i < 2 ? `${i} Person` : `${i} People`}</option>)
        }

        debugger

        return (
            <div>
                <div className="res-loc-nav">
                    <Link to="/">Home</Link>
                    <div className="arrow"></div>
                    <p>United States</p>
                    <div className=""></div>
                    <p>{!this.props.currentUser ? "test" : this.props.currentUser.dining_city}</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                <div className="search-page-nav">
                    <div id="sp-form">
                            <input className="sp-input" type="date" defaultValue={`${year}-${month}-${date}`} onChange={this.handleChange('date')} />
                            <input className="sp-input" type="time" defaultValue={`${hours}:${minutes}`} onChange={this.handleChange('time')}/>
                            <select className="sp-select" onChange={this.handleChange('guestCount')}>
                            {options}
                        </select>
                    </div>
                    <div id="sp-form-div">
                        <div className="sp-search-bar" >
                            <img src={window.search_icon} />
                                <input type="text" placeholder="Location, Restaurant, or Cuisine" onChange={this.handleChange('keyword')}/>
                        </div>
                        <button className="sp-form-btn">Let's Go</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}



const mSTP = (state) => ({

})

const mDTP = (dispatch) => ({
    sendForm: (searchForm) => dispatch(sendForm(searchForm)),
    searchRestaurants: (keyword) => dispatch(searchRestaurants(keyword))
})

export default withRouter(connect(mSTP, mDTP)(SearchPageNav))