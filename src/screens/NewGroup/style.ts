import theme from "@/src/theme/theme";
import styled from "styled-components/native";
import UsersIcon from 'react-native-vector-icons/Feather'
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_600};
    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Icon = styled(UsersIcon)`
    font-size: 56px;
    color: ${theme.COLORS.GREEN_700};
    align-self: center;
`;