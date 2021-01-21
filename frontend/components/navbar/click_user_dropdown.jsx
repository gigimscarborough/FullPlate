import React from 'react'
import UserDropdown from './user_dropdown_container'


class ClickUserDropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = {clicked: false}
        this.whenClicked = this.whenClicked.bind(this)
    }

    whenClicked(e){
        const status = !this.state.clicked
        this.setState({clicked: status})
    }

    render(){
        return(
            <div>
                <i onClick={this.whenClicked} className="far fa-user-circle"></i>
                {this.state.clicked ? <UserDropdown/> : null}
            </div>
        )
    }
}

export default ClickUserDropdown;