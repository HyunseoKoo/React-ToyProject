import MovieSlider from './Banner/Slider';
import { usePopular } from 'hooks/queries/get-movie-infos';
import styled from 'styled-components';

const MoviePreviewSlider = () => {
	const { popular } = usePopular();

	return <Wrapper>{popular && <MovieSlider data={popular} />}</Wrapper>;
};

export default MoviePreviewSlider;

const Wrapper = styled.div`
	background-color: black;
	min-width: 768px;
	padding-bottom: 100px;
`;
