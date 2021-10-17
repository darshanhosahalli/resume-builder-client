import { ADD_EXPERIENCE, EDIT_EXPERIENCE, DELETE_EXPERIENCE } from './constants';
import { produce } from 'immer'

const initialState = {
    experience: [{ company: 'infosys', from: '', to: '', years: '', jobTitles: [], description: 'a brief description about your time in this company'}]
};

const experienceReducer = (state = initialState, action) => 
    produce(state, draft => {
        switch (action.type) {
                case ADD_EXPERIENCE:
                    draft.experience.push(action.payload);
                    break;
                case EDIT_EXPERIENCE:
                    const { index, key, value} = action.payload;
                    draft.experience[index][key] = value;
                    break;
                case DELETE_EXPERIENCE:
                    draft.experience.splice(action.payload.index,1);
                    break;
                default:
                    return draft;
            }
        }
    );

export default experienceReducer;