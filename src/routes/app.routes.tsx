import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Group from '../screens/Home';
import NewGroup from '../screens/NewGroup';
import Players from '../screens/Players';
import { View } from 'react-native';
import theme from '../theme/theme';

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
    return (
        <View style={{flex: 1, backgroundColor: theme.COLORS.GRAY_600}}>
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
        </View>
    );
}

export default AppRoutes;