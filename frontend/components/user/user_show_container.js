import { connect } from 'react-redux'
import UserShow from './user_show'

const mSTP = (state) => {

    return { currentUser: state.entities.users[state.session.id] }
}



const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(UserShow)