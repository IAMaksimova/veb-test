import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import type {ScrollToSec} from "../../App.tsx";

export type MenuItem = {
    label: string
    value: string
};
export const items: MenuItem[]= [
    { label: 'Главная', value: 'main' },
    { label: 'О практике', value: 'challenge' },
    { label: 'Направления', value: 'directions' },
    { label: 'Условия', value: 'conditions' },
];


export const Header: React.FC<ScrollToSec> = ({scrollToSection}) => {


    return (
        <SHeader>
            <FlexWrapper align={'center'} justify={'space-between'}>
                <Logo/>
                <HeaderMenu menuItems={items} scrollToSection={scrollToSection}/>
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

    @media (max-width: 768px) {
        height: 8vh;
        padding: 0 5vw;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.91);
    }
`;