import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const Directions = styled.section`
    height: fit-content;
    background: ${theme.colors.font};
    width: 100%;
    padding: 10vh 6vw;

    
    @media ${theme.media.laptop} {
        padding: 6vh 0 3vw;
    }
    @media ${theme.media.mobile} {
        padding: 8vh 4vw;
    }

}`;

const DirectionsHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 5vh;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        margin-bottom: 3vh;
    }
`;


const DirectionsSubtitle = styled.h3`
    color: rgba(193, 193, 193, 0.49);
    font-weight: 400;
    font-size: ${theme.fontsize_text.laptop};
    text-align: left;

    @media ${theme.media.mobile}, ${theme.media.tablet}{
        font-size: ${theme.fontsize_text.tablet};
    }
`;

const DirectionItem = styled.div`
    background-color: #07CEB8;
    color: ${theme.colors.font};
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex; /* Изменено на inline-flex */
    align-items: center;
    justify-content: center;
    text-align: center;

    padding: calc(0.5em + 0.8vw) calc(1em + 1vw); 
    font-size: clamp(14px, 1.6vw, 18px);

    min-width: max-content;

    &:hover {
        background-color: #05a998;
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(1px);
    }
    
    @media ${theme.media.tablet} {
        font-size: clamp(14px, 1.8vw, 16px);
        padding: calc(0.5em + 0.3vw) calc(0.8em + 0.8vw);
    }

    @media ${theme.media.mobile} {
        font-size: clamp(14px, 2vw, 16px);
        padding: calc(0.8em + 0.5vw) calc(0.8em + 1.2vw);

        min-height: 0;
        width: auto;
        max-width: none;
        margin: initial;
    }
`;

export const S = {
    Directions,
    DirectionItem,
    DirectionsHeader,
    DirectionsSubtitle
}