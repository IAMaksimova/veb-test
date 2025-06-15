import styled from "styled-components";
import { Container } from "../../../components/Container.ts";
import { theme } from "../../../styles/Theme.ts";
import {Users, Calendar, Home, Clock, Award, Flag} from 'react-feather';
import React from "react";

const conditions = [
    {
        title: "Для кого",
        text: "Студенты 3 и 4-го курса бакалавриата и студентов магистратуры",
        icon: <Users size={24} />,
        color: "#540D6E",
        decorType: 'triangle'
    },
    {
        title: "Продолжительность",
        text: "6 месяцев",
        icon: <Calendar size={24} />,
        color: '#07CEB8',
        decorType: 'triangle'
    },
    {
        title: "Формат работы",
        text: "Практика подразумевает посещение офиса",
        icon: <Home size={24} />,
        color: "#540D6E",
        decorType: 'triangle'
    },
    {
        title: "Гибкий график",
        text: "Практике необходимо уделять от 20 часов в неделю",
        icon: <Clock size={24} />,
        color: "#07CEB8",
        decorType: 'triangle'
    },
    {
        title: "Гражданство",
        text: "Только для граждан РФ",
        icon: <Flag size={24} />,
        color: "#540D6E",
        decorType: 'triangle'
    },
    {
        title: "Вознаграждение",
        text: "Практика является неоплачиваемой",
        icon: <Award size={24} />,
        color: "#07CEB8",
        decorType: 'triangle'
    }
];

export const Conditions:React.FC = () => {
    return (
        <SConditions id={'conditions'}>
            <Container>
                <TitleWrapper>
                    <ConditionsTitle>Особенности программы</ConditionsTitle>
                    <TitleUnderline />
                </TitleWrapper>

                <GridLayout>
                    {conditions.map((item, index) => (
                        <ConditionCard key={index} color={item.color} isFirstThree={index > 3}>
                            <IconWrapper $color={item.color}>
                                {item.icon}
                            </IconWrapper>
                            <Content>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </Content>
                            {item.decorType === 'circle' ? (
                                <CircleDecoration $color={item.color} />
                            ) : (
                                <CornerDecoration $color={item.color} />
                            )}
                        </ConditionCard>
                    ))}
                </GridLayout>
            </Container>
            <BackgroundPattern />
        </SConditions>
    );
};

// Новый компонент для круглого декора
const CircleDecoration = styled.div<{ $color: string }>`
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.$color}15;
`;

// Модифицированный CornerDecoration для треугольников
const CornerDecoration = styled.div<{ $color: string }>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 40px 40px;
  border-color: transparent transparent ${props => props.$color}15 transparent;
`;

const SConditions = styled.section`
    padding: 80px 0;
    position: relative;
    background-color: ${theme.colors.primaryBg};
    min-height: 100vh;
    

    @media ${theme.media.tablet} {
        padding: 50px 0;
        min-height: auto;
    }

    @media ${theme.media.mobile} {
        padding: 20px 0;
        background-color: ${theme.colors.fontDark};
    }
`;

const TitleWrapper = styled.div`
    position: relative;
    margin-bottom: 60px;
    text-align: center;
   
    
    @media ${theme.media.mobile}{
        margin-bottom: 40px;
        padding-top: 40px;
    }
`;

const ConditionsTitle = styled.h2`
    font-size: 2.4rem;
    color: ${theme.colors.fontDark};
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
    
    @media ${theme.media.mobile}{
        font-size: 2rem;
        color: white;
    }
`;

const TitleUnderline = styled.div`
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.secondaryAccent});
    margin: 0 auto;
    border-radius: 2px;
`;

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 45px;
    position: relative;
    z-index: 2;


    @media (max-width: 900px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));


    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 20px;
    }
`;

const ConditionCard = styled.div<{ color: string; isFirstThree: boolean }>`
    background: white;
    border-radius: 16px;
    padding: 38px 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-top: 4px solid ${props => props.color};

    &:nth-child(4) {
        margin: 0 auto;
    }

    &:nth-child(5) {
        grid-column: 2;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 900px) {
        grid-column: ${props => props.isFirstThree ? 'auto' : 'span 1'};

        /* Первые три карточки в первом ряду, последние две во втором */
        &:nth-child(4) {
            grid-column: 1;
        }

        &:nth-child(5) {
            grid-column: 2;
        }
    }

    @media (max-width: 600px) {
        padding: 25px 20px;
        /* На маленьких экранах делаем 2 колонки */
        &:nth-child(1), &:nth-child(2) {
            grid-column: span 1;
        }

        &:nth-child(3) {
            grid-column: 1;
        }

        &:nth-child(4) {
            grid-column: 2;
        }

        &:nth-child(5) {
            grid-column: 1;


        }
    }

`;

const IconWrapper = styled.div<{ $color: string }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${props => props.$color}15;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: ${props => props.$color};
    
    @media ${theme.media.mobile}{
        width: 40px;
        height: 40px;
        margin-bottom: 15px;
        
    }
`;

const Content = styled.div`
    h3 {
        font-size: 1.2rem;
        color: ${theme.colors.fontDark};
        margin-bottom: 12px;

        @media ${theme.media.mobile}{
            font-size: 1rem;
        }
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        color: ${theme.colors.font};
        margin: 0;
        
        @media ${theme.media.mobile}{
            font-size: 0.85rem;
        }
    }
`;

const BackgroundPattern = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(${theme.colors.secondaryBg} 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.3;
    z-index: 1;
`;

