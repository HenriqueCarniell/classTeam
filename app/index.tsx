
import { StatusBar } from 'react-native';
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Home from '@/src/screens/Home';
import Loading from '@/src/components/Loading';
import theme from '@/src/theme/theme';

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({ Roboto_700Bold });

  return (
    <>
      <StatusBar backgroundColor={theme.COLORS.GRAY_600} barStyle="light-content" />
      {fontsLoaded ? <Home /> : <Loading />}
    </>
  );
}