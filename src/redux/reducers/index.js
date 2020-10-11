import { combineReducers } from 'redux';

//Reducers
import curriculum, { setCurriculum } from './Curriculum';

//Actions

export default combineReducers({ curriculum });

export const actions = {
	setCurriculum: setCurriculum,
};
