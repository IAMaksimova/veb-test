import {S} from './Logo_Styles.ts'
import vebLogo from '../../assets/images/veb-logos/veb-logo-blue.png';


{}
export const Logo = () => {
    return (
        <S.LogoContainer>
            <S.LogoLink href="#">
                <S.HeaderLogo src={vebLogo} alt="Логотип ВЭБ.РФ"/>
            </S.LogoLink>
        </S.LogoContainer>
    );
};

