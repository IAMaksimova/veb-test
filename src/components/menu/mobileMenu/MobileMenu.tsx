import React, {useState} from "react";
import {Menu} from "../Menu.tsx";
import type {MenuItem} from "../../../layout/header/Header.tsx";
import type {ScrollToSec} from "../../../App.tsx";
import {S} from './MobileMenu_Styles.ts'
export const MobileMenu: React.FC<{ menuItems: MenuItem[] } & ScrollToSec> = ({
                                                                                  menuItems,
                                                                                  scrollToSection,
                                                                              }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuItemClick = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsOpen(false);
    };

    return (
        <S.MobileMenuContainer>
            <S.BurgerButton onClick={toggleMenu} isOpen={isOpen}>
                <span></span>
                <span></span>
                <span></span>
            </S.BurgerButton>

            <S.MenuOverlay isOpen={isOpen}>
                <S.CloseButton onClick={toggleMenu}>×</S.CloseButton>
                <Menu
                    menuItems={menuItems}
                    scrollToSection={handleMenuItemClick}
                />
            </S.MenuOverlay>
        </S.MobileMenuContainer>
    );
};

