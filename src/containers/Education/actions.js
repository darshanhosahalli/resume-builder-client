import { ADD_EDUCATION, EDIT_EDUCATION, DELETE_EDUCATION } from './constants';

export const AddEducation = (education = {}) => {
    return {
        type: ADD_EDUCATION,
        payload: education
    }
}

export const EditEducation = (index, key, value) => {
    return {
        type: EDIT_EDUCATION,
        payload: {
            index, key, value
        }
    }
}

export const DeleteEducation = (index) => {
    return {
        type: DELETE_EDUCATION,
        payload: {
            index
        }
    }
}
