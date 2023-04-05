import ScrollUpBtn from 'components/Layout/ScrollUp/scrollup';
import styled from 'styled-components';
import Preview from './Preview/preview';
import {
	useNowPlaying,
	useTopRated,
	useUpComing,
} from 'hooks/queries/get-movie-infos';

const MoviePreviewCard = () => {
	const now = 'Now Playing';
	const top = 'Top Rated';
	const up = 'Up coming';
	const nowTo = 'now_playing';
	const topTo = 'top_rated';
	const upTo = 'upcoming';

	const { nowPlaying } = useNowPlaying(1);
	const { topRated } = useTopRated(1);
	const { upComing } = useUpComing(1);

	return (
		<Wrapper>
			{nowPlaying && <Preview data={nowPlaying} word={now} nav={nowTo} />}
			{topRated && <Preview data={topRated} word={top} nav={topTo} />}
			{upComing && <Preview data={upComing} word={up} nav={upTo} />}
			<ScrollUpBtn />
		</Wrapper>
	);
};

export default MoviePreviewCard;

const Wrapper = styled.div`
	background-color: black;
	min-width: 768px;
`;
