import {StyleSheet,StatusBar} from 'react-native'

const global = StyleSheet.create({
  SafeArewView: {
    flex:1,
    paddingTop: Platform.OS === 'android' ? 0 : (StatusBar.currentHeight * 2),
    backgroundColor:'#F4F4F4'
  },

  container:{
    flex:1,
   
  },
  span:{
    fontWeight:'bold'
  },
  title:{
    fontWeight:'bold',
    fontSize:18,
    paddingLeft:30,
    paddingTop:20,
    color:'#02206C'
  },
  body:{
    fontWeight:'500',
    fontSize:12,
    paddingLeft:30,
    color:'#02206C'
  } ,

});

export default global;