const SET_CURRICULUM = 'SET_CURRICULUM';
const initialState = { nombre: 'hola' };

export const setCurriculum = (curriculum) => ({ type: SET_CURRICULUM, payload: { curriculum } });

const curriculum = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRICULUM: {
			return action.payload.curriculum;
		}
		default: {
			return state;
		}
	}
};

export default curriculum;
