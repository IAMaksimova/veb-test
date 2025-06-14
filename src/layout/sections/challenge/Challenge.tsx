import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {MainSmallText} from "../main/Main.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import triangle from '../../../assets/images/design-elements/abstract40g.png'
import circle from '../../../assets/images/design-elements/abstract15g.png'
import pattern from '../../../assets/images/patterns/pattern-tiff.png'

type ElementSize = {
    height?: string
    width?: string
    content?: string
}
export const Challenge = () => {
    return (
        <SChallenge id={'challenge'}>
            <Container>
                <FlexWrapper wrap={'wrap'} gap={'30px'}>
                    <SectionTitle>Готов раскрыть <u>свой потенциал</u>?</SectionTitle>

                    <ChallengeText>В ВЭБ.РФ, главном институте развития страны, вы сами определяете свой путь. Это не
                        просто практика – это шанс реализовать свой потенциал, взять максимум от возможностей и заложить
                        фундамент успешной карьеры. Что вы получите, зависит только от вас
                    </ChallengeText>
                </FlexWrapper>


                <FlexContainer>
                    <FlexWrapper direction={'column'} gap={'20px'}>
                        <ChallengeElement height={'32vh'} content={'01'}>
                            Возможность участвовать в реальных проектах, решая сложные и интересные задачи
                        </ChallengeElement>
                        <ChallengeElement height={'20vh'} content={'03'}>Ценные навыки и опыт, которые вы сможете применить в будущем</ChallengeElement>
                    </FlexWrapper>
                    <FlexWrapper wrap={'wrap'} gap={'20px'} direction={'column'}>
                        <ChallengeElement height={'22vh'} width={'52vw'} content={'02'}> Взаимодействие с лучшими специалистами в области финансов, экономики и управления</ChallengeElement>
                        <FlexWrapper gap={'20px'}>
                            <ChallengeElement height={'30vh'} width={'23vw'} content={'04'}>Профессиональные связи, которые помогут расти и строить деловую репутацию</ChallengeElement>
                            <DecElement height={'30vh'} width={'27.5vw'}/>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexContainer>
            </Container>
        </SChallenge>
    );
};

const SChallenge = styled.section`
    height: 100vh;
    background-color: #323E48;
    color: white;
    padding-left: 6vw;
    padding-top: 4vw;
    overflow-x: hidden;


    &:before {
        content: '';
        background-image: url(${triangle});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 5;
        top: 155vh;
        left: 60vw;
        width: 6vw;
        height: 13vh;
        //outline: 1px solid red;
    }

    &:after {
        content: '';
        background-image: url(${circle});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 5;
        top: 185vh;
        left: 85vw;
        width: 7vw;
        height: 14vh;
        //outline: 1px solid red;
    }
`

export const SectionTitle = styled.h2`
    color: #07CEB8;
    font-weight: 500;
    font-size: 5vh;
    width: 45vw;
`

const ChallengeText = styled(MainSmallText)`
    font-weight: 400;
    width: 60vw;
    font-size: 3vh;
`

const ChallengeElement = styled.div<ElementSize>`
    width: ${props => props.width || '30vw'};
    height: ${props => props.height};
    border: 1px solid white;
    border-radius: 25px;
    position: relative;
    padding: 30px;
    display: flex;
    align-items: flex-end;
    font-size: 2.5vh;

    &::before {
        content: '${props => props.content || '01'}';
        position: absolute;
        background-color: white;
        color: ${theme.colors.font};
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 2.5vh;
        left: 1.5vw;
        font-size: 14px;
    }

    &:last-child {
        background-color: white;
        color: ${theme.colors.font};

        &::before {
            background-color: ${theme.colors.font};
            color: white;
        }
    }

    &:first-child-child {
        background-color: transparent;
        color: ${theme.colors.font};

        &::before {
            background-color: ${theme.colors.font};
            color: white;
        }
    }

`
const FlexContainer = styled.div`
    //background-color: darkolivegreen;
    display: flex;
    width: 95%;
    height: 65%;
    gap: 20px;
    padding-top: 30px;
    flex-wrap: wrap;
`

const DecElement = styled.div<ElementSize>`
    width: ${props => props.width};
    height: ${props => props.height};
    border: 1px solid #1F696E;
    border-radius: 25px;
    background-image: url('${pattern}');
    background-size: contain;
    position: relative;
`


