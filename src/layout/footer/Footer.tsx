import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {Container} from "../../components/Container.ts";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Icon} from "../../components/icon/Icon.tsx";

const icons = [
    {label: 'tg', link: 'https://t.me/razvivaemrf', viewBox: '0 0 24px 24px'},
    {label: 'wa', link: 'https://api.whatsapp.com/send/?phone=79260158700&text&type=phone_number&app_absent=0'},
    {label: 'world', link: 'https://вэб.рф/'}
]

export const Footer = () => {
    return (
        <SFooter>
            <Container>
                <FlexWrapper wrap={'wrap'} direction={'column'} align={'space-around'}>
                    <MainContent>
                        <FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'}>
                            <Logo/>
                            <ContactWrapper>
                                <ContactItem>+7 (926) 015-87-00</ContactItem>
                                <ContactItem>MachevskiyAV@veb.ru</ContactItem>
                            </ContactWrapper>

                            <Address>
                                <AddressLink href={'https://yandex.ru/maps/213/moscow/house/ulitsa_vozdvizhenka_10/Z04YcAdmS0IFQFtvfXt0cn9jZQ==/?ll=37.606271%2C55.753301&source=serp_navig&z=16'} target={'_blank'}>
                                    г. Москва, ул. Воздвиженка, д. 10
                                </AddressLink>
                            </Address>

                            <SocialWrapper gap={'15px'}>
                                {icons.map((icon, index) => (
                                    <SocialLink key={index} href={icon.link} target='_blank'>
                                        <Icon iconId={icon.label} viewBox={icon.viewBox} />
                                    </SocialLink>
                                ))}
                            </SocialWrapper>
                        </FlexWrapper>
                    </MainContent>

                    <Copyright>© Государственная корпорация развития "ВЭБ.РФ" 2025</Copyright>
                </FlexWrapper>
            </Container>
        </SFooter>
    );
};

const SFooter = styled.footer`
    background: ${theme.colors.font};
    color: #A7A7A7;
    padding: 40px 0;

    a {
        color: #A7A7A7;
        transition: color 0.3s ease;

        &:hover {
            color: ${theme.colors.accent};
        }
    }

    @media ${theme.media.tablet} {
        padding: 30px 0;
    }

    @media ${theme.media.mobile} {
        padding: 20px 0;
    }
`;

const MainContent = styled.div`
    width: 100%;
    padding-bottom: 40px;
    
    @media ${theme.media.mobile} {
        padding-bottom: 30px;
    }
    
    ${FlexWrapper} {
        gap: 30px;
        
        @media (max-width: 1200px) {
            justify-content: space-between;
        }
        
        @media (max-width: 900px) {
            gap: 20px;
            justify-content: center;
        }
    }
`;

const ContactWrapper = styled(FlexWrapper).attrs({
    wrap: 'wrap',
    direction: 'column',
    align: 'flex-start'
})`
    gap: 8px;
    
    @media (max-width: 900px) {
        align-items: center;
        text-align: center;
    }
    
    @media ${theme.media.mobile} {
        width: 100%;
        align-items: center;
    }
`;

const ContactItem = styled.p`
    margin: 0;
    font-size: 16px;
    
    @media ${theme.media.mobile} {
        font-size: 14px;
    }
`;

const Address = styled.div`
    @media (max-width: 900px) {
        text-align: center;
        width: 100%;
    }
`;

const AddressLink = styled.a`
    font-size: 16px;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
    
    @media ${theme.media.mobile} {
        font-size: 14px;
    }
`;

const SocialWrapper = styled(FlexWrapper)`
    @media (max-width: 900px) {
        width: 100%;
        justify-content: center;
    }
`;

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(167, 167, 167, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
        background: rgba(7, 206, 184, 0.2);
        transform: translateY(-2px);
    }
    
    svg {
        width: 20px;
        height: 20px;
        fill: #A7A7A7;
    }
    
    @media ${theme.media.mobile} {
        width: 36px;
        height: 36px;
        
        svg {
            width: 18px;
            height: 18px;
        }
    }
`;

const Copyright = styled.p`
    margin: 0;
    font-size: 14px;
    text-align: center;
    padding-top: 40px;
    border-top: 1px solid rgba(167, 167, 167, 0.2);
    width: 100%;
    
    @media ${theme.media.tablet} {
        padding-top: 30px;
    }
    
    @media ${theme.media.mobile} {
        padding-top: 20px;
        font-size: 12px;
    }
`;