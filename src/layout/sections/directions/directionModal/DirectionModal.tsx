import React from 'react';
import type {Direction} from "../Diresctions_Data.ts";
import {S} from './DirectionModal_Styles.ts'

type DirectionModal = {
    isClosing: boolean
    selectedDirection: Direction
    handleCloseModal: () => void
    handleGoToApplication: () => void
}

export const DirectionModal: React.FC<DirectionModal> = ({
                                                             isClosing,
                                                             selectedDirection,
                                                             handleCloseModal,
                                                             handleGoToApplication
                                                         }) => {
    return (
        <S.ModalOverlay isClosing={isClosing}>
            <S.ModalContent>
                <S.CloseButton onClick={handleCloseModal}>&times;</S.CloseButton>
                <S.ModalHeader>{selectedDirection.name} {selectedDirection.secondName}</S.ModalHeader>

                <S.ContentGrid>
                    <S.InfoBlock>
                        <h3>О подразделении:</h3>
                        <S.ScrollBox>
                            {selectedDirection.description}
                        </S.ScrollBox>
                    </S.InfoBlock>

                    <S.InfoBlock>
                        <h3>Требования:</h3>
                        <S.RequirementsBox>
                            <S.StyledList>
                                {selectedDirection.requirements.map((requirement, index) => (
                                    <li key={index}>
                                        <S.Marker/>
                                        {requirement}
                                    </li>
                                ))}
                            </S.StyledList>
                        </S.RequirementsBox>
                    </S.InfoBlock>
                </S.ContentGrid>

                <S.ApplyButton onClick={handleGoToApplication}>Подать заявку</S.ApplyButton>
            </S.ModalContent>
        </S.ModalOverlay>
    );
};

