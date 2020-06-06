import React from 'react';
import {View,Text,SafeAreaView,Image,ScrollView} from 'react-native';
import {BackgroundCarousel} from '../../components/BackgroundCarousel'
import {PromoCards} from '../../components/PromoCards';

import global from '../global'
const homeCarouselTop = [
  require('../../../assets/Home/1.png'),
  require('../../../assets/Home/2.png'),
  require('../../../assets/Home/3.png'),
];
const promoItems = [
   {
    id:'1',
    discount:'10%',
    photo:require('../../../assets/promoItems/9991.png'),
    caption:"Seção de Destilados"
   },
   {
    id:'2', 
    discount:'30%',
    photo:require('../../../assets/promoItems/9995.png'),
    caption:"Seção de Horti Fruti"
   },
   {
    id:'3',
    discount:'20%',
    photo:require('../../../assets/promoItems/9992.png'),
    caption:"Leites e derivados!"
   },
   {
    discount:'10%',
    photo:require('../../../assets/promoItems/9996.png'),
    caption:"Padaria"
   },
   {
    discount:'10%',
    photo:require('../../../assets/promoItems/9993.jpg'),
    caption:"Linha PET"
   },
   {
    discount:'5%',
    photo:require('../../../assets/promoItems/9994.png'),
    caption:"Toda linha Apple"
   },
]
export default function home(){
  return(
    <SafeAreaView style={global.SafeArewView}>
      <ScrollView style={global.container}>
          <View>
            <BackgroundCarousel images={homeCarouselTop}/>
          </View>
          <View style={{width:'100%',height:300,backgroundColor:"#E0E0E0"}}>
            <Text style={global.title}>Dia de Economizar!</Text>
            <Text style={global.body}>Descontos Imperdíveis para você aproveitar. </Text>
            
            <PromoCards promos={promoItems} />          
          </View>
        
          

        </ScrollView>
    </SafeAreaView>
  )
}
