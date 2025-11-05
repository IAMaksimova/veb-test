import styled, {keyframes} from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const scaleIn = keyframes`
    from {
        transform: scale(0.8);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
`;

const StudentImage = styled.img`
    position: absolute;
    left: clamp(5%, 2vw, 10%);
    bottom: 0;
    height: auto;
    width: auto;
    max-height: 58vh;
    max-width: 28vw;
    min-height: 300px;
    z-index: 1;
    filter: blur(0.6px) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2)) sepia(0.3) brightness(0.95) hue-rotate(5deg) saturate(0.7);
    transform: translateY(5%) scale(1);
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);

    @media (max-width: 1024px) {
        display: none
    }
`;

const Application = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: fit-content;
    padding: 6vh;
    position: relative;
    background-color: ${theme.colors.font};
    overflow: hidden;

    @media ${theme.media.mobile} {
        min-height: auto;
        padding: 20px 0;
        align-items: flex-start;
    }
`;

const FormContainer = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 40px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 1;
    animation: ${fadeIn} 0.6s ease-out;

    @media ${theme.media.tablet} {
        padding: 30px;
        margin: 20px;
        width: calc(100% - 40px);
    }

    @media ${theme.media.mobile} {
        padding: 20px 16px;
        margin: 16px;
        width: calc(100% - 32px);
    }
`;

export const ErrorMessage = styled.div`
    background-color: #fee;
    color: #c33;
    padding: 12px;
    border: 1px solid #fcc;
    border-radius: 4px;
    margin-bottom: 20px;
    font-size: 14px;
`;

export const S = {
    Application,
    FormContainer,
    StudentImage,
    ErrorMessage
}