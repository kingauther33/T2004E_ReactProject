const INIT_STATE = {
	galaxy: 0,
};

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case 'add_planet':
			// let galaxy = addPlanetToGalaxy(state.galaxy, action.planet);
			const galaxy = state.galaxy;
			state = { ...state, galaxy: galaxy + 1 };
			return state;
		default:
			return state;
	}
};

/* const addPlanetToGalaxy = (galaxy, planet) => {
	let check = false;
	galaxy.map((item) => {
		if (item.id === planet.id) {
			item.planet_qty++;
			check = true;
		}
		return item;
	});

	if (!check) {
		planet.planet_qty = 1;
		galaxy.push(planet);
	}

	return galaxy;
}; */

export { reducer };
