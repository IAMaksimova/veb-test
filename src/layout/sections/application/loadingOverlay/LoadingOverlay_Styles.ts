import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import {spin} from "../Application_Styles.ts";

const LoadingOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const LoadingSpinner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    svg {
        font-size: 40px;
        color: ${theme.colors.accent};
        animation: ${spin} 1s linear infinite;
    }

    span {
        font-size: 18px;
    }
`;

export const S = {
    LoadingOverlay,
    LoadingSpinner
}