import { combineReducers } from 'redux';
import projectReducer from  '../containers/Projects/reducer';
import profileReducer from '../containers/Profile/reducer';
import skillReducers from '../containers/SkillList/reducer';
import accomplishmentsReducer from '../containers/Accomplishments/reducer';
import educationReducer from '../containers/Education/reducer';
import experienceReducer from '../containers/ExperienceBoard/reducer';
import { reducer as formReducer} from 'redux-form';

export default combineReducers({
    projects: projectReducer,
    profile: profileReducer,
    skills: skillReducers,
    accomplishments: accomplishmentsReducer,
    education: educationReducer,
    experience: experienceReducer,
    formReducer: formReducer
});