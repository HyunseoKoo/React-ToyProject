import { Axios } from './@core';

const MOVIE_PATH = 'movie';
const SEARCH_PATH = 'search';

const MovieApi = {
	getNowPlaying(params) {
		return Axios.get(MOVIE_PATH + '/now_playing', {
			params: {
				page: params,
			},
		});
	},

	getTopRated(params) {
		return Axios.get(MOVIE_PATH + '/top_rated', {
			params: {
				page: params,
			},
		});
	},

	getUpComing(params) {
		return Axios.get(MOVIE_PATH + '/upcoming', {
			params: {
				page: params,
			},
		});
	},

	getPopular() {
		return Axios.get(MOVIE_PATH + '/popular');
	},

	getSearch(searchKey, params) {
		return Axios.get(SEARCH_PATH + '/' + MOVIE_PATH, {
			params: { query: searchKey, page: params },
		});
	},

	getDetailInfo(params) {
		return Axios.get(MOVIE_PATH + `/${params}`);
	},

	getVideos(params) {
		return Axios.get(MOVIE_PATH + `/${params}/videos`);
	},
};

export default MovieApi;
