import styled, {keyframes} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {useState} from "react";
import type {IsMobile, ScrollToSec} from "../../../App.tsx";
import {type Direction, directions} from "./Diresctions_Data.ts";


export const Directions: React.FC<ScrollToSec & IsMobile> = ({scrollToSection, isMobile}) => {
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
                        <DirectionsTitle>Навигатор подразделений</DirectionsTitle>
                        <DirectionsSubtitle>Набор открыт в следующих подразделениях:</DirectionsSubtitle>
                    </DirectionsHeader>

                    <FlexWrapper wrap={'wrap'} justify={'center'} gap={'20px'} style={{width: '90vw'}}>
                        {directions.map((direction) => {
                            return (
                                isMobile ?
                                    <DirectionItemMobile key={direction.id} onClick={() => handleDirectionClick(direction)}>
                                        {direction.name}
                                    </DirectionItemMobile>
                                    :
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
                        <ModalHeader>{selectedDirection.name}</ModalHeader>

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
    height: 80vh;
    background: ${theme.colors.font};
    width: 100%;
    padding-left: 6vw;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        background: white;
        padding-left: 0;
        padding-top: 5vh;
    }
}
`;

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

const DirectionsTitle = styled.h2`
    color: #07CEB8;
    font-weight: 500;
    font-size: 5vh;
    text-align: left;
    
    @media ${theme.media.mobile}, ${theme.media.tablet}{
        font-size: 2.8vh;
        margin-bottom: 1vh;
    }
    
`;

const DirectionsSubtitle = styled.h3`
    color: rgba(193, 193, 193, 0.49);
    font-weight: 400;
    font-size: 3vh;
    text-align: left;

    @media ${theme.media.mobile}, ${theme.media.tablet}{
        color: ${theme.colors.fontDark};
        font-size: 1.6vh;
    }
`;

const DirectionItem = styled.div`
    background-color: #07CEB8;
    color: ${theme.colors.font};
    border-radius: 50px;
    padding: 20px 30px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #05a998;
    }
`;

const DirectionItemMobile  = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 10px;
    background: rgba(7, 206, 184, 0.1);
    border-left: 3px solid #07CEB8;
    transition: all 0.3s ease;


    &:before {
        content: "→";
        color: #07CEB8;
        margin-right: 12px;
        font-size: 14px;
    }

    &:hover {
        background: rgba(7, 206, 184, 0.2);
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
