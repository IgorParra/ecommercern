import * as React from 'react'
import {StyleSheet,View,ScrollView,Dimensions,Image,Text,TouchableOpacity} from 'react-native';
const device_width = Dimensions.get('window').width;
import style from './style'


class PromoCards extends React.Component{
    scrollRef = React.createRef(); 
    constructor(props){
        super(props); 

        this.state = {
            selectedIndex:0
        };
    }

    
 
    setSelectedIndex = event =>{
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contentOffset/viewSize);
        this.setState({selectedIndex})
    }

    render() {

        const {promos} = this.props
        const {selectedIndex} = this.state
        return (
            <View style={{flex:1,}}>
                <ScrollView 
                   showsHorizontalScrollIndicator={false}
                   horizontal
                   onMomentumScrollEnd={this.setSelectedIndex}
                   ref={this.scrollRef}>
                    {promos.map((promo, ui) => (
                       <TouchableOpacity activeOpacity={0.9} key={ui} style={style.card}>
                          <View style={style.discount}>
                             <Text style={style.priceNumber}>{promo['discount']} </Text>
                             <Text style={style.priceText}>Off</Text>
                          </View>
                          <View style={style.productImageContainer}>
                             <Image style={style.productImage} source={promo['photo']} />
                             <Text style={style.caption}>{promo['caption']}</Text>
                            
                          </View>   
                        
                       </TouchableOpacity>  
                    ))}
                </ScrollView>
               
            </View>
        )
    }

}



export {PromoCards}