import ScrollUpBtn from 'components/Layout/ScrollUp/scrollup';

import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SearchedMovies from './components/searchedMovies';
import SearchSkeleton from './components/searchSkeleton';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useInfiniteSearch } from 'hooks/queries/get-infinite-movieList';

function SearchPage() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const [ref, inView] = useInView();
	const word = searchParams.get('word');
	const { searchResults, isLoading, isFetchingNextPage, fetchNextPage } =
		useInfiniteSearch(word);

	const blank = new Array(3).fill(0);
	console.log(blank);

	useEffect(() => {
		if (!inView) {
			return;
		}
		fetchNextPage();
	}, [inView]);
	console.log(isFetchingNextPage);

	return (
		<Wrapper>
			<Container>
				{searchResults && searchResults.pages[0].data.results.length === 0 ? (
					<span>No result of "{word}"</span>
				) : (
					<span>Search results of "{word}"</span>
				)}

				{!isLoading
					? searchResults &&
					  searchResults.pages.map(
							page =>
								page &&
								page.data.results.map(movie => (
									<SearchedMovies key={movie.id} movie={movie} />
								)),
					  )
					: blank.map(() => <SearchSkeleton />)}
				{isFetchingNextPage ? blank.map(() => <SearchSkeleton />) : ''}
				<div ref={ref}></div>
				<ScrollUpBtn />
			</Container>
		</Wrapper>
	);
}

export default SearchPage;

const Wrapper = styled.div`
	background-color: black;
`;

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	background-color: black;
	padding: 20px 50px;
	> span {
		color: white;
		font-size: 30px;
	}
`;
