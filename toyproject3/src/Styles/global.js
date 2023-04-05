import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        @font-face {
		font-family: 'KCC';
		src: url('/Assets/Goyang.ttf');
	    }
        font-family: 'KCC';
    }
    body{
       
        font-family: 'KCC';
    }
`;
export default GlobalStyles;
