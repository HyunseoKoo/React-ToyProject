import { IMAGE_URL } from 'Consts/URL';
import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const IMG_BASE_URL = IMAGE_URL(1280);

function MovieCard({ movie }) {
	const navigate = useNavigate();

	return (
		<S.Wrapper onClick={() => navigate(`/detail/${movie.id}`)}>
			<S.Container>
				<S.MoviePoster
					src={
						movie.poster_path
							? IMG_BASE_URL + movie.poster_path
							: '/Assets/backdrop.png'
					}
				/>
				<S.MovieInfo>
					<div>
						<S.MovieTitle>{movie.title}</S.MovieTitle>
						<S.Rating>⭐{movie.vote_average}</S.Rating>
					</div>
					<S.OverviewText>{movie.overview}</S.OverviewText>
				</S.MovieInfo>
			</S.Container>
		</S.Wrapper>
	);
}

export default MovieCard;

const Wrapper = styled.div`
	display: flex;
	flex: 1;
`;

const Container = styled.div`
	cursor: pointer;
	width: 300px;
	height: 450px;
	margin: 10px;
	border-radius: 5px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	@media (max-width: 768px) {
		width: 120px;
		height: 200px;
	}
	:hover {
		& > img {
			height: 0%;
		}
	}
`;

const MoviePoster = styled.img`
	width: 100%;
	height: 100%;
	object-fit: fill;
`;

const MovieInfo = styled.div`
	padding: 30px 20px;
	display: flex;
	flex-direction: column;
	height: 100%;
	background-color: black;
	color: white;
	@media (max-width: 768px) {
		padding: 20px 10px;
	}
	& div {
		display: flex;
		flex-direction: column;
		margin-bottom: 30px;
		@media (max-width: 768px) {
			margin-bottom: 10px;
		}
	}
`;

const MovieTitle = styled.h3`
	font-size: 25px;
	font-weight: bolder;
	margin-bottom: 15px;
	@media (max-width: 1000px) {
		font-size: 18px;
	}
	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

const Rating = styled.span`
	background-color: #f44336;
	color: #fff;
	width: 60px;
	text-align: center;
	padding: 5px;
	border-radius: 5px;
	font-size: 15px;
	font-weight: bold;
	@media (max-width: 768px) {
		width: 40px;
		font-size: 10px;
	}
`;

const OverviewText = styled.span`
	font-size: 20px;
	font-weight: lighter;
	line-height: 30px;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-top: 30px;
	display: -webkit-box;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;
	@media (max-width: 1000px) {
		font-size: 15px;
		line-height: 20px;
		-webkit-line-clamp: 4;
	}
	@media (max-width: 768px) {
		font-size: 10px;
		line-height: 15px;
		-webkit-line-clamp: 4;
	}
`;

const S = {
	Wrapper,
	Container,
	MoviePoster,
	MovieInfo,
	MovieTitle,
	Rating,
	OverviewText,
};
