import { types } from '../types/types';

const chatReducer = (chatState, acction) => {
	switch (acction.type) {
		case types.cargarUsuarios:
			return {
				...chatState,
				usuarios: acction.payload,
			};
		default:
			return chatState;
	}
};

export default chatReducer;
