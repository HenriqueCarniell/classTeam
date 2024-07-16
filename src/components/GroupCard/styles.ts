import theme from "@/src/theme/theme";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Group from 'react-native-vector-icons/FontAwesome6'

export const Container = styled(TouchableOpacity)`
    width: 90%;
    height: 90px;
    background-color: ${theme.COLORS.GRAY_500};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    margin: 12px auto;

`;

export const Title = styled.Text`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
`;

export const Icon = styled(Group)`
    font-size: 40px;
    color: ${theme.COLORS.GREEN_700};
    margin-right: 20px;
`