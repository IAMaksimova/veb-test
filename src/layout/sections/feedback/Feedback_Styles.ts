import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {theme} from "../../../styles/Theme.ts";
import {SectionTitle} from "../../../components/SectionTitle.tsx";

const MobileVersion = styled.div`
    display: none;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 5vw;

    @media (max-width: 1300px) {
        display: block;
    }
`;

const MobileHeader = styled.div`
    text-align: center;
    margin-bottom: 30px;
    padding: 0 20px;
`;

const FlexWrapperDesktop = styled(FlexWrapper)`
    display: flex;
    align-items: center;
    gap: 40px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2vw;

    @media (max-width: 1300px) {
        display: none;
    }
`;

const TextContentDesktop = styled.div`
    padding-left: 5vw;
    width: 40%;
`;

const SliderDesktop = styled.div`
    width: 64%;
    padding-right: 4vw;
  
`;

const Feedback = styled.section`
    position: relative;
    padding: clamp(60px, 8vh, 120px) 0;
    background: ${theme.colors.primaryBg};
    overflow: hidden;
    
    @media (max-width: 1300px) {
        &::before, &::after {
            display: none;
        }
    }

    @media ${theme.media.tablet}, ${theme.media.laptop} {
        padding: 10px 0;
        
    }
`;

const FeedbackTitle = styled(SectionTitle)`
    color: ${theme.colors.fontDark};
    font-size: clamp(2rem, 4.2vw, 3.5rem);
    line-height: 1.2;
    margin-bottom: 20px;
    font-weight: 500;
    
`;

const FeedbackSubtitle = styled.p`
    color: rgba(8, 96, 89, 0.82);
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-family: 'Bad Script', sans-serif;
    line-height: 1.4;
    max-width: 90%;

    @media ${theme.media.tablet} {
        max-width: 100%;
        margin: 0 auto;
    }
`;

export const S = {
    MobileVersion,
    MobileHeader,
    FlexWrapperDesktop,
    TextContentDesktop,
    SliderDesktop,
    FeedbackSubtitle,
    Feedback,
    FeedbackTitle
}