import { Container, Logo } from "./styles";

import LogoIMG from '../../assets/logo.png'

function Header() {
    return (
        <Container>
            <Logo source={LogoIMG} />
        </Container>
    );
}

export default Header;