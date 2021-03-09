import React from 'react'
import UserDropdown from './user_dropdown_container'


class ClickUserDropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = {clicked: false}
        this.whenClicked = this.whenClicked.bind(this)
    }

    whenClicked(e){
        if (document.getElementById('user-dropdown')){
            if (document.getElementById('user-dropdown').style.display === 'none'){
                document.getElementById('user-dropdown').style.display = 'block'
                this.setState({ clicked: true })
            }
            else {
                
                const status = !this.state.clicked
                this.setState({ clicked: status })
            }
        } else {
            
            const status = !this.state.clicked
            this.setState({clicked: status})
        }

        

        if (document.getElementById('notification-dropdown')){
            document.getElementById('notification-dropdown').style.display = 'none'
        }
        if (document.getElementById('upcoming-dropdown')){
            document.getElementById('upcoming-dropdown').style.display = 'none'
        }
        if (document.getElementById('alt-upcoming-dropdown')){
            document.getElementById('alt-upcoming-dropdown').style.display = 'none'
        }

        

    }

    render(){
        return(
            <div id="user-c">
                <i onClick={this.whenClicked} className=" far2 far fa-user"></i>
                {this.state.clicked ? <UserDropdown/> : null}
            </div>
        )
    }
}

export default ClickUserDropdown;