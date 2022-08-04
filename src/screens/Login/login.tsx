import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

import TodoList from "../../TodoList/TodoList";

import { useDispatch, useSelector } from "react-redux";
import { Actions as ActionsAuth } from "../../reducers/auth";
import { RootState } from "../../reducers";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { signIn } = useContext(AuthContext);

  const { user } = useSelector((state: RootState) => state.AuthReducer);

  function setUser(text: string) {
    setUserName(text);
  }

  function setPass(text: string) {
    setPassWord(text);
  }

  function changeScreen() {
    navigation.navigate("Home");
  }

  function handleLogin() {
    dispatch(ActionsAuth.login({ username: userName, password }));
    signIn(userName, password);
  }

  useEffect(() => {
    if ((user?.username, user?.password)) {
      changeScreen();
    }
  }, [user?.username, user?.password]);

  console.log("Usuário senha", userName, password);

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
        <Button color={"black"} title="LOGIN" onPress={handleLogin} />
      </S.ButtonView>
    </S.ViewContainer>
  );
}
