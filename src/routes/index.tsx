import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from './stack.routes'
import { UserContext, UserProvider } from '../contexts/contexts'
//import { useContext, useState } from 'react'

export default function Routes(){
  
  return(
    <UserProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </UserProvider>
  )
}