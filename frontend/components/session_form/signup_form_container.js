import React from 'react'
import SessionForm from './session_form'
import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup',
    user: {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        dining_city_id: 1
    }
})

const mapDispatchToProps = (dispatch) => ({
    action: (user) => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
            Login
        </button>
    ),
    closeModal: () => dispatch(closeModal())

})


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)