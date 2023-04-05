import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const CardSkeleton = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<Stack spacing={1}>
					<Skeleton variant="rectangular" width={1000} height={500} />
				</Stack>
			</S.Container>
		</S.Wrapper>
	);
};

export default CardSkeleton;

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	position: absolute;
`;

const Container = styled(Skeleton)`
	width: 80%;
	height: 450px;
	margin: 10px;
	border-radius: 5px;
	overflow: hidden;
	position: relative;
	@media (max-width: 1000px) {
		width: 180px;
		height: 260px;
	}
	@media (max-width: 768px) {
		width: 100px;
		height: 180px;
	}
`;

const S = {
	Wrapper,
	Container,
};
