import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AuthApi from 'Apis/authApi';
import useInputs from 'Hooks/CustomHook/useInputs';
// import { useForm } from 'react-hook-form';

const LoginPage = () => {
	const navigate = useNavigate();
	const [{email, pw}, onChangeForm] = useInputs({
		email: "",
		pw: ""
	});

	const onLoginForm = async (e) => {
		e.preventDefault();
		try {
			const res = await AuthApi.login(email, pw);
			console.log(res);// 확인용
			const {data} = res;
			localStorage.setItem('access_token', data.tokenForHeader);
			if(localStorage.getItem('access_token')) {
				navigate('/main')
			}
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
				<S.Form onSubmit={onLoginForm}>
					<p>로그인</p>
					<input placeholder="E-mail" name='email' onChange={onChangeForm}/>
					{/* {errors.email && <S.Error>{errors.email.message}</S.Error>} */}
					<input placeholder="PW" type="password" name='pw' onChange={onChangeForm}/>
					{/* {errors.password && <S.Error>{errors.password.message}</S.Error>} */}
					<S.Button>로그인</S.Button>
					<S.SignUpBtn onClick={() => navigate(`/form/signup`)}>
						신규회원이신가요?
					</S.SignUpBtn>
				</S.Form>
			</S.Wrap>
		</S.Div>
	);
};

export default LoginPage;
const Div = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Wrap = styled.div`
	height: 800px;
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	height: 45%;
	padding: 40px 30px;
	max-width: 700px;
	min-width: 600px;

	& > input {
		width: 80%;
		height: 40px;
		border: 1px solid ${({ theme }) => theme.color.subBeige};
		border-radius: 10px;
		margin: 10px 0px;
		display: flex;
		padding: 20px;
	}
	& > p:first-child {
		font-size: ${({ theme }) => theme.fontSize.lg};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		margin-bottom: 20px;
	}
`;

const Button = styled.button`
	height: 40px;
	width: 80%;
	border-radius: 10px;
	border: none;
	margin-top: 20px;
	background: ${({ theme }) => theme.color.primary};
	cursor: pointer;
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const SignUpBtn = styled.span`
	margin: 10px 0 0 370px;
	min-width: 95px;
	max-width: 100px;
	display: flex;
	right: 14%;
	color: #357aff;
	font-size: ${({ theme }) => theme.fontSize.xs};
	border-bottom: 1px solid #357aff;
	cursor: pointer;
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
	SignUpBtn,
	Error,
};
