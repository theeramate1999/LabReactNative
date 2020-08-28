import React from 'react'
import { View,Text,StyleSheet, ImageBackground } from 'react-native'




export default function Forecast(props){
    let img = ""
    switch(props.main){
        case 'Rain' : img =require('../rain.jpg')
                      break;
        case 'Clouds' :img =require('../clouds.jpg')
                      break;
        case 'Sunny': img = require('../sunny.jpg')
                      break;
        case 'Thunderstorm' : img = require('../thunderstorm.jpg')
                    break;
        case  'Mist' :img = require('../mist.jpg')
                    break;
        case  'Fog' :img = require('../fog.jpg')
                    break;
        default : img = require('../back.jpg')
        
    }

    return(
        <ImageBackground source ={img} style ={styles.backdrop}>
            <View style ={styles.viewstyle}>
                <Text style ={styles.textstyles}>{"\n"}Zip Code is {props.zipCode}{"\n"}</Text>
                <Text style ={styles. headertextstyles}>{props.main}{"\n"}</Text>
                <Text style ={styles.textstyles} > {props.description}{"\n"}{"\n"}
                                {props.temp} °C</Text> 
                        <Text style ={styles.tempstyles} > {"\n"} Min:{props.temp_min} °C   :   Max: {props.temp_max} °C</Text>
                        <Text style ={styles.pressurestyles} >  Pressure : {props.pressure}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    headertextstyles: {
        color: 'white',
        fontSize : 32,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textstyles:{
        fontSize : 22,
        color: 'white',
        textAlign :'center',
        


    },
    textstyles: {
        textAlign : 'center',
        color: 'white',
        fontSize: 22,

    },
    backdrop: {
        alignItems : 'center',
        width : '100%' ,
        height : '100%',
        
    },
    viewstyle: {
        width: 800, 
        height: 400, 
        backgroundColor: 'black',
        opacity : .6
    },
    tempstyles: {

        textAlign : 'center',
        color: 'white',
        fontSize: 16,

    },
    pressurestyles:{
        textAlign : 'center',
        color: 'white',
        fontSize: 16,
        textAlignVertical: 'bottom',
    },
    
})
