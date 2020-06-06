import {StyleSheet,Dimensions} from 'react-native'
const device_width = Dimensions.get('window').width;

const style = StyleSheet.create({
    card:{
       width:140,
       height:180,
       backgroundColor:'white',
       borderRadius:15,
       marginTop:30,
       marginRight:20,

       shadowColor: "#000",
       shadowOffset: {
	width: 0,
	height: 1,
       },
       shadowOpacity: 0.20,
       shadowRadius: 1.41,

       elevation: 2,
       
    },
    discount:{ 
       width:'100%',
       justifyContent:'center',
       flexDirection:'row',
       paddingTop:10
    },
    
    priceNumber:{
       color:'#13A107',
       fontWeight:'bold',
       fontSize:18
    },
    priceText:{
       color:'#13A107',
       fontWeight:'300',
       fontSize:18
    },

    productImageContainer:{
       width:'100%', 
       height:120,
       alignItems:'center',
       justifyContent:'center',
       flexDirection:'column',
       paddingTop:10,
    },

    productImage:{
        width:100,
        height:100
       
    },
    caption:{
       color:'#535A6A',
       fontSize:10,
       paddingTop:10
    },
    // {height:100,flexDirection:'column',alignItems:'center',backgroundColor:'green'}
    backgroundImage:{
       height:190,
       width: device_width
    },
    circleDiv:{
       position:"absolute",
       bottom:-25,
       height:10,
       width:device_width,
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center"
    },
    Circle:{
       width:6,
       height:6,
       borderRadius:3,
       margin:5,
       backgroundColor:'#fff'
    }
})

export default style