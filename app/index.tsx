import Groups from '@/src/screens/Groups';
import {useFonts, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { ActivityIndicator } from 'react-native';

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({Roboto_700Bold});

  return (
    <>
      {fontsLoaded ? <Groups/> : <ActivityIndicator/>}
    </>
  );
}