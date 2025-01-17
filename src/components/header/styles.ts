import styled from 'styled-components/native';
import arrowleft from 'react-native-vector-icons/AntDesign'
import theme from '@/src/theme/theme';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;

export const BackIcon = styled(arrowleft)`
    font-size: 33px;
    color: ${theme.COLORS.WHITE};
`;