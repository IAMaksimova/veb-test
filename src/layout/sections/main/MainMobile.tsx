import React from "react";
import type {ScrollToSec} from "../../../App.tsx";
import {Container} from "../../../components/Container.ts";
import vebChemodan from "../../../assets/images/veb-chemodan.png";
import {Accent} from "./Main.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";


export const MainMobile: React.FC<ScrollToSec> = ({ scrollToSection }) => {
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

// Мобильные стили
const SMainMobile = styled.section`
    display: none;
    background: ${theme.colors.secondaryAccent};
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
    width: 90%;
    max-width: 300px;
    height: auto;
    object-fit: contain;
    margin-top: 5vh;
    
    
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
    color: white;
`;

const MobileSmallText = styled.p`
  font-size: 16px;
  font-weight: 500;
    color: white;
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
    height: 6vh;
  
  &:hover {
    background: ${theme.colors.accent};
    transform: translateY(-2px);
  }
`;

export const MainSmallText = styled.p`
  font-size: 3vh;
  font-weight: 500;
  text-align: left;
`;