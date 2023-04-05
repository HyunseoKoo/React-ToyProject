import MovieCard from 'components/Card/Card';
import ScrollUpBtn from 'components/Layout/ScrollUp/scrollup';
import { useInfiniteTopRated } from 'hooks/queries/get-infinite-movieList';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const TopRatedList = () => {
	const res = useInfiniteTopRated();
	const { data } = res;

	const [ref, inView] = useInView();

	useEffect(() => {
		if (!inView) {
			return;
		}
		res.fetchNextPage();
	}, [inView]);

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<S.Wrapper>
			<S.Container>
				<S.Title>TOP RATED LIST</S.Title>
				<S.Card>
					{data?.pages.map(page => {
						return page?.data.results.map(page => <MovieCard movie={page} />);
					})}
				</S.Card>
			</S.Container>
			<ScrollUpBtn />
			<div ref={ref}></div>
		</S.Wrapper>
	);
};

export default TopRatedList;

const Wrapper = styled.div`
	width: 100%;
	padding: 50px 0;
	background-color: black;
	color: white;
`;

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 30px;
`;

const Card = styled.div`
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	flex-basis: 0px;
`;

const S = {
	Wrapper,
	Container,
	Title,
	Card,
};
