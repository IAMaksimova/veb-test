import styled from "styled-components";
import type {MenuItem} from "../Header.tsx";
import type {ScrollToSec} from "../../../App.tsx";
import React from "react";


export const HeaderMenu: React.FC<{ menuItems: MenuItem[]} & ScrollToSec> = ({menuItems, scrollToSection}) => {


    return (
        <SMenu>
            <ul>
                {menuItems.map((item, index) => {

                    return (
                        <ListItem key={index} onClick={()=>scrollToSection(item.value)}>
                            <Link>
                                {item.label}
                            </Link>
                        </ListItem>
                    )
                })}
            </ul>
        </SMenu>
    );
};

const SMenu = styled.nav`
    //outline: 1px solid deeppink;
    //margin-right: 7vw;

ul{
    display: flex;
    gap: 5vw;
    font-size: 20px;
    font-weight: 500;
}
`


const Link = styled.a`
text-align: center;
`

const ListItem = styled.li`
    &:hover {
        color: #45A19F;
    }
`
