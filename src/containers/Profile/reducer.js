import { produce } from 'immer';
import { EDIT_PROFILE, FETCH_PROFILE_PHOTO } from './constants';

export const initialState = {
    profile: {
                address: {
                    contact: 'phone number',
                    street: 'street address',
                    locality: 'locality',
                    city_state: 'city and state',
                    country: 'country and zip code',
                },
                bio: {
                    name: 'John Doe',
                    position: 'Software Intern',
                    about: 'do not exceede more than 500 characters...',
                },
                image: ''
            }
};

const profileReducer = (state = initialState, action) => 
    produce(state, draft => {
        switch (action.type) {
                case EDIT_PROFILE:
                    let { object, key, value } = action.payload;
                    draft.profile[object][key] = value;
                    break;
                case FETCH_PROFILE_PHOTO:
                    console.log('action.payload:- ',action.payload);
                    let { data } = action.payload;
                    console.log('data:- ',data)
                    if(data) {
                        draft.profile.image = data.url;
                    }
                    break;
                default:
                    return draft;
            }
        }
    );
    
export default profileReducer;