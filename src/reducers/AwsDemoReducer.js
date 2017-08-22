import {
	HIDE_LOADING,
	UPDATE_PROFILE_PICTURE
} from '../actions/types';
import { Images } from '../theme';

const INITIAL_STATE = {
	loading: false,
	profilePicture: Images.addProfilePicture
};
export default function UserInputReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
		case HIDE_LOADING:
			return{ ...state, loading: action.payload};
		case UPDATE_PROFILE_PICTURE:
			return { ...state, profilePicture: action.payload, loading: true};
    default:
      return state;
  }
}
