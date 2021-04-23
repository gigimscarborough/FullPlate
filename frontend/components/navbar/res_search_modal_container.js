import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import ResSearchModal from './res_search_modal';

const mSTP = (state) => ({

})

const mDTP = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(ResSearchModal);