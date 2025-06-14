import styled from "styled-components";
import type {MenuItem} from "../Header.tsx";
import type {ScrollToSec} from "../../../App.tsx";
import React from "react";
import {ListItem, Menu} from "../../../components/menu/Menu.tsx";
import {theme} from "../../../styles/Theme.ts";


export const DesktopMenu: React.FC<{ menuItems: MenuItem[]} & ScrollToSec> = ({menuItems, scrollToSection}) => {


    return (
        <SDesktopMenu>
            <Menu menuItems={menuItems} scrollToSection={scrollToSection}/>
        </SDesktopMenu>

    );
};

const SDesktopMenu = styled.nav`
    
    ul {
        display: flex;
        gap: 5vw;
        font-size: 20px;
        font-weight: 500;
    }
    
    ${ListItem}{
        position: relative;
        padding: 10px 0;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            color: ${theme.colors.accent};

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: ${theme.colors.accent};
                animation: underline 0.3s ease forwards;
            }
        }
    }
`
