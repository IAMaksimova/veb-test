import styled from "styled-components";
//import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import triangle from '../../../assets/images/design-elements/abstract40g.png';
import circle from '../../../assets/images/design-elements/abstract15g.png';
import pattern from '../../../assets/images/patterns/pattern-tiff.png';
import {MainSmallText} from "../main/MainMobile.tsx";

type ElementSize = {
    height?: string
    width?: string
    content?: string
}

export const Challenge = () => {
    return (
        <SChallenge id={'challenge'}>
            <Container>
                <TextWrapper>
                    <SectionTitle>Готов раскрыть <u>свой потенциал</u>?</SectionTitle>
                    <ChallengeText>
                        В ВЭБ.РФ, главном институте развития страны, вы сами определяете свой путь. Это не просто практика – это шанс реализовать свой потенциал, взять максимум от возможностей и заложить фундамент успешной карьеры. Что вы получите, зависит только от вас
                    </ChallengeText>
                </TextWrapper>

                <CardsWrapper>
                    <LeftColumn>
                        <ChallengeElement height={'32vh'} content={'01'}>
                            Возможность участвовать в реальных проектах, решая сложные и интересные задачи
                        </ChallengeElement>
                        <ChallengeElement height={'20vh'} content={'03'}>
                            Ценные навыки и опыт, которые вы сможете применить в будущем
                        </ChallengeElement>
                    </LeftColumn>

                    <RightColumn>
                        <ChallengeElement height={'22vh'} content={'02'}>
                            Взаимодействие с лучшими специалистами в области финансов, экономики и управления
                        </ChallengeElement>
                        <BottomRow>
                            <ChallengeElement height={'30vh'} content={'04'} accent>
                                Профессиональные связи, которые помогут расти и строить деловую репутацию
                            </ChallengeElement>
                            <DecElement/>
                        </BottomRow>
                    </RightColumn>
                </CardsWrapper>
            </Container>
        </SChallenge>
    );
};

const SChallenge = styled.section`
    height: 100vh;
    min-height: 800px;
    background-color: #323E48;
    color: white;
    padding: 4vw 0 0 6vw;
    position: relative;
    overflow-x: hidden;

    &:before {
        content: '';
        background-image: url(${triangle});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 5;
        bottom: 36%;
        right: 25%;
        width: 6vw;
        min-width: 60px;
        max-width: 100px;
        height: 13vh;

        @media ${theme.media.mobile} {
            top: 60%;
            left: 1%;
            width: 7vw;
            min-width: 70px;
            max-width: 110px;
            height: 14vh;
        }
    }

    &:after {
        content: '';
        background-image: url(${circle});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 5;
        bottom: 8%;
        right: 4%;
        width: 7vw;
        min-width: 70px;
        max-width: 110px;
        height: 14vh;

        @media ${theme.media.mobile} {
            bottom: 60%;
            right: 4%;
            width: 7vw;
            min-width: 70px;
            max-width: 110px;
            height: 14vh;
        }
    }

    @media ${theme.media.tablet} {
        height: auto;
        min-height: auto;
        padding: 40px 20px;
        
    }
    
`;

const TextWrapper = styled.div`
    width: 100%;
    margin-bottom: 4vh;

    @media ${theme.media.tablet} {
        margin-bottom: 30px;
    }
`;

const SectionTitle = styled.h2`
    color: #07CEB8;
    font-weight: 500;
    font-size: clamp(32px, 5vh, 48px);
    width: 45vw;
    line-height: 1.2;
    margin-bottom: 2vh;

    u {
        text-decoration: none;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background: #07CEB8;
        }
    }

    @media ${theme.media.tablet} {
        width: 100%;
        font-size: 28px;
        margin-bottom: 15px;
    }

    @media ${theme.media.mobile} {
        font-size: 24px;
    }
`;

const ChallengeText = styled(MainSmallText)`
    font-weight: 400;
    width: 60vw;
    font-size: clamp(16px, 3vh, 22px);
    line-height: 1.5;

    @media ${theme.media.tablet} {
        width: 100%;
        font-size: 16px;
    }
`;

const CardsWrapper = styled.div`
    display: flex;
    gap: 20px;
    width: 95%;
    height: 65%;

    @media ${theme.media.tablet} {
        flex-direction: column;
        height: auto;
        width: 100%;
    }
`;

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 40%;

    @media ${theme.media.tablet} {
        width: 100%;
    }
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 60%;

    @media ${theme.media.tablet} {
        width: 100%;
    }
`;

const BottomRow = styled.div`
    display: flex;
    gap: 20px;
    height: 30vh;

    @media ${theme.media.tablet} {
        height: auto;
        flex-direction: column;
    }
`;

const ChallengeElement = styled.div<ElementSize & {accent?: boolean}>`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    border: 1px solid ${props => props.accent ? '#07CEB8' : 'white'};
    border-radius: 25px;
    position: relative;
    padding: 30px;
    display: flex;
    align-items: flex-end;
    background: ${props => props.accent ? 'white' : 'transparent'};
    color: ${props => props.accent ? theme.colors.fontDark : 'white'};
    font-size: clamp(12px, 5vh, 2vh);
    line-height: 1.3;

    &::before {
        content: '${props => props.content || '01'}';
        position: absolute;
        background-color: ${props => props.accent ? theme.colors.fontDark : 'white'};
        color: ${props => props.accent ? 'white' : theme.colors.fontDark};
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 20px;
        left: 20px;
        font-size: 14px;
    }

    @media ${theme.media.tablet} {
        padding: 20px;
        min-height: 180px;
        height: auto !important;
        font-size: 16px;
    }

    @media ${theme.media.mobile} {
        min-height: 150px;
        padding: 15px;
    }
`;

const DecElement = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #1F696E;
    border-radius: 25px;
    background-image: url('${pattern}');
    background-size: cover;
    opacity: 0.8;

    @media ${theme.media.tablet} {
        height: 200px;
    }

    @media ${theme.media.mobile} {
        display: none;
    }
`;