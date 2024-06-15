import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const HomeStack = createNativeStackNavigator();

export default function HomeNavigator() {
    return (
        <>
            <HomeStack.Navigator
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
                <HomeStack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home' }}
                />
                <HomeStack.Screen
                    name="ReviewDetails"
                    component={ReviewDetails}
                    options={{ title: 'Review Details' }}
                />
            </HomeStack.Navigator>
        </>
    );
}