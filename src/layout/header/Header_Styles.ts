import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Header = styled.header`
    width: 100%;
    height: auto;
    padding: 1vh 7vw;
    top: 0;
    z-index: 15;
    position: fixed;
    background-color: white;
    transition: all 0.3s ease;

    @media ${theme.media.tablet} {
        height: 8vh;
        padding: 0 5vw;
    }
`;

const DesktopMenuWrapper = styled.div`
    display: block;
    
    @media ${theme.media.tablet} {
        display: none;
    }
`;

const MobileMenuWrapper = styled.div`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`;

export const S = {
    Header,
    DesktopMenuWrapper,
    MobileMenuWrapper
}