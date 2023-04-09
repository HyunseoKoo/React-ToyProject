import styled from "styled-components";


function BookThumbnail() {

    return(
        <S.Wrap2>
            <S.Div2>1</S.Div2>
            <S.Div2>2</S.Div2>
            <S.Div2>3</S.Div2>
            <S.Div2>4</S.Div2>
        </S.Wrap2>
    )
}

export default BookThumbnail;

const Wrap2 = styled.div`
    padding: 100px;
    display: flex;
    justify-content: center;
`

const Div2 = styled.div`
    margin: 10px 30px;
    font-size: 20px;
`

const S = {
    Wrap2,
    Div2
}