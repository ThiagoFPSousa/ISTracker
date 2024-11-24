import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BarChart from '../assets/icons/bar-chart-2.svg'
import FileText from '../assets/icons/file-text.svg'
import Info from '../assets/icons/info.svg'
import Activity from '../assets/icons/activity.svg'
import MapPin from '../assets/icons/map-pin.svg'
import MessageCircle from '../assets/icons/message-circle.svg'

export default function TelaMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.tabSuperior}>
        <Image source={require('../assets/photos/istracker.png')} style={styles.image} />
        <Text style={styles.welcomeText}>Bem vindo(a)!</Text>
      </View>
      <View style={styles.grid}>
          <TouchableOpacity style={styles.gridItem}>
            <Activity style={styles.gridItemIcon}/>
            <Text style={styles.gridItemText}>Dados ISTs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <BarChart style={styles.gridItemIcon}/>
            <Text style={styles.gridItemText}>Gráficos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <FileText style={styles.gridItemIcon}/>
            <Text style={styles.gridItemText}>Relatórios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <MapPin style={styles.gridItemIcon}/>
            <Text style={styles.gridItemText}>Localidades</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <MessageCircle style={styles.gridItemIcon}/>
            <Text style={styles.gridItemText}>Soluções IA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Info style={styles.gridItemIcon}/>
            <Text style={styles.gridItemText}>FAQ</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1DBE3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  tabSuperior: {
    flexDirection: 'row',
    padding: 35,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff5252',
  },
  welcomeText: {
    fontSize: 24,
    marginTop:55, 
    color: '#0A5E71',
    fontFamily: 'HindMadurai-Bold',
  },
  image: {
    width: 84,
    height: 70,
    marginVertical: 20,
  },
  grid: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
  gridItem: {
    width: '45%',
    aspectRatio: 1,
    backgroundColor: '#45A0B4',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  gridItemIcon: {
    color: '#FFFFFF',
  },
  gridItemText: {
    fontSize: 14,
    marginTop: 10,
    color: '#fff',
    fontFamily: 'HindMadurai-Light',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavIcon: {
    fontSize: 24,
  },
});
