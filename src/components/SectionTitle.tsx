import styled from "styled-components";
import {theme} from "../styles/Theme.ts";


export const SectionTitle = styled.h2`
    color: #07CEB8;
    font-weight: 500;
    font-size: ${theme.fontsize_title.laptop};
    min-width: 100%;
    line-height: 1.2;
    margin-bottom: 2vh;

    u {
        text-decoration: none;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background: #07CEB8;
        }
    }

    @media ${theme.media.tablet}, ${theme.media.laptop} {
        font-size: ${theme.fontsize_title.tablet};
        margin-bottom: 15px;
        
    }

    @media ${theme.media.mobile} {
        font-size: ${theme.fontsize_title.mobile};
    }
`;