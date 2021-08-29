const INIT_STATE = {
	planets: 0,
};

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case 'add_planet':
			const planet = state.planets;
			state = { ...state, planets: planet + 1 };
			return state;
		default:
			return state;
	}
};

export { reducer };
