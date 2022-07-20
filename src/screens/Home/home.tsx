//import React from "react";
import * as S from './styles'
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  function changeScreen(){
    navigation.navigate('Login');
  }

  return (
    <S.ViewContainer>
      <S.Text>Bem vindo!</S.Text>
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
