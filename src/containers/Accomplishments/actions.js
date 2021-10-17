/**
 * Accomplishments actions
 * 
 */
 import { EDIT_ACCOMPLISHMENT, ADD_ACCOMPLISHMENT, DELETE_ACCOMPLISHMENT } from './constants';

 export const EditAccomplishments = (index, value) => {
    return {
        type: EDIT_ACCOMPLISHMENT,
        payload: {
            index, value
        }
    }
}

export const AddAccomplishments = (accomplishment = "") => {
    return {
        type: ADD_ACCOMPLISHMENT,
        payload: {
            accomplishment
        }
    }
}

export const DeleteAccomplishment = (index) => {
    return {
        type: DELETE_ACCOMPLISHMENT,
        payload: {
            index
        }
    }
}



