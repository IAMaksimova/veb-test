import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import styled from "styled-components";
import { Container } from "../../../components/Container.ts";
import { theme } from "../../../styles/Theme.ts";
import vebChemodan from '../../../assets/images/veb-chemodan.png';
import React from "react";
import type { ScrollToSec } from "../../../App.tsx";
import { useMediaQuery } from "react-responsive";

// Десктопная версия
const MainDesktop: React.FC<ScrollToSec> = ({ scrollToSection }) => {
    return (
        <SMain>
            <Container>
                <FlexWrapper align={'center'} style={{ height: '100vh', position: 'relative' }}>
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
                    <MainImage src={vebChemodan} alt="Чемодан ВЭБ" />
                </FlexWrapper>
            </Container>
        </SMain>
    );
};

// Мобильная версия
const MainMobile: React.FC<ScrollToSec> = ({ scrollToSection }) => {
    return (
        <SMainMobile>
            <Container>
                <MobileContent>
                    <MobileImage src={vebChemodan} alt="Чемодан ВЭБ" />
                    <MobileTextWrap>
                        <MobileLargeText>
                            <Accent>Практика</Accent> в ВЭБ.РФ
                        </MobileLargeText>
                        <MobileSmallText>Мы предоставляем возможности, вы — создаете будущее</MobileSmallText>
                    </MobileTextWrap>
                    <MobileButton onClick={() => scrollToSection('application')}>
                        ПОДАТЬ ЗАЯВКУ
                    </MobileButton>
                </MobileContent>
            </Container>
        </SMainMobile>
    );
};

// Общий компонент с условием отрисовки
export const Main: React.FC<ScrollToSec> = (props) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return isMobile ? <MainMobile {...props} /> : <MainDesktop {...props} />;
};

// Общие стили
const Accent = styled.span`
  color: ${theme.colors.accent};
`;

// Десктопные стили
const SMain = styled.section`
  height: 100vh;
  background: white;
  color: white;
  overflow-y: hidden;
  width: 100vw;
  padding: 40px;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const MainFigure = styled.div`
  width: 95%;
  background: ${theme.colors.font};
  border-radius: 35px;
  margin: 0 auto;
  height: 52vh;
  padding: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainImage = styled.img`
  width: 610px;
  height: 500px;
  object-fit: cover;
  position: absolute;
  right: -1.2vw;
  top: 6.9vh;
`;

const MainLargeText = styled.h2`
  font-size: 6vh;
  font-weight: 500;
  text-align: left;
`;

const MainTextWrap = styled.div`
  width: 45vw;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
`;

export const MainSmallText = styled.p`
  font-size: 3vh;
  font-weight: 500;
  text-align: left;
`;

const MainButton = styled.button`
  background: white;
  width: 20vw;
  height: 8vh;
  font-weight: 500;
  color: ${theme.colors.font};
  border-radius: 22px;
  font-size: 15px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    color: ${theme.colors.accent};
    box-shadow: 0 0 15px ${theme.colors.accent};
    font-weight: 600;
  }
`;

// Мобильные стили
const SMainMobile = styled.section`
  display: none;
  background: white;
  padding: 20px;
  min-height: 100vh;
  
  @media ${theme.media.tablet} {
    display: block;
  }
`;

const MobileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
`;

const MobileImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
`;

const MobileTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  color: ${theme.colors.font};
`;

const MobileLargeText = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
`;

const MobileSmallText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const MobileButton = styled.button`
  background: ${theme.colors.font};
  color: white;
  padding: 12px 30px;
  border-radius: 22px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.accent};
    transform: translateY(-2px);
  }
`;