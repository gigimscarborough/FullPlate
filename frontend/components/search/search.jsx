import React from 'react';
import ReservationSearchForm from './reservation_search_form';
import SearchForm from './search_form';
import { connect } from 'react-redux';
import { sendForm } from '../../actions/search_actions';
import { searchRestaurants } from '../../actions/restaurant_actions';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {

    constructor(props) {
        super(props)

        this.dateToday = new Date();
        this.hours = ((this.dateToday.getHours() + 1) % 24) < 10 ? `0${((this.dateToday.getHours() + 1) % 24)}` : ((this.dateToday.getHours() + 1) % 24);
        this.minutes = this.dateToday.getMinutes() < 10 ? `0${this.dateToday.getMinutes()}` : this.dateToday.getMinutes();
        this.month = this.dateToday.getMonth() < 10 ? `0${this.dateToday.getMonth() + 1}` : this.dateToday.getMonth() + 1;
        this.date = this.dateToday.getDate() < 10 ? `0${this.dateToday.getDate()}` : this.dateToday.getDate();
        this.year = this.dateToday.getFullYear();

        this.defaultTime = this.dateToday.getMinutes() >= 0 && this.dateToday.getMinutes() < 30 ? `${this.hours}:00:00` : `${this.hours}:30:00`;


        this.state = {
            keyword: "",
            date: `${this.year}-${this.month}-${this.date}`,
            time: this.defaultTime,
            guest_count: 1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(type) {
        return (e) => (
            this.setState({ [type]: e.currentTarget.value })
        );

    }

    handleSubmit(e) {

        e.preventDefault();
        this.props.sendForm(this.state);
        // this.props.searchRestaurants(this.state.keyword)
        this.props.history.push("/search");
    }


    render() {


        const dateToday = new Date();
        const hours = dateToday.getHours() < 10 ? `0${dateToday.getHours()}` : dateToday.getHours();
        const minutes = dateToday.getMinutes() < 10 ? `0${dateToday.getMinutes()}` : dateToday.getMinutes();
        const month = dateToday.getMonth() < 10 ? `0${dateToday.getMonth() + 1}` : dateToday.getMonth() + 1;
        const date = dateToday.getDate() < 10 ? `0${dateToday.getDate()}` : dateToday.getDate();
        const year = dateToday.getFullYear();

        let options = [];

        for (let i = 1; i <= 20; i++) {
            options.push(<option key={i} value={i} >{i < 2 ? `${i} person` : `${i} people`}</option>)
        }

        const currentHour = this.state.time.split(":");

        const normalHour = parseInt(currentHour[0]) === 0 || parseInt(currentHour[0]) === 12 ? 12 : (parseInt(currentHour[0]) + 12) % 12;

        let currentOption = <option selected value={this.state.time}>{`${normalHour}:${currentHour.slice(1, 2)} ${((currentHour[0]) / 12) >= 1 ? `PM` : `AM`}`}</option>

        const format = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

        let resDate = new Date(this.state.date);
        // let resDate = new Date(this.props.search.date)
        resDate = new Date(resDate.getTime() + resDate.getTimezoneOffset() * 60000);



        // const currentHour = dateToday.getHours()

        // let currentOption = dateToday.getMinutes() >= 0 && dateToday.getMinutes() < 30 ? <option selected value={this.state.time}>{`${(currentHour + 1) % 12}:00`} {((currentHour + 1) / 12) > 1 ? `PM` : `AM`}</option> : <option selected value={this.state.time}>{`${(currentHour + 1) % 12}:30`} {((currentHour + 1) / 12) > 1 ? `PM` : `AM`}</option>

        
        return (
        
            <form onSubmit={this.handleSubmit} >
                <div className="background-img">
                    <div className="search-header">
                        <h1>Find the perfect plate for any occasion</h1>
                    </div>
                    <div className="splash-f-cont">

                        <div id="splash-search-form">
                            <div className="splash-date-o">{resDate.toLocaleDateString(undefined, format).split(", ").slice(1).join(", ")}</div>
                            <input className="splash-search-input" type="date" defaultValue={`${this.year}-${this.month}-${this.date}`} onChange={this.handleChange('date')} />
                            <div className="splash-time-in">

                                <select onChange={this.handleChange('time')} >
                                    {currentOption}
                                    < option value={`00:00:00`}> 12:00 AM</option >
                                    < option value={`00:30:00`}> 12:30 AM</option >
                                    < option value={`01:00:00`}> 1:00 AM</option >
                                    < option value={`01:30:00`}> 1:30 AM</option >
                                    < option value={`02:00:00`}> 2:00 AM</option >
                                    < option value={`02:30:00`}> 2:30 AM</option >
                                    < option value={`03:00:00`}> 3:00 AM</option >
                                    < option value={`03:30:00`}> 3:30 AM</option >
                                    < option value={`04:00:00`}> 4:00 AM</option >
                                    < option value={`04:30:00`}> 4:30 AM</option >
                                    < option value={`05:00:00`}> 5:00 AM</option >
                                    < option value={`05:30:00`}> 5:30 AM</option >
                                    < option value={`06:00:00`}> 6:00 AM</option >
                                    < option value={`06:30:00`}> 6:30 AM</option >
                                    < option value={`07:00:00`}> 7:00 AM</option >
                                    < option value={`07:30:00`}> 7:30 AM</option >
                                    < option value={`08:00:00`}> 8:00 AM</option >
                                    < option value={`08:30:00`}> 8:30 AM</option >
                                    < option value={`09:00:00`}> 9:00 AM</option >
                                    < option value={`09:30:00`}> 9:30 AM</option >
                                    < option value={`10:00:00`}> 10:00 AM</option >
                                    < option value={`10:30:00`}> 10:30 AM</option >
                                    < option value={`11:00:00`}> 11:00 AM</option >
                                    < option value={`11:30:00`}> 11:30 AM</option >
                                    < option value={`12:00:00`}> 12:00 PM</option >
                                    < option value={`12:30:00`}> 12:30 PM</option >
                                    < option value={`13:00:00`}> 1:00 PM</option >
                                    < option value={`13:30:00`}> 1:30 PM</option >
                                    < option value={`14:00:00`}> 2:00 PM</option >
                                    < option value={`14:30:00`}> 2:30 PM</option >
                                    < option value={`15:00:00`}> 3:00 PM</option >
                                    < option value={`15:30:00`}> 3:30 PM</option >
                                    < option value={`16:00:00`}> 4:00 PM</option >
                                    < option value={`16:30:00`}> 4:30 PM</option >
                                    < option value={`17:00:00`}> 5:00 PM</option >
                                    < option value={`17:30:00`}> 5:30 PM</option >
                                    < option value={`18:00:00`}> 6:00 PM</option >
                                    < option value={`18:30:00`}> 6:30 PM</option >
                                    < option value={`19:00:00`}> 7:00 PM</option >
                                    < option value={`19:30:00`}> 7:30 PM</option >
                                    < option value={`20:00:00`}> 8:00 PM</option >
                                    < option value={`20:30:00`}> 8:30 PM</option >
                                    < option value={`21:00:00`}> 9:00 PM</option >
                                    < option value={`21:30:00`}> 9:30 PM</option >
                                    < option value={`22:00:00`}> 10:00 PM</option >
                                    < option value={`22:30:00`}> 10:30 PM</option >
                                    < option value={`23:00:00`}> 11:00 PM</option >
                                    < option value={`23:30:00`}> 11:30 PM</option >
                                </select>
                                <i className="far fa-clock"></i>
                            </div>
                            <div className="src-u">

                            <select className="splash-search-select" onChange={this.handleChange('guest_count')}>
                                <option key={1} value={1} selected>1 person</option>
                                {options}
                            </select>
                            <i className="far fa-user"></i>
                            </div>
                        </div>
                        <div id="splash-search-div">
                            <div className="splash-search-bar" >
                                <img src={window.search_icon} />
                                <input type="text" placeholder="Location, Restaurant, or Cuisine" onChange={this.handleChange('keyword')} />
                            </div>
                            <button className="search-form-btn">Let's Go</button>
                        </div>
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

export default withRouter(connect(mSTP, mDTP)(Search));