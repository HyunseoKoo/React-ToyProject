import { useState } from "react";
import styled from "styled-components";
import BasicSideBar from "./Components/sidebar";

function BasicSideBarButton({width=280, children}) {
    const [isOpen, setIsOpen] = useState(false);
    const [xPosition, setX] = useState(width)

    const onOpenSidebar = () => {
        if(xPosition > 0) {
            setX(0);
            setIsOpen(true);
        } else {

        }
    }
    

    return (
        <S.Wrap>
            <S.Button onClick={onOpenSidebar}>Menu</S.Button>
            {onOpenSidebar && onOpenSidebar? <BasicSideBar/> : <div>과연</div>}
        </S.Wrap>
    )
}

export default BasicSideBarButton;

const Wrap = styled.div`
    height: calc(100vh - 300px);
    width: 20vw;
`

const Button = styled.button`
    width: 100px;
    height: 50px;
    margin: 10px;
    background-color: #e9e9e9;
    border: solid 1px black;
    border-radius: 30px;
    font-size: 20px;
    cursor: pointer;
`

const S = {
    Wrap,
    Button
}