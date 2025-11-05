import {S} from './Conditions_Styles.ts'
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {Users, Calendar, Home, Clock, Award, Flag} from 'react-feather';
import React, {type ReactElement} from "react";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {ConditionCard} from "./conditionCard/ConditionCard.tsx";

export type Condition = {
    title: string;
    text: string;
    icon: ReactElement
}

const conditions: Condition[] = [
    {
        title: "Для кого",
        text: "Студенты бакалавриата, магистратуры и аспирантуры",
        icon: <Users size={24}/>,
    },
    {
        title: "Продолжительность",
        text: "6 месяцев с возможностью продления",
        icon: <Calendar size={24}/>,
    },
    {
        title: "Формат работы",
        text: "Практика проходит в очном формате",
        icon: <Home size={24}/>,
    },
    {
        title: "Гибкий график",
        text: "Практике необходимо уделять от 20 часов в неделю",
        icon: <Clock size={24}/>,
    },
    {
        title: "Вознаграждение",
        text: "Практика является неоплачиваемой",
        icon: <Award size={24}/>,
    },
    {
        title: "Гражданство",
        text: "Обязательно наличие гражданства Российской Федерации",
        icon: <Flag size={24}/>,
    },
];

const conditionsCards = conditions.map((item, index) => <ConditionCard
    item={item}
    key={index}
    color={index % 2 == 0 ? theme.colors.fontDark : '#07CEB8'}
/>)

export const Conditions: React.FC = () => {
    return (
        <S.Conditions id={'conditions'}>
            <Container>
                <S.TitleWrapper>
                    <SectionTitle style={{color: theme.colors.fontDark, fontSize: "clamp(1.9rem, 4vw, 2.5rem)"}}>
                        Условия программы
                    </SectionTitle>
                    <S.TitleUnderline/>
                </S.TitleWrapper>

                <S.CardsContainer>
                    {conditionsCards}
                </S.CardsContainer>
            </Container>
        </S.Conditions>
    );
};

