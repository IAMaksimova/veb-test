import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

const FormHeader = styled.div`
    text-align: center;
    margin-bottom: 32px;
`

const FormTitle = styled.h2`
    font-size: 32px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 8px;
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, #07CEB8, #2d3748);
        border-radius: 3px;
    }

    @media ${theme.media.mobile} {
        font-size:24px;;
        margin-bottom: 6px;
    }
`;

const FormSubtitle = styled.p`
    font-size: 16px;
    color: #718096;
    margin-top: 15px;

    @media ${theme.media.mobile} {
        font-size: 14px;
        margin-top: 15px;
    }
`;

export const S = {
    FormHeader,
    FormTitle,
    FormSubtitle
}