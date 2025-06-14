import styled, {keyframes} from "styled-components";
import {type ChangeEvent, useState} from "react";
import {FiCheckCircle} from "react-icons/fi";
import {theme} from "../../../styles/Theme.ts";
import student from "../../../assets/images/student.png";


interface FormState {
    firstName: string;
    lastName: string;
    university: string;
    degree: string;
    year: string;
    specialty: string;
    phone: string;
    email: string;
    resume: File | null;
    consent: boolean;
}

export const Application = () => {
    const [formData, setFormData] = useState<FormState>({
        firstName: '',
        lastName: '',
        university: '',
        degree: '',
        year: '',
        specialty: '',
        phone: '',
        email: '',
        resume: null,
        consent: false
    });

    // Годы обучения в зависимости от степени
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
                year: ''
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

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            university: '',
            degree: '',
            year: '',
            specialty: '',
            phone: '',
            email: '',
            resume: null,
            consent: false
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    const isValidEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const isFormValid = () => {
        return (
            formData.firstName.length > 0 &&
            formData.lastName.length > 0 &&
            formData.university.length > 0 &&
            formData.degree.length > 0 &&
            formData.year.length > 0 &&
            formData.specialty.length > 0 &&
            isValidEmail(formData.email) &&
            formData.phone.length > 0 &&
            formData.consent
        );
    };

    return (
        <SApplication id={'application'}>
            <BackgroundPattern/>
            <FormContainer>
                <FormHeader>
                    <FormTitle>Анкета кандидата</FormTitle>
                    <FormSubtitle>Практика в ВЭБ.РФ – ваш первый шаг в карьере</FormSubtitle>
                </FormHeader>
                <TwoColumnForm onSubmit={handleSubmit}>
                    <LeftColumn>
                        <FormGroup>
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

                        <FormGroup>
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

                        <FormGroup>
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

                        <FormGroup>
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

                        <FormGroup>
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
                    </LeftColumn>

                    <RightColumn>
                        <FormGroup>
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

                        <FormGroup>
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
                        <FormGroup>
                            <Label htmlFor="year">Курс*</Label>
                            <SelectField
                                id="year"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                required
                                disabled={!formData.degree}
                            >
                                {yearOptions[formData.degree as keyof typeof yearOptions]?.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </SelectField>
                        </FormGroup>


                        <FormGroup>
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

                        <ConsentGroup>
                            <CheckboxInput
                                type="checkbox"
                                id="consent"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleCheckboxChange}
                                required
                            />
                            <ConsentLabel htmlFor="consent">
                                Я согласен на обработку персональных данных*
                            </ConsentLabel>
                        </ConsentGroup>
                    </RightColumn>


                </TwoColumnForm>

                <FormFooter>
                    <ResetButton type="button" onClick={handleReset}>
                        Очистить форму
                    </ResetButton>
                    <Button type="submit" disabled={!isFormValid()}>
                        Отправить заявку
                        <FiCheckCircle size={18} style={{marginLeft: '8px'}}/>
                    </Button>
                </FormFooter>
            </FormContainer>

            <StudentImage src={student} alt="Студент"/>
        </SApplication>
    );
};
const StudentImage = styled.img`
    position: absolute;
    left: 7%;
    bottom: 0%;
    height: 70%;
    max-height: 60vh;
    z-index: 1;
    
    filter:
            blur(0.6px)
            drop-shadow(0 10px 20px rgba(0,0,0,0.2))
            sepia(0.3)    // Добавляет легкий "винтажный" эффект как основа
            brightness(0.95) // Слегка уменьшает яркость
            hue-rotate(5deg) // Сдвигает цвета в холодный спектр
            saturate(0.7);
            // Уменьшает насыщенность для естественного вида 

    @media ${theme.media.tablet} {
        display: none;
    }
`
const LeftColumn = styled.div`
    flex: 1;
`;

const RightColumn = styled.div`
    flex: 1;
`;

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

// const floatAnimation = keyframes`
//     0% { transform: translateY(0px); }
//     50% { transform: translateY(-10px); }
//     100% { transform: translateY(0px); }
// `;


const SApplication = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 110vh;
    padding-top: 8vh;
    position: relative;
    background-color: ${theme.colors.font};
    overflow: hidden;
`;

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
`;

const FormHeader = styled.div`
    text-align: center;
    margin-bottom: 32px;
`;

const FormTitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 8px;
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, #07CEB8, #2d3748);
        border-radius: 3px;
    }
`;

const FormSubtitle = styled.p`
    font-size: 16px;
    color: #718096;
    margin-top: 12px;
`;

const TwoColumnForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
    position: relative;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #4a5568;
    font-weight: 500;
`;

const InputField = styled.input`
    width: 100%;
    padding: 12px 16px;
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

const FileInputLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    background-color: #f8fafc;
    border: 1px dashed #cbd5e0;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #4a5568;

    &:hover {
        background-color: #edf2f7;
        border-color: #a0aec0;
    }

    svg {
        margin-right: 8px;
        color: #07CEB8;
    }
`;

const ConsentGroup = styled.div`
    display: flex;
    align-items: center;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #edf2f7;
    grid-column: 1 / -1;
`;

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
`;

const ConsentLabel = styled.label`
    font-size: 14px;
    color: #4a5568;
    line-height: 1.5;
    cursor: pointer;
`;

const FormFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid #edf2f7;
    grid-column: 1 / -1;
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
`;