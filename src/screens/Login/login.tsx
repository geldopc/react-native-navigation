import React from "react";
import * as S from './styles'
import { StyleSheet, TouchableOpacity, Text, View, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const navigation = useNavigation();
  function changeScreen(){
    navigation.navigate('Home');
  }

  return (
    <S.ViewContainer>
      <S.TextInput
        placeholder="username"
      />
      <S.TextInput
        placeholder="password"
        secureTextEntry={true}
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