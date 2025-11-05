import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {ConditionCard} from "./conditionCard/ConditionCard_Styles.ts";

const Conditions = styled.section`
    padding: clamp(30px, 10vh, 100px) clamp(20px, 6vw, 15vw);
    position: relative;
    background-color: ${theme.colors.primaryBg};
    
    @media ${theme.media.mobile}{
        padding: clamp(30px, 8vh, 100px) clamp(20px, 6vw, 15vw);
    }
`;

const TitleWrapper = styled.div`
    position: relative;
    margin-bottom: clamp(30px, 5vw, 60px);
    text-align: center;
`;

const TitleUnderline = styled.div`
    width: clamp(80px, 10vw, 120px);
    height: clamp(2px, 0.3vw, 4px);
    background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.secondaryAccent});
    margin: clamp(10px, 1.5vw, 20px) auto 0;
    border-radius: 2px;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: clamp(12px, 2vw, 30px);
    position: relative;
    z-index: 2;
    
    ${ConditionCard} {
        width: 16vw;
        flex: 0 1 auto;

        @media (max-width: 1280px) {
            width: 25vw;
        }

        @media (max-width: 600px) {
            width: calc(50% - 13px);
        }

        @media (max-width: 400px) {
            width: calc(50% - 8px);
            max-width: 290px;
        }
    }
`;

export const S = {
    Conditions,
    TitleUnderline,
    TitleWrapper,
    CardsContainer,
}