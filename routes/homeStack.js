import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const HomeStack = createNativeStackNavigator();

export default function HomeNavigator() {
    return (
        <>
            <HomeStack.Navigator
                screenOptions={{
                    headerShown: false,
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