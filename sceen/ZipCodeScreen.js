import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground, SafeAreaView  } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../option/animations';




const availableZipItems = [
    { place: 'Hatyai', code: '90110',    img:require('../hatyai.jpg') },
    { place: 'Trang', code: '92000' ,    img:require('../trang.jpg') },
    { place: 'Chiangmai', code: '50000', img:require('../chiangmai.jpg')},
    { place: 'Khonkaen', code: '40000',  img:require('../khonkaen.jpg') },
    { place: 'Bangkok', code: '10200' ,  img:require('../bangkok.jpg')},
    { place: 'Ayutthaya', code: '13000' ,img:require('../ayutthaya.jpg')},
    { place: 'Phuket', code: '83000',    img:require('../phuket.jpg') },
    { place: 'Suratthani', code: '84000' ,img:require('../suratthani.jpg')},
   ]
   
   

const ZipItem = ({place, code, img, navigation}) =>(
    
    <TouchableHighlight onPress = {() => {
        navigation.navigate('Weather', {zipCode: code})
    }}> 
    
        <View style={styles.box} >           
            <ImageBackground source = {img} style = {styles.backdrop}/>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
                
               
        </View>
    </TouchableHighlight>
    
)


export default function ZipcodeScreen(){
    
    
    


    const navigation = useNavigation()
    return (  
        <SafeAreaView style={{flex: 1, 
            backgroundColor:'#7D0000',
            paddingTop: 50,            
            }}>
            <Text style={styles.location}>Location</Text>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center',}}>
                <Carousel
                    layout={'stack'} layoutCardOffset={`18`}
                    scrollInterpolator={scrollInterpolator}
                    slideInterpolatedStyle={animatedStyles}
                    data = {availableZipItems}
                    keyExtractor = {item => item.code}
                    renderItem = {({item}) => <ZipItem {...item} navigation ={navigation}/>}
                    hasParallaxImages={true}
                    useScrollView={true}
                    sliderWidth={300}
                    itemWidth={380}
                />
            </View>
            </SafeAreaView>
    )
        

} 

const styles = StyleSheet.create({
    zipItem:{
        flex: 1,
        backgroundColor:'blue',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems :'center',
        
    
        
    },
    zipCode:{
        backgroundColor:'black',
        height: -30,
        paddingTop: -30,
        paddingLeft: 25,
        paddingBottom: 20,
        marginLeft: 0,
        marginRight: 0, 
        fontSize: 25, 
        color: 'white',
        },

    zipPlace: {
        backgroundColor:'red',
        height: 70,
        paddingLeft: 25,
        marginLeft: 0,
        marginRight: 0, 
        color: 'white',
        fontSize: 50, 
        fontWeight: 'bold'
        
        
    },

    backdrop: {
        width :'100%',
        height : 300,
        borderColor: 'white',
        borderRadius: 6,
         
    },
    imgs:{
        paddingTop: 130,
        paddingLeft: 25,
        marginLeft: 50,
        marginRight: 0, 
        width:270,
        height:200,
    },
    background: {
        backgroundColor: '#FF6666',
        marginLeft: 20,
        marginRight: 20,
        margin: 3,
        borderRadius: 50,
    },
    location:{
        padding:30,
        textAlign:'center',
        fontSize:70,
        color:'white',
        fontWeight: 'bold',
       
    },
    box:{
        
            backgroundColor: '#000',
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#000',
            padding: 10,
            margin: 20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
           
    },

})