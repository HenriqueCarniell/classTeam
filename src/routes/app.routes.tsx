import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Group from '../screens/Home';
import NewGroup from '../screens/NewGroup';
import Players from '../screens/Players';

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
    return (
        <Navigator initialRouteName='group' screenOptions={{ headerShown: false }}>
            <Screen
                name="groups"
                component={Group}
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