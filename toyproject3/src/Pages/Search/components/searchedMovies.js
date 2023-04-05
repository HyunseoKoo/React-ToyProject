import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexAlignCenter } from 'Styles/common';
import { IMAGE_URL } from 'Consts/URL';
function SearchedMovies({ movie }) {
	const IMG_BASE_URL = IMAGE_URL(300);
	const navigate = useNavigate();
	const goDetail = () => {
		navigate(`/detail/${movie.id}`);
	};

	let score;
	if (movie.vote_average !== 0) {
		score = `⭐${movie.vote_average.toFixed(1)}`;
	} else {
		const releaseDate = new Date(movie.release_date);
		const currentDate = new Date();
		if (releaseDate > currentDate) {
			score = `It will be released on ${movie.release_date} .`;
		} else {
			score = 'Sorry, there are not enough rating data yet.';
		}
	}

	return (
		<Wrapper onClick={goDetail}>
			<Poster>
				{movie.poster_path ? (
					<img
						src={IMG_BASE_URL + movie.poster_path}
						alt="포스터"
						width="100%"
						height="100%"
					/>
				) : (
					<img
						src="/Assets/backdrop.png"
						alt="포스터 없음"
						width="100%"
						height="100%"
					/>
				)}
			</Poster>
			<Info>
				<Top>
					<Title>{movie.title}</Title>
					<Score>{score}</Score>
				</Top>
				<Preview> {movie.overview}</Preview>
			</Info>
		</Wrapper>
	);
}
export default SearchedMovies;

const Wrapper = styled.div`
	color: white;
	background-color: black;
	height: 40vh;
	list-style: none;
	margin: 0;
	padding: 50px;
	border: 1px double grey;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	margin-top: 30px;
`;

const Poster = styled.div`
	width: 230px;
	height: 300px;
`;

const Info = styled.div`
	width: 80%;
	height: 100%;
	padding: 50px;
`;
const Top = styled.div`
	${flexAlignCenter}
	margin-bottom: 30px;
`;
const Title = styled.div`
	height: 100%;
	font-weight: 900;
	font-size: 30px;
	margin-right: 20px;
`;

const Preview = styled.div`
	width: 100%;
	font-size: 20px;
	line-height: 30px;
	font-weight: lighter;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
`;
const Score = styled.div`
	width: 60%;
	height: 100%;
	display: flex;
	align-items: center;
`;
