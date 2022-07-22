import React, { useContext, useState } from "react";
import * as S from './styles'
import { Button,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const navigation = useNavigation();
  function changeScreen(){
    navigation.navigate('Home');
  }

  const [userName, setUserName] = useState('')
  
  function setUser (text: string) {
    setUserName(text);
  }
  
  const [password, setPassWord] = useState('')

  function setPass (text: string){
    setPassWord(text)
  }

  console.log("Usuário senha", userName, password)

  const { signIn } = useContext(AuthContext)

  function handleLogin(){
    signIn(userName,password)
    changeScreen()
  }

  return (
    <S.ViewContainer>
      <Text>nome</Text>
      <S.TextInput
        placeholder="username"
        onChangeText={(text: string) => setUser(text)}

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
          onPress={handleLogin}
        />
      </S.ButtonView>
    </S.ViewContainer>
  )
}