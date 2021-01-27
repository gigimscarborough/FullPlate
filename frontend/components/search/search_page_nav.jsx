import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { sendForm, clearForm} from '../../actions/search_actions'
import { searchRestaurants } from '../../actions/restaurant_actions'
import { withRouter } from 'react-router-dom'


class SearchPageNav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: "",
            date: "",
            time: "",
            guest_count: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidUpdate(prevProps) {
        debugger
        if (this.props.search.keyword !== prevProps.search.keyword) {
            debugger
            this.props.clearForm()
        }

    }

    handleChange(type) {
        return (e) => (
            this.setState({ [type]: e.currentTarget.value })
        )

    }

    handleSubmit(e) {

        e.preventDefault()
        this.props.clearForm
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


        const timeOnHour = []

        for (let i = 12; i >= 1; i--) {
            timeOnHour.push(`${i}:00`)
        }
        const timeOnHalf = []

        for (let i = 12; i >= 1; i--) {
            timeOnHalf.push(`${i}:30`)
        }

        const allTimes = function (arr1, arr2) {
            const ttlTimes = []

            while (arr1.length || arr2.length) {
                if (arr1.length >= arr2.length) {
                    ttlTimes.push(arr1.shift())
                } else {
                    ttlTimes.push(arr2.shift())
                }
            }
            return ttlTimes;
        }

        const times = allTimes(timeOnHour, timeOnHalf)

        const timeOptionsAm = times.map(time => (

            time.length === 4 ? <option value={`0${time}:00`}>{time} AM</option> : <option value={`${time}:00`}>{time} AM</option>
        ))

        const timeOptionsPm = times.map(time => (

            time.length === 4 ? <option value={`0${time}:00`}>{time} PM</option> : <option value={`${time}:00`}>{time} PM</option>
        ))

        const currentHour = dateToday.getHours()

        let currentOption = dateToday.getMinutes() > 15 && dateToday.getMinutes() < 45 ? <option selected value={`${(hours + 1) % 24}:30:00`}>{`${(currentHour + 1) % 12}:30`} {((currentHour + 1) / 12) > 1 ? `PM` : `AM`}</option> : <option selected value={`${(hours + 1) % 24}:00:00`}>{`${(currentHour + 1) % 12}:00`} {((currentHour + 1) / 12) > 1 ? `PM` : `AM`}</option>


        

        return (
            <div>
                <div className="res-loc-nav">
                    <Link to="/">Home</Link>
                    <div className="arrow"></div>
                    <p>United States</p>
                    <div className="arrow"></div>
                    <p>{!this.props.currentUser ? "test" : this.props.currentUser.dining_city}</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                <div className="search-page-nav">
                    <div id="sp-form">
                            <input className="sp-input" type="date" value={`${year}-${month}-${date}`} onChange={this.handleChange('date')} />
                            <div className="sp-select-time">
                            <select className="sp-select" onChange={this.handleChange('time')} >
                                    {currentOption}
                                    {timeOptionsAm}
                                    {timeOptionsPm}
                            </select>
                            <i class="far fa-clock"></i>
                            </div>
                          
                            <select className="sp-select" onChange={this.handleChange('guest_count')}>
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
    restaurants: Object.values(state.entities.restaurants),
    search: state.ui.search,
    currentUser: state.entities.users[state.session.id]

})

const mDTP = (dispatch) => ({
    sendForm: (searchForm) => dispatch(sendForm(searchForm)),
    searchRestaurants: (keyword) => dispatch(searchRestaurants(keyword)),
    clearForm: ()=> dispatch(clearForm())
})

export default withRouter(connect(mSTP, mDTP)(SearchPageNav))