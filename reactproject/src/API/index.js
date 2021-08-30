const base_url = 'https://localhost:44313';

export const API = {
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
			content: '',
			totalDonation: 0,
			sponsor: '',
			startDate: '',
			endDate: '',
		}),
		method: 'POST',
	},
};
