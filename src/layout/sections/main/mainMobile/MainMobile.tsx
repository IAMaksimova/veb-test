import React from "react";
import type {ScrollToSec} from "../../../../App.tsx";
import vebChemodan from "../../../../assets/images/design-elements/veb-chemodan.png";
import {S} from './MainMobile_Styles.ts'
import {MainButton} from "../../../../components/MainButton.tsx";
import {Container} from "../../../../components/Container.ts";
import {Accent} from "../Main.tsx";

export const MainMobile: React.FC<ScrollToSec> = ({scrollToSection}) => {
    return (
        <S.MainMobile>
            <Container>
                <S.ContentGrid>
                    <S.ImageColumn>
                        <S.Suitcase
                            src={vebChemodan}
                            alt="Чемодан ВЭБ.РФ"
                            loading="lazy"
                        />
                    </S.ImageColumn>

                    <S.TextColumn>
                        <S.Heading>
                            <Accent>Практика</Accent> <br/> в ВЭБ.РФ
                        </S.Heading>
                        <S.Divider/>
                        <S.Slogan>
                            Мы предоставляем возможности,<br/>
                            <strong>вы — создаёте будущее</strong>
                        </S.Slogan>
                        <MainButton onClick={() => scrollToSection('application')}>
                            ПОДАТЬ ЗАЯВКУ
                        </MainButton>
                    </S.TextColumn>
                </S.ContentGrid>
            </Container>
        </S.MainMobile>
    );
};
