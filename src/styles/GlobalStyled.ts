import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Wix Madefor Display", sans-serif;
        
    }

    html {
        font-size: 16px; // Базовый размер шрифта для десктопа

        @media ${theme.media.tablet} {
            font-size: 14px;
        }

        @media ${theme.media.mobile} {
            font-size: 12px;
        }
    }

    body {
        margin: 0;
        display: flex;
        color: ${theme.colors.font};
        overflow-x: hidden;
        width: 100vw;
        min-height: 100vh;
        line-height: 1.5;

     
    }

    // Адаптивные изображения
    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    // Ссылки
    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;

    }

    // Списки
    ul {
        list-style: none;
    }

    // Кнопки
    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        padding: 0;
    }

    // Общие стили для текстовых элементов
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        font-weight: normal;
        line-height: 1.2;
    }

    // Адаптивные заголовки
    h1 {
        font-size: 2.5rem;

        @media ${theme.media.tablet} {
            font-size: 2rem;
        }

        @media ${theme.media.mobile} {
            font-size: 1.75rem;
        }
    }

    // Формы
    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        border: none;
        outline: none;
        width: 100%;

        &:focus {
            outline: 2px solid ${theme.colors.accent};
        }
    }

    // Вспомогательные классы
    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        border: 0;
        clip: rect(0 0 0 0);
    }
`;