import axios from 'axios';

//axios request for searching for drinks by name or ingredients
export const searchAPI = (url, query) => {
	return axios({
		url: `${url}${query}`,
		method: 'GET',
	});
};
