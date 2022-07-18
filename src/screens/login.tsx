import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login page</Text>
      <Button 
        title="Ir pra tela de HOME"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '800',
    fontSize: 30
  }
});
