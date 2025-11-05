import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const MainButton = styled.button`
    background: white;
    font-weight: 500;
    color: ${theme.colors.fontDark};
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: clamp(200px, 28vw, 45vw);
    aspect-ratio: 4 / 1; 
    min-height: 50px; 
    max-height: 70px; 
    
    border-radius: clamp(12px, 1.5vw, 20px);
    font-size: clamp(14px, 1.25vw, 16px);
    
    &:hover {
        color: ${theme.colors.accent};
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
       
    }
    
    &:active {
        transform: translateY(1px);
    }
    
    @media ${theme.media.tablet} {
        width: clamp(160px, 65vw, 75vw);
        font-size: clamp(13px, 2.5vw, 5vw);
        border-radius: clamp(15px, 3vw, 5vw);
    }
    
    @media ${theme.media.mobile} {
        width: clamp(160px, 72vw, 75vw);
        font-size: clamp(2vw, 3.5vw, 6vw);
        aspect-ratio: 3.5 / 1;
        height: 6vh;
    }
    
`;
