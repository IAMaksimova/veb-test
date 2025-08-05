import styled from "styled-components";
import { Container } from "../../../components/Container.ts";

import { theme } from "../../../styles/Theme.ts";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import ava1 from '../../../assets/avatars/vova-borodin-2.jpeg';
import ava2 from '../../../assets/avatars/sofya-babak-2.jpg'
import ava3 from '../../../assets/avatars/egor-yakimov.jpg'
import decor from '../../../assets/images/design-elements/abstract11g.png'
import decor1 from '../../../assets/images/design-elements/abstract21g.png'
import { Slider } from "./Slider.tsx";
import React, {useState} from "react";
import {SectionTitle} from "../../../components/SectionTitle.tsx";

export type Review = {
    id: number
    ava: string
    name: string
    preview: string
    text: string
    role: string
    isActive?: boolean
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
const SMobileTestimonials = styled.div`
  position: relative;
  width: 100%;
  padding: 30px 0;

  &::before, &::after {
    content: '';
    position: absolute;
    z-index: 1;
    background-size: contain;
    background-repeat: no-repeat;
    pointer-events: none;
  }

  /* Левый верхний элемент */
  &::before {
    background-image: url(${decor});
    top: 10px;
    left: 10px;
    width: 60px;
    height: 70px;
    transform: rotate(-15deg);
  }

  /* Правый нижний элемент */
  &::after {
    background-image: url(${decor1});
    bottom: 10px;
    right: 10px;
    width: 60px;
    height: 80px;
    transform: rotate(-15deg);
  }

  @media (max-width: 480px) {
    &::before, &::after {
      width: 60px;
      height: 70px;
    }
  }
`;
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
        <SMobileTestimonials>
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
        </SMobileTestimonials>
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
        <SFeedback id="feedback">
            <Container>
                {/* Десктопная версия */}
                <FlexWrapperDesktop>
                    <TextContentDesktop>
                        <FeedbackTitle>Истории практикантов</FeedbackTitle>
                        <FeedbackSubtitle>
                            Молодые сотрудники и практиканты ВЭБ.РФ делятся своим опытом
                        </FeedbackSubtitle>
                    </TextContentDesktop>
                    <SliderDesktop>
                        <Slider reviews={reviewsData} autoPlayInterval={10000} />
                    </SliderDesktop>
                </FlexWrapperDesktop>

                {/* Мобильная версия */}
                <MobileVersion>
                    <MobileHeader>
                        <FeedbackTitle>Истории практикантов</FeedbackTitle>
                        <FeedbackSubtitle>
                            Молодые сотрудники и практиканты ВЭБ.РФ делятся своим опытом
                        </FeedbackSubtitle>
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
    padding: 30px 0;
    position: relative;
    margin: 0 auto;
    max-width: 95%;

    &::before, &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 40px;
        z-index: 2;
        pointer-events: none;
    }

    &::before {
        left: 0;
        background: linear-gradient(90deg, ${theme.colors.primaryBg}, transparent);
    }

    &::after {
        right: 0;
        background: linear-gradient(90deg, transparent, ${theme.colors.primaryBg});
    }
`;

const TestimonialsTrack = styled.div`
    display: flex;
    gap: 20px;
    padding: 10px 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const TestimonialCard = styled.div`
    flex: 0 0 auto;
    width: 280px;
    scroll-snap-align: start;
    background: rgba(0, 255, 247, 0.07);
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    z-index: 3; /* Чтобы карточки были поверх декоративных элементов */

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    @media ${theme.media.mobile} {
        width: 85%;
        padding: 20px;
        margin: 0 10px;
    }
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

const MobileVersion = styled.div`
    display: none;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 5vw;

    @media (max-width: 1300px) {
        display: block;
    }
`;

const MobileHeader = styled.div`
    text-align: center;
    margin-bottom: 30px;
    padding: 0 20px;
`;

const FlexWrapperDesktop = styled(FlexWrapper)`
    display: flex;
    align-items: center;
    gap: 40px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 5vw;

    @media (max-width: 1300px) {
        display: none;
    }
`;

const TextContentDesktop = styled.div`
    padding-left: 5vw;
    width: 40%;
`;

const SliderDesktop = styled.div`
    width: 64%;
    padding-right: 4vw;
  
`;

const SFeedback = styled.section`
    position: relative;
    padding: clamp(60px, 8vh, 120px) 0;
    background: ${theme.colors.primaryBg};
    overflow: hidden;
    
    @media (max-width: 1300px) {
        &::before, &::after {
            display: none;
        }
    }

    @media ${theme.media.tablet}, ${theme.media.laptop} {
        padding: 10px 0;
        
    }
`;

const FeedbackTitle = styled(SectionTitle)`
    color: ${theme.colors.fontDark};
    font-size: clamp(2rem, 4.2vw, 3.5rem);
    line-height: 1.2;
    margin-bottom: 20px;
    font-weight: 500;
`;

const FeedbackSubtitle = styled.p`
    color: rgba(8, 96, 89, 0.82);
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-family: 'Bad Script', sans-serif;
    line-height: 1.4;
    max-width: 90%;

    @media ${theme.media.tablet} {
        max-width: 100%;
        margin: 0 auto;
    }
`;

// Стили для модального окна
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
    background: white;
    border-radius: 20px;
    padding: 40px;
    width: 100%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease;

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @media ${theme.media.mobile} {
        padding: 30px 20px;
        max-height: 85vh;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    transition: transform 0.2s ease;

    &:hover {
        transform: rotate(90deg);
    }

    @media ${theme.media.mobile} {
        top: 15px;
        right: 15px;
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
