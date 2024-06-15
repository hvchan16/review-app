import { useState } from 'react';
import * as Font from 'expo-font';
import { Apploading } from 'expo';
import Navigator from './routes/homeStack'

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito/static/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito/static/Nunito-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, getFontsLoaded] = useState('false');

  if (fontsLoaded) {
    return (
      <Navigator />
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
