import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { queryConfig } from './@config';
import { QUERY_KEY } from 'Consts/queryKey';

export const usePopular = () => {
	const { data: popular } = useQuery(
		[QUERY_KEY.POPULAR],
		() => MovieApi.getPopular(),
		queryConfig,
	);
	return { popular };
};

export const useNowPlaying = nowPlayingLst => {
	const { data: nowPlaying } = useQuery(
		[QUERY_KEY.NOW_PLAYING],
		() => MovieApi.getNowPlaying(nowPlayingLst),
		queryConfig,
	);
	return { nowPlaying };
};

export const useTopRated = topRatedList => {
	const { data: topRated } = useQuery(
		[QUERY_KEY.TOP_RATED],
		() => MovieApi.getTopRated(topRatedList),
		queryConfig,
	);
	return { topRated };
};

export const useUpComing = upComingList => {
	const { data: upComing } = useQuery(
		[QUERY_KEY.UP_COMING],
		() => MovieApi.getUpComing(upComingList),
		queryConfig,
	);
	return { upComing };
};

export const useDetailInfo = movieId => {
	const { data } = useQuery(
		[QUERY_KEY.GET_DETAIL],
		() => MovieApi.getDetailInfo(movieId),
		queryConfig,
	);
	return { data };
};

export const useVideo = movieId => {
	const { data } = useQuery(
		[QUERY_KEY.GET_VIDEO],
		() => MovieApi.getVideos(movieId),
		queryConfig,
	);
	return { data };
};
