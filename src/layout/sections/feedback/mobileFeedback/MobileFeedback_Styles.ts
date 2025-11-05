import styled from "styled-components";
import decor from "../../../../assets/images/design-elements/star.png";
import decor1 from "../../../../assets/images/design-elements/ring.png";
import {theme} from "../../../../styles/Theme.ts";

const MobileFeedback = styled.div`
  position: relative;
  width: 100%;
  padding: 30px 0;

  &::before, &::after {
    content: '';
    position: absolute;
    z-index: 1;
    background-size: contain;
    background-repeat: no-repeat;
    pointer-events: none;
  }
    
  &::before {
    background-image: url(${decor});
    top: 10px;
    left: 10px;
    width: 60px;
    height: 70px;
    transform: rotate(-15deg);
  }
    
  &::after {
    background-image: url(${decor1});
    bottom: 10px;
    right: 10px;
    width: 60px;
    height: 80px;
    transform: rotate(-15deg);
  }

  @media (max-width: 480px) {
    &::before, &::after {
      width: 60px;
      height: 70px;
    }
  }
`;


const TestimonialsContainer = styled.div`
    width: 100%;
    padding: 30px 0;
    position: relative;
    margin: 0 auto;
    max-width: 95%;

    &::before, &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 40px;
        z-index: 2;
        pointer-events: none;
    }

    &::before {
        left: 0;
        background: linear-gradient(90deg, ${theme.colors.primaryBg}, transparent);
    }

    &::after {
        right: 0;
        background: linear-gradient(90deg, transparent, ${theme.colors.primaryBg});
    }
`;

const TestimonialsTrack = styled.div`
    display: flex;
    gap: 20px;
    padding: 10px 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const TestimonialCard = styled.div`
    flex: 0 0 auto;
    width: 280px;
    scroll-snap-align: start;
    background: rgba(0, 255, 247, 0.07);
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    z-index: 3; 

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    @media ${theme.media.mobile} {
        width: 85%;
        padding: 20px;
        margin: 0 10px;
    }
`;

const Text = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    color: ${theme.colors.fontDark};
    margin-bottom: 20px;
    font-style: italic;
`;

const Author = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Avatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
    display: block;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
`;

const AuthorInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.h4`
    font-size: 0.95rem;
    color: ${theme.colors.fontDark};
    margin-bottom: 2px;
    font-weight: 600;
`;

const Username = styled.span`
    font-size: 0.8rem;
    color: ${theme.colors.font};
    opacity: 0.7;
`;

export const S = {
    MobileFeedback,
    TestimonialsContainer,
    TestimonialCard,
    TestimonialsTrack,
    Text,
    Avatar,
    Author,
    AuthorInfo,
    Username,
    Name
}