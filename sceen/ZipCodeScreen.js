import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground,  } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
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
        backgroundColor:'blue',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems :'center',
        
    
        
    },
    zipPlace: {
        flex: 0.2,
        fontSize:36,
        padding:0.5,
        opacity:0.6,
        backgroundColor:'black',
        color: '#FFD472',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowRadius: 1
        
        
    },

    backdrop: {
        width :'100%',
        height : 300,
        borderColor: 'white',
        borderRadius: 6,
         
    },
})