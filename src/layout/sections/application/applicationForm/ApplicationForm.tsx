import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import React, {type ChangeEvent} from "react";
import type {FormState} from "../Application.tsx";
import {FormFooter} from "./FormFooter.tsx";

export type ApplicationForm = {
    setFormData: (FormData: FormState) => void
    formData: FormState
    handleSubmit: (e: React.FormEvent) => void

}
export const ApplicationForm: React.FC<ApplicationForm> = ({setFormData, formData, handleSubmit}) => {

    const yearOptions = {
        '': ['Выберите курс'],
        'бакалавриат': ['1 курс', '2 курс', '3 курс', '4 курс', '5 курс', '6 курс'],
        'магистратура': ['1 курс', '2 курс']
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        if (name === 'degree') {
            setFormData({
                ...formData,
                degree: value,
                course: ''
            });
        } else {
            setFormData({...formData, [name]: value});
        }
    };


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({...formData, resume: e.target.files[0]});
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, consent: e.target.checked});
    };
    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                {/* Персональные данные */}
                <FormGroup mobileOrder={1} desktopOrder={1}>
                    <Label htmlFor="lastName">Фамилия*</Label>
                    <InputField
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup mobileOrder={1} desktopOrder={2}>
                    <Label htmlFor="firstName">Имя*</Label>
                    <InputField
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup mobileOrder={3} desktopOrder={3}>
                    <Label htmlFor="patronymic">Отчество*</Label>
                    <InputField
                        type="text"
                        id="patronymic"
                        name="patronymic"
                        value={formData.patronymic}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                {/* Контактные данные */}
                <FormGroup mobileOrder={4} desktopOrder={6}>
                    <Label htmlFor="phone">Телефон*</Label>
                    <InputField
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup mobileOrder={5} desktopOrder={5}>
                    <Label htmlFor="email">Email*</Label>
                    <InputField
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                {/* Образовательные данные */}
                <FormGroup mobileOrder={6} desktopOrder={4}>
                    <Label htmlFor="university">ВУЗ*</Label>
                    <InputField
                        type="text"
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup mobileOrder={8} desktopOrder={8}>
                    <Label htmlFor="course">Курс*</Label>
                    <SelectField
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        disabled={!formData.degree}
                    >
                        {yearOptions[formData.degree as keyof typeof yearOptions]?.map((course) => (
                            <option key={course} value={course}>{course}</option>
                        ))}
                    </SelectField>
                </FormGroup>
                <FormGroup mobileOrder={7} desktopOrder={7}>
                    <Label htmlFor="degree">Степень обучения*</Label>
                    <SelectField
                        id="degree"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Выберите степень</option>
                        <option value="бакалавриат">Бакалавриат</option>
                        <option value="магистратура">Магистратура</option>
                    </SelectField>
                </FormGroup>



                <FormGroup mobileOrder={9} desktopOrder={9}>
                    <Label htmlFor="specialty">Специальность*</Label>
                    <InputField
                        type="text"
                        id="specialty"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                {/* Дополнительные данные */}
                <FormGroup mobileOrder={10} desktopOrder={10}>
                    <Label htmlFor="resume">Резюме</Label>
                    <FileInputContainer>
                        <FileInput
                            type="file"
                            id="resume"
                            name="resume"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                        />
                        <FileInputLabel htmlFor="resume">
                            {formData.resume ? formData.resume.name : 'Прикрепить файл'}
                        </FileInputLabel>
                    </FileInputContainer>
                </FormGroup>

                <ConsentGroup mobileOrder={11} desktopOrder={11}>
                    <CheckboxInput
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleCheckboxChange}
                        required
                    />
                    <ConsentLabel htmlFor="consent">
                        Я согласен(на) на обработку персональных данных*
                    </ConsentLabel>

                </ConsentGroup>
                <ConsentGroup mobileOrder={12} desktopOrder={12}>
                    <FormFooter
                        formData={formData}
                        setFormData={setFormData}
                    />
                </ConsentGroup>

            </FormContainer>

        </>




    );
};

