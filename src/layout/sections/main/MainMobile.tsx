import React from "react";
import type {ScrollToSec} from "../../../App.tsx";
import vebChemodan from "../../../assets/images/veb-chemodan.png";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {MainButton} from "../../../components/MainButton.tsx";

export const MainMobile: React.FC<ScrollToSec> = ({ scrollToSection }) => {
    return (
        <SMainMobile>
            <Container>
                <ContentGrid>
                    <ImageColumn>
                        <Suitcase
                            src={vebChemodan}
                            alt="Чемодан ВЭБ.РФ"
                            loading="lazy"
                        />
                    </ImageColumn>

                    <TextColumn>
                        <Heading>
                            <Accent>Практика</Accent>  <br/> в ВЭБ.РФ
                        </Heading>

                        <Divider/>

                        <Slogan>
                            Мы предоставляем возможности,<br/>
                            <strong>вы — создаёте будущее</strong>
                        </Slogan>

                        <MainButton onClick={() => scrollToSection('application')}>
                            ПОДАТЬ ЗАЯВКУ
                        </MainButton>
                    </TextColumn>
                </ContentGrid>
            </Container>
        </SMainMobile>
    );
};
export const MainSmallText = styled.p`
    font-size: ${theme.fontsize_text.laptop};
    font-weight: 500;
    text-align: left;

    @media ${theme.media.tablet} {
        font-size: 13px;
    }

 
`;
const SMainMobile = styled.section`
    min-height: 100vh;
    padding: 40px 0;
    background: ${theme.colors.fontDark};
    display: flex;
    align-items: center;

    @media (min-width: 577px) and (max-width: 768px) {
        padding: 60px 0;
    }
`;

const Container = styled.div`
    width: 100%;
    padding: 0 32px;

    @media (min-width: 577px) and (max-width: 768px) {
        padding: 0 48px;
    }
`;

const ContentGrid = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 48px;
    max-width: 500px;
    margin: 0 auto;

    @media (min-width: 577px) and (max-width: 768px) {
        max-width: 600px;
        gap: 56px;
    }
`;

const ImageColumn = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 577px) and (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

const Suitcase = styled.img`
    width: 100%;
    max-width: 320px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3));

    @media (min-width: 577px) and (max-width: 768px) {
        max-width: 360px;
    }
`;

const TextColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Heading = styled.h1`
    font-size: clamp(32px, 6vw, 42px);
    font-weight: 600;
    line-height: 1.2;
    color: white;
    margin: 0 0 20px 0;

    @media (min-width: 577px) and (max-width: 768px) {
        font-size: clamp(36px, 5vw, 44px);
        margin-bottom: 24px;
    }
`;

const Accent = styled.span`
    color: ${theme.colors.accent};
`;

const Divider = styled.div`
    width: 80px;
    height: 4px;
    background: ${theme.colors.accent};
    margin: 0 auto 28px auto;

    @media (min-width: 577px) and (max-width: 768px) {
        width: 100px;
        margin-bottom: 32px;
    }
`;

const Slogan = styled.p`
    font-size: clamp(16px, 3.5vw, 20px);
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 36px 0;

    strong {
        color: white;
        font-weight: 500;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        font-size: clamp(18px, 3vw, 22px);
        margin-bottom: 40px;
    }
`;

