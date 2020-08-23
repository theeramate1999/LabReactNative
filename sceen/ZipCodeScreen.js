import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import WeatherScreen from './WeatherScreen'
import { useNavigation } from '@react-navigation/native'


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
        

        <View style = {styles.zipItem}>
            <ImageBackground source = {img} style = {styles.backdrop}>
              
                 <Text  style = {styles.zipPlace}>{place}</Text>
                 <Text style = {styles.zipCode}>{code}</Text>
                 
             </ImageBackground>  
        </View>
        
    </TouchableHighlight>

)


export default function ZipcodeScreen(){
    const navigation = useNavigation()
    return (
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation ={navigation}/>}
            />
    )

} 

const styles = StyleSheet.create({
    zipItem:{
        flex: 1,
        flexDirection: 'row',
        
    },
    zipPlace: {
        flex: 0.5,
        fontSize:36,
        padding:1,
        backgroundColor:'black',
        color: 'white',
        textAlign: 'left',
        opacity: .5,
        textShadowColor: 'black',
        textShadowRadius: 0.4
        
        
    },
    zipCode : {
        flex: 1,       
        fontSize:36,
        color: 'white',
        flexDirection: 'row',
        textAlign: 'right',
        textAlignVertical: 'bottom',
        textShadowColor: 'black',
        textShadowRadius: 0.4
    },
    backdrop: {
        alignItems : 'stretch',
        width : '100%',
        height : 300,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
         
    },
})