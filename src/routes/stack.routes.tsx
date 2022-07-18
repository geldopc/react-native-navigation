import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Screen, Navigator } = createNativeStackNavigator();

import Login from '../screens/login';
import Home from '../screens/home';

export default function StackRoutes() {
  return (
    <Navigator>
      <Screen 
      name='Login'
      component={Login}
      />

      <Screen 
      name='Home'
      component={Home}/>
    </Navigator>
  )
}