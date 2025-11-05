import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 10px;
`;

const LogoLink = styled.a`
    display: inline-flex;
    align-items: center;
    height: 100%;
`;

const HeaderLogo = styled.img`
    width: auto;
    height: calc(55px - 1vw - 1vh); /* Базовый размер + динамические единицы */
    min-height: 24px;
    max-height: 48px;
    object-fit: contain;
    transition:
            height 0.3s ease-out,
            transform 0.2s ease-out,
            filter 0.2s ease-out;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.1));
    will-change: height; /* Оптимизация анимации */

  

    /* Плавное уменьшение для мобильных */
    @media (max-width: 768px) {
        height: calc(22px + 1vw);
    }
    
    @media ${theme.media.laptop} {
        height: calc(50px - 1.5vw - 1.3vh)
    }
    
    @media ${theme.media.mobile} {
        height: calc(45px - 1.5vw - 2vh);
    }

    &:hover {
        transform: scale(1.08);
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
    }

    &:active {
        transform: scale(0.98);
    }
`;

export const S = {
    LogoContainer,
    HeaderLogo,
    LogoLink
}