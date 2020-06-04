import * as React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
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

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-code'
                : 'ios-home';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'ios-cart' : 'ios-cart';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#02206C',
          activeBackgroundColor:'#F5A631'
        }}
      >
        <Tab.Screen name="Home" style={{activeBackgroundColor:'grey'}} component={Home} />
        <Tab.Screen name="Buy" component={Buy} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="More" component={More} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

