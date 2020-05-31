import React from 'react';
import {View,Text,SafeAreaView} from 'react-native';

import global from '../global'

export default function buy(){
  return(
    <SafeAreaView style={global.SafeArewView}>
      <View style={global.container}>
        <Text>Buy</Text>
        </View>
    </SafeAreaView>
  )
}
