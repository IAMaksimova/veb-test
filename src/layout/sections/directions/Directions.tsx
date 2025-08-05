import styled, {keyframes} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import React, {useState} from "react";
import type {IsMobile, ScrollToSec} from "../../../App.tsx";
import {type Direction, directions} from "./Diresctions_Data.ts";
import {SectionTitle} from "../../../components/SectionTitle.tsx";



export const Directions: React.FC<ScrollToSec & IsMobile> = ({scrollToSection}) => {
    const [selectedDirection, setSelectedDirection] = useState<Direction | null>(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleDirectionClick = (direction: Direction) => {
        setSelectedDirection(direction);
    };

    const handleCloseModal = () => {
        setIsClosing(true);

        setTimeout(() => {
            setSelectedDirection(null);
            setIsClosing(false);
        }, 300);

    };

    const handleGoToApplication = () => {
        setIsClosing(true);

        setTimeout(() => {
            setSelectedDirection(null);
            setIsClosing(false);
        }, 300);
        scrollToSection('application')
    }

    return (

        <SDirectons id={'directions'}>
            <Container>
                <FlexWrapper wrap={'wrap'} direction={'column'} align={'flex-start'}>
                    <DirectionsHeader>
                        <SectionTitle>Блоки и компетенции</SectionTitle>
                        <DirectionsSubtitle>Направления профессионального развития в ВЭБ.РФ</DirectionsSubtitle>
                    </DirectionsHeader>

                    <FlexWrapper wrap={'wrap'} justify={'center'} gap={'clamp(11px, 1.1vw, 20px)'} >
                        {directions.map((direction) => {
                            return (
                                    <DirectionItem key={direction.id} onClick={() => handleDirectionClick(direction)}>
                                        {direction.name}
                                    </DirectionItem>
                            );
                        })}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>

            {selectedDirection && (
                <ModalOverlay isClosing={isClosing}>
                    <ModalContent>
                        <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
                        <ModalHeader>{selectedDirection.name} {selectedDirection.secondName}</ModalHeader>

                        <ContentGrid>
                            <InfoBlock>
                                <h3>О подразделении:</h3>
                                <DescriptionBox>
                                    {selectedDirection.description}
                                </DescriptionBox>
                            </InfoBlock>

                            <InfoBlock>
                                <h3>Требования:</h3>
                                <RequirementsBox>
                                    <StyledList>
                                        {selectedDirection.requirements.map((requirement, index) => (
                                            <li key={index}>
                                                <Marker/>
                                                {requirement}
                                            </li>
                                        ))}
                                    </StyledList>
                                </RequirementsBox>
                            </InfoBlock>
                        </ContentGrid>

                        <ApplyButton onClick={handleGoToApplication}>Подать заявку</ApplyButton>
                    </ModalContent>
                </ModalOverlay>
            )}
        </SDirectons>


    );
};

const StyledList = styled.ul`
    list-style: none;
    padding-left: 0;
`;



const SDirectons = styled.section`
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
    /* Базовые стили */
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

    /* Планшеты */
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

const ModalOverlay = styled.div<{ isClosing: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
    animation: ${props => props.isClosing ? fadeOut : fadeIn} 0.3s ease-out forwards;
    backdrop-filter: blur(5px);
  

    /* Блокировка скролла */

`;

const ModalContent = styled.div`
  background-color: white;
  padding: clamp(24px, 3.5vh, 40px);
  border-radius: clamp(16px, 3vh, 24px);
  width: min(90vw, 850px);
  height: min(85vh, 800px); /* Увеличена высота для десктопа */
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(20px, 2.5vh, 30px);
  margin-bottom: clamp(24px, 3vh, 32px);
  flex-grow: 1;
  overflow: hidden;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    overflow-y: auto;
  }
`;

const ScrollBox = styled.div`
    background: #f8f9fa;
    padding: clamp(16px, 2vh, 20px);
    border-radius: 8px;
    min-height: min(30vh, 250px);
    max-height: min(50vh, 450px);
    overflow-y: auto; /* Сохраняем возможность скролла */
    line-height: 1.5;
    color: #495057;

    /* Полное скрытие скроллбара для всех браузеров */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE и Edge */

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
        width: 0;
        height: 0;
        background: transparent;
    }
`;

const ApplyButton = styled.button`
  background: rgba(44, 62, 80, 0.76);
  color: white;
  border-radius: clamp(12px, 1.7vh, 20px);
  font-size: clamp(14px, 2vh, 18px);
  cursor: pointer;
  transition: all 0.2s;
  width: min(90%, 400px); /* Увеличена ширина кнопки */
  padding: clamp(12px, 1.5vh, 18px) 0;
  margin: 0 auto;
  border: none;
  font-weight: 500;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #1a252f;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  /* Адаптация для планшетов */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: min(95%, 500px);
    padding: 16px 0;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;



const ModalHeader = styled.h2`
  font-size: clamp(20px, 2.5vh, 24px);
  margin-bottom: clamp(16px, 2vh, 24px);
  color: #2c3e50;
  font-weight: 600;
  padding-right: 40px;
  line-height: 1.3;
`;



const InfoBlock = styled.div`
  h3 {
    font-size: clamp(16px, 2vh, 18px);
    margin-bottom: clamp(8px, 1vh, 12px);
    color: #2c3e50;
    font-weight: 500;
  }
`;



const DescriptionBox = styled(ScrollBox)``;

const RequirementsBox = styled(ScrollBox)`
  ul {
    padding-left: 0;
    margin: 0;
  }

  li {
    margin-bottom: clamp(8px, 1vh, 12px);
    display: flex;
    align-items: flex-start;
  }
`;



const CloseButton = styled.button`
  position: absolute;
  top: clamp(12px, 1.5vh, 20px);
  right: clamp(12px, 1.5vh, 20px);
  background: none;
  border: none;
  font-size: clamp(24px, 4vh, 32px);
  cursor: pointer;
  color: #6c757d;
  line-height: 1;
  padding: 4px;
  transition: color 0.2s;

  &:hover {
    color: #2c3e50;
  }
`;

const Marker = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #07CEB8;
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
  margin-top: 0.5em;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

