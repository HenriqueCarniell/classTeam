import { BackButton, BackIcon, Container, Logo } from './styles';
import LogoIMG from '../../assets/logo.png';

type Props = {
    showBackButton?: boolean,
}

function Header({ showBackButton = false }: Props) {


    return (
        <Container>
            {
                showBackButton &&

                <BackButton>
                    <BackIcon />
                </BackButton>
            }

            <Logo source={LogoIMG} />
        </Container>
    );
}

export default Header;
