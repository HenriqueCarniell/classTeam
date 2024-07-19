import { StatusBar } from 'react-native';
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Loading from '@/src/components/Loading';
import theme from '@/src/theme/theme';
import { ThemeProvider } from 'styled-components/native';
import AppRoutes from '@/src/routes/app.routes';

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({ Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.COLORS.GRAY_600} barStyle="light-content" />
      {fontsLoaded ? <AppRoutes /> : <Loading />}
    </ThemeProvider>
  );
}