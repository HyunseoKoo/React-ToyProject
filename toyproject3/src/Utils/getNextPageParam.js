// import MovieApi from 'Apis/movieApi';

// const { useInfiniteQuery } = require('@tanstack/react-query');
// const { QUERY_KEY } = require('Consts/queryKey');
// const c = (api, pageParam) => {
// 	return api(pageParam);
// };
// MovieApi.getNowPlaying();
// export const a = (key, api) => {
// 	return useInfiniteQuery(
// 		[key],
// 		({ pageParam = 1 }) => api.getNowPlaying(pageParam),
// 		{
// 			getNextPageParam: lastPage => {
// 				if (lastPage.data.page < lastPage.data.total_pages) {
// 					return lastPage.data.page + 1;
// 				} else {
// 					return undefined;
// 				}
// 			},
// 		},
// 	);
// };
