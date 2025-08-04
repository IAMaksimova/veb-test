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

                    <FlexWrapper wrap={'wrap'} justify={'center'} gap={'clamp(8px, 1.1vw, 20px)'} >
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

const Marker = styled.span`
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #07CEB8;
    border-radius: 50%;
    margin-right: 12px;
    position: relative;
    top: -2px;
`;

const SDirectons = styled.section`
    height: fit-content;
    background: ${theme.colors.font};
    width: 100%;
    padding: 6vh 6vw;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 1vh 4vw;
    }

}`;

const DirectionsHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8vh;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        margin-bottom: 3vh;
    }
`;

// const DirectionsTitle = styled.h2`
//     color: #07CEB8;
//     font-weight: 500;
//     font-size: 5vh;
//     text-align: left;
//
//     @media ${theme.media.mobile}, ${theme.media.tablet}{
//         font-size: 24px;;
//         margin-bottom: 1vh;
//     }
//
// `;

const DirectionsSubtitle = styled.h3`
    color: rgba(193, 193, 193, 0.49);
    font-weight: 400;
    font-size: 3vh;
    text-align: left;

    @media ${theme.media.mobile}, ${theme.media.tablet}{
        font-size: 12px;;
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

    /* Пропорциональное масштабирование */
    padding: calc(0.5em + 0.8vw) calc(1em + 1vw); /* Относительно font-size */
    font-size: clamp(14px, 1.6vw, 18px);

    /* Сохраняем соотношение */
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

    /* Мобильные устройства */
    @media ${theme.media.mobile} {
        font-size: clamp(14px, 2vw, 16px); /* Меньше зависимость от vw */
        padding: calc(0.5em + 0.5vw) calc(0.8em + 1vw);

        /* Отключаем фиксированные размеры */
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
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: hidden;
    animation: ${props => props.isClosing ? fadeOut : fadeIn} 0.3s ease-out forwards // border: 2px solid red;


`

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

const ModalHeader = styled.h2`
    font-size: 24px;
    margin-bottom: 24px;
    color: #2c3e50;
    font-weight: 600;

    @media ${theme.media.tablet}{
        width: 80%;
        font-size: 16px;
    }

    @media ${theme.media.mobile}{
        font-size: 14px;
    }
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 3vh;
    border-radius: 3vh;
    width: 60vw;
    height: 75vh;
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 90vh;
    overflow-y: auto;

    @media ${theme.media.mobile} {
        width: 90vw;
        height: auto;
        max-height: 85vh;
        padding: 2vh;
        border-radius: 2vh;
    }
`;

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;

    @media ${theme.media.mobile} {
        grid-template-columns: 1fr;
        gap: 16px;
        margin-bottom: 24px;
    }
`;

const InfoBlock = styled.div`
    h3 {
        font-size: 18px;
        margin-bottom: 12px;
        color: #2c3e50;
        font-weight: 500;

        @media ${theme.media.mobile} {
            font-size: 12px;
        }
    }
`;

const DescriptionBox = styled.div`
    background: #f8f9fa;
    padding: 16px;
    border-radius: 8px;
    min-height: 150px;
    line-height: 1.5;
    color: #495057;
    height: 46vh;
    overflow-y: auto;

    @media ${theme.media.mobile} {
        height: auto;
        max-height: 30vh;
        min-height: 100px;
    }
`;

const RequirementsBox = styled.div`
    background: #f8f9fa;
    padding: 16px;
    border-radius: 8px;
    min-height: 150px;
    height: 46vh;
    overflow-y: auto;

    @media ${theme.media.mobile} {
        height: auto;
        max-height: 30vh;
        min-height: 100px;
    }

    ul {
        padding-left: 20px;
        margin: 0;
    }

    li {
        margin-bottom: 8px;
        color: #495057;
        line-height: 1.4;
    }
`;

const ApplyButton = styled.button`
    background: rgba(44, 62, 80, 0.76);
    color: white;
    border-radius: 1.7vh;
    font-size: 2vh;
    cursor: pointer;
    transition: background 0.2s;
    width: 30vw;
    height: 6vh;
    margin: 0 auto;
    border: none;

    @media ${theme.media.mobile} {
        width: 85%;
        height: 4.5vh;
        font-size: 1.8vh;
        margin-top: 16px;
    }

    &:hover {
        background: #1a252f;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 1vw;
    background: none;
    border: none;
    font-size: 6vh;
    cursor: pointer;
    color: #6c757d;
    padding: 4px;

    @media ${theme.media.mobile} {
        font-size: 4vh;
        right: 2vw;
    }

    &:hover {
        color: #2c3e50;
    }
`;