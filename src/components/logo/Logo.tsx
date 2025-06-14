import styled from "styled-components";
import vebLogo from '../../assets/images/logos/veb-logo-blue.png';
import { theme } from "../../styles/Theme.ts";

export const Logo = () => {
    return (
        <LogoContainer>
            <LogoLink href="#">
                <HeaderLogo src={vebLogo} alt="Логотип ВЭБ.РФ"/>
            </LogoLink>
        </LogoContainer>
    );
};

const LogoContainer = styled.div`
    display: flex;
    align-items: center; /* Центрирование по вертикали */
    height: 100%;
`;

const LogoLink = styled.a`
    display: inline-flex;
    align-items: center;
`;

const HeaderLogo = styled.img`
    width: auto;
    height: clamp(24px, 4vh, 40px); /* Минимум 24px, предпочтительно 4vh, максимум 40px */
    object-fit: contain;
    transition: transform 0.3s ease;

    /* Адаптация для разных устройств */
    @media ${theme.media.tablet} {
        height: clamp(20px, 3.5vh, 32px);
    }

    @media ${theme.media.mobile} {
        height: clamp(18px, 3vh, 28px);
    }

    &:hover {
        transform: scale(1.05);
    }
`;