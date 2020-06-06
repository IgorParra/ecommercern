import React from 'react';
import {View,Text,SafeAreaView,ScrollView,Ul, Button} from 'react-native';

import global from '../global'

export default function buy(){
  return(
    <SafeAreaView style={global.SafeArewView}>
      <View style={global.container}>
        <ScrollView style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row',width:'100%'}}>
              <View><Text>Padaria</Text></View>
              <View><Text>HortiFruti</Text></View>
          </View>
            
        </ScrollView>

        </View>
    </SafeAreaView>
  )
}
