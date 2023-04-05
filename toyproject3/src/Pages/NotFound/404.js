import styled from 'styled-components';
import { flexAllCenter } from 'Styles/common';

function NotFoundPage() {
	return (
		<BG>
			<img src="/Assets/notFound.png"></img>
			<span>페이지가 없다냥</span>
		</BG>
	);
}

export default NotFoundPage;

const BG = styled.div`
	width: 100%;
	padding: 400px 100px;
	${flexAllCenter}
	flex-direction: column;
	> span {
		margin-top: 50px;
		font-size: 80px;
	}
`;
