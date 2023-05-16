import styled from 'styled-components';
import { Button } from '../style';

const EditBtns = () => {
	return (
		<S.Wrap>
			<Button variant={'primary'} shape={'shape2'}>수정</Button>
			<Button variant={'primary'} shape={'shape2'}>삭제</Button>
		</S.Wrap>
	);
};
export default EditBtns;

const Wrap = styled.div`
	& > * {
		background-color: ${({ theme }) => theme.color.white};
		margin-right: 5px;
		border-radius: 5px;
		cursor: pointer;
	}
	/* & > button:first-child {
		border: 2px solid ${({ theme }) => theme.color.subLightGreen};
	}
	& > button:last-child {
		border: 2px solid ${({ theme }) => theme.color.subBeigeGreen};
	} */
`;

const S = {
	Wrap,
};
