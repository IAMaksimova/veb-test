import React from "react";
import type {ScrollToSec} from "../../../App.tsx";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import vebChemodan from "../../../assets/images/veb-chemodan.png";
import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";
import {Accent} from "./Main.tsx";
import {MainSmallText} from "./MainMobile.tsx";
import {MainButton} from "../../../components/MainButton.tsx";

export const MainDesktop: React.FC<ScrollToSec> = ({scrollToSection}) => {
    return (
        <SMain>
            <Container>
                <FlexWrapper align={'center'} style={{height: '100vh', position: 'relative'}}>
                    <MainFigure>
                        <MainTextWrap>
                            <MainLargeText>
                                <Accent>Практика</Accent> в государственной корпорации ВЭБ.РФ
                            </MainLargeText>
                            <MainSmallText>Мы предоставляем возможности, вы — создаете будущее</MainSmallText>
                        </MainTextWrap>
                        <MainButton onClick={() => scrollToSection('application')}>
                            ПОДАТЬ ЗАЯВКУ
                        </MainButton>
                    </MainFigure>
                    <MainImage src={vebChemodan} alt="Чемодан ВЭБ"/>
                </FlexWrapper>
            </Container>
        </SMain>
    );
};

const SMain = styled.section`
    height: 100vh;
    background: white;
    color: white;
    width: 100%;
    padding: 40px;

    @media ${theme.media.tablet} {
        padding: 30px;
        transform: scale(0.85);
        transform-origin: top center;
        height: auto;
        min-height: 100vh;
   
    }


`;

const MainFigure = styled.div`
    width: 95%;
    background: ${theme.colors.font};
    border-radius: 35px;
    margin: 0 auto;
    padding: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${theme.media.tablet} {
        transform: scale(1.2);
        width: 100%;
        padding: 6vh;
    }
`;

const MainImage = styled.img`
    width: clamp(280px, 44vw, 610px);
    height: auto;
    aspect-ratio: 610/500; 
    
    position: absolute;
    right: max(-3vw, -60px); 
    bottom: min(27vh, 50vh);
    transition: all 0.3s ease;
    
    @media ${theme.media.laptop}{
        bottom: 20vh;
        right: -5vw;
    }
    @media ${theme.media.tablet} {
        position: relative;
        right: auto;
        bottom: auto;
        width: clamp(250px, 50vw, 400px);
        margin: 30px auto 0;
        display: block;
    }
    
    @media (max-width: 480px) {
        width: 80vw;
        margin-top: 20px;
    }
`;

const MainLargeText = styled.h2`
    font-size: ${theme.fontsize_title.laptop};
    font-weight: 500;
    text-align: left;


    @media ${theme.media.laptop} {
        width: 60vw;
    }
    
    @media ${theme.media.tablet} {
        font-size: ${theme.fontsize_title.tablet};
    }
    
    
`;

const MainTextWrap = styled.div`
    width: 45vw;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    margin-bottom: 50px;

    @media ${theme.media.tablet} {
        width: 50vw;
    }
`;

