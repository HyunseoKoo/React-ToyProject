import styled from "styled-components";

function LoginForm() {

    return(
        <S.Wrapper>
            <div>
                <input placeholder="e-mail"/>
                <span>이메일</span>
            </div>
            <div>
                <input type="password" placeholder="password"/>
                <span>비밀번호</span>
            </div>
            <button>로그인</button>
        </S.Wrapper>
    )
}

export default LoginForm;

const Wrapper = styled.form`
    width: 600px;
    height: 48px;
`

const S = {
    Wrapper
}