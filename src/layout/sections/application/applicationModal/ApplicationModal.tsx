import React from 'react';
import {S} from "./ApplicationModal_Styles";
import {FaCheckCircle} from "react-icons/fa";

export const ApplicationModal: React.FC<{closeSuccessModal: () => void}> = ({closeSuccessModal}) => {
    return (
        <S.SuccessModal onClick={closeSuccessModal}>
            <S.SuccessContent onClick={e => e.stopPropagation()}>
                <S.SuccessIcon>
                    <FaCheckCircle/>
                </S.SuccessIcon>
                <S.SuccessTitle>Анкета отправлена!</S.SuccessTitle>
                <S.SuccessText>
                    Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
                </S.SuccessText>
                <S.CloseModalButton onClick={closeSuccessModal}>
                    Закрыть
                </S.CloseModalButton>
            </S.SuccessContent>
        </S.SuccessModal>
    );
};
