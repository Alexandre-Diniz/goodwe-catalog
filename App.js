import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{ flexDirection: 'row', backgroundColor: '#000', alignItems:'center', justifyContent:'space-around' }} >
        <Image source={{ uri: "https://br.goodwe.com/Public/Home/images/logo.png" }} style={{ height: 60, width: 145, resizeMode: 'contain' }} />
        <Text style={{color:'#FFF'}} > Aplicação Comercial </Text>
      </View>
      <View>
        <Text> Busca </Text>
      </View>
      <View>
        <Text> Body </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
