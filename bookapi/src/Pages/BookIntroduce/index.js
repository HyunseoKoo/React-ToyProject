import { useEffect, useState } from "react";
import { useBookList } from "../../Hooks/Queries/get-booksList";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Introduce() {
    const [title, setTitle] = useState('2023 제14회 젊은작가상 수상작품집');
    const { data: bookInfo } = useBookList(title);
    const info = title && bookInfo && bookInfo.data.documents;

    // 확인용
    useEffect(() => {
        info && console.log(info[0]);
    },[bookInfo])

    const {authors, contents, price, publisher, thumbnail, title2, url} = bookInfo && info[0];

    return (
                <S.Container>
                    <S.Wrap>
                    {bookInfo && info && (
                        <>
                        <S.Img src={thumbnail}/>
                        <S.Contain>
                            <S.Title>{title2}</S.Title>
                            <S.Div>작가: {authors[0]} 외</S.Div>
                            <S.Div>가격: {price}원</S.Div>
                            <S.Div>출판사: {publisher}</S.Div>
                            <S.Div>{contents}</S.Div>
                            <S.Div><Link to={url}>참고</Link></S.Div>
                        </S.Contain>
                        </>
                    )}           
                    </S.Wrap>
                    <S.Wrap2>
                        <S.Div2>1</S.Div2>
                        <S.Div2>2</S.Div2>
                        <S.Div2>3</S.Div2>
                        <S.Div2>4</S.Div2>
                    </S.Wrap2>
                </S.Container>
                )
}

export default Introduce;

const Container = styled.div`
    display: inline;
`

const Wrap = styled.div`
    padding: 100px;
    display: flex;
`

const Wrap2 = styled.div`
    padding: 100px;
    display: flex;
    justify-content: center;
`

const Img = styled.img`
    width: 350px;
    height: 450px;
    border: solid 0.5px black;
`
const Contain = styled.div`
    margin: 0 30px 30px;
`
const Title = styled.div`
    margin-bottom: 20px;
    margin-left: 30px;  
    font-size: 30px;
    font-weight: 30px;
`
const Div = styled.div`
    margin-bottom: 20px;
    margin-left: 50px;
    font-size: 20px;
    width: 800px;
    line-height: 1.3em;
`

const Div2 = styled.div`
    margin: 10px 30px;
    font-size: 20px;
    cursor: pointer;
`

const S = {
    Container,
    Wrap,
    Wrap2,
    Img,
    Contain,
    Title,
    Div,
    Div2
}