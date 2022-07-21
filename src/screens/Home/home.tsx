import React, { useContext } from "react";
import * as S from './styles'
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from "../../contexts/contexts";

export default function Home() {
  const navigation = useNavigation();
  function changeScreen(){
    navigation.navigate('Login');
  }

  let { user, password } = useContext(UserContext)
  console.log("HOME", user, password)

  return (
    <S.ViewContainer>
      <S.Text>Bem vindo!{user}</S.Text>
      <S.Text>Sua senha é {password}</S.Text>
      <View>
        <Button
          color={'black'}
          title="Voltar para a tela de login"
          onPress={changeScreen}
        />
      </View>
    </S.ViewContainer>
  )
}
