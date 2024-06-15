import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from "../screens/about";

const AboutStack = createNativeStackNavigator();

export default function AboutNavigator() {
    return (
        <>
            <AboutStack.Navigator
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
                <AboutStack.Screen
                    name="About"
                    component={About}
                    options={{ title: 'About' }}
                />
            </AboutStack.Navigator>
        </>
    );
}