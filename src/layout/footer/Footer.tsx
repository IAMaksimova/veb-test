import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {Container} from "../../components/Container.ts";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Icon} from "../../components/icon/Icon.tsx";

const icons = [
    {label: 'tg', link: 'https://t.me/razvivaemrf'},
    {label: 'wa', link: 'https://api.whatsapp.com/send/?phone=79260158700&text&type=phone_number&app_absent=0'},
    {label: 'world', link: 'https://вэб.рф/'}
]

export const Footer = () => {
    return (
        <SFooter>
            <Container>

                    <FlexWrapper wrap={'wrap'} direction={'column'} align={'space-around'}>
                        <FlexWrapper justify={'space-around'} align={'center'}>
                            <Logo/>
                            <FlexWrapper wrap={'wrap'} direction={'column'} align={'flex-start'}>
                                <p>+7 (926) 015-87-00</p>
                                {/*<a href="mailto:MachevskiyAV@veb.ru">MachevskiyAV@veb.ru</a>*/}
                                <p>MachevskiyAV@veb.ru</p>
                            </FlexWrapper>

                            <p>
                                <a href={'https://yandex.ru/maps/213/moscow/house/ulitsa_vozdvizhenka_10/Z04YcAdmS0IFQFtvfXt0cn9jZQ==/?ll=37.606271%2C55.753301&source=serp_navig&z=16'} target={'_blank'}>
                                    г. Москва, ул. Воздвиженка, д. 10
                                </a>
                            </p>
                            <FlexWrapper gap={'15px'}>
                                {icons.map((icon, index) => {
                                    return (
                                        <a key={index} href={icon.link} target='_blank' > <Icon iconId={icon.label}/></a>
                                    )
                                })}
                            </FlexWrapper>
                        </FlexWrapper>

                    </FlexWrapper>

                    <p style={{marginLeft: '5vw', paddingTop: '8vh'}}>© Государственная корпорация развития "ВЭБ.РФ" 2025</p>




            </Container>
        </SFooter>
    )
        ;
};

const SFooter = styled.footer`
    height: 28vh;
    background: ${theme.colors.font};
    color: #A7A7A7;
    padding: 4vw;
    overflow-y: hidden;
    
    a{
        color: #A7A7A7;
    }
`