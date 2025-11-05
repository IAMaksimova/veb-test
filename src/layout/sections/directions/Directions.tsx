import {S} from './Directions_Styles.ts'
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import React, {useState} from "react";
import type {IsMobile, ScrollToSec} from "../../../App.tsx";
import {type Direction, directions} from "./Diresctions_Data.ts";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {DirectionModal} from "./directionModal/DirectionModal.tsx";

export const Directions: React.FC<ScrollToSec & IsMobile> = ({scrollToSection}) => {
    const [selectedDirection, setSelectedDirection] = useState<Direction | null>(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleDirectionClick = (direction: Direction) => {
        setSelectedDirection(direction);
    };

    const handleCloseModal = () => {
        setIsClosing(true);

        setTimeout(() => {
            setSelectedDirection(null);
            setIsClosing(false);
        }, 300);

    };

    const handleGoToApplication = () => {
        setIsClosing(true);

        setTimeout(() => {
            setSelectedDirection(null);
            setIsClosing(false);
        }, 300);
        scrollToSection('application')
    }

    const directionsList = directions.map((direction) => {
        return (
            <S.DirectionItem key={direction.id} onClick={() => handleDirectionClick(direction)}>
                {direction.name}
            </S.DirectionItem>
        );
    })

    return (

        <S.Directions id={'directions'}>
            <Container>
                <FlexWrapper wrap={'wrap'} direction={'column'} align={'flex-start'}>
                    <S.DirectionsHeader>
                        <SectionTitle>Блоки и компетенции</SectionTitle>
                        <S.DirectionsSubtitle>Направления профессионального развития в ВЭБ.РФ</S.DirectionsSubtitle>
                    </S.DirectionsHeader>
                    <FlexWrapper wrap={'wrap'} justify={'center'} gap={'clamp(11px, 1.1vw, 20px)'}>
                        {directionsList}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>

            {selectedDirection && (
                <DirectionModal selectedDirection={selectedDirection}
                                isClosing={isClosing}
                                handleCloseModal={handleCloseModal}
                                handleGoToApplication={handleGoToApplication}/>
            )}
        </S.Directions>
    );
};








