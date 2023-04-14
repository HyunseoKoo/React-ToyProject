import styled from "styled-components";
import { flexCenter } from "../../Style/common";
import LoginForm from "./Components/Login/login";
import SignUpForm from "./Components/SignUp/signup";

function Home() {
    let textState = 'LOGIN'

    const onChangeForm = (e) => {
        textState = e.target.innerText;
    }
    
    return (
      <S.Container>
        <div>
            <h2>"책은 사람을 만들고</h2>
            <h3>사람은 책을 만든다"</h3>
            <h4>읽고 싶은 책이 있으신가요?</h4>
        </div>
        <S.Wrapper>
            <S.Header>
                <S.LoginSelector onClick={onChangeForm}>LOGIN</S.LoginSelector>
                <S.SignUpSelector onClick={onChangeForm}>SIGN</S.SignUpSelector>
            </S.Header>
        </S.Wrapper>
        {textState === 'LOGIN' ? <LoginForm/> : <SignUpForm/>}
      </S.Container>
    )
}

export default Home;

const Container = styled.div`
    display: inline;
`

const Wrapper = styled.div`
    width: calc(100vw - 500px);
    height: 200px;
    /* padding-bottom: 60px; */
    ${flexCenter}
`

const Header = styled.header`
    background-color: antiquewhite;
    width: 600px;
    height: 48px;
    /* position: relative; */
    display: flex;

    div {
        height: 100%;
        width: 50%;
        ${flexCenter}
        cursor: pointer;
        :hover {
            background-color: #e0e0e0;
        }
    }
`

const LoginSelector = styled.div`
`

const SignUpSelector = styled.div`
`

const S = {
    Container,
    Wrapper,
    Header,
    LoginSelector,
    SignUpSelector
}