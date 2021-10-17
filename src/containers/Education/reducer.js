import { ADD_EDUCATION, EDIT_EDUCATION, DELETE_EDUCATION } from './constants';
import { produce } from 'immer'

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

const initialState = {
    education: [
        {
            id: 1,
            title: 'school/collage',
            from: '1997-11-10',
            to: `${yyyy}-${mm}-${dd}`,
            description: 'Hey there, Tell something about your Education. try to  keep it within 500 chars'
        }
    ],
};

const educationReducer = (state = initialState, action) => 
    produce(state, draft => {
        switch (action.type) {
                case ADD_EDUCATION:
                    draft.education.push(action.payload);
                    break;
                case EDIT_EDUCATION:
                    const { index, key, value} = action.payload;
                    draft.education[index][key] = value;
                    break;
                case DELETE_EDUCATION:
                    draft.education.splice(action.payload.index,1);
                    break;
                default:
                    return draft;
            }
        }
    );

export default educationReducer;