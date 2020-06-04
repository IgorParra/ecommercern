import React from 'react';
import {View,Text,SafeAreaView} from 'react-native';
import {BackgroundCarousel} from '../../components/BackgroundCarousel'

import global from '../global'
const homeCarouselTop = [
  require('../../../assets/Home/1.png'),
  require('../../../assets/Home/2.png'),
  require('../../../assets/Home/3.png'),
];

export default function home(){
  return(
    <SafeAreaView style={global.SafeArewView}>
      <View style={global.container}>
          <View>
            <BackgroundCarousel images={homeCarouselTop}/>
          </View>
          <View style={{width:'100%',height:270,backgroundColor:"#E1E1E1"}}>
            <Text style={global.title}>Dia de Economizar!</Text>
            <Text style={global.body}>Descontos Imperdíveis para você aproveitar. </Text>
            
          </View>
          

        </View>
    </SafeAreaView>
  )
}
