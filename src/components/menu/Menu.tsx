import styled from "styled-components";
import React from "react";
import type {MenuItem} from "../../layout/header/Header.tsx";
import type {ScrollToSec} from "../../App.tsx";
import {theme} from "../../styles/Theme.ts";

export const Menu : React.FC<{ menuItems: MenuItem[]} & ScrollToSec> = ({menuItems, scrollToSection}) => {
    return (
            <SMenu>
                {menuItems.map((item, index) => {

                    return (
                        <ListItem key={index} onClick={() => scrollToSection(item.value)}>
                            <Link>
                                {item.label}
                            </Link>
                        </ListItem>
                    )
                })}
            </SMenu>
    );
};

export const SMenu = styled.ul`
    display: flex;
    gap: 5vw;
    font-size: clamp(12px, 1.7vw, 20px);
    font-weight: 500;
    
    @media ${theme.media.tablet}{
        font-size: 12px;
        
    }
`
const Link = styled.a`
    text-align: center;
`

export const ListItem = styled.li`
    &:hover {
        color: #45A19F;
    }
    
`