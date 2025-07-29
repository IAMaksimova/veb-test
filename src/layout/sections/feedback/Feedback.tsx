import styled from "styled-components";
import { Container } from "../../../components/Container.ts";
import { SectionTitle } from "../challenge/Challenge.tsx";
import { theme } from "../../../styles/Theme.ts";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import ava1 from '../../../assets/avatars/vova-borodin-2.jpeg';
import ava2 from '../../../assets/avatars/sofya-babak-2.jpg'
import ava3 from '../../../assets/avatars/egor-yakimov.jpg'
import decor from '../../../assets/images/design-elements/abstract11g.png'
import decor1 from '../../../assets/images/design-elements/abstract21g.png'
import { Slider } from "./Slider.tsx";
import {useState} from "react";

export type Review = {
    id: number
    ava: string
    name: string
    preview: string
    text: string
    role: string
}

const reviewsData: Review[] = [
    {
        id: 1,
        ava: ava1,
        name: 'Владимир Бородин',
        role: 'Сотрудник ВЭБ.РФ, практикант 2024 блока "Бизнес. Партнерство. Развитие"',
        preview: 'Практика в ВЭБ.РФ — для целеустремлённых. Важно чётко понимать сферу профессиональных интересов',
        text: 'Студенты, которые приходят на практику, должны понимать, что им интересно, где бы они хотели развиваться как профессионал, где они хотят попробовать свои силы. Практикант, приходящий в ВЭБ, должен обладать желанием получить какие то знания, должен обладать целеустремленностью, настойчивостью. Самое главное это использовать те возможности, которые дает ВЭБ, и по максимуму питаться профессиональными знаниями.'
    },
    {
        id: 2,
        ava: ava2,
        name: 'Софья Бабак',
        role: 'Сотрудник ВЭБ.РФ, практикант 2023 блока "Бизнес. Партнерство. Развитие"',
        preview: 'Практика в ВЭБ.РФ — путь от обучения до реальных задач. Вырастаешь в профессионала и станешь частью сильной команды',
        text: 'Практика в ВЭБ.РФ длится шесть месяцев — этого вполне достаточно, чтобы освоить специальность, развить профессиональные навыки и получить поистине бесценный опыт. Постепенно перед практикантом открываются новые задачи, расширяются полномочия, растёт уровень ответственности — и в какой-то момент ты начинаешь чувствовать себя полноценным членом команды.'
    },
    {
        id: 3,
        ava: ava3,
        name: 'Егор Якимов',
        role: 'Сотрудник ВЭБ.РФ, практикант 2024 блока "Бизнес. Партнерство. Развитие"',
        preview: 'Практика в ВЭБ.РФ — это проекты, меняющие страну. Практика здесь позволяет получить опыт работы над важными для страны проектами',
        text: 'Практика в ВЭБ.РФ стала для меня уникальной возможностью участвовать в проектах, которые реально влияют на социально-экономическое развитие страны. Это бесценный опыт работы с настоящими профессионалами — экспертами, чей уровень мастерства задает высокую планку для всей отрасли. Особенно ценно, что даже будучи практикантом, ты ощущаешь свою причастность к масштабным задачам государственного значения.'
    },

]

