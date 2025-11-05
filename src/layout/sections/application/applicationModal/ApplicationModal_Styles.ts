import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import {scaleIn} from "../Application_Styles.ts";

const SuccessModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
`;

const SuccessContent = styled.div`
    background: white;
    padding: 40px;
    border-radius: 16px;
    text-align: center;
    max-width: 500px;
    width: 90%;
    animation: ${scaleIn} 0.3s ease;
`;

const SuccessIcon = styled.div`
    font-size: 60px;
    color: ${theme.colors.accent};
    margin-bottom: 20px;
`;

const SuccessTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 15px;

`;

const SuccessText = styled.p`
    font-size: 16px;
    margin-bottom: 25px;
    line-height: 1.5;
`;

const CloseModalButton = styled.button`
    background: ${theme.colors.accent};
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
    }
`;

export const S = {
    SuccessContent,
    SuccessModal,
    SuccessIcon,
    SuccessTitle,
    SuccessText,
    CloseModalButton
}