import React from 'react';
import {FiChevronRight} from "react-icons/fi";
import {S} from './FormFooter_Styles.ts'
import type {FormState} from "../Application.tsx";

type FormFooter = {
    setFormData: (formData: FormState) => void
    formData: FormState
}
export const FormFooter: React.FC<FormFooter> = ({setFormData, formData}) => {

    const isValidEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const isFormValid = () => {
        return (
            formData.first_name.length > 0 &&
            formData.last_name.length > 0 &&
            formData.patronymic.length > 0 &&
            formData.university.length > 0 &&
            formData.degree.length > 0 &&
            formData.course.length > 0 &&
            formData.specialty.length > 0 &&
            isValidEmail(formData.email) &&
            formData.phone.length > 0 &&
            formData.consent &&
            formData.resume
        );
    };

    const handleReset = () => {
        setFormData({
            first_name: '',
            last_name: '',
            patronymic: '',
            university: '',
            degree: '',
            course: '',
            specialty: '',
            phone: '',
            email: '',
            resume: null,
            consent: false,
            gender: null,
            city: '',
            customUniversity: null

        });
    };

    return (
        <S.FormFooter>
            <S.ResetButton type="button" onClick={handleReset}>
                Очистить форму
            </S.ResetButton>
            <S.Button type="submit" disabled={!isFormValid()}>
                Отправить заявку
                <FiChevronRight size={18} style={{marginLeft: '8px'}}/>
            </S.Button>
        </S.FormFooter>
    );
};

