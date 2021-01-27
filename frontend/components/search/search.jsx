import React from 'react'
import ReservationSearchForm from './reservation_search_form'
import SearchForm from './search_form'
import {connect} from 'react-redux'
import { sendForm } from '../../actions/search_actions'
import { searchRestaurants } from '../../actions/restaurant_actions'
import { withRouter } from 'react-router-dom'

class Search extends React.Component {

    constructor(props){
        super(props)

        this.state ={
            keyword: "",
            date: "",
            time: "",
            guest_count: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(type){
        return (e) => (
            this.setState({[type]: e.currentTarget.value})
        )
        
    }

    handleSubmit(e){

        e.preventDefault()
        this.props.sendForm(this.state)
        this.props.searchRestaurants(this.state.keyword)
        this.props.history.push("/search")
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

        return (
            <form onSubmit={this.handleSubmit} >
                <div className="background-img">
                    <div className="search-header">
                        <h1>Find the perfect plate for any occasion</h1>
                    </div>
                    <div id="splash-search-form">
                        <input className="splash-search-input" type="date" defaultValue={`${year}-${month}-${date}`} onChange={this.handleChange('date')}/>
                        <input className="splash-search-input" type="time" defaultValue={`${hours}:${minutes}`} onChange={this.handleChange('time')}/>
                        <select className="splash-search-select" onChange={this.handleChange('guest_count')}>
                            {options}
                        </select>
                    </div>
                    <div id="splash-search-div">
                        <div className="splash-search-bar" >
                            <img src={window.search_icon} />
                            <input type="text" placeholder="Location, Restaurant, or Cuisine" onChange={this.handleChange('keyword')}/>
                        </div>
                        <button className="search-form-btn">Let's Go</button>
                    </div>


                    {/* <ReservationSearchForm/>
                <SearchForm/> */}
                </div>
            </form>
        )
    }
}



const mSTP = (state) => ({

})

const mDTP = (dispatch) => ({
    sendForm: (searchForm) => dispatch(sendForm(searchForm)),
    searchRestaurants: (keyword) => dispatch(searchRestaurants(keyword))
})

export default withRouter(connect(mSTP, mDTP)(Search))