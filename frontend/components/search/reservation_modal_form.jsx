import React from 'react'

class ReservationModalForm extends React.Component {
    constructor(props) {
        super(props)
    }

    test(e) {
        console.log(e.target.value.toISOString())
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

            <div id="search-modal-form">
                <input className="modal-search-input" type="date" defaultValue={`${year}-${month}-${date}`} onChange={this.test.bind(this)} />
                <input className="modal-search-input" type="time" defaultValue={`${hours}:${minutes}`} />
                <select className="modal-search-select">
                    {options}
                </select>
            </div>
        )
    }
}

export default ReservationModalForm