const base_url = 'https://localhost:5001';

export const API = {
	// CAMPAIGNS
	campaigns: {
		url: base_url + '/api/Campaigns',
		params: {},
		method: 'GET',
	},
	add_campaign: {
		url: base_url + '/api/Campaigns',
		params: JSON.stringify({
			title: '',
			description: '',
			image: null,
			content: '',
			totalDonation: 0,
			sponsor: '',
			startDate: '',
			endDate: '',
		}),
		method: 'POST',
	},
	delete_campaign: {
		url: base_url + '/api/Campaigns/', // + id
		params: {},
		method: 'DELETE',
	},
	edit_campaign: {
		url: base_url + '/api/Campaigns/', // + id
		params: JSON.stringify({
			id: 0,
			title: '',
			description: '',
			image: null,
			content: '',
			totalDonation: 0,
			sponsor: '',
			startDate: '',
			endDate: '',
		}),
		method: 'PUT',
	},

	// CATEGORIES
	categories: {
		url: base_url + '/api/Categories',
		params: {},
		method: 'GET',
	},
	detail_category: {
		url: base_url + '/api/Categories/', // + id
		params: {},
		method: 'GET',
	},
	add_category: {
		url: base_url + '/api/Categories',
		params: JSON.stringify({
			name: '',
			image: null,
		}),
		method: 'POST',
	},
	delete_category: {
		url: base_url + '/api/Categories/', // + id
		params: {},
		method: 'DELETE',
	},
	edit_category: {
		url: base_url + '/api/Categories/', // + id
		params: JSON.stringify({
			name: '',
			image: null,
		}),
		method: 'PUT',
	},

	// EVENTS
	events: {
		url: base_url + '/api/Events',
		params: {},
		method: 'GET',
	},
	add_event: {
		url: base_url + '/api/Events',
		params: JSON.stringify({
			title: '',
			description: '',
			image: null,
			content: '',
			organizer: '',
			location: '',
			startDate: '',
			endDate: '',
		}),
		method: 'POST',
	},
	delete_event: {
		url: base_url + '/api/Events/', // + id
		params: {},
		method: 'DELETE',
	},
	edit_event: {
		url: base_url + '/api/Events/', // + id
		params: JSON.stringify({
			id: 0,
			title: '',
			description: '',
			image: null,
			content: '',
			organizer: '',
			location: '',
			startDate: '',
			endDate: '',
		}),
		method: 'PUT',
	},

	// RECIPES
	recipes: {
		url: base_url + '/api/Recipes',
		params: {},
		method: 'GET',
	},
	add_recipe: {
		url: base_url + '/api/Recipes',
		params: JSON.stringify({
			title: '',
			image: null,
			description: '',
			prepTime: '',
			cookTime: '',
			ingredients: '',
			tools: '',
			categoryId: 0,
		}),
		method: 'POST',
	},
	delete_recipe: {
		url: base_url + '/api/Recipes/', // + id
		params: {},
		method: 'DELETE',
	},
	edit_recipe: {
		url: base_url + '/api/Recipes/', // + id
		params: JSON.stringify({
			id: 0,
			title: '',
			image: null,
			description: '',
			prepTime: '',
			cookTime: '',
			ingredients: '',
			tools: '',
			categoryId: 0,
		}),
		method: 'PUT',
	},

	// LOGIN
	login: {
		url: base_url + '/api/Login',
		params: JSON.stringify({
			email: '',
			password: '',
		}),
		method: 'PUT',
	},
};
