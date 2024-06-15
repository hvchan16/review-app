import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen
                    name="ReviewDetails"
                    component={ReviewDetails}
                    options={{ title: 'Review Details' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}