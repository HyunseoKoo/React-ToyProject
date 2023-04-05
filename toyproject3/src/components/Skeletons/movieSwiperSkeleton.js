import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

import styled from 'styled-components';

const SliderSkeleton = () => {
	return (
		<S.Wrapper>
			<S.SwiperWrapper variant="rectangular"></S.SwiperWrapper>
		</S.Wrapper>
	);
};

export default SliderSkeleton;

const Wrapper = styled.div`
	width: 100%;
	height: 30%;
	/* padding-top: 50px; */
	/* & > div {
		overflow: hidden;
	} */
`;

const SwiperWrapper = styled(Skeleton)`
	width: 80%;
	height: 450px;
	margin: 0 auto;
	padding: 0px 20px;
`;

export const S = {
	Wrapper,
	SwiperWrapper,
};
