import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './homeStack';
import AboutNavigator from './aboutStack';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (

        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Drawer.Screen name="HomeStack" component={HomeNavigator} />
            <Drawer.Screen name="AboutStack" component={AboutNavigator} />
        </Drawer.Navigator>

    );
}

export default MyDrawer