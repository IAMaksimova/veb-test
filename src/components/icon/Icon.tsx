import React from 'react';
import iconsSprite from '../../assets/icons-sprite.svg'
import styled from "styled-components";

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    hoverColor?: string;
};
export const Icon: React.FC<IconPropsType> = ({
                                                  iconId,
                                                  width = "40",
                                                  height = "40",
                                                  viewBox = "0 -10 35 35",
                                                  hoverColor
                                              }) => {
    return (

        <StyledIcon
            width={width}
            height={height}
            viewBox={viewBox}
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            $hoverColor={hoverColor}
        >
            <use xlinkHref={`${iconsSprite}#${iconId}`}/>
        </StyledIcon>

    );
};

const StyledIcon = styled.svg<{ $hoverColor?: string }>`
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 5px ${props => props.$hoverColor || 'rgba(255, 255, 255, 0.7)'});
    
    & use {
      fill: ${props => props.$hoverColor || '#ffffff'};
    }
  }

  & use {
    transition: fill 0.3s ease;
  }
`;
