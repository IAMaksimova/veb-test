import styled from "styled-components";
import { Logo } from "../../components/logo/Logo.tsx";
import { FlexWrapper } from "../../components/FlexWrapper.ts";
import type { ScrollToSec } from "../../App.tsx";
import { theme } from "../../styles/Theme.ts";
import {DesktopMenu} from "./headerMenu/DesktopMenu.tsx";
import {MobileMenu} from "../../components/menu/MobileMenu.tsx";

export type MenuItem = {
    label: string;
    value: string;
};

export const items: MenuItem[] = [
    { label: 'Главная', value: 'main' },
    { label: 'О практике', value: 'challenge' },
    { label: 'Направления', value: 'directions' },
    { label: 'Условия', value: 'conditions' },
];

export const Header: React.FC<ScrollToSec> = ({ scrollToSection }) => {
    return (
        <SHeader>
            <FlexWrapper align={'center'} justify={'space-between'}>
                <Logo />

                {/* Обертка для десктопного меню */}
                <DesktopMenuWrapper>
                    <DesktopMenu
                        menuItems={items}
                        scrollToSection={scrollToSection}
                    />
                </DesktopMenuWrapper>

                {/* Обертка для мобильного меню */}
                <MobileMenuWrapper>
                    <MobileMenu
                        menuItems={items}
                        scrollToSection={scrollToSection}

                    />
                </MobileMenuWrapper>
            </FlexWrapper>
        </SHeader>
    );
};

const SHeader = styled.header`
    width: 100%;
    height: 10vh;
    padding: 0 7vw;
    top: 0;
    z-index: 15;
    position: fixed;
    background-color: white;
    transition: all 0.3s ease;

    @media ${theme.media.tablet} {
        height: 8vh;
        padding: 0 5vw;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.91);
    }
`;

const DesktopMenuWrapper = styled.div`
    display: block;
    
    @media ${theme.media.tablet} {
        display: none;
    }
`;

const MobileMenuWrapper = styled.div`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`;