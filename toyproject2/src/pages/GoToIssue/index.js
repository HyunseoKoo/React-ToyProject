import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';

function GoToIssue() {
	const navigate = useNavigate();
	return (
		<Wrap>
		<GoTo onClick={() => navigate('/issues?perpage=10&page=1&sort=created')}>
			ISSUES
		</GoTo>
		</Wrap>
	);
}

export default GoToIssue;

const GoTo = styled.div`
	${flexCenter}
	margin: ${({ theme }) => theme.margin.xxLarge} auto;
	margin-top: 200px;
	padding: ${({ theme }) => theme.padding.xxLarge};
	border: 1px solid;
	width: 25%;
	cursor: pointer;
`;

const Wrap = styled.div`
	height: 30vh;
`
