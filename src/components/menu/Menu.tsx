import styled from "styled-components";

export const Menu = () => {
    return (
        <SMenu>
            <ul>
                <li><a>О практике</a></li>
                <li><a>Условия</a></li>
                <li><a>Направления</a></li>
                <li><a>FAQ</a></li>
            </ul>
        </SMenu>
    );
};

const SMenu = styled.nav`
    //outline: 1px solid deeppink;
    //margin-right: 7vw;

ul{
    display: flex;
    gap: 5vw;
    font-size: 20px;
    font-weight: 500;
}
`
