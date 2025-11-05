import {S} from './Footer_Styles.ts'
import {Container} from "../../components/Container.ts";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
//import {Icon} from "../../components/icon/Icon.tsx";

// const icons = [
//     {label: 'tg', link: 'https://t.me/razvivaemrf', viewBox: '0 0 24px 24px'},
//     {label: 'wa', link: 'https://api.whatsapp.com/send/?phone=79260158700&text&type=phone_number&app_absent=0'},
//     {label: 'world', link: 'https://вэб.рф/'}
// ]

// const socialLinks = icons.map((icon, index) => (
//     <S.SocialLink key={index} href={icon.link} target='_blank'>
//         <Icon iconId={icon.label} viewBox={icon.viewBox}/>
//     </S.SocialLink>
// ))

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper wrap={'wrap'} direction={'column'} align={'space-around'}>
                    <S.MainContent>
                        <FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'}>
                            <Logo/>
                            <S.ContactWrapper>
                                <S.ContactItem>+7 (495) 604-65-65</S.ContactItem>
                                <S.ContactItem>MachevskiyAV@veb.ru</S.ContactItem>
                            </S.ContactWrapper>
                            <S.Address>
                                <S.AddressLink
                                    href={'https://yandex.ru/maps/213/moscow/house/ulitsa_vozdvizhenka_10/Z04YcAdmS0IFQFtvfXt0cn9jZQ==/?ll=37.606271%2C55.753301&source=serp_navig&z=16'}
                                    target={'_blank'}>
                                    г. Москва, ул. Воздвиженка, д. 10
                                </S.AddressLink>
                            </S.Address>
                            {/*<S.SocialWrapper gap={'15px'}>*/}
                            {/*    {socialLinks}*/}
                            {/*</S.SocialWrapper>*/}
                        </FlexWrapper>
                    </S.MainContent>
                    <S.Copyright>© Государственная корпорация развития "ВЭБ.РФ" 2025</S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};

