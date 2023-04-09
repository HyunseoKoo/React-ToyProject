import { useState } from "react";
import styled from "styled-components";
import BasicSideBarToggle from "./Components/sidebar";


function BasicSideBarMain() {
    const [isOpen, setIsOpen] = useState(false);
    const [xPosition, setXpostion] = useState(-500);
    
    const onCtrlSidebar = () => {
        if(xPosition < 0) {
            setXpostion(0);
            setIsOpen(true)
        } else {
            setXpostion(-500)
            setIsOpen(false)
        }
    }
    
    return (
        <S.Wrap>
            {<S.Button onClick={onCtrlSidebar}>{isOpen? 'X' : 'menu'}</S.Button>}
            <BasicSideBarToggle xPosition={xPosition} setXpostion={setXpostion} setIsOpen={setIsOpen}/>
        </S.Wrap>
    )
}

export default BasicSideBarMain;

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
    position: fixed;
    top: 330px;
    bottom: 200px;
    left: 0;
    cursor: pointer;
`

const S = {
    Wrap,
    Button
}