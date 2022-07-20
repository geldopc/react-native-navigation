import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image } from 'react-native';

const { Screen, Navigator } = createNativeStackNavigator();

import Login from '../screens/Login/login';
import Home from '../screens/Home/home';

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