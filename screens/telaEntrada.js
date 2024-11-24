import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ArrowRight from '../assets/icons/arrow-right.svg'

export default function TelaEntrada({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.chartIcon}>
        <Image source={require('../assets/photos/istracker.png')} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.loginButton} 
      onPress={() => navigation.navigate('TelaMenu')} >
        <ArrowRight style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Aperte para acessar o aplicativo!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1DBE3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartIcon: {
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: '#45A0B4',
    borderRadius: 50,
    marginVertical: 20,
    width:80,
    height:80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  text: {
    color: '#0A5E71',
    fontFamily: 'HindMadurai-Light',
  },
  



});
