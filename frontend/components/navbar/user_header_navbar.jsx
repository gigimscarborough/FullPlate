import React from 'react';

const UserHeaderNavBar = (props) => {
    return (
        <div className="user-header">
            <h2>{props.currentUser.first_name} {props.currentUser.last_name}</h2>
            <p>Plate Professional</p>
        </div>
    )

}

export default UserHeaderNavBar;