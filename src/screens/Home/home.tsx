import React, { useContext } from "react";
import * as S from './styles'
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../contexts/auth";
import { useDispatch } from "react-redux";

export default function Home() {
  
  const { user } = useContext(AuthContext)
  const navigation = useNavigation();

  const dispatch = useDispatch();

  function changeScreen(){
    navigation.navigate('Login');
  }
    
  return (
    <S.ViewContainer>
      <S.Text>Bem vindo {user.username}!</S.Text>
      <S.Text>Sua senha é {user.password}</S.Text>
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
