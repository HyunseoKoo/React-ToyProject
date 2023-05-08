import AuthApi from 'Apis/authApi';
import useInputs from 'Hooks/CustomHook/useInputs';
import { flexAlignCenter, flexAllCenter } from 'Styles/common';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useForm } from 'react-hook-form';

const SignUpPage = () => {
	const navigate = useNavigate();
	const [{email, pw, pwConfirm, nickName, phone, region}, onChangeForm] = useInputs({
		email: "",
		pw: "",
		pwConfirm: "",
		nickName: "",
		phone: "",
		region: "",
	});
	const [message, setMessage] = useState('');

	const onSignUpSubmit = async (e) => {
		e.preventDefault();
		if(!email || !pw || !pwConfirm || !nickName || !phone || !region) {
			return alert('모든 정보를 입력해주세요');
		};

		try {
			const res = await AuthApi.signup(email, pw, nickName, phone, region);
			console.log(res); // 확인용
			if(!alert(res.data.message)) {
				navigate('/form/login')
			}
		} catch(err) {
			console.log(err);
		}
	};

	const onDoubleCheckNickName = async (e) => {
		e.preventDefault();
		try {
			const res = await AuthApi.nickNameDoubleCheck(nickName);
			console.log(res);// 확인용
			setMessage(res.data.message);
		} catch(err) {
			console.error(err);
		}
	};

	const onGetRefreshToken = async (e) => {
		e.preventDefault();
		try {
			const res = await AuthApi.getRefreshToken();
			console.log(res);// 확인용
		} catch(err) {
			console.error(err);
		}
	};
	

	return (
		<S.Div>
			<S.Wrap>
				<S.Header>
					<S.LogoImage src="/Assets/web_logo.png" />
				</S.Header>
				<S.Form onSubmit={onSignUpSubmit}>
					<p>회원가입</p>
					<S.InputWrapBtn>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>아이디</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<input placeholder='email을 입력해주세요' name='email' onChange={onChangeForm}/>
							<button>중복확인</button>
						</S.InputBoxWrap>
					</S.InputWrapBtn>
					{/* {errors.email && <S.Error>{errors.email.message}</S.Error>} */}
					<S.InputWrap>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>비밀번호</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<input placeholder='비밀번호를 입력해주세요' type="password" name='pw' onChange={onChangeForm}/>
						</S.InputBoxWrap>
					</S.InputWrap>
					{/* {errors.password && <S.Error>{errors.password.message}</S.Error>} */}
					<S.InputWrap>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>비밀번호 확인</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<input placeholder='비밀번호를 다시 확인해 주세요' type="password" name='pwConfirm' onChange={onChangeForm}/>
						</S.InputBoxWrap>
					</S.InputWrap>
					{/* {errors.confirmPW && <S.Error>{errors.confirmPW.message}</S.Error>} */}
					<S.InputWrapBtn>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>닉네임</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<input placeholder="Nick_Name" name='nickName' onChange={onChangeForm}/>
							<button onClick={onDoubleCheckNickName}>중복확인</button>
							{message && <div>{message}</div>}
						</S.InputBoxWrap>
					</S.InputWrapBtn>
					<S.InputWrap>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>전화번호</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<input placeholder="010-0000-0000" name='phone' onChange={onChangeForm}/>
						</S.InputBoxWrap>
					</S.InputWrap>
					<S.InputWrapBtn>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>주소</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<input placeholder="Address" name='region' onChange={onChangeForm}/>
							<button>주소찾기</button>
						</S.InputBoxWrap>
					</S.InputWrapBtn>
					<BtnWrap>
						<S.Button onClick={onGetRefreshToken}>토큰 재발급</S.Button>
						<S.Button>회원가입</S.Button>
					</BtnWrap>
				</S.Form>
			</S.Wrap>
		</S.Div>
	);
};

export default SignUpPage;

const Div = styled.div`
	width: 100%;
	${flexAllCenter}
`;

const Wrap = styled.div`
	width: 60%;
	flex-direction: column;
	${flexAllCenter}
`;

const Header = styled.div`
	width: 100%;
	height: 150px;
	padding-top: 50px;
	margin-bottom: 30px;
	display: flex;
	justify-content: center;
`;

const LogoImage = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const Form = styled.form`
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	border-radius: 10px;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	padding: 40px 30px;
	max-width: 700px;
	min-width: 600px;
	& > p {
		font-size: ${({ theme }) => theme.fontSize.lg};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		margin-bottom: 20px;
	}
`;

const Button = styled.button`
	height: 40px;
	width: 82%;
	border-radius: 10px;
	border: none;
	margin-top: 20px;
	cursor: pointer;
	background: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
`;

const ItemWrap = styled.div`
	display: flex;
	width: 20%;
	& > span {
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const InputBoxWrap = styled.div`
	${flexAlignCenter}
	width: 100%;
	& > input {
		width: 100%;
		height: 40px;
		border: 1px solid ${({ theme }) => theme.color.subBeige};
		border-radius: 10px;
		margin: 10px 0px;
		display: flex;
		padding: 20px;
		margin-left: 10px;
		padding-left: 10px;
	}

	& > button {
		width: 120px;
		height: 40px;
		border-radius: 10px;
		border: 1px solid ${({ theme }) => theme.color.primary};
		background: none;
		margin-left: 10px;
		cursor: pointer;
	}
`;
const InputWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
`;

const InputWrapBtn = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
`;

const Mark = styled.span`
	color: ${({ theme }) => theme.color.primary};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Error = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.primary};
`;

const S = {
	Div,
	Wrap,
	Header,
	LogoImage,
	Form,
	Button,
	InputWrap,
	InputWrapBtn,
	Mark,
	ItemWrap,
	InputBoxWrap,
	Error,
};
