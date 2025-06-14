import React from "react";
import type {ScrollToSec} from "../../../App.tsx";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import vebChemodan from "../../../assets/images/veb-chemodan.png";
import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";
import {Accent} from "./Main.tsx";
import {MainSmallText} from "./MainMobile.tsx";

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
