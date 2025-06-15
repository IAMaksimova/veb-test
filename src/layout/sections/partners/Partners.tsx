import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import fin from '../../../assets/uni-logos/finun.jpg'
import hse from '../../../assets/uni-logos/hse.png'
import mgimo from '../../../assets/uni-logos/mgimo.jpg'
import mgtu from '../../../assets/uni-logos/mgtu.png'
import msu from '../../../assets/uni-logos/msu.png'
import ranh from '../../../assets/uni-logos/ranhigs.webp'
import rpa from '../../../assets/uni-logos/rpa.gif'
import rudn from '../../../assets/uni-logos/rudn.jpg'
import vavt from '../../../assets/uni-logos/vavt.jpg'

const logos = [fin, hse, mgtu, mgimo, msu, ranh, rpa, rudn, vavt]

export const Partners = () => {
    return (
        <SPartners>

            <FlexWrapper wrap={'wrap'} direction={'column'} style={{height: '40%'}}>
                <Title>Наши партнеры</Title>
                <SubTitle>Высшие учебные заведения, с которыми мы работаем</SubTitle>
            </FlexWrapper>

            <LogoWrap>
                {logos.map((logo, index) => {
                    return (
                        <PartnerLogo src={logo} key={index}/>
                    )
                })}
            </LogoWrap>


        </SPartners>
    );
};


const SPartners = styled.section`
    height: 48vh;
    background-color: white;
    text-align: center;
    padding: 8vh;
`


const Title = styled.h2`
    color: ${theme.colors.font};
    font-weight: 600;
    font-size: 4vh;
    margin-bottom: 1.5vh;
    text-align: center;
    line-height: 1.2;

    @media ${theme.media.tablet} {
        font-size: 3.2vh;
        margin-bottom: 1.2vh;
    }

    @media ${theme.media.mobile} {
        font-size: 24px; /* Фиксированный размер для мобильных */
        margin-bottom: 12px;
    }

    @media (max-width: 360px) {
        font-size: 22px;
    }
`;

const SubTitle = styled.p`
    font-size: 2.2vh;
    color: rgba(110, 110, 110, 0.61);
    text-align: center;
    max-width: 80%;
    margin: 0 auto;
    line-height: 1.4;

    @media ${theme.media.tablet} {
        font-size: 2vh;
        max-width: 90%;
    }

    @media ${theme.media.mobile} {
        font-size: 16px; /* Фиксированный размер для мобильных */
        max-width: 95%;
    }

    @media (max-width: 360px) {
        font-size: 14px;
    }
`;

const LogoWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    padding: 2vh 0;
`

const PartnerLogo = styled.img`
  height: auto;
  max-height: 14vh;
  width: auto;
  max-width: 19vw;
  object-fit: contain;
  padding: 1.5vh;
  
  /* Чёрно-белый фильтр */
  filter: grayscale(100%);
  opacity: 0.8;
  transition: all 0.3s ease;

  /* Эффекты при наведении */
  &:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.05);
  }
`
