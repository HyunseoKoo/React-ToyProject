import styled from "styled-components";

function BasicHeader() {

    return(
        <S.Wrap>
            <div>BasicHeader</div>
        </S.Wrap>
    )
}

export default BasicHeader;

const Wrap = styled.div`
    height: 300px;
    background-color: pink;
`

const S = {
    Wrap
}