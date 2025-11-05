import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

export const ConditionCard = styled.div<{ color: string }>`
    background: white;
    border-radius: clamp(12px, 1.5vw, 16px);
    padding: clamp(20px, 2.5vw, 30px) clamp(15px, 2vw, 20px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    border-top: clamp(3px, 0.4vw, 4px) solid ${props => props.color};
    width: min(100%, 280px);
    min-height: 160px;
    display: flex;
    flex-direction: column;


    &:hover {
        transform: translateY(clamp(-3px, -0.5vw, -5px));
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    }
`;

const IconWrapper = styled.div<{ $color: string }>`
    width: clamp(36px, 4vw, 44px);
    height: clamp(36px, 4vw, 44px);
    border-radius: 50%;
    background: ${props => props.$color}15;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: clamp(10px, 1.2vw, 16px);
    color: ${props => props.$color};
    flex-shrink: 0;
`;

const Content = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: clamp(0.95rem, 1.1vw, 1.1rem);
        color: ${theme.colors.fontDark};
        margin-bottom: clamp(6px, 0.8vw, 10px);
        font-weight: 500;
        
        @media ${theme.media.mobile} {
            font-weight: 600;
        }
    }

    p {
        font-size: clamp(0.9rem, 1.2vw, 1rem);
        line-height: 1.5;
        color: ${theme.colors.font};
        margin: 0;
        flex-grow: 1;
    }
`;

const CircleDecoration = styled.div<{ $color: string }>`
    position: absolute;
    bottom: clamp(8px, 1vw, 12px);
    right: clamp(8px, 1vw, 12px);
    width: clamp(18px, 2vw, 24px);
    height: clamp(18px, 2vw, 24px);
    border-radius: 50%;
    background: ${props => props.$color}15;
    transition: all 0.3s ease;
`;

const CornerDecoration = styled.div<{ $color: string }>`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 clamp(24px, 3vw, 32px) clamp(24px, 3vw, 32px);
    border-color: transparent transparent ${props => props.$color}15 transparent;
    transition: all 0.3s ease;
`;

export const S = {
    ConditionCard,
    IconWrapper,
    Content,
    CircleDecoration,
    CornerDecoration
}