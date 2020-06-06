import * as React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import  AntDesign from 'react-native-vector-icons/AntDesign';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  Entypo  from 'react-native-vector-icons/Entypo';
import {View,Text,StyleSheet,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Buy from './pages/buy/index';
import Home from './pages/home/index';
import More from './pages/more/index';
import Profile from './pages/profile/index';
import Cart from './pages/cart/index';
import logo from '../assets/logo.png';
import styles from './styles';
import global from './pages/global'


// @expo/vector-icons


const Tab = createBottomTabNavigator();

// (...)

export default function Routes() {
  

  return (
    <NavigationContainer>
      <View
      id='Header'
      style={styles.header}> 
         <Image source={logo} style={styles.logoHeader} />
         <Text styl={styles.welcomeHeader}> Olá <Text style={global.span}>Igor</Text></Text>
         
      </View>
      <Tab.Navigator
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let source;

            if (route.name === 'Home') {
              iconName = focused
                // selecionado
                ? 'ios-home' 
                // normal 
                : 'ios-home';

            }else if (route.name === 'Comprar') {
              iconName = focused ? 'md-basket' : 'md-basket';
            }else if (route.name === 'Cart') {
              iconName = focused ? 'ios-cart' : 'ios-cart';
            }else if (route.name === 'Perfil') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }else if (route.name === 'Mais') {
              iconName = focused ? 'ios-more' : 'ios-more';
            }

            // You can return any component that you like here!
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#02206C',
          activeBackgroundColor:'#F5A631',
        }}
      >
        <Tab.Screen name="Home" style={{activeBackgroundColor:'grey'}} component={Home} />
        <Tab.Screen name="Comprar" component={Buy} />
        
        <Tab.Screen name="Perfil" component={Profile} />
        <Tab.Screen name="Mais" component={More} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

