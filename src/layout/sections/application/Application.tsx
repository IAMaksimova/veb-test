import {S} from './Application_Styles.ts'
import {type FormEvent, useState} from "react";
import student from "../../../assets/images/design-elements/student.png";
import {ApplicationForm} from "./applicationForm/ApplicationForm.tsx";
import {FormHeader} from "./formHeader/FormHeader.tsx";
import {ApplicationModal} from "./applicationModal/ApplicationModal.tsx";
import {LoadingOverlay} from "./loadingOverlay/LoadingOverlay.tsx";

export type FormState = {
    first_name: string;
    last_name: string;
    patronymic: string;
    university: string;
    degree: string;
    course: string;
    specialty: string;
    phone: string;
    email: string;
    resume: null | File;
    consent: boolean;
    gender: 'мужской' | 'женский' | null;
    city: string;
    customUniversity: null | string
}

export const Application = () => {
    const [formData, setFormData] = useState<FormState>({
        first_name: 'Валера',
        last_name: 'Воронцов',
        patronymic: 'Сергеевич',
        university: 'МГТУ им.Баумана',
        degree: '',
        course: '',
        specialty: 'Прикладная математика и информатика',
        phone: '79633699669',
        email: 'valera@luchshiy.com',
        resume: null,
        consent: false,
        gender:  'мужской',
        city: '',
        customUniversity: null

    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        if (formData.university === 'Другое' && formData.customUniversity && !formData.customUniversity.trim()) {
            alert('Пожалуйста, введите название вашего ВУЗа');
            return;
        }

        if (!formData.consent) {
            setErrorMessage('Необходимо согласие на обработку данных');
            setIsSubmitting(false);
            return;
        }

        if (!formData.resume) {
            setErrorMessage('Файл резюме обязателен');
            setIsSubmitting(false);
            return;
        }

        try {
            const formDataToSend = new FormData();

            formDataToSend.append('first_name', formData.first_name);
            formDataToSend.append('last_name', formData.last_name);
            formDataToSend.append('patronymic', formData.patronymic);
            formDataToSend.append('university', formData.university);
            formDataToSend.append('degree', formData.degree);
            formDataToSend.append('course', formData.course);
            formDataToSend.append('specialty', formData.specialty);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('consent', formData.consent.toString());

            if (formData.resume) {
                formDataToSend.append('resume', formData.resume);
            }

            const response = await fetch('http://localhost:5000/api/resumes', {
                method: 'POST',
                body: formDataToSend,
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || `HTTP error! status: ${response.status}`);
            }
            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.error || `Ошибка сервера: ${response.status}`);
            }

            setShowSuccessModal(true);
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

        } catch (error) {
            console.error('Ошибка при отправке анкеты:', error);
            setErrorMessage(error instanceof Error ? error.message : 'Произошла ошибка при отправке анкеты');
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <S.Application id={'application'}>
            <S.FormContainer>
                <FormHeader title={'Анкета кандидата'} subtitle={'Практика в ВЭБ.РФ – ваш первый шаг в карьере'}/>

                {errorMessage && (
                    <S.ErrorMessage>
                        {errorMessage}
                    </S.ErrorMessage>
                )}

                <ApplicationForm
                    setFormData={setFormData}
                    formData={formData}
                    handleSubmit={handleSubmit}
                />
            </S.FormContainer>
            <S.StudentImage src={student} alt="Студент"/>
            {showSuccessModal && <ApplicationModal closeSuccessModal={closeSuccessModal}/>}
            {isSubmitting && <LoadingOverlay/>}
        </S.Application>
    );
};