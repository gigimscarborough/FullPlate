import React from 'react'
import ReservationModalSearchForm from '../search/reservation_modal_form'
import ModalSearchForm from '../search/modal_search_form'

class ResSearchModal extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        debugger
        return(

            <div className="res-modal" onClick={e => e.stopPropagation()}>
                <div className="search-modal-container">
                    <div className="search-modal">
                    <div onClick={this.props.closeModal} className="close-x"><i className="fas fa-times"></i></div>
                    <div className="search-modal-header">
                        <h1>Find the perfect plate for any occasion</h1>
                    </div>
                    <div className="modal-flex">
                        <ReservationModalSearchForm />
                        <ModalSearchForm />
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ResSearchModal