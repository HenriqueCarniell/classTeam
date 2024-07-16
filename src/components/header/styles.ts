import styled from 'styled-components/native';
import { GoArrowLeft } from "react-icons/go";
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
    
`

export const BackIcon = styled(GoArrowLeft)`
    size: 36;
    color: ${theme.COLORS.WHITE};
`