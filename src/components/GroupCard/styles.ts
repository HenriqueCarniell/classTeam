import theme from "@/src/theme/theme";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width:100%;
    height: 90px;
    background-color: ${theme.COLORS.GRAY_500};
    border-radius: 6px;
`;