// Компонент мобильных отзывов
const MobileTestimonials = () => {
    const [selectedReview, setSelectedReview] = useState<typeof reviewsData[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (review: typeof reviewsData[0]) => {
        setSelectedReview(review);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto'; // Восстанавливаем скролл
    };

    return (
        <>
            <TestimonialsContainer>
                <TestimonialsTrack>
                    {reviewsData.map(review => (
                        <TestimonialCard key={review.id} onClick={() => openModal(review)}>
                            <Text>"{review.preview}"</Text>
                            <Author>
                                <Avatar src={review.ava} alt={review.name}/>
                                <AuthorInfo>
                                    <Name>{review.name}</Name>
                                    <Username>{review.role}</Username>
                                </AuthorInfo>
                            </Author>
                        </TestimonialCard>
                    ))}
                </TestimonialsTrack>
            </TestimonialsContainer>

            {/* Модальное окно */}
            {isModalOpen && selectedReview && (
                <ModalOverlay onClick={closeModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={closeModal}>
                            <CrossIcon />
                        </CloseButton>
                        <ModalAuthor>
                            <ModalAvatar src={selectedReview.ava} alt={selectedReview.name}/>
                            <ModalAuthorInfo>
                                <ModalName>{selectedReview.name}</ModalName>
                                <ModalUsername>{selectedReview.role}</ModalUsername>
                            </ModalAuthorInfo>
                        </ModalAuthor>
                        <FullText>
                            {reviewsData.find(r => r.name.includes(selectedReview.name.split(' ')[0]))?.text ||
                                "Полный текст отзыва отсутствует"}
                        </FullText>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
}
export const CrossIcon: React.FC = () => (
    <StyledSvg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </StyledSvg>
);

const StyledSvg = styled.svg`
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;
// Основной компонент Feedback
export const Feedback = () => {
    return (
        <SFeedback id={'feedback'}>


            <Container>
                {/* Десктопная версия (слайдер) */}
                <FlexWrapperDesktop>
                    <TextContentDesktop>
                        <FeedbackTitle>Истории практикантов</FeedbackTitle>
                        <FeedbackSubtitle>Молодые сотрудники и практиканты ВЭБ.РФ делятся своим опытом прохождения практики в госкорпорации</FeedbackSubtitle>
                    </TextContentDesktop>
                    <SliderDesktop>
                        <Slider reviews={reviewsData} autoPlayInterval={10000}/>
                    </SliderDesktop>
                </FlexWrapperDesktop>

                {/* Мобильная версия */}
                <MobileVersion>
                    <MobileHeader>
                        <FeedbackTitle>Истории практикантов</FeedbackTitle>
                        <FeedbackSubtitle>Молодые сотрудники и практиканты ВЭБ.РФ делятся своим опытом прохождения практики в госкорпорации</FeedbackSubtitle>
                    </MobileHeader>
                    <MobileTestimonials />
                </MobileVersion>
            </Container>
        </SFeedback>
    );
};

// Стили для мобильных отзывов
const TestimonialsContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    padding: 10px 15px 20px;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        height: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${theme.colors.accent};
        border-radius: 2px;
    }
`;

const TestimonialsTrack = styled.div`
    display: inline-flex;
    gap: 15px;
    padding: 5px;
`;

const TestimonialCard = styled.div`
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    min-width: 260px;
    width: 260px;
    flex-shrink: 0;
`;

const Text = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    color: ${theme.colors.fontDark};
    margin-bottom: 20px;
    font-style: italic;
`;

const Author = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Avatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
    display: block;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
`;

const AuthorInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.h4`
    font-size: 0.95rem;
    color: ${theme.colors.fontDark};
    margin-bottom: 2px;
    font-weight: 600;
`;

const Username = styled.span`
    font-size: 0.8rem;
    color: ${theme.colors.font};
    opacity: 0.7;
`;

// Остальные стили остаются без изменений
const MobileVersion = styled.div`
    display: none;
    
    @media ${theme.media.tablet} {
        display: block;
    }
`;

const MobileHeader = styled.div`
    text-align: center;
    margin-bottom: 30px;
    padding: 0 20px;
`;

const FlexWrapperDesktop = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        display: none;
    }
`;

const TextContentDesktop = styled.div`
    padding-left: 5vw;
    width: 40%;
`;

const SliderDesktop = styled.div`
    width: 60%;
    padding-right: 5vw;
`;

const SFeedback = styled.section`
    height: 72vh;
    color: ${theme.colors.font};
    position: relative;
    
    
    &:before, &:after{
        content: '';
        background-image: url(${decor});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 5;
        right: 13%;
        top: -7%;
        width: 7vw;
        min-width: 70px;
        max-width: 110px;
        height: 14vh;
        rotate: -15deg;

        @media ${theme.media.mobile} {
            display: none;
        }
    }
    
    &:after{
        content: '';
        background-image: url(${decor1});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 5;
        top: 82%;
        right: 48%;
        width: 7vw;
        min-width: 70px;
        max-width: 110px;
        height: 17vh;
        rotate: -15deg;

        @media ${theme.media.mobile} {
            display: none;
        }
    }
    
    
    

    @media ${theme.media.tablet} {
        height: auto;
        padding: 60px 0;
    }

    @media ${theme.media.mobile} {
        padding: 40px 0;
    }
`;

const FeedbackTitle = styled(SectionTitle)`
    color: ${theme.colors.font};
    font-size: 10vh;
    line-height: 1.1;
    margin-bottom: 20px;

    @media (max-width: 1200px) {
        font-size: 8vh;
    }

    @media ${theme.media.tablet} {
        font-size: 4vh;
        padding-left: 0;
    }

    @media ${theme.media.mobile} {
        font-size: 24px;
        margin-bottom: 10px;
    }
`;

const FeedbackSubtitle = styled.p`
    color: rgba(8, 96, 89, 0.82);
    font-size: 3.5vh;
    font-family: 'Bad Script', 'sans-serif';

    @media (max-width: 1200px) {
        font-size: 2.5vh;
    }

    @media ${theme.media.tablet} {
        font-size: 1.4vh;
        max-width: 100%;
        padding-left: 0;
    }

    @media ${theme.media.mobile} {
        font-size: 1.5vh;
    }
`;

// Стили для модального окна
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
`;

const ModalContent = styled.div`
    background: white;
    border-radius: 20px;
    padding: 30px;
    width: 100%;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    
    svg {
        width: 20px;
        height: 20px;
        color: ${theme.colors.font};
        transition: color 0.2s;
    }
    
    &:hover svg {
        color: ${theme.colors.accent};
    }
`;


const FullText = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: ${theme.colors.font};
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid ${theme.colors.secondaryBg};
`;

const ModalAuthor = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
`;

const ModalAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;

const ModalAuthorInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ModalName = styled.h4`
    font-size: 1.1rem;
    color: ${theme.colors.fontDark};
    margin-bottom: 3px;
    font-weight: 600;
`;

const ModalUsername = styled.span`
    font-size: 0.9rem;
    color: ${theme.colors.font};
    opacity: 0.7;
`;
