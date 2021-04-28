import axios from 'axios';
export const searchAPI = (url, query) => {
	return axios({
		url: `${url}${query}`,
		method: 'GET',
	});
};
