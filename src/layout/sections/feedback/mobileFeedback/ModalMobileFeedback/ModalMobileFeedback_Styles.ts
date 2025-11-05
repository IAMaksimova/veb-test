import styled from "styled-components";
import {theme} from "../../../../../styles/Theme.ts";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
    background: white;
    border-radius: 20px;
    padding: 40px;
    width: 100%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease;

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @media ${theme.media.mobile} {
        padding: 30px 20px;
        max-height: 85vh;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    transition: transform 0.2s ease;

    &:hover {
        transform: rotate(90deg);
    }

    @media ${theme.media.mobile} {
        top: 15px;
        right: 15px;
    }
`;


const FullText = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: ${theme.colors.font};
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid ${theme.colors.secondaryBg};
`;

const ModalAuthor = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
`;

const ModalAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;

const ModalAuthorInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ModalName = styled.h4`
    font-size: 1.1rem;
    color: ${theme.colors.fontDark};
    margin-bottom: 3px;
    font-weight: 600;
`;

const ModalUsername = styled.span`
    font-size: 0.9rem;
    color: ${theme.colors.font};
    opacity: 0.7;
`;

const StyledSvg = styled.svg`
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

export const S = {
    ModalAuthor,
    ModalOverlay,
    ModalAvatar,
    ModalName,
    ModalUsername,
    ModalAuthorInfo,
    ModalContent,
    FullText,
    CloseButton,
    StyledSvg
}