import styled from "styled-components";

function BasicSideBar() {

    return (
        <S.Wrap>
            <div>BasicSideBar</div>
        </S.Wrap>
    )
}

export default BasicSideBar;

const Wrap = styled.div`
    height: calc(100vh - 300px);
    width: 20vw;
    background-color: #e9e9e9;
    z-index: 6;
`

const S = {
    Wrap
}