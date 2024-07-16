import Loading from '@/src/components/Loading';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto'
import Home from '@/src/screens/Home';
import React from 'react';

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({ Roboto_700Bold });

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
        translucent={true}
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </>

  );
}