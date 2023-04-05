import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const SearchSkeleton = () => {
	return Array(4)
		.fill(0)
		.map(() => (
			<Wrapper>
				<Skeleton
					variant="rectangular"
					sx={{
						width: '230px',
						height: '300px',
						bgcolor: '#d9d9d9',
						marginLeft: '50px',
						marginRight: '50px',
						my: '50px',
					}}
					animation="wave"
				/>

				<Skeleton
					variant="rectangular"
					sx={{
						width: '700px',
						height: '300px',
						bgcolor: '#d9d9d9',
						marginRight: '50px',
						my: '50px',
					}}
					animation="wave"
				/>
			</Wrapper>
		));
};
export default SearchSkeleton;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 40vh;
	border: 1px double grey;
	border-radius: 25px;
`;
