import React from 'react';
import {type Review, reviewsData} from "../../Feedback_Data.ts";
import {S} from './ModalMobileFeedback_Styles.ts'

const CrossIcon: React.FC = () => (
    <S.StyledSvg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </S.StyledSvg>
);


export const ModalMobileFeedback: React.FC<{ closeModal: () => void, selectedReview: Review }> = ({
                                                                                                      closeModal,
                                                                                                      selectedReview
                                                                                                  }) => {

    const reviewsText = reviewsData.find(r => r.name.includes(selectedReview.name.split(' ')[0]))?.text ||
        "Полный текст отзыва отсутствует"

    return (
        <S.ModalOverlay onClick={closeModal}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
                <S.CloseButton onClick={closeModal}>
                    <CrossIcon/>
                </S.CloseButton>
                <S.ModalAuthor>
                    <S.ModalAvatar src={selectedReview.ava} alt={selectedReview.name}/>
                    <S.ModalAuthorInfo>
                        <S.ModalName>{selectedReview.name}</S.ModalName>
                        <S.ModalUsername>{selectedReview.role}</S.ModalUsername>
                    </S.ModalAuthorInfo>
                </S.ModalAuthor>
                <S.FullText>
                    {reviewsText}
                </S.FullText>
            </S.ModalContent>
        </S.ModalOverlay>
    );
};
