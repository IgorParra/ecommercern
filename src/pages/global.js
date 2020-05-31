import {StyleSheet,StatusBar} from 'react-native'

const global = StyleSheet.create({
  SafeArewView: {
    flex:1,
    paddingTop: Platform.OS === 'android' ? 0 : (StatusBar.currentHeight * 2),
    backgroundColor:'#F4F4F4'
  },

  container:{
    flex:1,
    paddingLeft:35
  }


});

export default global;