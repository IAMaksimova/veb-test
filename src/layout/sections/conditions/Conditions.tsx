import styled from "styled-components";
import { Container } from "../../../components/Container.ts";
import { theme } from "../../../styles/Theme.ts";
import { Users, Calendar, Home, Clock, Award } from 'react-feather';
import React from "react";

const conditions = [
    {
        title: "Для кого",
        text: "Ждем студентов 3 и 4-го курса бакалавриата и студентов магистратуры, имеющих гражданство Российской Федерации",
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
        title: "График работы",
        text: "Гибкий график. Практике необходимо уделять от 20 часов в неделю",
        icon: <Clock size={24} />,
        color: "#07CEB8",
        decorType: 'triangle'
    },
    {
        title: "Вознаграждение",
        text: "Практика является неоплачиваемой",
        icon: <Award size={24} />,
        color: "#540D6E",
        decorType: 'triangle'
    }
];

export const Conditions:React.FC = () => {
    return (
        <SConditions id={'conditions'}>
            <Container>
                <TitleWrapper>
                    <ConditionsTitle>Условия программы</ConditionsTitle>
                    <TitleUnderline />
                </TitleWrapper>

                <GridLayout>
                    {conditions.map((item, index) => (
                        <ConditionCard key={index} $color={item.color}>
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

// Стилизованные компоненты
const SConditions = styled.section`
    padding: 80px 0;
    position: relative;
    background-color: ${theme.colors.primaryBg};
    height: 90vh;

    
`;

const TitleWrapper = styled.div`
    position: relative;
    margin-bottom: 60px;
    text-align: center;
`;

const ConditionsTitle = styled.h2`
    font-size: 2.5rem;
    color: ${theme.colors.fontDark};
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
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
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    position: relative;
    z-index: 2;
`;

const ConditionCard = styled.div<{ $color: string }>`
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-top: 4px solid ${props => props.$color};

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
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
`;

const Content = styled.div`
    h3 {
        font-size: 1.25rem;
        color: ${theme.colors.fontDark};
        margin-bottom: 12px;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        color: ${theme.colors.font};
        margin: 0;
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

