import styled from "styled-components";
import { Container } from "../../../components/Container.ts";
import { theme } from "../../../styles/Theme.ts";
import {Users, Calendar, Home, Clock, Award} from 'react-feather';
import React from "react";
import {SectionTitle} from "../../../components/SectionTitle.tsx";

const conditions = [
    {
        title: "Для кого",
        text: "Студенты 3 и 4-го курса бакалавриата и студенты магистратуры, граждане РФ",
        icon: <Users size={24} />,
        color: theme.colors.fontDark,
        decorType: 'triangle'
    },
    {
        title: "Продолжительность",
        text: "6 месяцев с возможностью продления",
        icon: <Calendar size={24} />,
        color: '#07CEB8',
        decorType: 'triangle'
    },
    {
        title: "Формат работы",
        text: "Практика проходит в очном формате",
        icon: <Home size={24} />,
        color: theme.colors.fontDark,
        decorType: 'triangle'
    },
    {
        title: "Гибкий график",
        text: "Практике необходимо уделять от 20 часов в неделю",
        icon: <Clock size={24} />,
        color: '#07CEB8',
        decorType: 'triangle'
    },
    {
        title: "Вознаграждение",
        text: "Практика является неоплачиваемой",
        icon: <Award size={24} />,
        color: theme.colors.fontDark,
        decorType: 'triangle'
    }
];

export const Conditions: React.FC = () => {
    return (
        <SConditions id={'conditions'}>
            <Container>
                <TitleWrapper>
                    <SectionTitle style={{color: theme.colors.fontDark}}>
                        Особенности программы
                    </SectionTitle>
                    <TitleUnderline />
                </TitleWrapper>

                <CardsContainer>
                    {conditions.map((item, index) => (
                        <ConditionCard key={index} color={item.color}>
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
                </CardsContainer>
            </Container>
        </SConditions>
    );
};

const SConditions = styled.section`
    padding: clamp(30px, 8vh, 100px) clamp(20px, 6vw, 15vw);
    position: relative;
    background-color: ${theme.colors.primaryBg};
    
    @media ${theme.media.mobile}{
        padding: clamp(30px, 3vh, 100px) clamp(20px, 6vw, 15vw);
    }
`;

const TitleWrapper = styled.div`
    position: relative;
    margin-bottom: clamp(30px, 5vw, 60px);
    text-align: center;
`;

const TitleUnderline = styled.div`
    width: clamp(80px, 10vw, 120px);
    height: clamp(2px, 0.3vw, 4px);
    background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.secondaryAccent});
    margin: clamp(10px, 1.5vw, 20px) auto 0;
    border-radius: 2px;
`;



const ConditionCard = styled.div<{ color: string }>`
    background: white;
    border-radius: clamp(12px, 1.5vw, 16px);
    padding: clamp(20px, 2.5vw, 30px) clamp(15px, 2vw, 20px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    border-top: clamp(3px, 0.4vw, 4px) solid ${props => props.color};
    width: min(100%, 280px);
    min-height: 160px;
    display: flex;
    flex-direction: column;


    &:hover {
        transform: translateY(clamp(-3px, -0.5vw, -5px));
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    }
`;

const IconWrapper = styled.div<{ $color: string }>`
    width: clamp(36px, 4vw, 44px);
    height: clamp(36px, 4vw, 44px);
    border-radius: 50%;
    background: ${props => props.$color}15;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: clamp(10px, 1.2vw, 16px);
    color: ${props => props.$color};
    flex-shrink: 0;
`;

const Content = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: clamp(0.95rem, 1.1vw, 1.1rem);
        color: ${theme.colors.fontDark};
        margin-bottom: clamp(6px, 0.8vw, 10px);
        font-weight: 500;
        
        @media ${theme.media.mobile} {
            font-weight: 600;
        }
    }

    p {
        font-size: clamp(0.9rem, 1.2vw, 1rem);
        line-height: 1.5;
        color: ${theme.colors.font};
        margin: 0;
        flex-grow: 1;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: clamp(12px, 1vw, 30px);
    position: relative;
    z-index: 2;


    
    ${ConditionCard} {
        width: 15vw;
        flex: 0 1 auto;

        @media (max-width: 1280px) {
            width: 25vw;
        }

        @media (max-width: 600px) {
            width: calc(50% - 13px);
        }

        @media (max-width: 400px) {
            width: calc(50% - 8px);
            max-width: 290px;
        }
    }
`;


const CircleDecoration = styled.div<{ $color: string }>`
    position: absolute;
    bottom: clamp(8px, 1vw, 12px);
    right: clamp(8px, 1vw, 12px);
    width: clamp(18px, 2vw, 24px);
    height: clamp(18px, 2vw, 24px);
    border-radius: 50%;
    background: ${props => props.$color}15;
    transition: all 0.3s ease;
`;

const CornerDecoration = styled.div<{ $color: string }>`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 clamp(24px, 3vw, 32px) clamp(24px, 3vw, 32px);
    border-color: transparent transparent ${props => props.$color}15 transparent;
    transition: all 0.3s ease;
`;