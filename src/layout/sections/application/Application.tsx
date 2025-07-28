import styled, {keyframes} from "styled-components";
import {type FormEvent, useState} from "react";
import {theme} from "../../../styles/Theme.ts";
import student from "../../../assets/images/student.png";
import {ApplicationForm} from "./applicationForm/ApplicationForm.tsx";
import {FormHeader} from "./applicationForm/FormHeader.tsx";
import {db} from "../../../firebase.ts";
import {collection, addDoc} from 'firebase/firestore';
import {v4} from "uuid";
import {FaCheckCircle, FaSpinner} from "react-icons/fa";

export type FormState = {
    firstName: string;
    lastName: string;
    patronymic: string;
    university: string;
    degree: string;
    course: string;
    specialty: string;
    phone: string;
    email: string;
    resume: null | File;
    consent: boolean;
}

export const Application = () => {
    const [formData, setFormData] = useState<FormState>({
        firstName: 'Валера',
        lastName: 'Валеров',
        patronymic: 'Валерьвич',
        university: 'РУТ',
        degree: '',
        course: '',
        specialty: 'Дальнобойщик',
        phone: '79053699856',
        email: 'valer@gmail.com',
        resume: null,
        consent: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await addDoc(collection(db, 'applications'), {
                id: v4(),
                fullName: `${formData.firstName} ${formData.lastName} ${formData.patronymic}`,
                dateOfBirth: '25-10-2004',
                university: formData.university,
                degree: formData.degree,
                course: Number(formData.course),
                specialty: formData.specialty,
                phone: formData.phone,
                email: formData.email,
                resume: formData.resume ? formData.resume.name : null,
                consent: formData.consent,
                hireDate: new Date(),
                status: 'new'
            });

            setShowSuccessModal(true);

            // Сброс формы после успешной отправки
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
                consent: false,
            });
        } catch (error) {
            console.error('Ошибка при отправке анкеты:', error);
            alert('Произошла ошибка при отправке анкеты');
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <SApplication id={'application'}>
            <BackgroundPattern/>
            <FormContainer>
                <FormHeader title={'Анкета кандидата'} subtitle={'Практика в ВЭБ.РФ – ваш первый шаг в карьере'}/>
                <ApplicationForm
                    setFormData={setFormData}
                    formData={formData}
                    handleSubmit={handleSubmit}
                />
            </FormContainer>
            <StudentImage src={student} alt="Студент"/>

            {/* Модальное окно успешной отправки */}
            {showSuccessModal && (
                <SuccessModal onClick={closeSuccessModal}>
                    <SuccessContent onClick={e => e.stopPropagation()}>
                        <SuccessIcon>
                            <FaCheckCircle/>
                        </SuccessIcon>
                        <SuccessTitle>Анкета отправлена!</SuccessTitle>
                        <SuccessText>
                            Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
                        </SuccessText>
                        <CloseModalButton onClick={closeSuccessModal}>
                            Закрыть
                        </CloseModalButton>
                    </SuccessContent>
                </SuccessModal>
            )}

            {/* Индикатор загрузки */}
            {isSubmitting && (
                <LoadingOverlay>
                    <LoadingSpinner>
                        <FaSpinner/>
                        <span>Отправка данных...</span>
                    </LoadingSpinner>
                </LoadingOverlay>
            )}
        </SApplication>
    );
};

// Анимации
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const scaleIn = keyframes`
    from {
        transform: scale(0.8);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
`;

// Стили для новых компонентов
const SuccessModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
`;

const SuccessContent = styled.div`
    background: white;
    padding: 40px;
    border-radius: 16px;
    text-align: center;
    max-width: 500px;
    width: 90%;
    animation: ${scaleIn} 0.3s ease;
`;

const SuccessIcon = styled.div`
    font-size: 60px;
    color: ${theme.colors.accent};
    margin-bottom: 20px;
`;

const SuccessTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 15px;

`;

const SuccessText = styled.p`
    font-size: 16px;
    margin-bottom: 25px;
    line-height: 1.5;
`;

const CloseModalButton = styled.button`
    background: ${theme.colors.accent};
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
    }
`;

const LoadingOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const LoadingSpinner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    
    svg {
        font-size: 40px;
        color: ${theme.colors.accent};
        animation: ${spin} 1s linear infinite;
    }
    
    span {
        font-size: 18px;
    }
`;

// Остальные стили остаются без изменений
const BackgroundPattern = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 30%, rgba(7, 206, 184, 0.08) 0%, transparent 25%),
    radial-gradient(circle at 80% 70%, rgba(7, 206, 184, 0.08) 0%, transparent 25%);
    z-index: 0;
`;

const StudentImage = styled.img`
    position: absolute;
    left: 7%;
    bottom: 0%;
    height: 70%;
    max-height: 60vh;
    z-index: 1;
    filter: blur(0.6px) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2)) sepia(0.3) brightness(0.95) hue-rotate(5deg) saturate(0.7);

    @media ${theme.media.tablet}, ${theme.media.mobile} {
        display: none;
    }
`;

const SApplication = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 130vh;
    padding-top: 6vh;
    position: relative;
    background-color: ${theme.colors.font};
    overflow: hidden;

    @media ${theme.media.mobile} {
        min-height: auto;
        padding: 20px 0;
        align-items: flex-start;
    }
`;

const FormContainer = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 40px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 1;
    animation: ${fadeIn} 0.6s ease-out;

    @media ${theme.media.tablet} {
        padding: 30px;
        margin: 20px;
        width: calc(100% - 40px);
    }

    @media ${theme.media.mobile} {
        padding: 20px 16px;
        margin: 16px;
        width: calc(100% - 32px);
        border-radius: 12px;
    }
`;