import styled from 'styled-components/native'
import theme from '@/src/theme/theme';

export const Container = styled.View`
    flex:1;
    background-color: ${theme.COLORS.GRAY_600};
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 32px;
`;