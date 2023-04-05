import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexAlignCenter, flexSpaceBetween } from 'Styles/common';

const BasicFooter = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Content>
					<div>used OPEN_API</div>
					<Link
						to={'https://developers.themoviedb.org/3/movies/get-movie-details'}
					>
						[Link]
					</Link>
				</S.Content>
				<S.Content>
					<div>our Github</div>
					<Link to={'https://github.com/Frontend-TEAM1'}> [Link]</Link>
				</S.Content>
			</S.Container>
			<S.Container>
				<div>Member's Github</div>
				<S.Content>
					<div>Hyunseo Koo</div>
					<Link to={'https://github.com/HyunseoKoo'}> [Link]</Link>
				</S.Content>
				<S.Content>
					<div>Nasil Kim</div>
					<Link to={'https://github.com/nasilKiM'}> [Link]</Link>
				</S.Content>
				<S.Content>
					<div>JaeHoon Lee</div>
					<Link to={'https://github.com/JaeHoonKOR'}> [Link]</Link>
				</S.Content>
				<S.Content>
					<div>Juram Lee</div>
					<Link to={'https://github.com/JuramLee'}> [Link]</Link>
				</S.Content>
				<S.Content>
					<div>YoungSeung Jang</div>
					<Link to={'https://github.com/YoungSeungJang'}> [Link]</Link>
				</S.Content>
			</S.Container>
			<img src="/Assets/footerImg.png" />
		</S.Wrapper>
	);
};

export default BasicFooter;

const Wrapper = styled.div`
	width: 100%;
	padding: 80px 100px 40px 100px;
	background-color: black;
	/* ${flexSpaceBetween} */
	${flexAlignCenter}
	> div {
		color: white;
		@media (max-width: 768px) {
			font-size: 0.8rem;
		}
	}
	> img {
		height: 200px;
		position: absolute;
		right: 100px;
		@media (max-width: 768px) {
			height: 100px;
		}
	}
`;

const Container = styled.div`
	width: 30%;
	height: 200px;
	line-height: 30px;
	@media (max-width: 768px) {
		margin: 0 20px;
	}
`;

const Content = styled.div`
	${flexAlignCenter}
	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`;

const S = {
	Wrapper,
	Container,
	Content,
};
