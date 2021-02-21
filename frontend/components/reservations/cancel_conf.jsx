import React from 'react'

class CancelConf extends React.Component {
    constructor(props) {
        super(props)

    }



    
    render() {


        const format = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }


        // if (this.props.restaurants.length <= 0) {
      
            return (
                <div>
                    <div className="cncld-main">
                        <span>{this.props.currentUser.first_name}, your reservation hab been cancelled</span>
                    </div>
                </div>
            )
        
    }
}
export default CancelConf