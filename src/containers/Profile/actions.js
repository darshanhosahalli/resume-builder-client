/**
 * Profile Container actions
 * 
 */
import { EDIT_PROFILE, FETCH_PROFILE_PHOTO } from './constants';
import Axios from '../../api';

export const EditProfile = (object, key, value) => {
    return {
        type: EDIT_PROFILE,
        payload: {
            object, key, value
        }
    }
}

export const FetchProfileImage = () => async dispatch => {
    const response = await Axios.get('/photos/1');
    return dispatch({
        type: FETCH_PROFILE_PHOTO,
        payload: response
    })
};