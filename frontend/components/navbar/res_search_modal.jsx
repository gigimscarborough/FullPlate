import React from 'react'
import ReservationModalSearchForm from '../search/reservation_modal_form'
import ModalSearchForm from '../search/modal_search_form'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { sendForm } from '../../actions/search_actions'
import { searchRestaurants } from '../../actions/restaurant_actions'
import {closeModal} from '../../actions/modal_actions'

class ResSearchModal extends React.Component {
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

    handleChange(type) {
        return (e) => (
            this.setState({ [type]: e.currentTarget.value })
        )

    }

    handleSubmit(e) {

        e.preventDefault()
        this.props.sendForm(this.state)
        this.props.searchRestaurants(this.state.search)
        this.props.history.push("/search")
        this.props.closeModal()

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
            <form onSubmit={this.handleSubmit}>
            <div className="res-modal" onClick={e => e.stopPropagation()}>
                <div className="search-modal-container">
                    <div className="search-modal">
                        <div onClick={this.props.closeModal} className="close-x"><i className="fas fa-times"></i></div>
                        <div className="search-modal-header">
                            <h1>Find the perfect plate for any occasion</h1>
                        </div>
                        <div className="modal-flex">

                            <div id="search-modal-form">
                                    <input className="modal-search-input" type="date" defaultValue={`${year}-${month}-${date}`} onChange={this.handleChange('date')}/>
                                    <input className="modal-search-input" type="time" defaultValue={`${hours}:${minutes}`} onChange={this.handleChange('time')} />
                                    <select className="modal-search-select" onChange={this.handleChange('guest_count')}>
                                    {options}
                                </select>
                            </div>
                            {/* <ReservationModalSearchForm /> */}
                            <div id="search-modal-div">
                                <div className="modal-search-bar" >
                                    <img src={window.search_icon} />
                                        <input type="text" placeholder="Location, Restaurant, or Cuisine" onChange={this.handleChange('keyword')} />
                                </div>
                                <button className="search-form-btn">Let's Go</button>
                            </div>

                            {/* <ModalSearchForm /> */}
                        </div>
                    </div>
                </div>
            </div>
            </form>
        )
    }
}



const mSTP = (state) => ({

})

const mDTP = (dispatch) => ({
    sendForm: (searchForm) => dispatch(sendForm(searchForm)),
    searchRestaurants: (keyword) => dispatch(searchRestaurants(keyword)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(ResSearchModal))