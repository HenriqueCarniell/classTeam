import React from 'react';
import { BackButton, BackIcon, Container, Logo } from './styles';
import LogoIMG from '../../assets/logo.png';
import { TouchableOpacity } from 'react-native';


function Header() {
    return (
        <Container>
            <BackButton>
                <BackIcon />
            </BackButton>
            <Logo source={LogoIMG} />
        </Container>
    );
}

export default Header;
