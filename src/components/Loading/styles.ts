import styled from "styled-components/native";
import theme from "@/src/theme/theme";

export const Container = styled.View`
    flex: 1;
    justify-content:center;
    align-items: center;
    background-color: ${theme.COLORS.GRAY_600}
`

export const LoadIndicator = styled.ActivityIndicator`

`