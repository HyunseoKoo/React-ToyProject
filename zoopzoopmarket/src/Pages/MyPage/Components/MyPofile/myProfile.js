import AuthApi from 'Apis/authApi';
import MannerMeter from 'Components/Icon/Icon';
import Profile from 'Components/Profile/Desktop/profile';
import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const MyProfile = () => {
	const onLogoutForm = async (e) => {
		e.preventDefault();
		try {
			const res = await AuthApi.logout();
			console.log(res); // 확인용
			localStorage.removeItem('access_token');
		} catch(err) {
			console.error(err);
		}
	}
	return (
		<S.Wrapper>
			<div>
				<div>
					<Profile />
				</div>
				<div>닉네임</div>
				<S.Icon>
					<MannerMeter />
				</S.Icon>
				<div>내 지역</div>
			</div>
			<form onSubmit={onLogoutForm}>
				<button>로그아웃</button>
			</form>
		</S.Wrapper>
	);
};

export default MyProfile;

const Wrapper = styled.div`
	${flexAllCenter}
	justify-content: space-between;
	& > div:first-child {
		${flexAllCenter}
		&>div>* {
			margin: 0 20px;
		}
	}
`;

const Icon = styled.div`
	${flexAllCenter}
	justify-content: start;
`;

const S = {
	Wrapper,
	Icon,
};
