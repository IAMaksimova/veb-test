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
        font-size: 16px;

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

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;

    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        padding: 0;
        //font-size: 1.3rem;
        font-size: clamp(1rem, 1.2rem, 2rem);
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        font-weight: normal;
        line-height: 1.2;
    }

    h1 {
        font-size: 2.5rem;

        @media ${theme.media.tablet} {
            font-size: 2rem;
        }

        @media ${theme.media.mobile} {
            font-size: 1.75rem;
        }
    }

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

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: rgb(255, 255, 255);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #00fff7;
        border-radius: 8px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 255, 247, 0.78);
        cursor: pointer;
    }

    ::selection {
        background-color: rgba(7, 206, 184, 0.38); /* Бирюзовый фон */
        color: white; /* Белый текст */
        text-shadow: none; /* Убираем тень текста */
    }

    /* Для Firefox */
    ::-moz-selection {
        background-color: #07CEB8;
        color: white;
        text-shadow: none;
    }

    select {
        /* Для Webkit браузеров (Chrome, Safari) */
        margin-bottom: 0;
    }

    /* Создаем контейнер для контроля позиционирования */
    .select-container {
        position: relative;
        display: inline-block;
        width: 100%;
    }

    /* Гарантируем, что список открывается вниз */
    select:focus {
        position: relative;
    }
`;