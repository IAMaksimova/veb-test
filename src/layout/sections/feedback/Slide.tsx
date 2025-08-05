import styled from "styled-components";
import type {Review} from "./Feedback.tsx";

export const Slide = (props: Review) => {
    return (
        <SSlide>
            <SlideContent>
                <QuoteMark>“</QuoteMark>

                <TextWrapper>
                    <Text>{props.text}</Text>
                </TextWrapper>

                <AuthorSection>
                    <Avatar avatar={props.ava}/>
                    <AuthorInfo>
                        <Name>{props.name}</Name>
                        <Role>{props.role}</Role>
                    </AuthorInfo>
                </AuthorSection>
            </SlideContent>
        </SSlide>
    );
};

const SSlide = styled.div`
    width: 100%;
    height: 90%;
    background: rgba(0, 255, 247, 0.07);
    border-radius: clamp(16px, 2vw, 24px);
    padding: clamp(15px, 3vw, 40px);
    box-sizing: border-box;
    display: flex;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
`;

const SlideContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    gap: clamp(10px, 1.5vw, 20px);
`;

const QuoteMark = styled.span`
    position: absolute;
    top: clamp(-10px, -1vw, -5px);
    left: clamp(5px, 1vw, 10px);
    font-size: clamp(60px, 12vw, 120px);
    line-height: 1;
    color: rgba(8, 96, 89, 0.08);
    font-family: 'Times New Roman', serif;
    z-index: 1;
`;

const TextWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: clamp(10px, 1.5vw, 20px) 0;
    position: relative;
    z-index: 2;
`;

const Text = styled.p`
    margin: 0;
    line-height: clamp(1.5, 1.7vw, 1.7);
    font-size: clamp(0.78rem, 1.4vw, 1rem);
    color: #333;
    hyphens: auto;
    text-align: left;
    letter-spacing: 0.02em;

    @media (max-width: 768px) {
        font-size: clamp(1rem, 3.5vw, 1.1rem);
        line-height: 1.6;
    }
`;

const AuthorSection = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(15px, 2vw, 25px);
    margin-top: auto;
    padding-top: clamp(15px, 2vw, 20px);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`;



const Avatar = styled.div<{ avatar: string }>`
    width: clamp(50px, 7vw, 90px);
    height: clamp(50px, 7vw, 90px); /* Гарантируем одинаковую высоту и ширину */
    border-radius: 50%; /* Делаем идеальный круг */
    background-image: url(${props => props.avatar});
    background-size: cover;
    background-position: center;
    object-fit: cover; /* Для img */
    aspect-ratio: 1/1; /* Сохраняем квадратные пропорции */
    transition: transform 0.3s ease;
    border: 2px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

   
`;
const AuthorInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: clamp(3px, 0.5vw, 6px);
`;

const Name = styled.span`
    font-family: 'Bad Script', cursive;
    font-size: clamp(1rem, 1.3vw, 1.2rem);
    color: #086059;
    font-weight: 500;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: clamp(1.1rem, 4vw, 1.4rem);
    }
`;

const Role = styled.span`
    color: rgba(0, 0, 0, 0.65);
    font-size: clamp(0.7rem, 1vw, 0.9rem);
    font-style: italic;
    letter-spacing: 0.03em;

    @media (max-width: 768px) {
        font-size: clamp(0.85rem, 3vw, 1rem);
    }
`;