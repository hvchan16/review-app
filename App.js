import { useState } from 'react';
import * as Font from 'expo-font';
import { Apploading } from 'expo';
import MyDrawer from './routes/drawer';
import { NavigationContainer } from '@react-navigation/native';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito/static/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito/static/Nunito-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, getFontsLoaded] = useState('false');

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  } else {
    return (
      <Apploading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
