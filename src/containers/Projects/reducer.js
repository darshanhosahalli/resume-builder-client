import { ADD_PROJECT, EDIT_PROJECT, DELETE_PROJECT, ADD_TAG, DELETE_TAG } from './constants';
import { produce } from 'immer'

const initialState = {
    projects: [
        {
            id: 1,
            title: 'Title Here',
            description: 'Project Description Here',
            github: 'github link here',
            livesite: 'live site here',
            tags: [],
        }
    ],
};

const projectReducer = (state = initialState, action) => 
    produce(state, draft => {
        switch (action.type) {
                case ADD_PROJECT:
                    draft.projects.push(action.payload);
                    break;
                case EDIT_PROJECT:
                    const { index, key, value} = action.payload;
                    draft.projects[index][key] = value;
                    break;
                case DELETE_PROJECT:
                    draft.projects.splice(action.payload.index,1);
                    break;
                case ADD_TAG:
                    const { tag } = action.payload;
                    draft.projects[action.payload.index].tags.push(tag);
                    break;
                case DELETE_TAG:
                    const { tagIndex } = action.payload;
                    draft.projects[action.payload.index].tags.splice(tagIndex,1);
                    break;
                default:
                    return draft;
            }
        }
    );
    
export default projectReducer;