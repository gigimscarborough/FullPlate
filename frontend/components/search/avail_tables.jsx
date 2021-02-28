import React from 'react'

class AvailTables extends React.Component {
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

        this.dateToday = new Date()
        this.hours = ((this.dateToday.getHours() + 2) % 24) < 10 ? `0${((this.dateToday.getHours() + 2) % 24)}` : ((this.dateToday.getHours() + 2) % 24)
        this.minutes = this.dateToday.getMinutes() < 10 ? `0${this.dateToday.getMinutes()}` : this.dateToday.getMinutes()
        this.month = this.dateToday.getMonth() < 10 ? `0${this.dateToday.getMonth() + 1}` : this.dateToday.getMonth() + 1
        this.date = this.dateToday.getDate() < 10 ? `0${this.dateToday.getDate()}` : this.dateToday.getDate()
        this.year = this.dateToday.getFullYear()

        this.defaultTime = this.dateToday.getMinutes() >= 0 && this.dateToday.getMinutes() < 30 ? `${this.hours}:00:00` : `${this.hours}:30:00`

    }

    tIndexes() {

        const tIndex = this.times.indexOf(this.defaultTime)


        const prev1 = tIndex - 1 >= 0 ? tIndex - 1 : (tIndex - 1) + this.times.length
        const prev2 = tIndex - 2 >= 0 ? tIndex - 2 : (tIndex - 2) + this.times.length
        const next1 = tIndex + 1 <= (this.times.length - 1) ? tIndex + 1 : (tIndex + 1) % tIndex.length
        const next2 = tIndex + 2 <= (this.times.length - 1) ? tIndex + 2 : (tIndex + 2) % tIndex.length

        debugger
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

        let options = []

        if (openingTime2 || closingTime2) {

            for (let i = 0; i < this.tIndexes().length; i++) {
                if ((new Date('2021-08-19T' + this.times[this.tIndexes()[i]]) >= openingTime1 && new Date('2021-08-19T' + this.times[this.tIndexes()[i]]) < closingTime1) || (new Date('2021-08-19T' + this.times[this.tIndexes()[i]]) >= openingTime2 && new Date('2021-08-19T' + this.times[this.tIndexes()[i]]) < closingTime2)) {
                    options.push(this.times[this.tIndexes()[i]])
                }

            }

        } else {
            for (let i = 0; i < this.tIndexes().length; i++) {
                if (new Date('2021-08-19T' + this.times[this.tIndexes()[i]]) >= openingTime1 && new Date('2021-08-19T' + this.times[this.tIndexes()[i]]) < closingTime1) {
                    options.push(this.times[this.tIndexes()[i]])
                }

            }
        }

        debugger

        return options

    }

    buttons() {

        let buttons = []

        for (let i = 0; i < this.tIndexes().length; i++) {
            if (this.validTimes().includes(this.times[this.tIndexes()[i]])) {
                buttons.push(
                    <button key={i} className="valid-t">{new Date('2021-08-19T' + this.times[this.tIndexes()[i]]).toLocaleTimeString().split(":").slice(0, 2).join(":")} {new Date('2021-08-19T' + this.times[this.tIndexes()[i]]).toLocaleTimeString().split(" ")[1]}</button>
                )
            } else {
                buttons.push(
                    <button key={i} className="inv-t"></button>
                )
            }
        }
        return buttons

    }




    render() {
        return (
            <div className="timeslots">
                <span >You're in luck! We still have {this.validTimes().length} timeslots left</span>
                <div className="avail-btns">
                    {this.buttons()}
                </div>
            </div>
        )
    }
}

export default AvailTables;