import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {SectionTitle} from "../challenge/Challenge.tsx";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import ava1 from '../../../assets/avatars/ava-1.jpg'
import ava2 from '../../../assets/avatars/ava-2.png'
import {Slider} from "./Slider.tsx";


export type Review = {
    id: number
    ava: string
    name: string
    text: string
    role: string
}

const reviewsData: Review[] = [
    {
        id: 1,
        ava: ava2,
        name: 'Владимир Бородин',
        role: 'Сотрудник ВЭБ.РФ, практикант 2024 блока "Бизнес. Партнерство. Развитие"',
        text: 'Студенты, которые приходят на практику, должны понимать, что им интересно, где бы они хотели развиваться как профессионал, где они хотят попробовать свои силы. Практикант, приходящий в ВЭБ, должен обладать желанием получить какие то знания, должен обладать целеустремленностью, настойчивостью. Самое главное это использовать те возможности, которые дает ВЭБ, и по максимуму питаться профессиональными знаниями. Я пришел ВЭБ год назад и за это время попробовал себя в различных направлениях от проектного финансирования до работы с ключевыми клиентами.'
    },
    {
        id: 2,
        ava: ava1,
        name: 'Михаил Бибо',
        role: 'Практикант отдела веб-разработки',
        text: 'Стажировка в "WebCraft" стала для меня настоящим прорывом в frontend-разработке! За 3 месяца я с нуля освоил React и TypeScript, участвовал в создании интерактивного интерфейса. Особенно ценю, что мне доверили реальные задачи, а не просто "подавать кофе" — мой код попал в продакшн! Наставник Алексей терпеливо объяснял сложные концепции, а команда всегда поддерживала. Теперь я уверенно прохожу собеседования и точно знаю: хочу развиваться именно в IT. Спасибо за крутой старт!'
    },
    {
        id: 3,
        ava: ava1,
        name: 'Михаил Берлиозов',
        role: 'Практикант отдела веб-разработки',
        text: 'тралалайло тралала'
    },

]

export const Feedback = () => {
    return (
        <SFeedback id={'feedback'}>
            <Container>
                <FlexWrapper>
                    <FlexWrapper wrap={'wrap'} direction={'column'} justify={'center'}>
                        <FeedbackTitle>Истории практикантов</FeedbackTitle>
                        <FeedbackSubtitle>Реальный опыт тех, кто начинал свой путь</FeedbackSubtitle>

                    </FlexWrapper>

                    <Slider reviews={reviewsData} autoPlayInterval={10000}/>
                </FlexWrapper>
            </Container>
        </SFeedback>
    );
};

const SFeedback = styled.section`
    height: 75vh;
    color: ${theme.colors.font};
    position: relative;

`

const FeedbackTitle = styled(SectionTitle)`
    color: ${theme.colors.font};
    padding-left: 5vw;
    font-size: 10vh;
`

const FeedbackSubtitle = styled.p`
    color: rgba(8, 96, 89, 0.82);
    padding-left: 5vw;
    font-size: 3.5vh;
    font-family: 'Bad Script';
`
