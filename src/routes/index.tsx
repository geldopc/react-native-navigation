import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from './stack.routes'
import AuthProvider from '../contexts/auth'

import { Provider } from 'react-redux'
import store from '../store/store';

export default function Routes(){
  return(
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <StackRoutes />
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  )
}