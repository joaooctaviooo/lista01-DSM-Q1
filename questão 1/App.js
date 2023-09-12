import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import {Container, Header, Content, Body, Title, View} from 'native-base'
import { useState } from 'react';

export default function App() {
  const [count, incrementa] = useState (0), countPlus = () => incrementa (count => count +1);

  return (
    <Container>
      <Header />
      <Content>
        <Text style={styles.texto}>
          Você precionou o botão: {count}
        </Text>
        <View style={styles.botao}>
          <Button title='Press me' onPress={countPlus} style={{textAlign:'center'}}/>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  texto: {
    backgroundColor: '#836fff',
    textAlign: 'center',	
  },
  botao: {
    borderColor: '#4169e1',
    borderBottomWidth: 5,
  },
  conteiner: {
    textAlignVertical: 'center'
  }
});
