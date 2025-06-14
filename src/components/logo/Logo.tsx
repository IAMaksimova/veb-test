import styled from "styled-components";
import vebLogo from '../../assets/images/logos/veb-logo-blue.png'

export const Logo = () => {
    return (
        <a>
            <HeaderLogo src={vebLogo} alt={''}/>
            {/*<Icon iconId={'veb-logo-blue'}/>*/}
        </a>
    );
};

const HeaderLogo = styled.img`
    width: 8vw;
    height: 4vh;
    //outline: 2px solid darkblue;
`