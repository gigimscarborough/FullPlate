import React from 'react'

class ReservationForm extends React.Component{
    constructor(props){
        super(props)
    }

    test(e){
        console.log(e.target.value.toISOString())
    }

    render(){
        const dateToday= new Date()
        
        let options= []

        for( let i = 1; i <= 20; i++){
            options.push(<option key={i} value={1} >{i < 2 ? `${i} Person`: `${i} People`}</option>)
        }

        return(

        <div id="splash-search-form">
                <input className="splash-search-input" type="date" onChange={this.test.bind(this)}/>
                <input className="splash-search-input" type="time" />
                <select className="splash-search-select">
                {options}
            </select>
        </div>
        )
    }
}

export default ReservationForm