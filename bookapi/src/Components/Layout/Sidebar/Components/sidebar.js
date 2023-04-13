import { useEffect, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

function BasicSideBarDetail({xPosition, setXpostion, setIsOpen}) {

    // 메뉴 이동 후 새로고침해도 페이지 유지되게 하기 위해서 useSearchParams 이용했으나 useParams 코드가 깔끔할것 같아 아래와 같이 리팩터링
    // const [searchParams, setSearchParams] = useSearchParams();
    // const currentMenu = searchParams.get('menu');

    // useParams 사용해서 리팩터링 시도
    const {menu} = useParams();
    menu && console.log(menu);

    useEffect(() => {
        if (menu) {
            setIsOpen(true)
            setXpostion(0)
        }
    }, [menu])

    return (
        <S.Container xPosition={xPosition}>
            <S.Wrap>
                <ul>
                    <S.StyledLink to={'/menu1/introduce'}><S.Li color={menu === 'introduce'}>인기 도서 구경하기</S.Li></S.StyledLink>
                    <S.StyledLink to={'/menu2/search'}><S.Li color={menu === 'search'}>희망 도서 검색하기</S.Li></S.StyledLink>
                    <S.StyledLink to={'/menu3/add'}><S.Li color={menu === 'add'}>직접 책 소개글 등록하기</S.Li></S.StyledLink>
                </ul>
            </S.Wrap>
        </S.Container>
    )
}

export default BasicSideBarDetail;

const Container = styled.div`
    height: 500px;
    width: 350px;
    background-color: #e9e9e9;
    position: fixed;
    top: 400px;
    bottom: 200px;
    left: 0;
    transform: translateX(${({xPosition}) => (`${xPosition}px`)});
    transition: 0.4s ease;
`

const Wrap = styled.div`
    padding-top: 30px;
`

const Li = styled.li`
    list-style: none;
    margin: 30px 0;
    cursor: pointer;
    color: ${({color}) => ((color)? 'blue' : 'black' )}
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black
`

const S = {
    Container,
    Wrap,
    Li,
    StyledLink,
}
