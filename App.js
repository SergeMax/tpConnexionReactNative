import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen  from './view/HomeScreen';
import Connexion  from './view/Connexion';
import Inscription  from './view/Inscription';
import PageConnect  from './view/PageConnect';

import router from "./Routeur";


export default function App() {
  return (
    <View style={styles.container}>

      <router/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
