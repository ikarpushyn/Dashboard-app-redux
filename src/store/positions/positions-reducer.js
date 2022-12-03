import { ADD_POSITIONS } from './positions-action';

export const positionReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_POSITIONS: {
			return action.positions;
			// return action.payload;
		}

		default: {
			return state;
		}
	}
};
