import {S} from "./LoadingOverlay_Styles";
import {FaSpinner} from "react-icons/fa";

export const LoadingOverlay = () => {
    return (
        <S.LoadingOverlay>
            <S.LoadingSpinner>
                <FaSpinner/>
                <span>Отправка данных...</span>
            </S.LoadingSpinner>
        </S.LoadingOverlay>
    );
};

