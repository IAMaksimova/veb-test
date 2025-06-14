import styled from "styled-components";
import React from "react";
import type {MenuItem} from "../../layout/header/Header.tsx";
import type {ScrollToSec} from "../../App.tsx";

export const Menu : React.FC<{ menuItems: MenuItem[]} & ScrollToSec> = ({menuItems, scrollToSection}) => {
    return (
            <ul>
                {menuItems.map((item, index) => {

                    return (
                        <ListItem key={index} onClick={() => scrollToSection(item.value)}>
                            <Link>
                                {item.label}
                            </Link>
                        </ListItem>
                    )
                })}
            </ul>
    );
};

const Link = styled.a`
    text-align: center;
`

export const ListItem = styled.li`
    &:hover {
        color: #45A19F;
    }
`