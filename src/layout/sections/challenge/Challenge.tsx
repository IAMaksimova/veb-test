import {S} from './Challenge_Styles.ts'
import {Container} from "../../../components/Container.ts";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import type {IsMobile} from "../../../App.tsx";
import React from "react";

export const Challenge: React.FC<IsMobile> = ({isMobile}) => {
    return (
        <S.Challenge id={'challenge'}>
            <Container>
                <S.TextWrapper>
                    <SectionTitle>Готов раскрыть <u>свой потенциал</u>?</SectionTitle>
                    <S.ChallengeText>
                        В ВЭБ.РФ, главном институте развития страны, вы сами определяете свой путь. Это не просто практика – это шанс реализовать свой потенциал, взять максимум от возможностей и заложить фундамент успешной карьеры.
                    </S.ChallengeText>
                </S.TextWrapper>

                <S.CardsWrapper>
                    <S.LeftColumn>
                        <S.ChallengeElement height={'34vh'} content={'01'}>
                            Возможность участвовать в реальных проектах, решая сложные и интересные задачи
                        </S.ChallengeElement>
                        <S.ChallengeElement height={'22vh'} content={isMobile ? '02' : '03'}>
                            Ценные навыки и опыт, которые вы сможете применить в будущем
                        </S.ChallengeElement>
                    </S.LeftColumn>

                    <S.RightColumn>
                        <S.ChallengeElement height={'24vh'} content={isMobile ? '03' : '02'}>
                            Взаимодействие с лучшими специалистами в области финансов, экономики и управления
                        </S.ChallengeElement>
                        <S.BottomRow>
                            <S.ChallengeElement height={'32vh'} content={'04'} accent>
                                Профессиональные связи, которые помогут расти и строить деловую репутацию
                            </S.ChallengeElement>
                            <S.DecElement/>
                        </S.BottomRow>
                    </S.RightColumn>
                </S.CardsWrapper>
            </Container>
        </S.Challenge>
    );
};
