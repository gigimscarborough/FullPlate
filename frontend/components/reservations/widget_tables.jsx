import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class WidgetTables extends React.Component {
    constructor(props) {
        super(props)

        this.times = [
            `00:00:00`,
            `00:30:00`,
            `01:00:00`,
            `01:30:00`,
            `02:00:00`,
            `02:30:00`,
            `03:00:00`,
            `03:30:00`,
            `04:00:00`,
            `04:30:00`,
            `05:00:00`,
            `05:30:00`,
            `06:00:00`,
            `06:30:00`,
            `07:00:00`,
            `07:30:00`,
            `08:00:00`,
            `08:30:00`,
            `09:00:00`,
            `09:30:00`,
            `10:00:00`,
            `10:30:00`,
            `11:00:00`,
            `11:30:00`,
            `12:00:00`,
            `12:30:00`,
            `13:00:00`,
            `13:30:00`,
            `14:00:00`,
            `14:30:00`,
            `15:00:00`,
            `15:30:00`,
            `16:00:00`,
            `16:30:00`,
            `17:00:00`,
            `17:30:00`,
            `18:00:00`,
            `18:30:00`,
            `19:00:00`,
            `19:30:00`,
            `20:00:00`,
            `20:30:00`,
            `21:00:00`,
            `21:30:00`,
            `22:00:00`,
            `22:30:00`,
            `23:00:00`,
            `23:30:00`,
        ]


        // this.dateToday = new Date('2021-08-19T' + this.props.search.time)
        // this.hours = ((this.dateToday.getHours()) % 24) < 10 ? `0${((this.dateToday.getHours()) % 24)}` : ((this.dateToday.getHours()) % 24)
        // this.minutes = this.dateToday.getMinutes() < 10 ? `0${this.dateToday.getMinutes()}` : this.dateToday.getMinutes()
        // // this.month = this.dateToday.getMonth() < 10 ? `0${this.dateToday.getMonth() + 1}` : this.dateToday.getMonth() + 1
        // // this.date = this.dateToday.getDate() < 10 ? `0${this.dateToday.getDate()}` : this.dateToday.getDate()
        // // this.year = this.dateToday.getFullYear()

        // this.defaultTime = this.dateToday.getMinutes() >= 0 && this.dateToday.getMinutes() < 30 ? `${this.hours}:00:00` : `${this.hours}:30:00`

    }




    tIndexes() {

        const tIndex = this.times.indexOf(this.props.time)


        const prev1 = tIndex - 1 >= 0 ? tIndex - 1 : (tIndex - 1) + this.times.length
        const prev2 = tIndex - 2 >= 0 ? tIndex - 2 : (tIndex - 2) + this.times.length
        const next1 = tIndex + 1 <= (this.times.length - 1) ? tIndex + 1 : (tIndex + 1) % tIndex.length
        const next2 = tIndex + 2 <= (this.times.length - 1) ? tIndex + 2 : (tIndex + 2) % tIndex.length

        
        return [prev2, prev1, tIndex, next1, next2]
    }

    validTimes() {

        let openingTime1 = new Date('2021-08-19T' + this.props.operation_hours.split("-")[0])
        let closingTime1 = new Date('2021-08-19T' + this.props.operation_hours.split("-")[1])
        let openingTime2
        let closingTime2

        if (closingTime1 < openingTime1) {
            closingTime1 = new Date('2021-08-19T' + '23:59')
            openingTime2 = new Date('2021-08-19T' + '00:00')
            closingTime2 = new Date('2021-08-19T' + this.props.operation_hours.split("-")[1])
        }

        let today = new Date()
        let options = []

        if (openingTime2 || closingTime2) {

            for (let i = 0; i < this.tIndexes().length; i++) {
                if (((new Date('2021-08-19T' + this.times[this.tIndexes()[i]]) >= openingTime1 && new Date('2021-08-19T' + this.times[this.tIndexes()[i]]) < closingTime1) || (new Date('2021-08-19T' + this.times[this.tIndexes()[i]]) >= openingTime2 && new Date('2021-08-19T' + this.times[this.tIndexes()[i]]) < closingTime2)) && new Date(this.props.date + "T" + this.times[this.tIndexes()[i]]) > today) {
                    options.push(this.times[this.tIndexes()[i]])
                }

            }

        } else {
            for (let i = 0; i < this.tIndexes().length; i++) {
                if (new Date('2021-08-19T' + this.times[this.tIndexes()[i]]) >= openingTime1 && new Date('2021-08-19T' + this.times[this.tIndexes()[i]]) < closingTime1 && new Date(this.props.date + "T" + this.times[this.tIndexes()[i]]) > today) {
                    options.push(this.times[this.tIndexes()[i]])
                }

            }
        }

        

        return options

    }


    handleSubmit(rTime) {
        // e.preventDefault()

        if (this.props.currentUser) {
            let form = {
                date: this.props.date,
                time: rTime,
                guest_count: this.props.guest_count
            }
            this.props.sendForm(form)
            this.props.history.push(`/restaurants/${this.props.restaurantId}/reserve`)
        } else {
            this.props.openModal('login')
        }

    }

    buttons() {

        let buttons = []

        for (let i = 0; i < this.tIndexes().length; i++) {
            if (this.validTimes().includes(this.times[this.tIndexes()[i]])) {
                buttons.push(
                    <button key={i} className="w-valid-t" onClick={() => this.handleSubmit(this.times[this.tIndexes()[i]])}>
                        <img src={window.table} alt="" />
                        {new Date('2021-08-19T' + this.times[this.tIndexes()[i]]).toLocaleTimeString().split(":").slice(0, 2).join(":")} {new Date('2021-08-19T' + this.times[this.tIndexes()[i]]).toLocaleTimeString().split(" ")[1]}</button>
                )
            }
        }
        // else {
        //     buttons.push(
        //         <button key={i} className="inv-t"></button>
        //     )
        // }
        return buttons

    }

    

    render() {
        

        if (this.validTimes().length === 0) {
            return (
                <div className='w-none-avail'>
                    <i class="fas fa-exclamation-circle"></i>
                    <span>At the moment, there's no online availability within 2.5 hours of {new Date('2021-08-19T' + this.props.time).toLocaleTimeString().split(":").slice(0, 2).join(":")} {new Date('2021-08-19T' + this.props.time).toLocaleTimeString().split(" ")[1]}.</span>
                </div>
            )
        } else {
            return (
                <div className="w-timeslots">

                    <h3>Select a time:</h3>
                    <div className="avail-btns">
                        {this.buttons()}
                    </div>
                    {this.validTimes().length < 5 && this.validTimes().length > 0 ? this.validTimes().length < 5 && this.validTimes().length > 0 && this.validTimes().length !== 1 ? <span >
                        <img src={window.fastclockb} alt="" />{`You're in luck! We still have ${this.validTimes().length} timeslots left`}</span> : <span >
                            <img src={window.fastclockb} alt="" />{`You're in luck! We still have ${this.validTimes().length} timeslot left`}</span> : null}
                </div>
            )
        }
    }
}



// export default AvailTables

const mSTP = (state) => ({
    time: state.ui.search.time,
    date: state.ui.search.date,
    guest_count: state.ui.search.guest_count

})


const mDTP = (dispatch) => ({


})

export default withRouter(connect(mSTP, mDTP)(WidgetTables))
