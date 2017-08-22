import {
  HIDE_LOADING,
  UPDATE_PROFILE_PICTURE,
} from './types';

export const updateProfilePicture = (image) => {
  console.log('updateProfilePicture', image);
  return (dispatch) => {
		dispatch({
      type: UPDATE_PROFILE_PICTURE,
      payload: image
    });
    dispatch(hideLoading(false));
  };
};

export const hideLoading = (status) => {
  return {
    type: HIDE_LOADING,
    payload: status
  }
};
