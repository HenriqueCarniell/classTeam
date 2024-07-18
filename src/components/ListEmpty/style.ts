import theme from "@/src/theme/theme";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
    text-align: center;
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_300};
`;