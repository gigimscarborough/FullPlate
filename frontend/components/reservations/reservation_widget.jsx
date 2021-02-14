import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {sendForm} from '../../actions/search_actions'
import { openModal } from '../../actions/modal_actions'
import {withRouter} from 'react-router-dom'

class ReservationWidget extends React.Component {
    constructor(props) {
        super(props)

        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.dateToday = new Date()
        this.hours = ((this.dateToday.getHours() + 1) % 24) < 10 ? `0${((this.dateToday.getHours() + 1) % 24)}` : ((this.dateToday.getHours() + 1) % 24)
        this.minutes = this.dateToday.getMinutes() < 10 ? `0${this.dateToday.getMinutes()}` : this.dateToday.getMinutes()
        this.month = this.dateToday.getMonth() < 10 ? `0${this.dateToday.getMonth() + 1}` : this.dateToday.getMonth() + 1
        this.date = this.dateToday.getDate() < 10 ? `0${this.dateToday.getDate()}` : this.dateToday.getDate()
        this.year = this.dateToday.getFullYear()
        
        this.defaultTime = this.dateToday.getMinutes() >= 0 && this.dateToday.getMinutes() < 30 ? `${this.hours}:00:00` : `${this.hours}:30:00`
        
        this.state = {
            keyword: !this.props.search.keyword ? "" : this.props.search.keyword,
            date: !this.props.search.date ? `${this.year}-${this.month}-${this.date}` : this.props.search.date,
            time: !this.props.search.time ? this.defaultTime : this.props.search.time,
            guest_count: !this.props.search.guest_count ? 1 : this.props.search.guest_count
        }
       
    }

    handleChange(type) {
        return (e) => (
            this.setState({ [type]: e.currentTarget.value })
        )

    }

    handleSubmit(e){
        e.preventDefault()
        if (this.props.currentUser){

            this.props.sendForm(this.state)
            this.props.history.push(`/restaurants/${this.props.match.params.restaurantId}/reserve`)
        } else {
            this.props.openModal('login')
        }

    }
 
    render() {

        

        const resSearch = this.props.search

        if (typeof resSearch === "undefined") {
            return null
        }


        const dateToday = new Date()
        const hours = dateToday.getHours() < 10 ? `0${dateToday.getHours()}` : dateToday.getHours()
        const minutes = dateToday.getMinutes() < 10 ? `0${dateToday.getMinutes()}` : dateToday.getMinutes()
        const month = dateToday.getMonth() < 10 ? `0${dateToday.getMonth() + 1}` : dateToday.getMonth() + 1
        const date = dateToday.getDate() < 10 ? `0${dateToday.getDate()}` : dateToday.getDate()
        const year = dateToday.getFullYear()

        let options = []

        for (let i = 2; i <= 20; i++) {
            options.push(<option key={i} value={i}>For {i}</option>)
        }


        const timeOnHour = []

            for(let i= 12; i >= 1; i--){
                timeOnHour.push(`${i}:00`)
            }
        const timeOnHalf = []

        for (let i = 12; i >= 1; i--) {
            timeOnHalf.push(`${i}:30`)
        }

        const allTimes = function(arr1, arr2){
            const ttlTimes = []

            while(arr1.length || arr2.length){
                if (arr1.length >= arr2.length){
                    ttlTimes.push(arr1.shift())
                } else {
                    ttlTimes.push(arr2.shift())
                }
            }
            return ttlTimes;
        }

        const times = allTimes(timeOnHour, timeOnHalf)
        
        const timeOptionsAm = times.map(time =>(

            time.length === 4 ? <option value={`0${time}:00`}>{time} AM</option> : <option value={`${time}:00`}>{time} AM</option>
        ))

        const timeOptionsPm = times.map(time => (

            time.length === 4 ? <option value={`0${time}:00`}>{time} PM</option> : <option value={`${time}:00`}>{time} PM</option>
        ))

        // const currentHour = dateToday.getHours() 

        // let currentOption = dateToday.getMinutes() > 15 && dateToday.getMinutes() < 45 ? <option selected value={`${(hours + 1) % 24}:30:00`}>{`${(currentHour + 1) % 12}:30`} {((currentHour + 1) / 12) > 1 ? `PM` : `AM`}</option> : <option selected value={`${(hours + 1) % 24}:00:00`}>{`${(currentHour + 1) % 12}:00`} {((currentHour + 1) / 12) > 1 ? `PM` : `AM`}</option>
         
        const currentHour = !this.props.search.time ? this.defaultTime.split(":") : this.props.search.time.split(":")

        const normalHour = parseInt(currentHour[0]) === 0 || parseInt(currentHour[0]) === 12 ? 12 : (parseInt(currentHour[0]) + 12) % 12

        let currentOption = <option selected value={this.state.time}>{`${normalHour}:${currentHour.slice(1, 2)} ${((currentHour[0]) / 12) >= 1 ? `PM` : `AM`}`}</option>

        







        return (
            <div className="res-wid">
                <div className="wid-head-div">
                    <h2>Make a reservation</h2>
                </div >
                <div className="wid-form">
                    <div className="wid-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="wid-sel">
                                <label className="wid-lbl">Party Size
                                <select onChange={this.handleChange('guest_count')}>
                                    <option key={1} value={1} selected>For 1</option>
                                    {options}
                                </select>
                                </label>
                            </div>
                            <div className="wid-dt">
                                <label className="wid-lbl">Date
                                    <input type="date" defaultValue={this.state.date ? this.state.date : `${this.year}-${this.month}-${this.date}`} onChange={this.handleChange('date')}/>
                                </label>
                                <label className="wid-lbl">Time
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

                                </label>
                            </div>
                            <button className="wid-btn">Find a table</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



const mSTP = (state) => ({
    search: state.ui.search,
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (state) => ({
    sendForm: (form) => dispatch(sendForm(form)),
    openModal: modal => dispatch(openModal(modal))
})

export default withRouter(connect(mSTP, mDTP)(ReservationWidget))