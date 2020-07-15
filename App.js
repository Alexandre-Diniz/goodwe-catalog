import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';

const catalog = [
  {
    "linha": "SDT",
    "desc": "12-20KW | Trifásico | 2 MPPTs",
    "img": "https://br.goodwe.com/images/articulos/sdt/SDT-00.png"
  },
  {
    "linha": "LVSMT",
    "desc": "12-20KW | Trifásico | 3 MPPTs",
    "img": "https://br.goodwe.com/images/articulos/lvsmt/LVSMT-00.png"
  },
  {
    "linha": "LVDT",
    "desc": "12-15KW | Trifásico | 2 MPPTs",
    "img": "https://br.goodwe.com/images/articulos/lvdt/LVDT-00.png"
  },
  {
    "linha": "DT",
    "desc": "17-25KW | Trifásico | 2 MPPTs",
    "img": "https://br.goodwe.com/images/articulos/dt/dt-00.png"
  },
  {
    "linha": "SDT G2",
    "desc": "17-25KW | Trifásico | 2 MPPTs",
    "img": "https://br.goodwe.com/images/articulos/sdtg217kw/SDTG217KW-00.png"
  },
  {
    "linha": "SDT",
    "desc": "25-36KW | Trifásico | 3 MPPTs",
    "img": "https://br.goodwe.com/images/articulos/smt/smt-00.png"
  },
  {
    "linha": "SDT",
    "desc": "30-50KW | Trifásico | 4 MPPTs",
    "img": "https://br.goodwe.com/images/articulos/lvmt/LVMT-00.png"
  },
  {
    "linha": "MT",
    "desc": "50-80KW | Trifásico | 4 MPPTs",
    "img": "https://br.goodwe.com/images/articulos/mt/MT-00.png"
  },
  {
    "linha": "HT",
    "desc": "100-136KW | Trifásico | 12 MPPTs",
    "img": "https://br.goodwe.com/images/articulos/ht02/ht-00.png"
  }
]

const Catalog = props => {
  const iter = props.catalog.map(item => {
    if (item.linha.toLowerCase().includes(props.text.toLowerCase()) || item.desc.toLowerCase().includes(props.text.toLowerCase())) {
      return (
        <View
          key={item.img}
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 150
          }} >
          <Image source={{ uri: item.img }} style={{ height: 60, width: 100, resizeMode: 'contain' }} />
          <View>
            <Text style={{ color: '#FFF' }} > Linha {item.linha} </Text>
            <Text style={{ color: '#FFF' }} > {item.desc} </Text>
          </View>
        </View>
      )
    } else return null
  })
  return (
    <View style={{ width: '100%', height: '100%' }} >
      <ScrollView contentContainerStyle={{ width: '100%', paddingBottom: 60, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }} >
        {iter}
      </ScrollView>
    </View>
  )
}

export default function App() {
  const [text, setText] = useState('')
  return (
    <View>
      <View style={{ flexDirection: 'row', backgroundColor: '#000', alignItems: 'center', justifyContent: 'space-around' }} >
        <Image source={{ uri: "https://br.goodwe.com/Public/Home/images/logo.png" }} style={{ height: 60, width: 145, resizeMode: 'contain' }} />
        <Text style={{ color: '#FFF' }} > Aplicação Comercial </Text>
      </View>
      <View style={{ backgroundColor: '#CCC', alignItems: 'center' }} >
        <View style={{ backgroundColor: '#FFF', margin: 10, width: '90%', height: 40, borderRadius: 20, flexDirection: 'row' }} >
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
            <Image source={require('./assets/search.png')} style={{ width: 30, height: 30 }} />
          </View>
          <TextInput
            style={{ flex: 8 }}
            onChangeText={(text) => {
              setText(text)
            }}
            value={text}
          />
        </View>

      </View>
      <View style={{ width: '100%', height: '100%', backgroundColor: '#000' }} >
        <Catalog catalog={catalog} text={text} />
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
