import React, { useContext, useState } from "react";
import * as S from './styles'
import { Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from "../../contexts/auth";

import TodoList from "../../TodoList/TodoList";

import { useDispatch } from "react-redux";
import { Actions as ActionsAuth } from "../../reducers/auth"

export default function Login() {
  
  const [userName, setUserName] = useState('')
  const [password, setPassWord] = useState('')
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext)

  const dispatch = useDispatch();

  function setUser (text: string) { setUserName(text) }

  function setPass (text: string) { setPassWord(text) }

  function changeScreen() { navigation.navigate('Home') }

  function handleLogin(){
    signIn(userName,password);
    changeScreen();
  }

  console.log("Usuário senha", userName, password)  

  return (
    <S.ViewContainer>
      
      <TodoList />

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
