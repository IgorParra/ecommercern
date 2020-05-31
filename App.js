// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View,Text,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Buy from './src/pages/buy/index';
import Home from './src/pages/home/index';
import More from './src/pages/more/index';
import Profile from './src/pages/profile/index';
import Cart from './src/pages/cart/index';



const Tab = createBottomTabNavigator();

// (...)

export default function App() {
  

  return (
    <NavigationContainer>
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
        <Tab.Screen name="Cart" style={styles.botao} component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="More" component={More} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    botao:{
        borderRadius:10,
        width:50
    }
})