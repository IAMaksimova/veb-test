import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

const DownloadLinkPolicy = styled.a`
    color: #086059; /* Темно-бирюзовый для политики */
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 500;

    &:hover {
        color: #07CEB8;
        text-decoration: none;
    }
`;


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
`;

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
    justify-content: flex-start;

  
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

    /* Принудительно открываем список только вниз */
    transform: translateZ(0); /* Создаем новый контекст stacking */
    position: relative;
    z-index: 1;

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
    
    @media ${theme.media.mobile} {
        font-size: 13px;
    }
`;

const CustomUniversityInput = styled.input`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s ease;
    background-color: #f8fafc;
    margin-top: 8px;

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

const RadioGroup = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 4px;

    @media (max-width: 768px) {
        gap: 15px;
    }
`;

const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #4a5568;
`;

const RadioInput = styled.input`
    width: 18px;
    height: 18px;
    margin-right: 8px;
    border: 2px solid #e2e8f0;
    border-radius: 50%;
    appearance: none;
    background-color: #f8fafc;
    transition: all 0.2s;
    cursor: pointer;

    &:checked {
        
        border-color: #07CEB8;
        box-shadow: inset 0 0 0 3px white;
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

const RadioText = styled.span`
    font-size: 14px;
    color: #4a5568;

    @media ${theme.media.mobile} {
        font-size: 13px;
    }
`;


export const S = {
    DownloadLinkPolicy,
    FormContainer,
    Label,
    FileInput,
    FileInputLabel,
    FileInputContainer,
    FormGroup,
    ConsentGroup,
    InputField,
    SelectField,
    CheckboxInput,
    ConsentLabel,
    CustomUniversityInput,
    RadioGroup,
    RadioInput,
    RadioLabel,
    RadioText
}