import styled, {keyframes} from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const MobileMenuContainer = styled.div`
  position: relative;
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  padding: 0;
  z-index: 20;

  span {
    width: 100%;
    height: 3px;
    background: ${theme.colors.font};
    transition: all 0.3s ease;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
    }
  }
`;

const MenuOverlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: white;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    z-index: 15;
    display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
    flex-direction: column;
    padding: 80px 20px 20px;
    animation: ${slideIn} 0.3s ease-out forwards;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        width: 100%;
        max-width: none;
        
        ul{
            display: flex;
            flex-direction: column;
            gap: 3vh;
            font-size: 2rem;
        }
    }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 6vh;
  cursor: pointer;
  color: ${theme.colors.font};
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

export const S = {
    MobileMenuContainer,
    MenuOverlay,
    BurgerButton,
    CloseButton
}