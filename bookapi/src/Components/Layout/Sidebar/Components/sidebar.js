import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

function BasicSideBarDetail({xPosition, setXpostion, setIsOpen}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentMenu = searchParams.get('menu');

    useEffect(() => {
        if (currentMenu) {
            setIsOpen(true)
            setXpostion(0)
        }
    }, [currentMenu])

    return (
        <S.Container xPosition={xPosition}>
            <S.Wrap>
                <ul>
                    <S.StyledLink to={'/introduce?menu=introduce'}><S.Li color={currentMenu === 'introduce'}>인기 도서 구경하기</S.Li></S.StyledLink>
                    <S.StyledLink to={'/search?menu=search'}><S.Li color={currentMenu === 'search'}>희망 도서 검색하기</S.Li></S.StyledLink>
                    <S.StyledLink to={'/add?menu=add'}><S.Li color={currentMenu === 'add'}>직접 책 소개글 등록하기</S.Li></S.StyledLink>
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
