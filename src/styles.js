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
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 10, height: 0 },
      shadowOpacity: 0.22,
      shadowRadius: 10,
      elevation: 0.5,
    
      
      
    },

    welcomeHeader:{
      paddingLeft:20
    }
})

export default styles