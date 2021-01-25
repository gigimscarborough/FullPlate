import React from 'react'

class ReservationWidget extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div>
                    <h2>Make A Reservation</h2>
                    <div >
                        <form>
                        <div>
                            {/* <img src={window.search_icon} /> */}
                            <input type="text" placeholder="Location, Restaurant, or Cuisine" />
                        </div>
                        <button>Let's Go</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReservationWidget