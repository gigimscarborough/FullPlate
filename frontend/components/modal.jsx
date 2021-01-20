import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container'

class Modal extends React.Component {
  
    render(){
    const component = !this.props.modal ? null 
        : this.props.modal === 'login' ? <LoginFormContainer /> : <SignupFormContainer />

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-form" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
    }
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