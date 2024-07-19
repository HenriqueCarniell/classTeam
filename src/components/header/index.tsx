import { BackButton, BackIcon, Container, Logo } from './styles';
import LogoIMG from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

type Props = {
    showBackButton?: boolean,
}

function Header({ showBackButton = false }: Props) {

    const navigation = useNavigation();

    let handleGoBack = () => {
        navigation.navigate('groups')
    }

    return (
        <Container>
            {
                showBackButton &&

                <BackButton onPress={handleGoBack}>
                    <BackIcon name='arrowleft'/>
                </BackButton>
            }

            <Logo source={LogoIMG} />
        </Container>
    );
}

export default Header;
