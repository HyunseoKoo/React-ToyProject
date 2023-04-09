import { Outlet } from "react-router-dom";
import BasicHeader from "./Header/header";
import BasicFooter from "./Footer/footer";
import BasicSideBar from "./Sidebar";
import styled from 'styled-components';
import BasicSideBarButton from "./Sidebar";

function Layout() {
    return (
        <>
            <BasicHeader />
            <S.Display>
                <BasicSideBarButton />
                <Outlet/>
            </S.Display>
            <BasicFooter />
        </>
    )
}

export default Layout;

const Display = styled.div`
    display: flex;
`

const S = {
    Display,
}

