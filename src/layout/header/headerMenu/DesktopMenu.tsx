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
    @media ${theme.media.tablet} {
        display: none;
    }

    ${ListItem} {
        position: relative;
        padding: 10px 0;
        cursor: pointer;
        transition: all 0.3s ease;

    
    }

`
