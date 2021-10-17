import { produce } from 'immer'
import { EDIT_ACCOMPLISHMENT, ADD_ACCOMPLISHMENT, DELETE_ACCOMPLISHMENT } from './constants';

const initialState = {
    accomplishmentArray: [],
};


const accomplishmentsReducer = (state = initialState, action) => 
    produce(state, draft => {
        switch (action.type) {
                case ADD_ACCOMPLISHMENT:
                    draft.accomplishmentArray.push(action.payload.accomplishment);
                    break;
                case EDIT_ACCOMPLISHMENT:
                    const { index, value} = action.payload;
                    draft.accomplishmentArray[index]= value;
                    break;
                case DELETE_ACCOMPLISHMENT:
                    draft.accomplishmentArray.splice(action.payload.index,1);
                    break;
                default:
                    return draft;
            }
        }
    );  
    
export default accomplishmentsReducer;