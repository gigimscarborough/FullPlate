import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container'
import ResSearchModalContainer from './navbar/res_search_modal_container'

function Modal({ modal, closeModal }) {
    let component;
    if (!modal) {
        return null;
    } else {
        component = modal === 'login' ? <LoginFormContainer /> : modal === 'signup' ? <SignupFormContainer /> : <ResSearchModalContainer />
    }
  
    return (
        <div className="modal-background" onClick={closeModal}>
            {/* <div className="modal-form" onClick={e => e.stopPropagation()}> */}
                {component}
            {/* </div> */}
        </div>
    );
}


const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);