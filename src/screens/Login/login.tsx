import React, { useContext, useState } from "react";
import * as S from './styles'
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { UserContext } from "../../contexts/contexts";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";

export default function Login() {
  const navigation = useNavigation();
  function changeScreen(){
    navigation.navigate('Home');
  }

  let { user, password } = useContext(UserContext)
    
  const [userName, setUserName] = useState('x')
  console.log("Username", userName)

  user = userName
  
  const [pass, setPass] = useState('y')

  password = pass

  console.log("LOGIN", user, password)

  return (
    <S.ViewContainer>
      <S.TextInput
        placeholder="username"
        onChangeText={(text: string) => setUserName(text)}

      />
      <S.TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(text: string) => setPass(text)}
      />

      <S.ButtonView>
        <Button
          color={'black'}
          title="LOGIN"
          onPress={changeScreen}
        />
      </S.ButtonView>
    </S.ViewContainer>
  )
}