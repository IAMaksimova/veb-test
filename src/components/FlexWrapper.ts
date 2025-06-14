import styled from "styled-components";

type FlexWrapper = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}

export const FlexWrapper = styled.div<FlexWrapper>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props=> props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    //outline: 4px solid black;
    //width: 100%;
    height: 100%;
    gap: ${props => props.gap || 'auto'};
`