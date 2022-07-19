import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image } from 'react-native';

const { Screen, Navigator } = createNativeStackNavigator();

import Login from '../screens/login';
import Home from '../screens/home';

export default function StackRoutes() {
  return (
    <Navigator>
      <Screen 
        name='Login'
        component={Login}
        options={{
          headerTitle: () => (
            <Image source={require("../images/rchlo-logo.png")} />
          )
        }}
      />
      <Screen 
        name='Home'
        component={Home}
        options={{
          headerTitle: () => (
            <Image source={require("../images/rchlo-logo.png")} />
          )
        }}
      />      
    </Navigator>
  )
}