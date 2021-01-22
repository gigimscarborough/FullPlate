import React from 'react'
import SessionForm from './session_form'
import { connect } from 'react-redux'
import { signup, removeErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup',
    user: {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        dining_city: ""
    }
})

const mapDispatchToProps = (dispatch) => ({
    action: (user) => dispatch(signup(user)),
    otherForm: (
        <a className="switch-form" onClick={() => dispatch(openModal('login'))}>
            Sign in here
        </a>
    ),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())

})


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)