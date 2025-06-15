import styled from "styled-components";
import { Container } from "../../../components/Container.ts";
import { SectionTitle } from "../challenge/Challenge.tsx";
import { theme } from "../../../styles/Theme.ts";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import ava1 from '../../../assets/avatars/ava-1.jpg';
import ava2 from '../../../assets/avatars/ava-2.png';
import { Slider } from "./Slider.tsx";
//import groupBgc from '../../../assets/images/feedback-group.jpg'
import {useState} from "react";

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
        text: 'Студенты, которые приходят на практику, должны понимать, что им интересно, где бы они хотели развиваться как профессионал, где они хотят попробовать свои силы. Практикант, приходящий в ВЭБ, должен обладать желанием получить какие то знания, должен обладать целеустремленностью, настойчивостью. Самое главное это использовать те возможности, которые дает ВЭБ, и по максимуму питаться профессиональными знаниями.'
    },
    {
        id: 2,
        ava: ava1,
        name: 'Михаил Бибо',
        role: 'Практикант отдела веб-разработки',
        text: 'Стажировка в "WebCraft" стала для меня настоящим прорывом в frontend-разработке! За 3 месяца я с нуля освоил React и TypeScript, участвовал в создании интерактивного интерфейса. Особенно ценю, что мне доверили реальные задачи, а не просто "подавать кофе" — мой код попал в продакшн! Спасибо за крутой старт!'
    },
    {
        id: 3,
        ava: ava1,
        name: 'Михаил Берлиозов',
        role: 'Практикант отдела веб-разработки',
        text: 'тралалайло тралала'
    },

]

const mobileReviews = [
    {
        id: 1,
        ava: ava2,
        name: 'Иван Гулевский',
        username: '@guyhawkins',
        text: 'Впечатлен профессионализмом и вниманием к деталям'
    },
    {
        id: 2,
        ava: ava1,
        name: 'Аня Ропай',
        username: '@karialynn88',
        text: 'Безупречный опыт от начала до конца. Очень рекомендую!'
    },
    {
        id: 3,
        ava: ava1,
        name: 'Михаил Бибо',
        username: '@janecooper',
        text: 'Надежно и заслуживает доверия. Очень облегчили мне жизнь!'
    }
];
// Компонент мобильных отзывов
const MobileTestimonials = () => {
    const [selectedReview, setSelectedReview] = useState<typeof mobileReviews[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (review: typeof mobileReviews[0]) => {
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
                    {mobileReviews.map(review => (
                        <TestimonialCard key={review.id} onClick={() => openModal(review)}>
                            <Text>"{review.text}"</Text>
                            <Author>
                                <Avatar src={review.ava} alt={review.name}/>
                                <AuthorInfo>
                                    <Name>{review.name}</Name>
                                    <Username>{review.username}</Username>
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
                        <ModalText>"{selectedReview.text}"</ModalText>
                        <ModalAuthor>
                            <ModalAvatar src={selectedReview.ava} alt={selectedReview.name}/>
                            <ModalAuthorInfo>
                                <ModalName>{selectedReview.name}</ModalName>
                                <ModalUsername>{selectedReview.username}</ModalUsername>
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
                        <FeedbackSubtitle>Реальный опыт тех, кто начинал свой путь</FeedbackSubtitle>
                    </TextContentDesktop>
                    <SliderDesktop>
                        <Slider reviews={reviewsData} autoPlayInterval={10000}/>
                    </SliderDesktop>
                </FlexWrapperDesktop>

                {/* Мобильная версия */}
                <MobileVersion>
                    <MobileHeader>
                        <FeedbackTitle>Истории практикантов</FeedbackTitle>
                        <FeedbackSubtitle>Реальный опыт тех, кто начинал свой путь</FeedbackSubtitle>
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
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
    height: 75vh;
    color: ${theme.colors.font};
    position: relative;
    

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
        font-size: 2.5vh;
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

const ModalText = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${theme.colors.fontDark};
    margin-bottom: 25px;
    font-style: italic;
    font-weight: 500;
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
