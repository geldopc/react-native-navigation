import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image } from 'react-native';

const { Screen, Navigator } = createNativeStackNavigator();

import Login from '../screens/login';
import Home from '../screens/home';

export default function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerTitle: () => (
          <Image source={require("../images/rchlo-logo.png")} />
        ),
        headerTitleAlign: 'center'
      }}
    >
      <Screen 
        name='Login'
        component={Login}
      />
      <Screen 
        name='Home'
        component={Home}
      />      
    </Navigator>
  )
}