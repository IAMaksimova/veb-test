import React from "react";
import type {ScrollToSec} from "../../../../App.tsx";
import {Container} from "../../../../components/Container.ts";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import vebChemodan from "../../../../assets/images/design-elements/veb-chemodan.png";
import {S} from './MainDesktop_Styles.ts'
import {Accent, MainSmallText} from "../Main.tsx";
import {MainButton} from "../../../../components/MainButton.tsx";

export const MainDesktop: React.FC<ScrollToSec> = ({scrollToSection}) => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} style={{height: '100vh', position: 'relative'}}>
                    <S.MainFigure>
                        <S.MainTextWrap>
                            <S.MainLargeText>
                                <Accent>Практика</Accent> в государственной корпорации ВЭБ.РФ
                            </S.MainLargeText>
                            <MainSmallText>Мы предоставляем возможности, вы — создаете будущее</MainSmallText>
                        </S.MainTextWrap>
                        <MainButton onClick={() => scrollToSection('application')}>
                            ПОДАТЬ ЗАЯВКУ
                        </MainButton>
                    </S.MainFigure>
                    <S.MainImage src={vebChemodan} alt="Чемодан ВЭБ"/>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};



