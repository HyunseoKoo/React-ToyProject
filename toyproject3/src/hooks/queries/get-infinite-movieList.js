import { useInfiniteQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { QUERY_KEY } from 'Consts/queryKey';

export const useInfiniteNowPlay = () => {
	const res = useInfiniteQuery(
		[QUERY_KEY.INFINITE_NOW_PLAY],
		({ pageParam = 1 }) => MovieApi.getNowPlaying(pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage.data.page < lastPage.data.total_pages) {
					return lastPage.data.page + 1;
				} else {
					return undefined;
				}
			},
		},
	);
	return res;
};

export const useInfiniteTopRated = () => {
	const res = useInfiniteQuery(
		[QUERY_KEY.INFINITE_TOPRATED],
		({ pageParam = 1 }) => MovieApi.getTopRated(pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage.data.page < lastPage.data.total_pages) {
					return lastPage.data.page + 1;
				} else {
					return undefined;
				}
			},
		},
	);

	return res;
};

export const useInfiniteUpComing = () => {
	const res = useInfiniteQuery(
		[QUERY_KEY.INFINITE_UPCOMING],
		({ pageParam = 1 }) => MovieApi.getUpComing(pageParam),
		{
			getNextPageParam: lastPage => {
				if (lastPage.data.page < lastPage.data.total_pages) {
					return lastPage.data.page + 1;
				} else {
					return undefined;
				}
			},
		},
	);

	return res;
};

export const useInfiniteSearch = word => {
	const {
		data: searchResults,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
		isLoading,
	} = useInfiniteQuery(
		[QUERY_KEY.INFINITE_SEARCH],
		({ pageParam = 1 }) => MovieApi.getSearch(word, pageParam),
		{
			onError: () => console.log('에러'),
			getNextPageParam: lastPage => {
				if (lastPage.data.page < lastPage.data.total_pages) {
					return lastPage.data.page + 1;
				} else {
					return undefined;
				}
			},
		},
	);
	return {
		isLoading,
		searchResults,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
	};
};
