import React from "react";
import { StyleSheet, Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();
  function changeScreen(){
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem vindo!</Text>
      <View>
        <Button
          color={'black'}
          title="Voltar para a tela de login"
          onPress={changeScreen}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 30,
    marginBottom: 5,
  }
});
