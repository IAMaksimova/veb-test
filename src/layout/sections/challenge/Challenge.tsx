import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import triangle from '../../../assets/images/design-elements/abstract40g.png';
import circle from '../../../assets/images/design-elements/abstract15g.png';
import pattern from '../../../assets/images/patterns/pattern-tiff.png';
import {MainSmallText} from "../main/MainMobile.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";

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
                        В ВЭБ.РФ, главном институте развития страны, вы сами определяете свой путь. Это не просто практика – это шанс реализовать свой потенциал, взять максимум от возможностей и заложить фундамент успешной карьеры.
                    </ChallengeText>
                </TextWrapper>

                <CardsWrapper>
                    <LeftColumn>
                        <ChallengeElement height={'34vh'} content={'01'}>
                            Возможность участвовать в реальных проектах, решая сложные и интересные задачи
                        </ChallengeElement>
                        <ChallengeElement height={'22vh'} content={'03'}>
                            Ценные навыки и опыт, которые вы сможете применить в будущем
                        </ChallengeElement>
                    </LeftColumn>

                    <RightColumn>
                        <ChallengeElement height={'24vh'} content={'02'}>
                            Взаимодействие с лучшими специалистами в области финансов, экономики и управления
                        </ChallengeElement>
                        <BottomRow>
                            <ChallengeElement height={'32vh'} content={'04'} accent>
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
    min-height: fit-content;
    background-color: #323E48;
    color: white;
    padding: 6vw 0 6vw 6vw;
    position: relative;
    overflow-x: hidden;

    &:before {
        content: '';
        background-image: url(${triangle});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 5;
        bottom: calc(35% - 5vh);
        //right: calc(30% - 10vh + 1vw);
        right: calc(22% + 4vw);
        width: 6vw;
        min-width: 60px;
        max-width: 100px;
        height: 14vh;


        @media ${theme.media.laptop} {
            top: 64%;
            right: 24%;
        }

        @media ${theme.media.tablet} {
            top: 60%;
            left: 1%;
            width: 7vw;
            min-width: 70px;
            max-width: 110px;
           
        }

   
      

 
    }

    &:after {
        content: '';
        background-image: url(${circle});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 5;
        bottom: calc(10% - 5vh);
        right: 4%;
        width: 7vw;
        min-width: 70px;
        max-width: 110px;
        height: 14vh;


        @media ${theme.media.laptop} {
            top: 86%;
            right: 4%;
    
        }
        
        @media ${theme.media.tablet} {
            top: 77%;
            right: 4%;
            width: 7vw;
            min-width: 70px;
            max-width: 110px;
        }
        
        @media ${theme.media.mobile}{
            top: 80%;
        }

     
    }
    
    @media ${theme.media.laptop}{
        padding-bottom: 0;
        overflow-y: hidden;
        padding-top: 7vw;
    }
    

    @media ${theme.media.tablet} {
        height: auto;
        min-height: auto;
        padding: 40px 20px;
        
    }
    
    @media ${theme.media.mobile}{
        padding-top: 8vh;
    }
    
`;

const TextWrapper = styled.div`
    width: 100%;
    margin-bottom: 4vh;

    @media ${theme.media.tablet} {
        margin-bottom: 30px;
    }
`;

const ChallengeText = styled(MainSmallText)`
    font-weight: 400;
    width: 60vw;
    font-size: clamp(16px, 3vh, 21px);
    line-height: 1.5;

    @media ${theme.media.tablet} {
        width: 100%;
        font-size: ${theme.fontsize_text.tablet};
    }
    
`;

const CardsWrapper = styled.div`
    display: flex;
    width: 95%;
    height: 65%;
    gap: calc(20px - 0.1vh);

    @media ${theme.media.tablet} {
        flex-direction: column;
        height: auto;
        width: 100%;
    }
`;

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(20px - 0.1vh);
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
  
    
    @media ${theme.media.laptop}{
        height: auto;
    }
  
`;

const ChallengeElement = styled.div<ElementSize & {accent?: boolean}>`
    // width: calc(${props => props.width || '100%'} - 1vh - 1vw);
    height: calc(${props => props.height || 'auto'} - 4vh + 4vw);
    border: 1px solid ${props => props.accent ? '#07CEB8' : 'white'};
    border-radius: 25px;
    position: relative;
    padding: 30px;
    display: flex;
    align-items: flex-end;
    background: ${props => props.accent ? 'white' : 'transparent'};
    color: ${props => props.accent ? theme.colors.fontDark : 'white'};
    font-size: calc(1.2rem - 0.1vh);
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
        padding: 2vh;
    }

    @media ${theme.media.laptop} {
        //font-size: calc(1rem - 0.3vh);
        font-size: ${theme.fontsize_text.tablet};
        padding: 20px;
        height: calc(${props => props.height || 'auto'} - 4vh - 4vw);
    }
    @media ${theme.media.tablet} {
        padding: 20px;
        min-height: 180px;
        height: auto !important;
        font-size: clamp(10px, 16px, 20px);
    }

    @media ${theme.media.mobile} {
        min-height: 150px;
        font-size: clamp(0.8rem, 1.2rem, 1.5rem);
    }
`;

const DecElement = styled.div`
    width: 100%;
    height: auto;
    border: 1px solid #1F696E;
    border-radius: 25px;
    background-image: url('${pattern}');
    background-size: cover;
    opacity: 0.8;
    

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        display: none;
    }
`;