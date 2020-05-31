import React, {Component} from 'react';
import {Button, Text, View,SafeAreaView,StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
 
export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <Text>Page content</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
},
});


