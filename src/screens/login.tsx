import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const navigation = useNavigation();
  function changeScreen(){
    navigation.navigate('Home');
  }

  return (
    <View style={styles.view}>
      <TextInput style={styles.input}
        placeholder="username"
      />
      <TextInput style={styles.input}
        placeholder="password"
        secureTextEntry={true}
      />

      <View style={styles.buttonView}>
        <Button
          color={'black'}
          title="LOGIN"
          onPress={changeScreen}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: "70%",
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10
  },
  buttonView:{
    width: '40%'
  }
});
