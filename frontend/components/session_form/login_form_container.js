import SessionForm from './session_form';
import React from 'react';
import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login',
    user: {
        email: "",
        password: ""
    }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    action: (user) => dispatch(login(user)),
    otherForm: (
        <a  className="switch-form" onClick={() => dispatch(openModal('signup'))}>
            Create an account
        </a>
    ),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())

})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
