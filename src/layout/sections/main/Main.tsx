
import React from "react";
import type {IsMobile, ScrollToSec} from "../../../App.tsx";
import {MainDesktop} from "./MainDesktop.tsx";
import {MainMobile} from "./MainMobile.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const Main: React.FC<ScrollToSec & IsMobile> = ({scrollToSection, isMobile}) => {
    return (
        <div id={'main'}>
            {isMobile ? <MainMobile scrollToSection={scrollToSection} /> : <MainDesktop scrollToSection={scrollToSection} />}
        </div>

    )
};

export const Accent = styled.span`
    color: ${theme.colors.accent};
`;





