
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App
