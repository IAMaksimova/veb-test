import styled, {keyframes} from "styled-components";
import { theme } from "../../../styles/Theme.ts";
import { Container } from "../../../components/Container.ts";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import {useState} from "react";
import type {ScrollToSec} from "../../../App.tsx";

interface Direction {
    [key: string]: any;
    description: string;
    requirements: string[];
}

const directions: Direction[] = [
    { 'Бизнес. Партнерство. Развитие': 1, description: 'структурирование сделок, сопровождение ключевых клиентов, сопровождение сделок, субсидии, направление подготовки управленческой аналитики по кредитному портфелю для руководства', requirements: ['базовое понимание составления и анализа финансовой отчетности компаний', 'Знание основ корпоративных финансов и финансового моделирования и рассчетов финансовых коэффициентов', 'Уверенный пользователь MS Excel'] },
    { 'Финансовый бизнес ВЭБа': 1, description: 'Описание Блока финансов...', requirements: ['Требование 3', 'Требование 4'] },
    { 'Блок управления рисками': 1, description: 'Описание Блока управления рисками...', requirements: ['Требование 5', 'Требование 6'] },
    { 'Активы ВЭБа: новые решения': 1, description: 'Описание Блока по работе с активами...', requirements: ['Требование 7', 'Требование 8'] },
    { 'Центр "Технологии. Процессы. Данные"': 1, description: 'Описание Блока IT...', requirements: ['Python', 'SQL', 'Bitbucket', 'Git', 'Hadoop', 'JSON', 'Openshift'] },
    { 'Пульс ВЭБа': 1, description: 'Описание Блока коммуникаций...', requirements: ['Требование 9', 'Требование 10'] },
    { 'Закон и право - опора бизнеса': 1, description: 'Описание Правового блока...', requirements: ['Требование 11', 'Требование 12'] },
    { 'Люди - главное': 1, description: 'Описание Блока HR...', requirements: ['Требование 13', 'Требование 14'] },
    { 'Блок стратегии': 1, description: 'Описание Блока стратегии...', requirements: ['Требование 15', 'Требование 16'] },
    { 'Дом ВЭБа': 1, description: 'Описание Блока обеспечения...', requirements: ['Требование 17', 'Требование 18'] },
    { 'Центр "Решения и документы"': 1, description: 'Описание Блока корпоративного управления...', requirements: ['Требование 19', 'Требование 20'] },
    { 'Безграничные возможности': 1, description: 'Описание Международного блока...', requirements: ['Требование 21', 'Требование 22'] },
    { 'Служба комплаенса': 1, description: 'Описание Службы комплаенса...', requirements: ['Требование 23', 'Требование 24'] },
    { 'Офис ВЭБ.РФ': 1, description: 'Описание Аппарата Председателя...', requirements: ['Требование 25', 'Требование 26'] }
];

export const Directions:React.FC<ScrollToSec> = ({scrollToSection}) => {
    const [selectedDirection, setSelectedDirection] = useState<Direction | null>(null);

    const [isClosing, setIsClosing] = useState(false);

    const sortedDirections = [...directions].sort((a, b) => {
        const aIsOpen = Object.values(a)[0];
        const bIsOpen = Object.values(b)[0];

        return bIsOpen - aIsOpen;
    });

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
                            {sortedDirections.map((direction, index) => {
                                const name = Object.keys(direction)[0];
                                const isOpen = Object.values(direction)[0] === 1;

                                return (
                                    <DirectionItem key={index} isOpen={isOpen} onClick={() => handleDirectionClick(direction)}>
                                        {name}
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
                            <ModalHeader>{Object.keys(selectedDirection)[0]}</ModalHeader>

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
                                                    <Marker />
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
    height: 70vh;
    background: ${theme.colors.font};
    width: 100%;
    padding-top: 10vh;
    padding-left: 6vw;
`;

const DirectionsHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8vh;
`;

const DirectionsTitle = styled.h2`
    color: #07CEB8;
    font-weight: 500;
    font-size: 5vh;
    text-align: left;
`;

const DirectionsSubtitle = styled.h3`
    color: rgba(193, 193, 193, 0.49);
    font-weight: 400;
    font-size: 3vh;
    text-align: left;
`;

const DirectionItem = styled.div<{isOpen: boolean}>`
    background-color: ${props => props.isOpen ? '#07CEB8' : 'rgba(193, 193, 193, 0.2)'};
    color: ${theme.colors.font};
    border-radius: 50px;
    padding: 20px 30px;
    font-size: 20px;
    cursor: ${props => props.isOpen ? 'pointer' : 'default'};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${props => props.isOpen ? '#05a998' : 'rgba(193, 193, 193, 0.2)'};
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

const ModalContent = styled.div`
    background-color: white;
    padding: 3vh;
    border-radius: 3vh;
    width: 60vw;
    height: 75vh;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
   

`;

// const CloseButton = styled.button`
//     position: absolute;
//     right: 2vw;
//     background: none;
//     font-size: 5vh;
//     cursor: pointer;
//     padding: 0;
//     border: none;
//     color: darkgray;   /* Default color is darkgray */
//     transition: color 0.2s ease-in-out;
//
//     &:hover {
//         color: black;   /* Hover color is black */
//     }
//
//     &:focus {  /* Add this to improve a11y - for keyboard users. */
//         outline: none; /* Remove default focus outline.  Replace it with your own styling. */
//         color: black;    /* Focus color is black - same as hover. */
//     }
// `;

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
`;

// const Button = styled.button`
//     background: ${theme.colors.font};
//     width: 15vw;
//     height: 7vh;
//     font-weight: 500;
//     color: white;
//     border-radius: 2.5vh;
//     font-size: 15px;
//
//     &:hover {
//         background: #2b333e;
//     }
// `

// const ModalContent = styled.div`
//   position: relative;
//   background: white;
//   padding: 32px;
//   border-radius: 12px;
//   width: 700px;
//   max-width: 90vw;
//   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
// `;

const ModalHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
  color: #2c3e50;
  font-weight: 600;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
`;

const InfoBlock = styled.div`
    
  h3 {
    font-size: 18px;
    margin-bottom: 12px;
    color: #2c3e50;
    font-weight: 500;
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
`;

const RequirementsBox = styled.div`
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  min-height: 150px;
    height: 46vh;
  
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
    border-radius: 2vh;
    font-size: 2vh;
    cursor: pointer;
    transition: background 0.2s;
    width: 30vw;
    height: 6vh;
    margin: 0 auto;


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
  
  &:hover {
    color: #2c3e50;
  }
`;