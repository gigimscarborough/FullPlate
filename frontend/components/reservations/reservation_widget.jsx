import React from 'react'

class ReservationWidget extends React.Component {
    constructor(props) {
        super(props)
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
            options.push(<option key={i} value={1}>For {i}</option>)
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

        







        return (
            <div className="res-wid">
                <div className="wid-head-div">
                    <h2>Make a reservation</h2>
                </div >
                <div className="wid-form">
                    <div className="wid-body">
                        <form>
                            <div className="wid-sel">
                                <label className="wid-lbl">Party Size
                                <select  >
                                    {options}
                                </select>
                                </label>
                            </div>
                            <div className="wid-dt">
                                <label className="wid-lbl">Date
                                    <input type="date" defaultValue={`${year}-${month}-${date}`} />
                                </label>
                                <label className="wid-lbl">Time
                                <select  >
                                        {timeOptionsAm}
                                        {timeOptionsPm}
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

export default ReservationWidget