import React from 'react'

class ModalSearchForm extends React.Component {


    render() {

        
        return (

            <div id="search-modal-div">
                <div className="modal-search-bar" >
                    <img src={window.search_icon} />
                    <input type="text" placeholder="Location, Restaurant, or Cuisine" />
                </div>
                <button className="search-form-btn">Let's Go</button>
            </div>
        )
    }
}


export default ModalSearchForm