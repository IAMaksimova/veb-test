import React from "react";
import type {ScrollToSec} from "../../../App.tsx";
import vebChemodan from "../../../assets/images/veb-chemodan.png";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";



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

                        <MobileButton onClick={() => scrollToSection('application')}>
                            ПОДАТЬ ЗАЯВКУ
                        </MobileButton>
                    </TextColumn>
                </ContentGrid>
            </Container>
        </SMainMobile>
    );
};
export const MainSmallText = styled.p`
  font-size: 3vh;
  font-weight: 500;
  text-align: left;
`;
// Стили
const SMainMobile = styled.section`
    min-height: 100vh;
    padding: 32px 0;
    background: ${theme.colors.fontDark};
    display: flex;
    align-items: center;
`;

const Container = styled.div`
    width: 100%;
    padding: 0 24px;
`;

const ContentGrid = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 40px;
    max-width: 400px;
    margin: 0 auto;
`;

const ImageColumn = styled.div`
    display: flex;
    justify-content: center;
`;

const Suitcase = styled.img`
    width: 100%;
    max-width: 290px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3));
`;

const TextColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Heading = styled.h1`
    font-size: clamp(32px, 8vw, 40px);
    font-weight: 600;
    line-height: 1.2;
    color: white;
    margin: 0 0 16px 0;
`;

const Accent = styled.span`
    color: ${theme.colors.accent};
`;

const Divider = styled.div`
    width: 64px;
    height: 3px;
    background: ${theme.colors.accent};
    margin: 0 auto 24px auto;
`;

const Slogan = styled.p`
    font-size: clamp(16px, 4vw, 18px);
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 32px 0;

    strong {
        color: white;
        font-weight: 500;
    }
`;

const MobileButton = styled.button`
    background: white;
    color: ${theme.colors.font};
    padding: 12px 30px;
    border-radius: 5vw;
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
    transition: all 0.3s ease;
    width: 75vw;
    height: 7vh;

    &:hover {
        background: ${theme.colors.accent};
        transform: translateY(-2px);
    }
`;