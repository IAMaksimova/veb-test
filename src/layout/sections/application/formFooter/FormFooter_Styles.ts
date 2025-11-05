import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

const FormFooter = styled.div`
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

export const S = {
    FormFooter,
    Button,
    ResetButton
}