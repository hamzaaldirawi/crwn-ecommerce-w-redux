import styled from 'styled-components';

import { Link } from 'react-router-dom';

//import styled, {css} from 'styled-components';
// {css} allow us to write a block of css that can pass in and render as css inside of any of a style component 
// to not repeat our code
// we will write only for Link and in JSX consider it as = 'div' 

/*const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
    text-transform: uppercase;
`;
*/

export const HeaderContainer = styled.div`
    height: 70px; 
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

// Used css as js inside component 
export const OptionLink =styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    text-transform: uppercase;
`;
/*
export const OptionDiv = styled.div`
    ${OptionContainerStyles};
    
`
*/