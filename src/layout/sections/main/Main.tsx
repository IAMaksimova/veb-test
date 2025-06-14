import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import React from "react";
import type {ScrollToSec} from "../../../App.tsx";
import {useMediaQuery} from "react-responsive";
import {MainDesktop} from "./MainDesktop.tsx";
import {MainMobile} from "./MainMobile.tsx";

export const Main: React.FC<ScrollToSec> = (props) => {

    const isMobile = useMediaQuery({maxWidth: 768});
    return (
        <div id={'main'}>
            {isMobile ? <MainMobile {...props} /> : <MainDesktop {...props} />}
        </div>

    )
};

export const Accent = styled.span`
    color: ${theme.colors.accent};
`;




