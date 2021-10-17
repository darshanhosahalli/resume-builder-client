/**
 * Projects Container actions
 * 
 */
import { ADD_PROJECT, EDIT_PROJECT, DELETE_PROJECT, ADD_TAG, DELETE_TAG } from './constants';

export const AddProject = (project = {}) => {
    return {
        type: ADD_PROJECT,
        payload: project
    }
}

export const EditProject = (index, key, value) => {
    return {
        type: EDIT_PROJECT,
        payload: {
            index, key, value
        }
    }
}

export const DeleteProject = (index) => {
    return {
        type: DELETE_PROJECT,
        payload: {
            index,
        }
    }
}

export const AddTag = (tag, index) => {
    return {
        type: ADD_TAG,
        payload: {
            tag,
            index
        }
    }
}

export const DeleteTag = (tagIndex, index) => {
    return {
        type: DELETE_TAG,
        payload: {
            index,
            tagIndex
        }
    }
}