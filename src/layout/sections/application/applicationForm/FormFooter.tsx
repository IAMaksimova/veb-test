import React from 'react';
import {FiCheckCircle} from "react-icons/fi";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
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
            formData.firstName.length > 0 &&
            formData.lastName.length > 0 &&
            formData.patronymic.length > 0 &&
            formData.university.length > 0 &&
            formData.degree.length > 0 &&
            formData.course.length > 0 &&
            formData.specialty.length > 0 &&
            isValidEmail(formData.email) &&
            formData.phone.length > 0 &&
            formData.consent
        );
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            patronymic: '',
            university: '',
            degree: '',
            course: '',
            specialty: '',
            phone: '',
            email: '',
            resume: null,
            consent: false
        });
    };

    return (
        <SFormFooter>
            <ResetButton type="button" onClick={handleReset}>
                Очистить форму
            </ResetButton>
            <Button type="submit" disabled={!isFormValid()}>
                Отправить заявку
                <FiCheckCircle size={18} style={{marginLeft: '8px'}}/>
            </Button>
        </SFormFooter>
    );
};

const SFormFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 24px;
    border-top: 1px solid #edf2f7;
    width: 100%;

    @media ${theme.media.mobile} {
        flex-direction: column-reverse;
        gap: 16px;
        margin-top: 24px;
        padding-top: 16px;
    }
`;

const Button = styled.button`
    padding: 14px 28px;
    background-color: #07CEB8;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 6px rgba(7, 206, 184, 0.2);
    min-width: 180px;
    justify-content: center;

    &:hover {
        background-color: #05a392;
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(7, 206, 184, 0.25);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        background-color: #cbd5e0;
        transform: none;
        box-shadow: none;
        cursor: not-allowed;
    }

    @media ${theme.media.mobile} {
        width: 100%;
        padding: 12px 24px;
        font-size: 16px;
    }
`;

const ResetButton = styled.button`
    padding: 12px 20px;
    background: none;
    border: none;
    color: #718096;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 6px;

    &:hover {
        color: #2d3748;
        background-color: #edf2f7;
        text-decoration: none;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(113, 128, 150, 0.2);
    }

    @media ${theme.media.mobile} {
        width: 100%;
        text-align: center;
        padding: 10px 16px;
        font-size: 15px;
    }
`;