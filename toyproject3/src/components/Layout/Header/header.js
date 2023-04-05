import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexSpaceBetween } from 'Styles/common';
import SearchBar from './search';

const BasicHeader = () => {
	const navigate = useNavigate();

	return (
		<S.HeaderWrapper>
			<S.HeaderLogo onClick={() => navigate('/')}>
				<img src="/Assets/mascot_cat_with_text.png" />
				{/* <span>MOVIE CAT-CHA</span> */}
			</S.HeaderLogo>
			<SearchBar />
			<S.HeaderMenu>
				<div onClick={() => navigate('/movie/now_playing')}>상영</div>
				<div onClick={() => navigate('/movie/upcoming')}>예정</div>
				<div onClick={() => navigate('/movie/top_rated')}>인기</div>
			</S.HeaderMenu>
		</S.HeaderWrapper>
	);
};

export default BasicHeader;

const HeaderWrapper = styled.div`
	width: 100%;
	min-width: 768px;
	padding: 50px 100px;
	${flexSpaceBetween}
	color: white;
	background-color: black;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const HeaderLogo = styled.div`
	height: 50px;
	width: 300px;
	${flexSpaceBetween}
	> img {
		cursor: pointer;
		width: 150px;
		@media (max-width: 768px) {
			width: 100px;
		}
	}
	> span {
		cursor: pointer;
		font-size: 23px;
		@media (max-width: 768px) {
			font-size: 20px;
		}
	}
`;

const HeaderMenu = styled.div`
	width: 300px;
	${flexSpaceBetween};
	@media (max-width: 768px) {
		width: 250px;
	}
	& > div:hover {
		font-size: 1.1rem;
		cursor: pointer;
		transform: scale(1.2);
	}
`;

const S = {
	HeaderWrapper,
	HeaderLogo,
	HeaderMenu,
};
