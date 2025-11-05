import styled from "styled-components";
import decor from "../../../../assets/images/design-elements/star.png";
import decor1 from "../../../../assets/images/design-elements/ring.png";
import {theme} from "../../../../styles/Theme.ts";

const SliderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(10px, 2vw, 30px);
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative; 

    &::before, &::after {
        content: '';
        position: absolute;
        z-index: 1;
        background-size: contain;
        background-repeat: no-repeat;
        pointer-events: none;
    }

    &::before {
        background-image: url(${decor});
        bottom: 48px;
        left: 60px;
        width: clamp(60px, 7vw, 120px);
        height: clamp(70px, 9vh, 140px);
        transform: rotate(-15deg);
    }
    
    &::after {
        background-image: url(${decor1});
        top: -10px;
        right: 50px;
        width: clamp(70px, 8vw, 120px);
        height: clamp(90px, 12vh, 170px);
        transform: rotate(-15deg);
    }

    @media (max-width: 1300px) {
        &::before, &::after {
            width: clamp(50px, 8vw, 100px);
            height: clamp(60px, 10vh, 120px);
        }
    }

    @media ${theme.media.tablet} {
        &::before, &::after {
            width: clamp(40px, 6vw, 80px);
            height: clamp(50px, 8vh, 100px);
        }
    }

    @media ${theme.media.mobile} {
        &::before, &::after {
            display: none; 
        }
    }
`;

const SliderContainer = styled.div`
    width: 100%;
    max-width: 600px;
    overflow: hidden;
    position: relative;
    aspect-ratio: 1/1.2; 

    @media (max-width: 1024px) {
        max-width: 500px;
        aspect-ratio: 1/1.3;
    }

    @media (max-width: 768px) {
        max-width: 400px;
        aspect-ratio: 1/1.4;
    }

    @media (max-width: 480px) {
        max-width: 320px;
        aspect-ratio: 1/1.5;
    }
`;

const SliderTrack = styled.div<{
    $isDragging: boolean;
    $dragOffset: number;
}>`
    display: flex;
    transition: ${props => props.$isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'};
    will-change: transform;
    height: 100%;
    touch-action: pan-y;
`;

const SlideWrapper = styled.div`
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
`;

const ArrowButton = styled.button<{ $direction: 'left' | 'right' }>`
    background: transparent;
    border: none;
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: ${theme.colors.font};
    cursor: pointer;
    width: clamp(30px, 5vw, 50px);
    height: clamp(30px, 5vw, 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
    z-index: 10;
    opacity: 0.7;
    position: relative;

    &:hover {
        opacity: 1;
        transform: scale(1.1);
        color: ${theme.colors.accent};
    }

    @media (max-width: 480px) {
        position: absolute;
        ${props => props.$direction === 'left' ? 'left: 0' : 'right: 0'};
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
`;

const SlideProgress = styled.div`
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 5;
`;

const ProgressDot = styled.div<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.$active ? theme.colors.accent : 'rgba(0, 0, 0, 0.2)'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const S = {
    ProgressDot,
    SlideProgress,
    ArrowButton,
    SlideWrapper,
    SliderTrack,
    SliderContainer,
    SliderWrapper
}