import { ADD_EXPERIENCE, EDIT_EXPERIENCE, DELETE_EXPERIENCE } from './constants';

export const AddExperience = (experience = []) => {
    return {
        type: ADD_EXPERIENCE,
        payload: experience
    }
}

export const EditExperience = (index, key, value) => {
    return {
        type: EDIT_EXPERIENCE,
        payload: {
            index, key, value
        }
    }
}

export const DeleteExperience = (index) => {
    return {
        type: DELETE_EXPERIENCE,
        payload: {
            index
        }
    }
}