import {S} from './FormHeader_Styles.ts'
import React from "react";

type FormHeader = {
    title: string
    subtitle: string
}

export const FormHeader: React.FC<FormHeader> = ({title, subtitle}) => {
    return (
        <S.FormHeader>
            <S.FormTitle>{title}</S.FormTitle>
            <S.FormSubtitle>{subtitle}</S.FormSubtitle>
        </S.FormHeader>
    );
};



