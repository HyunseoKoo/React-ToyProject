// https://image.tmdb.org/t/p/

export const IMAGE_URL = width => {
	const baseURL = `https://image.tmdb.org/t/p/w${width}`;
	return baseURL;
};

export const VIDEO_URL = videoId => {
	const baseURL = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
	return baseURL;
};
