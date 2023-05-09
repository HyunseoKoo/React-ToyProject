import { flexAllCenter } from 'Styles/common';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ToggleBar = () => {
	return (
		<S.Wrapper>
			<div>내 등록템</div>
			<div>유저 정보 수정</div>
			<div>내 관심템</div>
			<S.StyledLink to='/mypage/account_book'>가계부</S.StyledLink>
			<div>내 후기</div>
		</S.Wrapper>
	);
};

export default ToggleBar;

const Wrapper = styled.div`
	margin: 50px 0;
	${flexAllCenter}
	& > div {
		margin: 0 30px;
		font-size: ${({ theme }) => theme.fontSize.lg};
	}
`;

const StyledLink = styled(Link)`
		margin: 0 30px;
		text-decoration: none;
		font-size: ${({ theme }) => theme.fontSize.lg};
		color: ${({theme}) => theme.color.black};
		cursor: pointer;
`

const S = {
	Wrapper,
	StyledLink,
};
