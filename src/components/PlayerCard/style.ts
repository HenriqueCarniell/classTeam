import styled, {css} from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "@/src/theme/theme";

export const Container = styled.View`
    width: 100%;
    height: 56px;
    background-color: ${theme.COLORS.GRAY_500};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;

`;

export const Name = styled.Text`
    flex: 1;
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD};
`;

export const Icon = styled(MaterialIcons)`
    font-size: 24px;
    color: ${theme.COLORS.GRAY_200};
    margin-left: 16px;
    margin-right: 4px;
`;