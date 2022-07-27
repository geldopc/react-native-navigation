import React, { Dispatch } from "react";
import { Button, View, FlatList } from 'react-native'
import * as S from './styles'

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'

import * as todoActions from '../actions/todos'

const DATA = [
  {
    id: '1',
    title: 'First Item'
  }
];

const Item = ({ title }: any) => (
  <View >
    <S.FlatlistText>{title}</S.FlatlistText>
  </View>
);

const renderItem = ({ item }: any) => (
  <Item title={item.title} />
);

function addNewTodo() {
  todoActions.addTodo("teste")
}

function TodoList () {
  return(
    <>
      <S.TextInput
        placeholder="todoList"
      />
      <S.ButtonView>
        <Button
          color={'black'}
          title="Novo todo"
          onPress={addNewTodo}
        />
      </S.ButtonView>
      <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(null, mapDispatchToProps)(TodoList)