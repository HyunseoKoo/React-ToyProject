import UserApi from 'Apis/userApi';
import MannerMeter from 'Components/Icon/Icon';
import Profile from 'Components/Profile/Desktop/profile';
import TokenService from 'Repository/TokenService';

import { flexAllCenter } from 'Styles/common';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MyProfile = ({ userInfo, userProfile }) => {
	const navigate = useNavigate();
	const [myProfile, setMyProfile] = useState();

	const onClickLogOutBtn = async () => {
		try {
			const res = await UserApi.logout();
			if (res.status === 200) {
				TokenService.removeToken();
				alert('로그아웃 되었습니다');
				navigate('/');
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<S.Wrapper>
			<div>
				<div>
					<Profile />
				</div>
				<div>{userProfile?.User.nickName}</div>
				<S.Icon>
					<MannerMeter ondo={userProfile?.ondo} />
				</S.Icon>
				<div>{userInfo?.region}</div>
			</div>
			<div>
				<div onClick={onClickLogOutBtn}>로그아웃</div>
			</div>
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
