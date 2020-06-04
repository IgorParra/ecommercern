import * as React from 'react'
import {StyleSheet,View,ScrollView,Dimensions,Image} from 'react-native';

const device_width = Dimensions.get('window').width;



class BackgroundCarousel extends React.Component{
    scrollRef = React.createRef(); 
    constructor(props){
        super(props); 

        this.state = {
            selectedIndex:0
        };
    }

    componentDidMount = () =>{
        setInterval(()=>{   
           this.setState(
               prev => ({selectedIndex:
                  prev.selectedIndex === this.props.images.length - 1
                  ? 0
                  :prev.selectedIndex + 1}),
               ()=>{
                  this.scrollRef.current.scrollTo({
                  animated:true,
                  y:0,
                  x: device_width * this.state.selectedIndex
               });
              }
           );
        },3000)
    }
 
    setSelectedIndex = event =>{
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contentOffset/viewSize);
        this.setState({selectedIndex})
    }

    render() {

        const {images} = this.props
        const {selectedIndex} = this.state
        return (
            <View style={{height:190,width:device_width}} >
                <ScrollView 
                showsHorizontalScrollIndicator={false}
                horizontal
                 pagingEnabled
                 onMomentumScrollEnd={this.setSelectedIndex}
                 ref={this.scrollRef}>
                    {images.map(image => (
                        <Image
                            key={image}
                            source={image}
                            style={styles.backgroundImage}
                        />
                    ))}
                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.map((image, i) =>(
                        <View 
                            key={image}
                            style={[styles.Circle,{backgroundColor:i ===selectedIndex ? '#02206C' : '#fff'}]}
                        />
                    ))}
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    backgroundImage:{
        height:190,
        width: device_width
    },
    circleDiv:{
        position:"absolute",
        bottom:15,
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
});

export {BackgroundCarousel}