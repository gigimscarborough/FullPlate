import React from 'react'
import UserNavBar from '../navbar/user_navbar'

class UserShow extends React.Component{

    render(){

        return(
        <div>
            <UserNavBar logout={this.props.logout} currentUser={this.props.currentUser}/>
            
        </div>

        )
    }
}


export default UserShow