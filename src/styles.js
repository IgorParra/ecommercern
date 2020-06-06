import {StyleSheet,StatusBar} from 'react-native';


const styles = StyleSheet.create({
    logoHeader:{
      width:56,
      height:27.66,
    },
    header:{
      alignContent:"center",
      height:50,
      marginTop:StatusBar.currentHeight,
      flexDirection:'row',
      alignItems:'center',
      padding:20,
    
      
      
    },

    welcomeHeader:{
      paddingLeft:20
    }
})

export default styles