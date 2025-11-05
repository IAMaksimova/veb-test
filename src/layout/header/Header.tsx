import { Logo } from "../../components/logo/Logo.tsx";
import { FlexWrapper } from "../../components/FlexWrapper.ts";
import type { ScrollToSec } from "../../App.tsx";
import {DesktopMenu} from "../../components/menu/desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "../../components/menu/mobileMenu/MobileMenu.tsx";
import React from "react";
import {S} from './Header_Styles.ts'

export type MenuItem = {
    label: string;
    value: string;
};

export const menuItems: MenuItem[] = [
    { label: 'Главная', value: 'main' },
    { label: 'О практике', value: 'challenge' },
    { label: 'Направления', value: 'directions' },
    { label: 'Условия программы', value: 'conditions' },
];

export const Header: React.FC<ScrollToSec> = ({ scrollToSection }) => {
    return (
        <S.Header>
            <FlexWrapper align={'center'} justify={'space-between'}>
                <Logo />
                <S.DesktopMenuWrapper>
                    <DesktopMenu
                        menuItems={menuItems}
                        scrollToSection={scrollToSection}
                    />
                </S.DesktopMenuWrapper>

                <S.MobileMenuWrapper>
                    <MobileMenu
                        menuItems={menuItems}
                        scrollToSection={scrollToSection}
                    />
                </S.MobileMenuWrapper>
            </FlexWrapper>
        </S.Header>
    );
};
