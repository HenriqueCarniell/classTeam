import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home';
import NewGroup from '../screens/NewGroup';
import Players from '../screens/Players';

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="new"
                component={NewGroup}
            />

            <Screen
                name="players"
                component={Players}
            />
        </Navigator>
    );
}

export default AppRoutes;