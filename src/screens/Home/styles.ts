// Bibliotecas externas
import { SafeAreaView } from "react-native-safe-area-context";
import styled from 'styled-components/native';

// Arquivos de estilo
import theme from '@/src/theme/theme';


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_600};
    padding: 24px;
`;