const FormContainer = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }

 

 
`;

type OrderProps =  {
    mobileOrder: number;
    desktopOrder: number;
}

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: ${theme.fontsize_text.mobile};
    color: #4a5568;
    font-weight: 500;
    
    @media ${theme.media.mobile}{
        font-size: ${theme.fontsize_text.tablet};
    }
`;

const FileInputContainer = styled.div`
    position: relative;
    margin-top: 4px;
`;

const FileInput = styled.input`
    position: absolute;
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
`;

// const LeftColumn = styled.div`
//     flex: 1;
//
//     @media ${theme.media.mobile} {
//         margin-bottom: 0;
//     }
// `;
//
// const RightColumn = styled.div`
//     flex: 1;
// `;
//
// const TwoColumnForm = styled.form`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 24px;
//
//     @media (max-width: 768px) {
//         grid-template-columns: 1fr;
//         gap: 16px;
//     }
//
//     @media ${theme.media.mobile} {
//         gap: 12px;
//     }
// `;

const FormGroup = styled.div<OrderProps>`
    position: relative;
    order: ${props => props.desktopOrder};

    @media (max-width: 768px) {
        order: ${props => props.mobileOrder};
    }
    
`;

const ConsentGroup = styled.div<OrderProps>`
    display: flex;
    align-items: center;
    justify-content: flex-end;

  
    grid-column: 1 / -1;
    order: ${props => props.desktopOrder};

    @media (max-width: 768px) {
 
        align-items: flex-start;
        order: ${props => props.mobileOrder};
    }



`;


const InputField = styled.input`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s ease;
    background-color: #f8fafc;

    &:focus {
        border-color: #07CEB8;
        outline: none;
        box-shadow: 0 0 0 3px rgba(7, 206, 184, 0.2);
        background-color: #fff;
    }

    &::placeholder {
        color: #cbd5e0;
    }

    @media ${theme.media.mobile} {
        padding: 10px 14px;
        font-size: ${theme.fontsize_text.tablet};
    }
`;

const SelectField = styled.select`
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s ease;
    background-color: #f8fafc;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 16px;

    &:focus {
        border-color: #07CEB8;
        outline: none;
        box-shadow: 0 0 0 3px rgba(7, 206, 184, 0.2);
        background-color: #fff;
    }

    &:disabled {
        background-color: #edf2f7;
        color: #a0aec0;
    }

    @media ${theme.media.mobile} {
        padding: 10px 14px;
        font-size: ${theme.fontsize_text.tablet};

    }
`;

const FileInputLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    background-color: #f8fafc;
    border: 1px dashed #cbd5e0;
    border-radius: 8px;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #4a5568;
    min-height: 44px; 

    &:hover {
        background-color: #edf2f7;
        border-color: #a0aec0;
    }

    svg {
        margin-right: 8px;
        color: #07CEB8;
    }

    @media ${theme.media.mobile} {
        padding: 10px 14px;
        font-size: 13px;
    }
`;

// const ConsentGroup = styled.div`
//     display: flex;
//     align-items: center;
//     margin-top: 24px;
//     padding-top: 24px;
//     border-top: 1px solid #edf2f7;
//     grid-column: 1 / -1;
//
//     @media ${theme.media.mobile} {
//         margin-top: 16px;
//         padding-top: 16px;
//         align-items: flex-start;
//     }
// `;

const CheckboxInput = styled.input`
    width: 18px;
    height: 18px;
    margin-right: 12px;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    appearance: none;
    background-color: #f8fafc;
    transition: all 0.2s;
    cursor: pointer;
    flex-shrink: 0;
    margin-top: 2px; 

    &:checked {
        background-color: #07CEB8;
        border-color: #07CEB8;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='20 6 9 17 4 12'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 12px;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(7, 206, 184, 0.2);
    }

    @media ${theme.media.mobile} {
        width: 20px;
        height: 20px;
    }
`;

const ConsentLabel = styled.label`
    font-size: 14px;
    color: #4a5568;
    line-height: 1.5;
    cursor: pointer;
    margin-right: 16px;
  

    @media ${theme.media.mobile} {
        font-size: 13px;
    }
`;
